import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

interface SkillsProps {
    isVisible: boolean
}

interface SkillCategory {
    nameKey: string
    icon: string
    skills: string[]
}

const skillCategories: SkillCategory[] = [
    {
        nameKey: "Programming languages",
        icon: "💻",
        skills: ["PHP", "JavaScript", "TypeScript", "HTML / CSS"],
    },
    {
        nameKey: "Framework PHP",
        icon: "🐘",
        skills: ["Laravel", "Livewire", "CodeIgniter", "Symfony"],
    },
    {
        nameKey: "Framework JavaScript",
        icon: "⚡",
        skills: ["Vue.js", "React", "Inertia.js", "Alpine.js"],
    },
    {
        nameKey: "Framework CSS",
        icon: "🎨",
        skills: ["Tailwind CSS", "Bootstrap", "Sass / SCSS"],
    },
    {
        nameKey: "Databases",
        icon: "🗄️",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
        nameKey: "DevOps and Systems",
        icon: "🛠️",
        skills: ["Docker", "Linux", "Nginx", "Git", "CI/CD", "Ansible", "Terraform"],
    },
    {
        nameKey: "Cloud AWS",
        icon: "☁️",
        skills: ["EC2", "S3", "RDS", "Route 53", "CloudFront", "ECS"],
    },
    {
        nameKey: "Tools and others",
        icon: "🔧",
        skills: ["Git", "Jira", "ClickUp", "Figma", "Postman"],
    },
    {
        nameKey: "Additional",
        icon: "🛒",
        skills: ["PrestaShop", "WordPress", "WooCommerce"],
    },
]

const levelMap: Record<string, number> = {
    "PHP": 95,
    "JavaScript": 85,
    "TypeScript": 80,
    "HTML / CSS": 95,
    "Laravel": 95,
    "Livewire": 90,
    "CodeIgniter": 80,
    "Symfony": 70,
    "Vue.js": 85,
    "React": 80,
    "Inertia.js": 85,
    "Alpine.js": 75,
    "Tailwind CSS": 90,
    "Bootstrap": 85,
    "Sass / SCSS": 80,
    "MySQL": 85,
    "PostgreSQL": 80,
    "MongoDB": 70,
    "Redis": 70,
    "Docker": 88,
    "Linux": 85,
    "Nginx": 82,
    "CI/CD": 80,
    "Ansible": 61,
    "Terraform": 61,
    "Git": 92,
    "EC2": 82,
    "S3": 85,
    "RDS": 78,
    "Route 53": 78,
    "CloudFront": 75,
    "ECS": 72,
    "Jira": 85,
    "ClickUp": 90,
    "Figma": 70,
    "Postman": 85,
    "PrestaShop": 85,
    "WordPress": 78,
    "WooCommerce": 75,
}

export default function Skills({ isVisible }: SkillsProps) {
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
                {t("Skills")} <span className="text-[var(--color-accent)]">.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={catIdx}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIdx * 0.05 }}
                        className="cv-card p-5"
                    >
                        <h3 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-4 flex items-center gap-2">
                            <span>{category.icon}</span>
                            {t(category.nameKey)}
                        </h3>
                        <div className="space-y-3">
                            {category.skills.map((skill, skillIdx) => {
                                const level = levelMap[skill] ?? 75
                                return (
                                    <div key={skillIdx}>
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-sm text-[var(--color-text-secondary)]">{skill}</span>
                                            <span className="text-xs font-mono text-[var(--color-text-muted)]">{level}%</span>
                                        </div>
                                        <div
                                            className="w-full rounded-full h-1"
                                            style={{ background: "var(--color-bar-track)" }}
                                        >
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${level}%` }}
                                                transition={{ duration: 0.8, delay: catIdx * 0.05 + skillIdx * 0.06, ease: "easeOut" }}
                                                className="h-full rounded-full"
                                                style={{ background: "var(--color-bar-fill)" }}
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
