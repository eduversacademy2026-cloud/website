import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="22" height="22"><path d="M3 7l9-4 9 4-9 4-9-4Z" /><path d="M7 9.5v5c0 1.4 2.2 3 5 3s5-1.6 5-3v-5" /><path d="M21 7v6" /></svg>
              </span>
              <span className="brand-text"><strong>Eduverse Academy</strong></span>
            </a>
            <p className="footer-tagline">Simple learning. Strong results. A bilingual platform for Class 1–12 and competitive exam learners.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" /></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9l5 3-5 3V9Z" /></svg></a>
              <a href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" /></svg></a>
            </div>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul className="footer-links">
              {['Home', 'Why Us', 'Courses', 'Team', 'Testimonials', 'FAQ'].map(l => (
                <li key={l}><a href={`#${l.toLowerCase().replace(' ', '-')}`}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Programmes</h5>
            <ul className="footer-links">
              {['Scholarship Courses', 'JEE / NEET Foundation', '10th Board Exam Prep', 'MPSC / UPSC Preparation', 'Urdu Reading & Learning'].map(l => (
                <li key={l}><a href="#courses">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul className="footer-links">
              <li>Aurangabad, Maharashtra, India</li>
              <li><a href="mailto:contact@eduverseacademy.in">contact@eduverseacademy.in</a></li>
              <li>Live &amp; Recorded Classes</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} Eduverse Academy. All rights reserved.</span>
          <span>Built with care for students everywhere.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer