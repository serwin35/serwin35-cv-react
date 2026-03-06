import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

interface ExperienceProps {
    isVisible: boolean
}

interface ExperienceItem {
    period: string
    periodKey: string
    title: string
    company: string
    descriptionKey: string
    tags: string[]
    current?: boolean
}

const experiences: ExperienceItem[] = [
    {
        period: "02.2025 — obecnie",
        periodKey: "exp.period1",
        title: "Full-Stack Developer & DevOps Engineer",
        company: "Kuchnia Vikinga sp. z o.o.",
        descriptionKey: "exp.desc1",
        tags: ["Laravel", "Vue.js", "React", "Livewire", "Docker", "AWS", "CI/CD", "Tailwind CSS"],
        current: true,
    },
    {
        period: "10.2021 — obecnie",
        periodKey: "exp.period2",
        title: "Full-Stack Developer & DevOps Engineer",
        company: "DMservice sp. z o.o.",
        descriptionKey: "exp.desc2",
        tags: ["Laravel", "Livewire", "PrestaShop", "Linux", "Docker", "AWS"],
        current: true,
    },
    {
        period: "07.2023 — 02.2025",
        periodKey: "exp.period3",
        title: "Full-Stack Developer",
        company: "MyBit Poland sp. z o.o.",
        descriptionKey: "exp.desc3",
        tags: ["Laravel", "Vue.js", "React", "Livewire", "Inertia.js", "Tailwind CSS"],
    },
    {
        period: "01.2023 — 06.2023",
        periodKey: "exp.period4",
        title: "Full-Stack Developer",
        company: "Amsterdam Standard sp. z o.o. (d. HighSolutions)",
        descriptionKey: "exp.desc4",
        tags: ["Laravel", "Vue.js", "React", "Inertia.js", "Bootstrap"],
    },
    {
        period: "04.2022 — 01.2023",
        periodKey: "exp.period5",
        title: "Full-Stack Developer",
        company: "HighSolutions sp. z o.o.",
        descriptionKey: "exp.desc5",
        tags: ["Laravel", "Vue.js", "Livewire", "Tailwind CSS"],
    },
    {
        period: "06.2011 — 12.2021",
        periodKey: "exp.period6",
        title: "Full-Stack Developer",
        company: "Blue-NET",
        descriptionKey: "exp.desc6",
        tags: ["PrestaShop", "WordPress", "CodeIgniter", "Yii", "Laravel"],
    },
]

export default function Experience({ isVisible }: ExperienceProps) {
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
                {t("Experience")} <span className="text-[var(--color-accent)]">.</span>
            </h2>

            <div className="relative pl-6">
                {/* Vertical line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-timeline-dot)] via-[var(--color-timeline)] to-transparent" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="relative mb-8 last:mb-0"
                    >
                        {/* Timeline dot */}
                        <div className="timeline-dot" />

                        <div className="cv-card p-5 hover:border-[var(--color-accent-border)] transition-all duration-200">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                                <div>
                                    <h3 className="text-base font-semibold text-[var(--color-text-primary)]">{exp.title}</h3>
                                    <p className="text-sm text-[var(--color-accent)] font-medium">{exp.company}</p>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    {exp.current && (
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {t("exp.current")}
                                        </span>
                                    )}
                                    <span className="text-xs font-mono text-[var(--color-text-muted)]">{t(exp.periodKey)}</span>
                                </div>
                            </div>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                                {t(exp.descriptionKey)}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {exp.tags.map((tag) => (
                                    <span key={tag} className="tech-tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
