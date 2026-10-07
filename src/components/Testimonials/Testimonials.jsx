import { useState } from 'react'
import { TESTIMONIALS } from '../../data'
import { Reveal } from '../../hooks/useReveal.jsx'
import './Testimonials.css'

function Testimonials() {
  const [idx, setIdx] = useState(0)
  const go = (i) => setIdx((i + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="section alt" id="testimonials" aria-labelledby="testimonials-heading">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head center">
            <p className="eyebrow">Testimonials</p>
            <h2 className="section-title" id="testimonials-heading">What students & <span className="accent">parents</span> say</h2>
          </div>
        </Reveal>
        <Reveal direction="scale" delay={200}>
          <div className="testimonial-wrap">
            <div className="testimonial-track-outer">
              <div className="testimonial-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
                {TESTIMONIALS.map((t, i) => (
                  <div className="testimonial-card" key={i}>
                    <div className="testimonial-stars">{'★★★★★'}</div>
                    <p className="testimonial-text">"{t.quote}"</p>
                    <div className="testimonial-author">
                      <div className="avatar-circle" style={{ width: 44, height: 44, fontSize: 14, margin: 0 }}>{t.initials}</div>
                      <div className="testimonial-author-text">
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonial-controls">
              <button className="t-arrow" onClick={() => go(idx - 1)} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <div className="t-dots">
                {TESTIMONIALS.map((_, i) => (
                  <span key={i} className={`t-dot ${i === idx ? 'active' : ''}`} onClick={() => go(i)} />
                ))}
              </div>
              <button className="t-arrow" onClick={() => go(idx + 1)} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="17" height="17"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Testimonials