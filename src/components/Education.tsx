import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

interface EducationProps {
    isVisible: boolean
}

interface EducationItem {
    period: string
    periodKey: string
    titleKey: string
    institutionKey: string
    descriptionKey: string
    type: "university" | "highschool"
}

const educations: EducationItem[] = [
    {
        period: "2010 — 2014",
        periodKey: "edu.period1",
        titleKey: "edu.title1",
        institutionKey: "edu.institution1",
        descriptionKey: "edu.desc1",
        type: "university",
    },
    {
        period: "2007 — 2010",
        periodKey: "edu.period2",
        titleKey: "edu.title2",
        institutionKey: "edu.institution2",
        descriptionKey: "edu.desc2",
        type: "highschool",
    },
]

const typeIcon = {
    university: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
    ),
    highschool: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
    ),
}

export default function Education({ isVisible }: EducationProps) {
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
                {t("Education")} <span className="text-[var(--color-accent)]">.</span>
            </h2>

            <div className="relative pl-6">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-timeline-dot)] via-[var(--color-timeline)] to-transparent" />

                {educations.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative mb-6 last:mb-0"
                    >
                        <div className="timeline-dot" />

                        <div className="cv-card p-5 hover:border-[var(--color-accent-border)] transition-all duration-200">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-[var(--color-accent-muted)] text-[var(--color-accent)]">
                                    {typeIcon[edu.type]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                                        <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{t(edu.titleKey)}</h3>
                                        <span className="text-xs font-mono text-[var(--color-text-muted)] shrink-0">{t(edu.periodKey)}</span>
                                    </div>
                                    <p className="text-sm text-[var(--color-accent)] font-medium mb-2">{t(edu.institutionKey)}</p>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{t(edu.descriptionKey)}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
