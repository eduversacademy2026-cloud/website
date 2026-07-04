import { TIMELINE } from '../../data'
import { Reveal, RevealStagger } from '../../hooks/useReveal.jsx'
import './Admission.css'

function Admission() {
  return (
    <section className="section alt" id="admission">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head center">
            <p className="eyebrow">Admission Process</p>
            <h2 className="section-title">Four simple steps to <span className="accent">get started</span></h2>
          </div>
        </Reveal>
        <RevealStagger stagger={180} direction="up" className="timeline">
          {TIMELINE.map((t, i) => (
            <div className="timeline-step" key={i}>
              <div className="timeline-num">{i + 1}</div>
              <h4>{t.title}</h4>
              <p>{t.desc}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}

export default Admission