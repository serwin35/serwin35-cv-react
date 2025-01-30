import {motion} from "framer-motion"
import {useEffect, useState} from "react"
import NeuralBackground from "./NeuralBackground.tsx";

export default function LoadingScreen() {
    const [loadingProgress, setLoadingProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 1
            })
        }, 20)

        return () => clearInterval(interval)
    }, [])

    const progressVariants = {
        initial: {width: "0%"},
        animate: {width: `${loadingProgress}%`},
    }

    const textVariants = {
        initial: {opacity: 0, y: 20},
        animate: {opacity: 1, y: 0},
    }

    return (
        <>
            <div className="fixed inset-0 bg-page z-40">
            <NeuralBackground />
                <motion.div
                    initial={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5}}
                    className="fixed inset-0 flex items-center justify-center z-50"
                >
                    <div className="w-full max-w-md px-8">
                        <motion.div
                            initial={{scale: 0.5, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            className="text-center mb-8"
                        >
                            <motion.div
                                animate={{rotate: 360}}
                                transition={{duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear"}}
                                className="w-20 h-20 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
                            />
                            <motion.h2
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                className="text-white text-2xl font-bold"
                            >
                                Mateusz Serwinowski
                            </motion.h2>
                            <motion.p
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                transition={{delay: 0.2}}
                                className="text-gray-400"
                            >
                                Full-Stack Developer
                            </motion.p>
                        </motion.div>

                        <div className="w-full bg-white/10 rounded-full h-2 mb-4">
                            <motion.div
                                variants={progressVariants}
                                initial="initial"
                                animate="animate"
                                transition={{duration: 0.1}}
                                className="bg-primary h-full rounded-full"
                            />
                        </div>

                        <motion.div
                            variants={textVariants}
                            initial="initial"
                            animate="animate"
                            transition={{delay: 0.1}}
                            className="text-center text-white"
                        >
                            Loading... {loadingProgress}%
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

