import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#home" className="brand" aria-label="Eduverse Academy home">
          <img className="brand-logo" src="https://res.cloudinary.com/yyxm1nvc/image/upload/v1783199946/Eduverse_Logo_200x50_px_wlezwv.jpg" alt="Eduverse Academy" />
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['Home', 'Why Us', 'Courses', 'Team', 'Testimonials', 'FAQ', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link" onClick={closeMenu}>
              {item}
            </a>
          ))}
          <div className="nav-cta-mobile">
            <a href="https://lms.eduverseacademy.in/login" className="btn btn-primary" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Login / Signup</a>
          </div>
        </nav>

        <div className="nav-cta">
          <a href="#contact" className="btn-ghost-white">Get in Touch</a>
          <a href="https://lms.eduverseacademy.in/login" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Login / Signup</a>
        </div>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

export default Navbar