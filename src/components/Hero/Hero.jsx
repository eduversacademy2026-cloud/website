import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const STATS = [
  { target: 5000, suffix: '+', label: 'Students Taught' },
  { target: 23, suffix: '+', label: 'Programmes' },
  { target: 95, suffix: '%', label: 'Success Rate' },
  { target: 4, suffix: '+', label: 'Years of Excellence' },
]

function useCountUp(target, duration = 2000, delay = 0) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setCount(target)
      return
    }

    let rafId = 0
    let timeoutId = 0

    const run = () => {
      if (started.current) return
      started.current = true
      timeoutId = window.setTimeout(() => {
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.floor(eased * target))
          if (progress < 1) rafId = requestAnimationFrame(tick)
          else setCount(target)
        }
        rafId = requestAnimationFrame(tick)
      }, delay)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) run()
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)

    return () => {
      observer.disconnect()
      if (rafId) cancelAnimationFrame(rafId)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [target, duration, delay])

  return { count, ref }
}

function Stat({ target, suffix, label, index }) {
  const { count, ref } = useCountUp(target, 2200, index * 120)
  return (
    <div className="hero-stat" ref={ref} style={{ '--i': index }}>
      <strong className="hero-stat__num">
        {count.toLocaleString('en-IN')}
        {suffix}
      </strong>
      <span className="hero-stat__label">{label}</span>
    </div>
  )
}

function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduce) return

    let raf = 0
    let mx = 0
    let my = 0

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      mx = (e.clientX - r.left) / r.width - 0.5
      my = (e.clientY - r.top) / r.height - 0.5
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const apply = () => {
      raf = 0
      el.style.setProperty('--mx', mx.toFixed(3))
      el.style.setProperty('--my', my.toFixed(3))
    }

    const onScroll = () => {
      const y = Math.max(0, Math.min(1, window.scrollY / (window.innerHeight || 1)))
      el.style.setProperty('--sy', y.toFixed(3))
    }

    if (fine) el.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      el.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero" id="home" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-canvas" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-wordmark">
          <span>EDU</span>
          <span>VERSE</span>
        </div>
        <div className="hero-rule hero-rule--v" />

        <div className="hero-accent-badge">
          <img
            className="hero-accent-badge__img"
            src="https://res.cloudinary.com/yyxm1nvc/image/upload/v1788083608/Screenshot_2026-08-30_152010-removebg-preview_yxbjzl.png"
            alt=""
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      <div className="container hero__inner">
        <div className="hero-statement">
          <h1 className="hero-title" id="hero-title">
            <span className="hero-title__l1">Where every</span>
            <span className="hero-title__l2">
              student <em>grows</em>
            </span>
            <span className="hero-title__l3">with purpose.</span>
          </h1>

          <div className="hero-support">
            <p className="hero-lede">
              From your first Urdu letters to your NEET, JEE, board and scholarship
              goals — learn in English with Hindi and Urdu support, guided every
              step by teachers who stay with you.
            </p>

            <div className="hero-actions">
              <a href="#courses" className="hero-link hero-link--primary">
                <span className="hero-link__text">Explore Courses</span>
                <span className="hero-link__arrow" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H9M17 7V15" />
                  </svg>
                </span>
              </a>
              <a href="#why-us" className="hero-link hero-link--ghost">
                <span className="hero-link__text">Discover Eduverse</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stats__list">
            {STATS.map((s, i) => (
              <Stat key={s.label} index={i} target={s.target} suffix={s.suffix} label={s.label} />
            ))}
          </div>
          <div className="hero-stats__figure" aria-hidden="true">
            <img
              src="https://res.cloudinary.com/yyxm1nvc/image/upload/v1788083608/Screenshot_2026-08-30_152010-removebg-preview_yxbjzl.png"
              alt=""
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
