import { motion } from "framer-motion"
import {useTranslation} from "react-i18next";

interface AboutProps {
    isVisible: boolean
}

export default function About({ isVisible }: AboutProps) {
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
                {t("About Me")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div>
                    <p className="text-gray-300 mb-4">{t("I am an experienced Full-Stack Developer with over 10 years of experience in creating modern web applications. I specialize in technologies such as Laravel, Vue.js, React, and Tailwind CSS.")}</p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">{t('Personal Information')}</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <p className="text-gray-400">E-mail:</p>
                            <p>mateusz.serwinowski@gmail.com</p>
                        </div>
                        <div>
                            <p className="text-gray-400">{t('Phone')}:</p>
                            <p>+48 576-721-998</p>
                        </div>
                        <div>
                            <p className="text-gray-400">{t('Date of birth')}:</p>
                            <p>18.10.1991</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

