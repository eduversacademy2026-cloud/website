import { LEADERS, TEACHERS } from '../../data'
import { Reveal, RevealStagger } from '../../hooks/useReveal.jsx'
import './Team.css'

function Team() {
  return (
    <section className="section" id="team" aria-labelledby="team-heading">
      <div className="container">
        <Reveal direction="up">
          <div className="section-head center">
            <p className="eyebrow">Our Team</p>
            <h2 className="section-title" id="team-heading">The people behind <span className="accent">Eduverse Academy</span></h2>
            <p className="section-sub">Led by educators who believe every student deserves a clear path forward.</p>
          </div>
        </Reveal>
        <RevealStagger stagger={150} direction="up" className="leaders-grid">
          {LEADERS.map((p, i) => (
            <div className="leader-card" key={i}>
              {p.image ? (
                <div className="avatar-3d-wrapper">
                  <div className="avatar-3d-ring"></div>
                  <img className="avatar-3d-img" src={p.image} alt={p.name} />
                </div>
              ) : (
                <div className="avatar-circle">{p.initials}</div>
              )}
              <h4>{p.name}</h4>
              <p className="role">{p.role}</p>
              <p className="bio">{p.bio}</p>
            </div>
          ))}
        </RevealStagger>

        {/* Teaching Staff */}
        <Reveal direction="up">
          <div className="section-head center" style={{ marginTop: '60px' }}>
            <p className="eyebrow">Teaching Staff</p>
            <h3 className="section-title">Our Expert <span className="accent">Faculty</span></h3>
          </div>
        </Reveal>
        <RevealStagger stagger={150} direction="up" className="teachers-grid">
          {TEACHERS.map((t, i) => (
            <div className="teacher-card" key={i}>
              <div className="teacher-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="28" height="28">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <h4>{t.name}</h4>
              <p className="role">{t.role}</p>
              <p className="bio">{t.bio}</p>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}

export default Team