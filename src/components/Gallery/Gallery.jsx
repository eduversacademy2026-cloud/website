import { Reveal, RevealStagger } from '../../hooks/useReveal.jsx'
import './Gallery.css'

const ITEMS = [
  { label: 'Classroom Sessions', color: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { label: 'Live Online Classes', color: 'linear-gradient(135deg,#06B6D4,#2563EB)' },
  { label: 'Award Ceremonies', color: 'linear-gradient(135deg,#7C3AED,#2563EB)' },
  { label: 'Student Batches', color: 'linear-gradient(135deg,#1E3A8A,#06B6D4)' },
  { label: 'Practice Tests', color: 'linear-gradient(135deg,#2563EB,#60A5FA)' },
  { label: 'Doubt Sessions', color: 'linear-gradient(135deg,#0A1628,#1E3A8A)' }
]

function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head center">
            <p className="eyebrow">Gallery</p>
            <h2 className="section-title">A glimpse into <span className="accent">Eduverse life</span></h2>
          </div>
        </Reveal>
        <RevealStagger stagger={100} direction="scale" className="gallery-grid">
          {ITEMS.map((g, i) => (
            <div className="gallery-tile" key={i} style={{ background: g.color }}>
              <div className="gallery-tile-label">{g.label}</div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}

export default Gallery