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
        const mouse = { x: -9999, y: -9999 }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createParticles = () => {
            const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 18000))
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
            }))
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update + draw particles
            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy

                if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // Subtle mouse repulsion
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const dist = Math.sqrt(dx * dx + dy * dy)
                if (dist < 120) {
                    p.x -= dx * 0.015
                    p.y -= dy * 0.015
                }

                ctx.beginPath()
                ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
                ctx.fillStyle = "rgba(59, 130, 246, 0.5)"
                ctx.fill()
            })

            // Draw connections
            const maxDist = 110
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)
                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.18
                        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`
                        ctx.lineWidth = 1
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        resizeCanvas()
        createParticles()
        draw()

        window.addEventListener("resize", () => { resizeCanvas(); createParticles() })
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return <canvas ref={canvasRef} className="fixed inset-0 z-0" aria-hidden="true" />
}

export default NeuralBackground
