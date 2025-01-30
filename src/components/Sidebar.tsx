import {
    HomeIcon,
    UserIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    WrenchScrewdriverIcon,
    FolderIcon,
    LanguageIcon,
    EnvelopeIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import {useTranslation} from "react-i18next";

interface SidebarProps {
    activeSection: string
    setActiveSection: (section: string) => void
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
    const { t } = useTranslation()
    const menuItems = [
        { id: "home", icon: HomeIcon },
        { id: "about", icon: UserIcon },
        { id: "experience", icon: BriefcaseIcon },
        { id: "education", icon: AcademicCapIcon},
        { id: "skills", icon: WrenchScrewdriverIcon },
        { id: "portfolio", icon: FolderIcon },
        { id: "languages", icon: LanguageIcon },
        { id: "contact", icon: EnvelopeIcon },
    ]

    return (
        <nav className="md:fixed w-20 bg-red-500/20 backdrop-blur-sm rounded-r-lg h-full flex flex-col items-center py-8">
            {menuItems.map((item) => (
                <motion.button
                    title={t(`nav.${item.id}`)}
                    key={item.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSection(item.id)}
                    className={`p-3 mb-4 rounded-lg transition-colors ${
                        activeSection === item.id ? "bg-white/80 text-zinc-900" : "text-red-500 hover:bg-white/10"
                    }`}
                >
                    <item.icon className="w-6 h-6" />
                </motion.button>
            ))}
        </nav>
    )
}
