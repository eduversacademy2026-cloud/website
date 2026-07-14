import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Marquee from './components/Marquee/Marquee'
import WhyUs from './components/WhyUs/WhyUs'
import Courses from './components/Courses/Courses'
import Achievements from './components/Achievements/Achievements'
import Team from './components/Team/Team'
import Testimonials from './components/Testimonials/Testimonials'
import Admission from './components/Admission/Admission'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main" role="main">
        <Hero />
        <Marquee />
        <WhyUs />
        <Courses />
        <Achievements />
        <Team />
        <Testimonials />
        <Admission />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <a
        href="https://wa.me/919999999999"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff">
          <path d="M16.004 2.003C8.27 2.003 2.004 8.268 2.004 15.998c0 2.467.645 4.876 1.872 6.998L2 30l7.193-1.885A13.94 13.94 0 0 0 16.004 30c7.732 0 13.996-6.266 13.996-13.997 0-3.74-1.457-7.255-4.103-9.9a13.917 13.917 0 0 0-9.893-4.1Zm0 2.56c3.16 0 6.132 1.232 8.365 3.466a11.74 11.74 0 0 1 3.463 8.37c0 6.518-5.3 11.82-11.828 11.82a11.78 11.78 0 0 1-6.006-1.64l-.43-.256-4.462 1.17 1.19-4.35-.28-.446a11.74 11.74 0 0 1-1.8-6.298c0-6.518 5.302-11.836 11.828-11.836h.006-.046Zm-3.54 6.42c-.24 0-.63.09-.96.45s-1.23 1.2-1.23 2.93.26 3.4.3 3.63c.04.24 1.04 5.09 5.1 7.13.71.35 1.27.56 1.7.72.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.18-1.42-.08-.12-.3-.2-.63-.35s-1.94-.96-2.24-1.07c-.3-.11-.52-.16-.74.16s-.85 1.07-1.04 1.29c-.19.22-.38.25-.71.08s-1.39-.51-2.64-1.63c-.98-.87-1.64-1.94-1.83-2.27-.19-.33-.02-.51.15-.67.15-.15.33-.38.5-.57.16-.19.22-.33.33-.55.11-.22.06-.41-.03-.57-.08-.16-.74-1.79-1.02-2.45-.27-.64-.54-.56-.74-.57h-.63Z"/>
        </svg>
      </a>
    </>
  )
}

export default App