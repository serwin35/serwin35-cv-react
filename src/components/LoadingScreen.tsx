import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 2
            })
        }, 30)
        return () => clearInterval(interval)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "var(--color-bg-base)" }}
        >
            <div className="w-full max-w-xs px-8 text-center">
                {/* Animated logo */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="w-16 h-16 rounded-2xl bg-[var(--color-accent)] text-white font-bold text-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-[var(--color-accent-muted)]"
                >
                    MS
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-[var(--color-text-primary)] mb-1"
                >
                    Mateusz Serwinowski
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-[var(--color-text-secondary)] mb-8"
                >
                    Full-Stack Developer &amp; DevOps
                </motion.p>

                {/* Progress bar */}
                <div className="w-full h-0.5 rounded-full bg-[var(--color-bar-track)] overflow-hidden">
                    <motion.div
                        className="h-full rounded-full bg-[var(--color-accent)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </div>
            </div>
        </motion.div>
    )
}
