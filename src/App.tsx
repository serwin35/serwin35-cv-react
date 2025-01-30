import {useState} from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import {useLoading} from "./hooks/useLoading"
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
                        <main className="flex-1 p-8 md:ml-20">
                            <div className="max-w-3xl lg:max-w-7xl mx-auto bg-zinc-800/30 backdrop-blur-sm rounded-lg shadow-lg p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <Header />
                                    <LanguageSwitcher />
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={i18n.language}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
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
                        </main>
                    </div>
                </>
            )}
        </>
    )
}

export default App
