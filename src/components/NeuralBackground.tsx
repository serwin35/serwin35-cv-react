import type React from "react"
import { useRef, useEffect } from "react"

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
}

const NeuralBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        const mouse = { x: 0, y: 0 }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createParticles = () => {
            const particleCount = 100
            particles = []
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                })
            }
        }

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = "#ffd93d"
            particles.forEach((particle) => {
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
                ctx.fill()
            })
        }

        const connectParticles = () => {
            const maxDistance = 100
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x
                    const dy = particle.y - otherParticle.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < maxDistance) {
                        ctx.strokeStyle = `rgba(255, 217, 61, ${1 - distance / maxDistance})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particle.x, particle.y)
                        ctx.lineTo(otherParticle.x, otherParticle.y)
                        ctx.stroke()
                    }
                })
            })
        }

        const updateParticles = () => {
            particles.forEach((particle) => {
                particle.x += particle.vx
                particle.y += particle.vy

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

                const dx = mouse.x - particle.x
                const dy = mouse.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                if (distance < 100) {
                    particle.x -= dx * 0.03
                    particle.y -= dy * 0.03
                }
            })
        }

        const animate = () => {
            updateParticles()
            drawParticles()
            connectParticles()
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = event.clientX
            mouse.y = event.clientY
        }

        resizeCanvas()
        createParticles()
        animate()

        window.addEventListener("resize", resizeCanvas)
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed inset-0 z-[-1]" />
}

export default NeuralBackground

