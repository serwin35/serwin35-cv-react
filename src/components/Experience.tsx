import { motion } from "framer-motion"
import {useTranslation} from "react-i18next";

interface ExperienceProps {
    isVisible: boolean
}

export default function Experience({ isVisible }: ExperienceProps) {
    const { t } = useTranslation()
    if (!isVisible) return null

    const experiences = [
        {
            period: "Sierpień 2023 - obecnie",
            title: "Full-Stack Developer",
            company: "MyBit Poland sp z o.o.",
            description:
                "Rozwój aplikacji webowych opartych na frameworku Laravel z wykorzystaniem Vue.js, Livewire, Inertia.js, PHP",
        },
        {
            period: "Styczeń 2023 - Lipiec 2023",
            title: "Full-Stack Developer",
            company: "Amsterdam Standard sp z o.o.",
            description: "Rozwój aplikacji webowych i modernizacja sklepów internetowych",
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-white"
        >
            <h2 className="text-3xl font-bold mb-6">{t('Experience')}</h2>
            <div className="relative">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-zinc-800/80"
                    >
                        <span className="text-white/90">{exp.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{exp.title}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                        <p className="text-gray-300 mt-2">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

