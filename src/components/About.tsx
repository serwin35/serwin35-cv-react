import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import useSWR from "swr"

interface AboutProps {
    isVisible: boolean
}

interface GitHubStats {
    public_repos: number
    followers: number
    following: number
}

function calcAge(): number {
    const birth = new Date(1991, 9, 18) // 18.10.1991
    const today = new Date()
    let age = today.getFullYear() - birth.getFullYear()
    const m = today.getMonth() - birth.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--
    return age
}

function calcYearsOfExp(): number {
    return new Date().getFullYear() - 2008
}

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export default function About({ isVisible }: AboutProps) {
    const { t } = useTranslation()
    const age = calcAge()
    const yearsExp = calcYearsOfExp()

    const { data: ghStats } = useSWR<GitHubStats>(
        "https://api.github.com/users/serwin35",
        fetcher,
        { revalidateOnFocus: false }
    )

    if (!isVisible) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-[var(--color-text-primary)]"
        >
            <h2 className="section-title">
                {t("About Me")} <span className="text-[var(--color-accent)]">.</span>
            </h2>

            {/* Bio */}
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl text-base">
                {t("about.bio")}
            </p>

            {/* Stats row — dynamiczne */}
            <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                    { value: `${yearsExp}+`, labelKey: "about.statYears" },
                    { value: "90+",          labelKey: "about.statProjects" },
                    { value: "5",            labelKey: "about.statCompanies" },
                ].map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="cv-card p-4 text-center"
                    >
                        <span className="block text-3xl font-bold text-[var(--color-accent)]">{stat.value}</span>
                        <span className="text-xs text-[var(--color-text-secondary)] mt-1 block">{t(stat.labelKey)}</span>
                    </motion.div>
                ))}
            </div>

            {/* GitHub stats */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28 }}
                className="cv-card p-5 mb-6"
            >
                <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub — serwin35
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                        { value: ghStats?.public_repos ?? "—", label: t("about.ghRepos") },
                        { value: ghStats?.followers ?? "—",    label: t("about.ghFollowers") },
                        { value: ghStats?.following ?? "—",    label: t("about.ghFollowing") },
                    ].map((item, i) => (
                        <div key={i} className="text-center bg-[var(--color-bg-elevated)] rounded-lg py-3 px-2">
                            <span className="block text-xl font-bold text-[var(--color-accent)]">{item.value}</span>
                            <span className="text-xs text-[var(--color-text-muted)]">{item.label}</span>
                        </div>
                    ))}
                </div>
                {/* Contribution graph via GitHub chart */}
                <div className="rounded-lg overflow-hidden border border-[var(--color-border)]">
                    <img
                        src="https://ghchart.rshah.org/3b82f6/serwin35"
                        alt="GitHub contribution chart"
                        className="w-full h-auto block"
                        style={{ background: "transparent" }}
                    />
                </div>
            </motion.div>

            {/* Personal info */}
            <div className="cv-card p-6">
                <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    {t("Personal Information")}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">E-mail</p>
                        <a
                            href="mailto:mateusz.serwinowski@gmail.com"
                            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors break-all"
                        >
                            mateusz.serwinowski@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">{t("Phone")}</p>
                        <a href="tel:+48576721998" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">
                            +48 576-721-998
                        </a>
                    </div>
                    <div>
                        <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">{t("Age")}</p>
                        <span className="text-sm text-[var(--color-text-secondary)]">
                            {age} {t("about.yearsOld")}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
