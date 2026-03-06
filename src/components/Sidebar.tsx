import {
    UserIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    WrenchScrewdriverIcon,
    FolderIcon,
    LanguageIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

interface SidebarProps {
    activeSection: string
    setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
    const { t } = useTranslation()

    const menuItems = [
        { id: "about",      icon: UserIcon,               labelKey: "nav.about" },
        { id: "experience", icon: BriefcaseIcon,           labelKey: "nav.experience" },
        { id: "education",  icon: AcademicCapIcon,         labelKey: "nav.education" },
        { id: "skills",     icon: WrenchScrewdriverIcon,   labelKey: "nav.skills" },
        { id: "portfolio",  icon: FolderIcon,              labelKey: "nav.portfolio" },
        { id: "languages",  icon: LanguageIcon,            labelKey: "nav.languages" },
    ]

    return (
        <nav
            aria-label="Main navigation"
            className="md:fixed left-0 top-0 w-16 h-full flex flex-col items-center justify-center py-8 gap-2 z-20"
            style={{ background: "linear-gradient(to right, rgba(10,15,26,0.98), rgba(10,15,26,0.6))" }}
        >
            {/* Logo mark */}
            <div className="absolute top-6 flex items-center justify-center w-9 h-9 rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm select-none shadow-lg shadow-[var(--color-accent-muted)]">
                MS
            </div>

            <div className="flex flex-col items-center gap-1 mt-12">
                {menuItems.map((item) => {
                    const isActive = activeSection === item.id
                    return (
                        <motion.button
                            key={item.id}
                            title={t(item.labelKey)}
                            aria-label={t(item.labelKey)}
                            aria-current={isActive ? "page" : undefined}
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.93 }}
                            onClick={() => setActiveSection(item.id)}
                            className={`relative p-3 rounded-xl transition-all duration-200 group ${
                                isActive
                                    ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent-muted)]"
                                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)]"
                            }`}
                        >
                            <item.icon className="w-5 h-5" aria-hidden="true" />

                            {/* Tooltip */}
                            <span className="absolute left-full ml-3 px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border)] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-lg">
                                {t(item.labelKey)}
                            </span>
                        </motion.button>
                    )
                })}
            </div>
        </nav>
    )
}
