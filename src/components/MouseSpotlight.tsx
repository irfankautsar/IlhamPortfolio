import { useEffect } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from 'framer-motion'

/**
 * Volt-tinted spotlight that trails the cursor across the whole page.
 * Driven by motion values (no React re-renders) and invisible on touch
 * devices until the first pointer move.
 */
export default function MouseSpotlight() {
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const sx = useSpring(x, { stiffness: 220, damping: 35 })
  const sy = useSpring(y, { stiffness: 220, damping: 35 })

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [x, y])

  const background = useMotionTemplate`radial-gradient(560px circle at ${sx}px ${sy}px, rgb(var(--c-volt) / 0.07), transparent 70%)`

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-40"
      style={{ background }}
      aria-hidden
    />
  )
}
