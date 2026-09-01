import { FEATURES } from '../../data'
import { Reveal, RevealStagger } from '../../hooks/useReveal.jsx'
import LottieIcon from '../Lottie/LottieIcon'
import './WhyUs.css'

const LOTTIE_KNOWLEDGE = 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788092741/Question_Mark_For_The_Internet_Stud_eoyici.gif'

const FEATURE_ICONS = {
  expert: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788264690/Expert-Faculty-removebg-preview_qzdz0q.png',
  course: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788264690/Structured-Courses-removebg-preview_phrm90.png',
  platform: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788264828/Reliable_Platform-removebg-preview_cqmoyu.png',
  rupee: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788264828/Affordable_Pricing-removebg-preview_tdlv5u.png',
  globe: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788264690/Bilingual-removebg-preview_snylnc.png',
  compass: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788264689/Career_Guidance-removebg-preview_nqj4wu.png',
  target: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788264689/Result-Oriented-removebg-preview_fjmkwk.png',
}

function WhyUs() {
  return (
    <section className="section" id="why-us" aria-labelledby="whyus-heading">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head center">
            <div className="section-lottie">
              <LottieIcon src={LOTTIE_KNOWLEDGE} />
            </div>
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="section-title" id="whyus-heading">What makes <span className="accent">Eduverse Academy</span> different</h2>
            <p className="section-sub">Seven pillars that define how we approach education — and why families across Maharashtra trust us.</p>
          </div>
        </Reveal>
        <RevealStagger stagger={120} direction="up" className="features-grid">
          {FEATURES.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-logo">
                <img src={FEATURE_ICONS[f.icon]} alt={`${f.title} icon`} loading="lazy" decoding="async" />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}

export default WhyUs