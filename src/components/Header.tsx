import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import {
    CodeBracketIcon,
    UserIcon,
} from "@heroicons/react/24/outline"

export default function Header() {
    const { t } = useTranslation()
    const { i18n } = useTranslation()

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-8">
            <div className="w-64 h-80 bg-white p-4 shadow-lg rounded-lg">
                <img
                    src="https://scontent.flcj1-1.fna.fbcdn.net/v/t1.6435-9/61706533_2193550927346901_6133483735598759936_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=AZo-zEdroTAQ7kNvgG6Gngo&_nc_oc=AdhdSuXif1F71hS8mVUyjop8WRHJdnMDJNnFiZjcJqCSX86N7mlHpPgIrMa3oHbAOaA&_nc_zt=23&_nc_ht=scontent.flcj1-1.fna&_nc_gid=AnjDtwvYEqPARfjSvgQ0T3C&oh=00_AYA0RUy5LxgJWZ6LuwlkywfLeDMDtgUMyHE9j33HHoJhWA&oe=67C34B18"
                    alt="Mateusz Serwinowski"
                    className="w-full h-full object-cover rounded"
                />
            </div>
            <div className="flex-1 text-white">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-5xl font-bold mb-2"
                >
                    {t("header.title")}
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-2xl text-zinc-500 mb-4"
                >
                    {t("header.subtitle")}
                </motion.h2>

                <AnimatePresence mode="wait">
                <motion.div
                    key={i18n.language}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-gray-300 mb-2"
                >
                    <p>{t("header.firefighter")}</p>
                    <p></p>
                </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                <motion.div
                    key={i18n.language}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-gray-300"
                >
                    <p>{t("header.cityAndCountry")}</p>
                </motion.div>
                </AnimatePresence>
                <div className="flex gap-4 mt-6">
                    <a href="https://github.com/serwin35" className="bg-zinc-900/20 border border-white/10 text-white px-6 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center">
                        <CodeBracketIcon className="w-4 h-4 mr-2" /> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/mateusz-serwin-serwinowski/" className="border border-white text-white px-6 py-2 rounded-full hover:bg-white/10 transition-colors flex items-center">
                        <UserIcon className="w-4 h-4 mr-2" />LinkIn
                    </a>
                </div>
            </div>
        </motion.div>
    )
}