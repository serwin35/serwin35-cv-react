import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function Header() {
    const { t } = useTranslation()

    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-start gap-8">
            <div className="w-64 h-80 bg-white p-4 shadow-lg rounded-lg">
                <img
                    src="https://scontent.flcj1-1.fna.fbcdn.net/v/t39.30808-6/437968328_7484136854954922_7816440736693073256_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=L5MgRTR9xzYQ7kNvgEOLfPr&_nc_oc=AdiTAVhXOaavp8EVfhN9MSNiGS8ZqQ8ZUBIPtHn64a068O0kv0GKfrGisEnxKuxEqEo&_nc_zt=23&_nc_ht=scontent.flcj1-1.fna&_nc_gid=AURsvdDuhgWojaJzcc-QqPJ&oh=00_AYAdzuSDgw4iOlTzSTQYGy6Xl7Q0EwgyjklElH0M2FXWeg&oe=67A08B9D"
                    alt="Mateusz Serwinowski"
                    className="w-full h-full object-cover rounded"
                />
            </div>
            <div className="flex-1 text-white">
                <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-5xl font-bold mb-2">
                    {t("header.title")}
                </motion.h1>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl text-zinc-500 mb-4"
                >
                    {t("header.subtitle")}
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-300"
                >
                    <p>ŁÓDŹ, POLSKA</p>
                    <p>TECHNOLOGIE INFORMACYJNE & USŁUGI</p>
                </motion.div>
                <div className="flex gap-4 mt-6">
                    <button className="bg-zinc-900/20 border border-white/10 text-white px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                        Kontakt
                    </button>
                    <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white/10 transition-colors">
                        Pobierz CV
                    </button>
                </div>
            </div>
        </motion.div>
    )
}