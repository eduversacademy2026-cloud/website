import { useState } from 'react'
import { FAQS } from '../../data'
import { Reveal, RevealStagger } from '../../hooks/useReveal.jsx'
import './FAQ.css'

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)

  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head center">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title" id="faq-heading">Frequently asked <span className="accent">questions</span></h2>
          </div>
        </Reveal>
        <RevealStagger stagger={100} direction="up" className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item ${openIdx === i ? 'open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)} aria-expanded={openIdx === i}>
                <span>{f.q}</span>
                <span className="faq-plus">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </button>
              <div className="faq-a" style={{ maxHeight: openIdx === i ? 200 : 0 }}>
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}

export default FAQ