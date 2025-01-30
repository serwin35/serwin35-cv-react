import { motion } from "framer-motion"
import {useTranslation} from "react-i18next";

interface EducationProps {
    isVisible: boolean
}

export default function Education({ isVisible }: EducationProps) {
    const { t } = useTranslation()
    if (!isVisible) return null

    const educations = [
        {
            period: "2010 - 2014",
            title: "Inżynier Informatyk",
            institution: "Politechnika Łódzka",
            description: "Studia magisterskie na kierunku Informatyka",
        },
        {
            period: "2006 - 2010",
            title: "Technik Informatyk",
            institution: "Zespół Szkół Technicznych w Łodzi",
            description: "Studia policealne na kierunku Technik Informatyk",
        },
    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-white"
        >
            <h2 className="text-3xl font-bold mb-6">{t('Education')}</h2>
            <div className="relative">
                {educations.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-8 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-zinc-800"
                    >
                        <span className="text-white/80">{edu.period}</span>
                        <h3 className="text-xl font-semibold mt-2">{edu.title}</h3>
                        <p className="text-gray-400">{edu.institution}</p>
                        <p className="text-gray-300 mt-2">{edu.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

