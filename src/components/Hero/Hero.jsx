import { useState, useEffect, useRef } from 'react'
import './Hero.css'

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          function tick(now) {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
            else setCount(target)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return { count, ref }
}

function AnimatedStat({ target, suffix, label, icon }) {
  const { count, ref } = useCountUp(target)
  return (
    <div className="hero-stat" ref={ref}>
      <div className="hero-stat__icon">{icon}</div>
      <strong>{count.toLocaleString('en-IN')}{suffix}</strong>
      <span>{label}</span>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-noise" aria-hidden="true" />
      <div className="hero-gradient-orb hero-gradient-orb--1" aria-hidden="true" />
      <div className="hero-gradient-orb hero-gradient-orb--2" aria-hidden="true" />
      <div className="hero-gradient-orb hero-gradient-orb--3" aria-hidden="true" />
      <div className="hero-grid-overlay" aria-hidden="true" />
      <div className="hero-radial-fade" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="hero-title__line">Where every</span>
            <span className="hero-title__line hero-title__accent">student grows</span>
            <span className="hero-title__line">with purpose.</span>
          </h1>

          <p className="hero-subtitle">
            Bilingual coaching, structured programmes, and a platform built for results — live classes, recorded lectures, expert faculty, and guidance that stays with students for life.
          </p>

          <div className="hero-cta">
            <a href="#courses" className="hero-btn hero-btn--primary">
              <span>Explore Programmes</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
            <a href="#contact" className="hero-btn hero-btn--ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.61.54 2.39a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.69-1.11a2 2 0 0 1 2.11-.45c.78.24 1.58.42 2.39.54A2 2 0 0 1 22 16.92Z" /></svg>
              <span>Get in Touch</span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="hero-trust__avatars">
              <div className="hero-trust__avatar" style={{ background: '#2563EB' }}>R</div>
              <div className="hero-trust__avatar" style={{ background: '#7C3AED' }}>A</div>
              <div className="hero-trust__avatar" style={{ background: '#06B6D4' }}>S</div>
              <div className="hero-trust__avatar" style={{ background: '#10B981' }}>M</div>
            </div>
            <div className="hero-trust__text">
              <strong>Join 5,000+ students</strong>
              <span>already learning with us</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__glow" />
          <img
            className="hero-visual__img"
            src="https://res.cloudinary.com/yyxm1nvc/image/upload/v1783195183/Rehan_bhai_eah86b.png"
            alt="Rehan Fazal — Founder of Eduverse Academy"
          />
        </div>
      </div>

      <div className="hero-stats-wrapper">
        <div className="container">
          <div className="hero-stats">
            <AnimatedStat
              target={5000} suffix="+"
              label="Students Taught"
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20c0-3.3 3-5.5 6.5-5.5s6.5 2.2 6.5 5.5" /><circle cx="18" cy="9" r="3" /><path d="M15.5 14.2c2.8.4 5 2.2 5 5.3" /></svg>}
            />
            <AnimatedStat
              target={23} suffix="+"
              label="Programmes"
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></svg>}
            />
            <AnimatedStat
              target={95} suffix="%"
              label="Success Rate"
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M12 2l3 7h7l-5.5 4.2L18 21l-6-4-6 4 1.5-7.8L2 9h7l3-7Z" /></svg>}
            />
            <AnimatedStat
              target={4} suffix="+"
              label="Years of Excellence"
              icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20"><path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" /><path d="M8 5H5a2 2 0 0 0 0 4h1M16 5h3a2 2 0 0 1 0 4h-1" /><path d="M9 20h6M12 13v7" /></svg>}
            />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero