import { useState, useEffect, useRef } from 'react'
import { Reveal, RevealStagger } from '../../hooks/useReveal.jsx'
import './Achievements.css'

const STATS = [
  { target: 5000, suffix: '+', label: 'Students Mentored' },
  { target: 1200, suffix: '+', label: 'Scholarship Qualifiers' },
  { target: 50, suffix: '+', label: 'Expert Faculty' },
  { target: 95, suffix: '%', label: 'Success Rate' }
]

function useCountUp(target, duration = 2200) {
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

function AchievementStat({ target, suffix, label }) {
  const { count, ref } = useCountUp(target)
  return (
    <div className="achv-item" ref={ref}>
      <div className="achv-num">{count.toLocaleString('en-IN')}{suffix}</div>
      <div className="achv-label">{label}</div>
    </div>
  )
}

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head center" style={{ marginBottom: 48 }}>
            <p className="eyebrow" style={{ color: 'rgba(96,165,250,.9)' }}>Our Impact</p>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Milestones that <span className="accent">matter</span>
            </h2>
          </div>
        </Reveal>
        <RevealStagger stagger={150} direction="scale" className="achv-grid">
          {STATS.map((s, i) => (
            <AchievementStat key={i} target={s.target} suffix={s.suffix} label={s.label} />
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}

export default Achievements