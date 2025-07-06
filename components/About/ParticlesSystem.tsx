"use client"

import { useEffect, useRef } from "react"

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string
      opacity: number
      life: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 3 + 1
        this.color = Math.random() > 0.5 ? "#00D1FF" : "#66E5FF"
        this.opacity = Math.random() * 0.8 + 0.2
        this.life = Math.random() * 200 + 100
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.life--

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas!.width) this.vx *= -1
        if (this.y <= 0 || this.y >= canvas!.height) this.vy *= -1

        // Fade out as life decreases
        this.opacity = Math.max(0, this.life / 200)
      }

      draw() {
        if (!ctx) return
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = 20
        ctx.shadowColor = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      isDead() {
        return this.life <= 0
      }
    }

    const particles: Particle[] = []

    // Create initial particles
    for (let i = 0; i < 35; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update()
        particles[i].draw()

        if (particles[i].isDead()) {
          particles.splice(i, 1)
          particles.push(new Particle()) // Replace with new particle
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
}

export default ParticleSystem
