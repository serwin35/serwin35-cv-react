import { motion } from "framer-motion"
import {useTranslation} from "react-i18next";

interface LanguagesProps {
    isVisible: boolean
}

interface Language {
    name: string
    level: string
    flag: string
}

const languages: Language[] = [
    {
        name: "Polish",
        level: 'Native',
        flag: "🇵🇱",
    },
    {
        name: "English",
        level: "B2",
        flag: "🇬🇧",
    },
]

export default function Languages({ isVisible }: LanguagesProps) {
    const { t } = useTranslation()
    if (!isVisible) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-white"
        >
            <h2 className="text-3xl font-bold mb-6">{t('Languages')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languages.map((language, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 p-4 rounded-lg shadow-lg"
                    >
                        <div className="flex items-center mb-2">
                            <span className="text-4xl mr-3">{language.flag}</span>
                            <h3 className="text-xl font-semibold">
                                {t(`${language.name}`)}
                            </h3>
                        </div>
                        <p className="text-zinc-300 font-bold">{t("Level")}: {language.level == "Native" ?  t("Native") : language.level}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

