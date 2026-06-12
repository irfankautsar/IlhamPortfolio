import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const GLYPHS = '01<>/#%&+~'

/** Matrix-style decode: characters resolve left to right from random glyphs. */
export default function DecodeText({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const reduceMotion = useReducedMotion()
  const [output, setOutput] = useState(reduceMotion ? text : '')
  const frame = useRef(0)

  useEffect(() => {
    if (reduceMotion) {
      setOutput(text)
      return
    }
    let interval: ReturnType<typeof setInterval>
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame.current += 1
        const resolved = Math.floor(frame.current / 2)
        if (resolved >= text.length) {
          setOutput(text)
          clearInterval(interval)
          return
        }
        const scrambled = text
          .slice(resolved)
          .split('')
          .map((c) => (c === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
          .join('')
        setOutput(text.slice(0, resolved) + scrambled)
      }, 30)
    }, delay)
    return () => {
      clearTimeout(timeout)
      if (interval) clearInterval(interval)
    }
  }, [text, delay, reduceMotion])

  return (
    <span className={className} aria-label={text}>
      {output || ' '}
    </span>
  )
}
