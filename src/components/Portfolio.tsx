import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

interface PortfolioProps {
    isVisible: boolean
}

interface Project {
    title: string
    descriptionKey: string
    projectUrl: string
    tags: string[]
    status: "live" | "private" | "wip"
    imageUrl?: string
}

const projects: Project[] = [
    {
        title: "SklepStrazacki.pl",
        descriptionKey: "portfolio.desc1",
        projectUrl: "https://sklepstrazacki.pl",
        tags: ["PrestaShop", "PHP", "CSS"],
        status: "live",
    },
    {
        title: "WF-Chart CRM/ERP",
        descriptionKey: "portfolio.desc2",
        projectUrl: "http://wolffire.pl",
        tags: ["Laravel", "Livewire", "Flux UI", "Tailwind CSS"],
        status: "live",
    },
    {
        title: "Blue-NET",
        descriptionKey: "portfolio.desc3",
        projectUrl: "http://blue-net.pl",
        tags: ["Web Dev", "Hosting", "WordPress"],
        status: "live",
    },
    {
        title: "DevOps Handbook",
        descriptionKey: "portfolio.desc4",
        projectUrl: "https://github.com/serwin35/devops-handbook",
        tags: ["TypeScript", "Docker", "DevOps", "CI/CD"],
        status: "wip",
    },
    {
        title: "Docker Laravel",
        descriptionKey: "portfolio.desc5",
        projectUrl: "https://github.com/serwin35/docker-laravel",
        tags: ["Docker", "Laravel", "Nginx", "PHP"],
        status: "live",
    },
    {
        title: "Daybreak",
        descriptionKey: "portfolio.desc6",
        projectUrl: "https://github.com/serwin35/daybreak",
        tags: ["PHP", "Timesheets", "SaaS"],
        status: "private",
    },
]

const statusBadge: Record<string, { label: string; color: string }> = {
    live:    { label: "Live",    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
    private: { label: "Private", color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20" },
    wip:     { label: "WIP",     color: "bg-amber-500/10 text-amber-400 border-amber-500/20" },
}

export default function Portfolio({ isVisible }: PortfolioProps) {
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
                {t("Portfolio")} <span className="text-[var(--color-accent)]">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => {
                    const badge = statusBadge[project.status]
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.07 }}
                            className="cv-card p-5 flex flex-col group hover:border-[var(--color-accent-border)] transition-all duration-200"
                        >
                            {/* Top row */}
                            <div className="flex items-start justify-between gap-2 mb-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-[var(--color-accent-muted)] text-[var(--color-accent)]">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                                    </svg>
                                </div>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${badge.color}`}>
                                    {t(`portfolio.status.${project.status}`) || badge.label}
                                </span>
                            </div>

                            {/* Title & description */}
                            <h3 className="text-base font-semibold text-[var(--color-text-primary)] mb-1.5">{project.title}</h3>
                            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex-1 mb-4">
                                {t(project.descriptionKey)}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="tech-tag">{tag}</span>
                                ))}
                            </div>

                            {/* Link */}
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-text-primary)] transition-colors duration-150 group/link"
                            >
                                {t("View project")}
                                <svg
                                    className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-150"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                            </a>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}
