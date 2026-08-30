import { FEATURES } from '../../data'
import { Reveal, RevealStagger } from '../../hooks/useReveal.jsx'
import LottieIcon from '../Lottie/LottieIcon'
import './WhyUs.css'

const LOTTIE_KNOWLEDGE = 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788092741/Question_Mark_For_The_Internet_Stud_eoyici.gif'

const IC_COLORS = ['ic-blue', 'ic-cyan', 'ic-violet', 'ic-gold', 'ic-blue', 'ic-cyan', 'ic-violet']

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
              <div className={`feature-ic ${IC_COLORS[i]}`}>
                <FeatureIcon name={f.icon} />
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

function FeatureIcon({ name }) {
  const icons = {
    expert: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l3 7h7l-5.5 4.2L18 21l-6-4-6 4 1.5-7.8L2 9h7l3-7Z" /></svg>,
    course: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></svg>,
    platform: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
    rupee: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 4h10M7 9h10M7 4c4 0 6 2 6 4.5S11 13 7 13l8 8" /></svg>,
    globe: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2c2.5 2.7 4 6.2 4 10s-1.5 7.3-4 10c-2.5-2.7-4-6.2-4-10s1.5-7.3 4-10Z" /></svg>,
    compass: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M16 8l-4 4-2 6 4-4 2-6Z" /></svg>,
    target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></svg>,
  }
  return icons[name] || null
}

export default WhyUs