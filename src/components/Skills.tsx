import { motion } from "framer-motion"
import {useTranslation} from "react-i18next";

interface SkillsProps {
    isVisible: boolean
}

interface Skill {
    name: string
    level: number
}

interface SkillCategory {
    name: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        name: "Programming languages",
        skills: [
            { name: "PHP", level: 95 },
            { name: "HTML/CSS", level: 95 },
            { name: "JavaScript", level: 85 },
            { name: "TypeScript", level: 80 },
        ],
    },
    {
        name: "Framework PHP",
        skills: [
            { name: "Laravel", level: 95 },
            { name: "CodeIgniter", level: 80 },
            { name: "Symfony", level: 75 },
        ],
    },
    {
        name: "Framework JavaScript",
        skills: [
            { name: "Vue.js", level: 85 },
            { name: "React", level: 80 },
            { name: "Angular", level: 70 },
        ],
    },
    {
        name: "Framework CSS",
        skills: [
            { name: "Tailwind CSS", level: 90 },
            { name: "Bootstrap", level: 85 },
            { name: "Sass", level: 80 },
        ],
    },
    {
        name: "Databases",
        skills: [
            { name: "MySQL", level: 85 },
            { name: "PostgreSQL", level: 80 },
            { name: "MongoDB", level: 75 },
        ],
    },
    {
        name: "DevOps and Systems",
        skills: [
            { name: "Linux", level: 85 },
            { name: "Docker", level: 80 },
            { name: "AWS", level: 75 },
        ],
    },
    {
        name: "Tools and others",
        skills: [
            { name: "Git", level: 90 },
            { name: "ClickUp", level: 95 },
            { name: "Asana", level: 80 },
            { name: "JIRA", level: 80 },
            { name: "Trello", level: 85 },
        ],
    },
    {
        name: "Additional",
        skills: [
            { name: "Prestashop", level: 85 },
            { name: "Wordpress", level: 75 },
            { name: "Woocommerce", level: 75 },
        ],
    },
]

export default function Skills({ isVisible }: SkillsProps) {
    const { t } = useTranslation()
    if (!isVisible) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-white"
        >
            <h2 className="text-3xl font-bold mb-6">
                {t("Skills")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-6">
                        <h3 className="text-xl font-semibold mb-4 text-primary">{ t(`${category.name}`) }</h3>
                        {category.skills.map((skill, skillIndex) => (
                            <motion.div
                                key={skillIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: skillIndex * 0.1 }}
                                className="mb-4"
                            >
                                <div className="flex justify-between mb-2">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-2.5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                        className="bg-red-700/80 h-2.5 rounded-full"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    )
}
