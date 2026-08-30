import { useState } from 'react'
import { COURSES, COURSE_CATEGORIES } from '../../data'
import { Reveal, RevealStagger } from '../../hooks/useReveal.jsx'
import LottieIcon from '../Lottie/LottieIcon'
import './Courses.css'

const LOTTIE_BOOKS = 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788092563/Student_pn32s2.gif'

function Courses() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? COURSES : COURSES.filter(c => c.category === active)

  return (
    <section className="section alt" id="courses" aria-labelledby="courses-heading">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head center">
            <div className="section-lottie">
              <LottieIcon src={LOTTIE_BOOKS} />
            </div>
            <p className="eyebrow">Programmes</p>
            <h2 className="section-title" id="courses-heading">Courses built for <span className="accent">every stage</span> of learning</h2>
            <p className="section-sub">From early foundations to government exams — pick a track and start at your own pace.</p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="course-tabs">
            {COURSE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`course-tab ${active === cat.id ? 'active' : ''}`}
                onClick={() => setActive(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <RevealStagger stagger={80} direction="up" className="courses-grid">
          {filtered.map((c, i) => (
            <div className="course-card" key={`${active}-${i}`}>
              <div className="course-top">
                <span className="course-level">{c.level}</span>
                {c.badge && <span className="course-badge">{c.badge}</span>}
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="course-foot">
                <div>
                  {c.price
                    ? <div className="course-price">{c.price} <small>{c.priceNote}</small></div>
                    : <div className="course-price" style={{ color: 'var(--muted)', fontSize: '13.5px', fontWeight: 500 }}>{c.priceNote}</div>
                  }
                </div>
                <a href="#contact" className="course-link">
                  Enquire
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}

export default Courses