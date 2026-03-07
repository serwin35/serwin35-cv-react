import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useLoading } from "./hooks/useLoading"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Languages from "./components/Languages"
import LanguageSwitcher from "./components/LanguageSwitcher"
import LoadingScreen from "./components/LoadingScreen"
import NeuralBackground from "./components/NeuralBackground"

function App() {
    const [activeSection, setActiveSection] = useState("about")
    const isLoading = useLoading(2000)
    const { i18n } = useTranslation()

    return (
        <>
            <AnimatePresence>{isLoading && <LoadingScreen />}</AnimatePresence>

            {!isLoading && (
                <>
                    <NeuralBackground />

                    <div className="relative z-10 flex min-h-screen">
                        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

                        <main className="flex-1 pl-16 md:pl-20 py-8 pr-6 md:pr-8">
                            <div
                                className="max-w-5xl mx-auto rounded-2xl shadow-2xl overflow-hidden"
                                style={{
                                    background: "var(--color-bg-surface)",
                                    border: "1px solid var(--color-border)",
                                }}
                            >
                                {/* Top bar */}
                                <div
                                    className="flex items-center justify-between px-8 py-4 border-b"
                                    style={{ borderColor: "var(--color-border)" }}
                                >
                                    {/* Window dots */}
                                    <div className="flex gap-1.5">
                                        <span className="w-3 h-3 rounded-full bg-red-500/70" />
                                        <span className="w-3 h-3 rounded-full bg-amber-400/70" />
                                        <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                                    </div>
                                    <LanguageSwitcher />
                                </div>

                                {/* Header section */}
                                <div
                                    className="px-8 py-8 border-b"
                                    style={{ borderColor: "var(--color-border)" }}
                                >
                                    <Header />
                                </div>

                                {/* Content */}
                                <div className="px-8 py-8">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${activeSection}-${i18n.language}`}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -12 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <About isVisible={activeSection === "about"} />
                                            <Experience isVisible={activeSection === "experience"} />
                                            <Education isVisible={activeSection === "education"} />
                                            <Skills isVisible={activeSection === "skills"} />
                                            <Portfolio isVisible={activeSection === "portfolio"} />
                                            <Languages isVisible={activeSection === "languages"} />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </main>
                    </div>
                </>
            )}
        </>
    )
}

export default App
