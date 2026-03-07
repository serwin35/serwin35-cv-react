import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

interface LanguagesProps {
    isVisible: boolean
}

interface Language {
    nameKey: string
    level: string
    proficiency: number
    code: string
}

const languages: Language[] = [
    { nameKey: "Polish",  level: "Native", proficiency: 100, code: "PL" },
    { nameKey: "English", level: "B2",     proficiency: 72,  code: "EN" },
]

const cefrLabels: Record<string, string> = {
    A1: "Beginner",
    A2: "Elementary",
    B1: "Intermediate",
    B2: "Upper Intermediate",
    C1: "Advanced",
    C2: "Mastery",
}

export default function Languages({ isVisible }: LanguagesProps) {
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
                {t("Languages")} <span className="text-[var(--color-accent)]">.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                {languages.map((lang, index) => {
                    const levelLabel = lang.level === "Native" ? t("Native") : `${lang.level} — ${cefrLabels[lang.level] ?? ""}`
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="cv-card p-5"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {/* Flag badge */}
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-accent)] shrink-0">
                                    {lang.code}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{t(lang.nameKey)}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)]">{levelLabel}</p>
                                </div>
                            </div>

                            {/* Proficiency bar */}
                            <div className="w-full h-1 rounded-full" style={{ background: "var(--color-bar-track)" }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${lang.proficiency}%` }}
                                    transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
                                    className="h-full rounded-full"
                                    style={{ background: "var(--color-bar-fill)" }}
                                />
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="text-xs text-[var(--color-text-muted)]">{t("Level")}</span>
                                <span className="text-xs font-mono text-[var(--color-text-muted)]">{lang.proficiency}%</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}
