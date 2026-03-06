import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

interface AboutProps {
    isVisible: boolean
}

const stats = [
    { value: "10+", labelKey: "about.statYears" },
    { value: "50+", labelKey: "about.statProjects" },
    { value: "5",   labelKey: "about.statCompanies" },
]

export default function About({ isVisible }: AboutProps) {
    const { t } = useTranslation()
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

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, i) => (
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
                        <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-1">{t("Date of birth")}</p>
                        <span className="text-sm text-[var(--color-text-secondary)]">18.10.1991</span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
