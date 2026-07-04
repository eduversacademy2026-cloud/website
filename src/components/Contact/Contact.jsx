import { useState } from 'react'
import { Reveal } from '../../hooks/useReveal.jsx'
import './Contact.css'

const COUNTRY_CODES = [
  { code: '+91', label: '🇮🇳 +91' },
  { code: '+1', label: '🇺🇸 +1' },
  { code: '+44', label: '🇬🇧 +44' },
  { code: '+971', label: '🇦🇪 +971' },
  { code: '+966', label: '🇸🇦 +966' },
  { code: '+968', label: '🇴🇲 +968' },
  { code: '+974', label: '🇶🇦 +974' },
  { code: '+965', label: '🇰🇼 +965' },
  { code: '+60', label: '🇲🇾 +60' },
  { code: '+65', label: '🇸🇬 +65' },
  { code: '+61', label: '🇦🇺 +61' },
  { code: '+92', label: '🇵🇰 +92' },
  { code: '+880', label: '🇧🇩 +880' },
  { code: '+977', label: '🇳🇵 +977' },
]

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwOZum6RUvHjZz7-uNhqHBY5vxk70rGB9aRMflLxEPY4jOS5Gs4uiGvdHnEJcbOiZFbKA/exec'

function Contact() {
  const [form, setForm] = useState({ name: '', countryCode: '+91', phone: '', email: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: `${form.countryCode} ${form.phone}`,
          email: form.email,
          timestamp: new Date().toISOString()
        })
      })
      setStatus('success')
      setForm({ name: '', countryCode: '+91', phone: '', email: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-grid" aria-hidden="true" />
      <div className="contact-glow contact-glow--1" aria-hidden="true" />
      <div className="contact-glow contact-glow--2" aria-hidden="true" />

      <div className="container">
        <Reveal direction="up">
          <div className="contact-header">
            <p className="eyebrow" style={{ color: '#60A5FA' }}>Get in Touch</p>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Ready to start your <span className="accent">learning journey</span>?
            </h2>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,.5)' }}>
              Fill out the form below and our team will reach out within 24 hours.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={150}>
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-card">
              <div className="contact-form-card__header">
                <h3>Quick Enquiry</h3>
                <span className="contact-form-card__badge">Free Consultation</span>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="cf-name">Full Name</label>
                  <div className="form-input-wrap">
                    <svg className="form-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
                    <input
                      type="text" id="cf-name" name="name"
                      value={form.name} onChange={handleChange}
                      placeholder="Enter your full name" required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-phone">Contact Number</label>
                  <div className="form-phone-row">
                    <select
                      name="countryCode" value={form.countryCode}
                      onChange={handleChange} className="form-country-code"
                      aria-label="Country code"
                    >
                      {COUNTRY_CODES.map(c => (
                        <option key={c.code} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                    <div className="form-input-wrap form-input-wrap--phone">
                      <svg className="form-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.3 1.61.54 2.39a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.69-1.11a2 2 0 0 1 2.11-.45c.78.24 1.58.42 2.39.54A2 2 0 0 1 22 16.92Z" /></svg>
                      <input
                        type="tel" id="cf-phone" name="phone"
                        value={form.phone} onChange={handleChange}
                        placeholder="Phone number" required
                        pattern="[0-9]{7,15}" title="Enter 7-15 digits"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-email">Email Address</label>
                  <div className="form-input-wrap">
                    <svg className="form-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><path d="M4 4h16v16H4V4Z" /><path d="m22 6-10 7L2 6" /></svg>
                    <input
                      type="email" id="cf-email" name="email"
                      value={form.email} onChange={handleChange}
                      placeholder="your@email.com" required
                    />
                  </div>
                </div>

                <button type="submit" className="form-btn" disabled={status === 'sending'}>
                  {status === 'sending' && <span className="form-spinner" />}
                  {status === 'idle' && 'Send Message →'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'success' && '✓ Message Sent!'}
                  {status === 'error' && 'Failed — Retry'}
                </button>

                {status === 'success' && (
                  <div className="form-success">Thank you! We'll get back to you shortly.</div>
                )}
              </form>
            </div>

            {/* Info side */}
            <div className="contact-info-side">
              <div className="contact-info-card">
                <h4>Contact Information</h4>
                <div className="ci-item">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <strong>Location</strong>
                    <span>Aurangabad (Chhatrapati Sambhajinagar), Maharashtra, India</span>
                  </div>
                </div>
                <div className="ci-item">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M4 4h16v16H4V4Z" /><path d="m22 6-10 7L2 6" /></svg>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <span>contact@eduverseacademy.in</span>
                  </div>
                </div>
                <div className="ci-item">
                  <div className="ci-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
                  </div>
                  <div>
                    <strong>Classes</strong>
                    <span>Live online · Recorded videos · Doubt sessions</span>
                  </div>
                </div>
              </div>

              <div className="contact-promise">
                <div className="cp-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" width="16" height="16"><path d="M20 6L9 17l-5-5" /></svg>
                  <span>Response within 24 hours</span>
                </div>
                <div className="cp-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" width="16" height="16"><path d="M20 6L9 17l-5-5" /></svg>
                  <span>Free consultation call</span>
                </div>
                <div className="cp-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" width="16" height="16"><path d="M20 6L9 17l-5-5" /></svg>
                  <span>No spam, ever</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact