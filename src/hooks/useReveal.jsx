import { useEffect, useRef } from 'react'

/**
 * Intersection Observer hook that adds 'revealed' class when element enters viewport.
 * Supports staggered children via CSS custom property --delay.
 */
export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.15, rootMargin: options.rootMargin || '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return ref
}

/**
 * Component wrapper that reveals children with scroll animation
 */
export function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useReveal()
  const dirClass = `reveal--${direction}`

  return (
    <div
      ref={ref}
      className={`reveal ${dirClass} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/**
 * Stagger wrapper — each direct child gets an incremental delay
 */
export function RevealStagger({ children, className = '', stagger = 100, direction = 'up' }) {
  const ref = useReveal()
  const dirClass = `reveal-stagger--${direction}`

  return (
    <div
      ref={ref}
      className={`reveal-stagger ${dirClass} ${className}`}
      style={{ '--stagger': `${stagger}ms` }}
    >
      {children}
    </div>
  )
}