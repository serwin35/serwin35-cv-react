import React from "react"
import { motion } from "framer-motion"
import {useTranslation} from "react-i18next";

interface PortfolioProps {
    isVisible: boolean
}

interface Project {
    title: string
    description: string
    imageUrl: string
    projectUrl: string
}

const projects: Project[] = [
    {
        title: "SklepStrazacki.pl",
        description: "Online store for firefighters based on prestashop",
        imageUrl: "/placeholder.svg?height=200&width=300",
        projectUrl: "https://sklepstrazacki.pl",
    },
    {
        title: "WF-Chart",
        description: "CRM and ERP software for sales management, integration with an online store and a trade program. Based on Laravel and Livewire using Fluxui.",
        imageUrl: "/placeholder.svg?height=200&width=300",
        projectUrl: "http://wolffire.pl",
    },
    {
        title: "Blue-NET",
        description: "Own company offering Web Development, Hosting as well as administrative services",
        imageUrl: "/placeholder.svg?height=200&width=300",
        projectUrl: "http://blue-net.pl",
    },
]

export default function Portfolio({ isVisible }: PortfolioProps) {
    const { t } = useTranslation()
    if (!isVisible) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-white"
        >
            <h2 className="text-3xl font-bold mb-6">{t('Portfolio')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg overflow-hidden shadow-lg"
                    >
                        <img
                            src={project.imageUrl || "/placeholder.svg"}
                            alt={ t(`${project.title}`) }
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{ t(`${project.title}`) }</h3>
                            <p className="text-gray-300 mb-4">{ t(`${project.description}`) }</p>
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-zinc-900/20 border border-white/10 text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                {t('View project')}
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

