import type React from "react"
import {useTranslation} from "react-i18next"
import {motion, AnimatePresence} from "framer-motion"

interface LanguageButtonProps {
    lang: string
    isActive: boolean
    onClick: () => void
}

const LanguageButton: React.FC<LanguageButtonProps> = ({lang, isActive, onClick}) => (
    <AnimatePresence mode="wait">
        <motion.button
            key={`${lang}-${isActive ? "active" : "inactive"}`}
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: 20}}
            transition={{duration: 0.3}}
            onClick={onClick}
            className={`
            px-6 py-2 rounded-full transition-colors duration-300 border border-white/10
        ${isActive ? "bg-zinc-700/40 text-white/80" : "bg-zinc-900/20 text-white/40 hover:bg-white/15 hover:text-white/70"}
      `}
        >
            {lang.toUpperCase()}
        </motion.button>
    </AnimatePresence>
)

const LanguageSwitcher: React.FC = () => {
    const {i18n} = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="flex space-x-2">
            <LanguageButton lang="pl" isActive={i18n.language === "pl"} onClick={() => changeLanguage("pl")}/>
            <LanguageButton lang="en" isActive={i18n.language === "en"} onClick={() => changeLanguage("en")}/>
        </div>
    )
}

export default LanguageSwitcher