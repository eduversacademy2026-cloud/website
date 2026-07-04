import './Marquee.css'

const ITEMS = [
  '5,000+ Students Taught',
  '95% Success Rate',
  'Bilingual: English & Urdu',
  'NEET · JEE · MPSC · UPSC',
  'Scholarship Specialists',
  'Live + Recorded Classes',
  '4+ Years of Excellence'
]

function Marquee() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-inner">
        <div className="marquee-track">
          {ITEMS.map((text, i) => (
            <span className="marquee-item" key={`a-${i}`}>
              <span className="mdot" />
              {text}
            </span>
          ))}
        </div>
        <div className="marquee-track">
          {ITEMS.map((text, i) => (
            <span className="marquee-item" key={`b-${i}`}>
              <span className="mdot" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Marquee