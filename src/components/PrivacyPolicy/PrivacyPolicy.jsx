import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const LAST_UPDATED = 'October 7, 2026'
const CONTACT_EMAIL = 'eduversacademy2026@gmail.com'
const WEBSITE_URL = 'https://www.eduverseacademy.in'

function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy – Eduverse Academy'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="pp-page">
      {/* ── Simple top bar ── */}
      <header className="pp-topbar">
        <div className="pp-topbar__inner">
          <Link to="/" className="pp-logo" aria-label="Back to Eduverse Academy homepage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" aria-hidden="true">
              <path d="M3 7l9-4 9 4-9 4-9-4Z" />
              <path d="M7 9.5v5c0 1.4 2.2 3 5 3s5-1.6 5-3v-5" />
              <path d="M21 7v6" />
            </svg>
            <strong>Eduverse Academy</strong>
          </Link>
          <Link to="/" className="pp-back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="pp-main" id="pp-main" role="main">
        <div className="pp-container">

          {/* Title block */}
          <div className="pp-title-block">
            <h1 className="pp-title">Privacy Policy</h1>
            <p className="pp-meta">
              <span><strong>Effective Date:</strong> {LAST_UPDATED}</span>
              <span><strong>Last Updated:</strong> {LAST_UPDATED}</span>
            </p>
            <p className="pp-intro">
              This Privacy Policy describes how <strong>Eduverse Academy</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
              collects, uses, and protects information when you use our website at{' '}
              <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">{WEBSITE_URL}</a>{' '}
              and any related digital services (collectively, the &ldquo;Service&rdquo;).
              By using our Service you agree to the practices described in this policy.
            </p>
          </div>

          {/* Quick navigation */}
          <nav className="pp-toc" aria-label="Table of contents">
            <p className="pp-toc__label">Jump to section</p>
            <ol className="pp-toc__list">
              <li><a href="#pp-who-we-are">1. Who We Are</a></li>
              <li><a href="#pp-information-collected">2. Information We Collect</a></li>
              <li><a href="#pp-how-we-use">3. How We Use Your Information</a></li>
              <li><a href="#pp-data-sharing">4. Data Sharing &amp; Disclosure</a></li>
              <li><a href="#pp-security">5. Data Security</a></li>
              <li><a href="#pp-retention">6. Data Retention</a></li>
              <li><a href="#pp-deletion">7. Account &amp; Data Deletion</a></li>
              <li><a href="#pp-children">8. Children&apos;s Privacy</a></li>
              <li><a href="#pp-user-rights">9. Your Rights</a></li>
              <li><a href="#pp-updates">10. Policy Updates</a></li>
              <li><a href="#pp-contact">11. Contact Us</a></li>
            </ol>
          </nav>

          {/* ── Section 1: Who We Are ── */}
          <section className="pp-section" id="pp-who-we-are" aria-labelledby="pp-s1-heading">
            <h2 id="pp-s1-heading" className="pp-section__heading">1. Who We Are</h2>
            <p>
              <strong>Eduverse Academy</strong> is an online education platform based in
              Aurangabad (Chhatrapati Sambhajinagar), Maharashtra, India. We provide live and
              recorded classes for students in Class 1–12, scholarship exam preparation (4th &amp;
              7th class), competitive exam foundations (JEE / NEET), board exam preparation, and
              government exam coaching (MPSC / UPSC / CTET). Our content is delivered in English
              with Hindi / Urdu support.
            </p>
            <div className="pp-info-box">
              <p><strong>Owner:</strong> Ishrat Jabeen Shaikh Rehan</p>
              <p><strong>Address:</strong> Kausar Park, Naregaon, Aurangabad (Chhatrapati Sambhajinagar), Maharashtra, India</p>
              <p><strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
              <p><strong>Website:</strong> <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">{WEBSITE_URL}</a></p>
            </div>
          </section>

          {/* ── Section 2: Information Collected ── */}
          <section className="pp-section" id="pp-information-collected" aria-labelledby="pp-s2-heading">
            <h2 id="pp-s2-heading" className="pp-section__heading">2. Information We Collect</h2>

            <h3 className="pp-section__subheading">2.1 Information You Provide Directly</h3>
            <p>
              When you fill out our <strong>contact / enquiry form</strong> on our website, we collect:
            </p>
            <ul className="pp-list">
              <li><strong>Full Name</strong> – so we can address you properly.</li>
              <li><strong>Phone Number</strong> (including country code) – so we can call or message you about your enquiry.</li>
              <li><strong>Email Address</strong> – so we can send you course details and follow-up information.</li>
              <li><strong>Submission Timestamp</strong> – the date and time your form was submitted, recorded automatically.</li>
            </ul>

            <h3 className="pp-section__subheading">2.2 Information Collected Automatically</h3>
            <p>
              We do <strong>not</strong> currently use cookies, tracking pixels, or third-party analytics tools
              (such as Google Analytics). We do not automatically collect IP addresses, device identifiers, or
              browsing behaviour through our website.
            </p>
            <p>
              However, standard server-side logs may be maintained by our hosting provider (Vite / static host),
              which may include IP addresses and browser user-agent strings as part of normal web server operation.
              We do not actively use these logs to identify individuals.
            </p>

            <h3 className="pp-section__subheading">2.3 Information We Do Not Collect</h3>
            <p>We do <strong>not</strong> collect or store:</p>
            <ul className="pp-list">
              <li>Payment card numbers or banking information — payments are handled by third-party payment processors and we do not receive or store payment credentials.</li>
              <li>Government ID numbers (Aadhaar, PAN, etc.).</li>
              <li>Passwords — we do not currently operate a login-based student portal on this website.</li>
              <li>Location data from your device.</li>
            </ul>
          </section>

          {/* ── Section 3: How We Use ── */}
          <section className="pp-section" id="pp-how-we-use" aria-labelledby="pp-s3-heading">
            <h2 id="pp-s3-heading" className="pp-section__heading">3. How We Use Your Information</h2>
            <p>We use the information you submit through our contact form solely for the following purposes:</p>
            <ul className="pp-list">
              <li><strong>Responding to enquiries</strong> – to contact you about the course or programme you expressed interest in.</li>
              <li><strong>Counselling and admission</strong> – to guide you through the right learning path and enrolment process.</li>
              <li><strong>Communication</strong> – to send you class details, schedules, and updates relevant to your enquiry.</li>
              <li><strong>Internal record-keeping</strong> – to maintain a log of student enquiries for operational purposes.</li>
            </ul>
            <p>
              We will <strong>not</strong> use your information to send unsolicited marketing messages unrelated to
              your enquiry, sell advertising, or build profiles for automated decision-making.
            </p>
          </section>

          {/* ── Section 4: Data Sharing ── */}
          <section className="pp-section" id="pp-data-sharing" aria-labelledby="pp-s4-heading">
            <h2 id="pp-s4-heading" className="pp-section__heading">4. Data Sharing &amp; Disclosure</h2>
            <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>

            <h3 className="pp-section__subheading">4.1 Service Providers</h3>
            <p>
              Your form submission data is transmitted to and stored in{' '}
              <strong>Google Sheets</strong> via a <strong>Google Apps Script</strong> web application.
              Google processes this data as a sub-processor on our behalf. Google's privacy practices
              are governed by the{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>.
            </p>
            <p>
              Team member and course images are hosted on <strong>Cloudinary</strong>, an image CDN.
              Cloudinary only serves static image files and does not process or store your personal form data.
            </p>

            <h3 className="pp-section__subheading">4.2 Legal Requirements</h3>
            <p>
              We may disclose your information if required to do so by law, court order, or a
              governmental authority in India or another jurisdiction, or if we believe disclosure is
              necessary to protect the rights, property, or safety of Eduverse Academy, our students,
              or the public.
            </p>

            <h3 className="pp-section__subheading">4.3 No Other Sharing</h3>
            <p>
              Apart from the above, your information is not shared with any other third party, advertiser,
              data broker, or external organisation.
            </p>
          </section>

          {/* ── Section 5: Security ── */}
          <section className="pp-section" id="pp-security" aria-labelledby="pp-s5-heading">
            <h2 id="pp-s5-heading" className="pp-section__heading">5. Data Security</h2>
            <p>
              We take reasonable technical and organisational measures to protect your information:
            </p>
            <ul className="pp-list">
              <li>Our website is served over <strong>HTTPS</strong>, encrypting data in transit between your browser and our server.</li>
              <li>Form data is transmitted to Google's servers using encrypted HTTPS connections.</li>
              <li>Access to the Google Sheets database where your information is stored is restricted to authorised Eduverse Academy team members only.</li>
            </ul>
            <p>
              While we strive to protect your information, no method of transmission over the internet or
              electronic storage is 100% secure. We cannot guarantee absolute security, but we are committed
              to using industry-standard practices.
            </p>
          </section>

          {/* ── Section 6: Retention ── */}
          <section className="pp-section" id="pp-retention" aria-labelledby="pp-s6-heading">
            <h2 id="pp-s6-heading" className="pp-section__heading">6. Data Retention</h2>
            <p>
              We retain enquiry records (name, phone, email, and timestamp) for as long as they are
              operationally relevant — typically for the duration of the academic relationship or
              up to <strong>2 years</strong> after the date of submission, whichever is longer.
            </p>
            <p>
              After this period, or upon a valid deletion request (see Section 7), the data is
              permanently removed from our Google Sheets database.
            </p>
          </section>

          {/* ── Section 7: Deletion ── */}
          <section className="pp-section" id="pp-deletion" aria-labelledby="pp-s7-heading">
            <h2 id="pp-s7-heading" className="pp-section__heading">7. Account &amp; Data Deletion</h2>
            <p>
              You have the right to request deletion of your personal information at any time.
              To do so:
            </p>
            <ol className="pp-list pp-list--ordered">
              <li>Send an email to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with the subject line <strong>"Data Deletion Request"</strong>.</li>
              <li>Include the name, phone number, and email address you submitted through our contact form so we can locate your record.</li>
              <li>We will process your request and confirm deletion within <strong>30 days</strong>.</li>
            </ol>
            <p>
              Once deleted, your information will be permanently removed from our Google Sheets
              database and will not be recoverable. Note that we may retain minimal records (such as
              the fact that a deletion was requested) as required by law.
            </p>
          </section>

          {/* ── Section 8: Children ── */}
          <section className="pp-section" id="pp-children" aria-labelledby="pp-s8-heading">
            <h2 id="pp-s8-heading" className="pp-section__heading">8. Children&apos;s Privacy</h2>
            <p>
              Eduverse Academy provides educational services to students including children under the
              age of 13. We recognise our responsibility to protect children's privacy.
            </p>
            <ul className="pp-list">
              <li>We do <strong>not</strong> knowingly collect personal information <em>directly</em> from children under 13 without verifiable parental or guardian consent.</li>
              <li>Our contact and enquiry forms are intended to be completed by a <strong>parent, guardian, or adult student</strong> (age 18+) on behalf of the child.</li>
              <li>If you are a parent or guardian and believe we have inadvertently collected personal information from a child under 13 without your consent, please contact us immediately at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and we will delete it promptly.</li>
            </ul>
          </section>

          {/* ── Section 9: User Rights ── */}
          <section className="pp-section" id="pp-user-rights" aria-labelledby="pp-s9-heading">
            <h2 id="pp-s9-heading" className="pp-section__heading">9. Your Rights</h2>
            <p>
              Depending on your location, you may have the following rights regarding your personal data.
              To exercise any of these rights, email us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <div className="pp-rights-grid">
              <div className="pp-rights-item">
                <span className="pp-rights-icon" aria-hidden="true">👁</span>
                <div>
                  <strong>Right to Access</strong>
                  <p>Request a copy of the personal information we hold about you.</p>
                </div>
              </div>
              <div className="pp-rights-item">
                <span className="pp-rights-icon" aria-hidden="true">✏️</span>
                <div>
                  <strong>Right to Correction</strong>
                  <p>Ask us to correct inaccurate or incomplete information.</p>
                </div>
              </div>
              <div className="pp-rights-item">
                <span className="pp-rights-icon" aria-hidden="true">🗑️</span>
                <div>
                  <strong>Right to Deletion</strong>
                  <p>Request that we delete your personal information (see Section 7).</p>
                </div>
              </div>
              <div className="pp-rights-item">
                <span className="pp-rights-icon" aria-hidden="true">🚫</span>
                <div>
                  <strong>Right to Object</strong>
                  <p>Object to our processing of your data for direct communication purposes.</p>
                </div>
              </div>
              <div className="pp-rights-item">
                <span className="pp-rights-icon" aria-hidden="true">📦</span>
                <div>
                  <strong>Right to Portability</strong>
                  <p>Request a copy of your data in a structured, machine-readable format.</p>
                </div>
              </div>
              <div className="pp-rights-item">
                <span className="pp-rights-icon" aria-hidden="true">🇮🇳</span>
                <div>
                  <strong>India DPDPA 2023</strong>
                  <p>Users in India may exercise rights under the Digital Personal Data Protection Act, 2023.</p>
                </div>
              </div>
            </div>
            <p className="pp-note">
              We will respond to all rights requests within <strong>30 days</strong>. We may ask you to
              verify your identity before processing a request.
            </p>
          </section>

          {/* ── Section 10: Updates ── */}
          <section className="pp-section" id="pp-updates" aria-labelledby="pp-s10-heading">
            <h2 id="pp-s10-heading" className="pp-section__heading">10. Policy Updates</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices,
              technology, legal requirements, or other factors. When we make changes:
            </p>
            <ul className="pp-list">
              <li>We will update the <strong>&ldquo;Last Updated&rdquo;</strong> date at the top of this page.</li>
              <li>For significant changes, we may notify you by email (if you have provided one) or by displaying a prominent notice on our website.</li>
              <li>Continued use of our Service after an update constitutes your acceptance of the revised policy.</li>
            </ul>
            <p>
              We encourage you to review this page periodically. The current version is always
              available at{' '}
              <a href={`${WEBSITE_URL}/privacy-policy`} target="_blank" rel="noopener noreferrer">
                {WEBSITE_URL}/privacy-policy
              </a>.
            </p>
          </section>

          {/* ── Section 11: Contact ── */}
          <section className="pp-section pp-section--last" id="pp-contact" aria-labelledby="pp-s11-heading">
            <h2 id="pp-s11-heading" className="pp-section__heading">11. Contact Us</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or
              our data practices, please contact us:
            </p>
            <div className="pp-contact-box">
              <div className="pp-contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true"><path d="M4 4h16v16H4V4Z" /><path d="m22 6-10 7L2 6" /></svg>
                <div>
                  <strong>Email</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="pp-contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                <div>
                  <strong>Address</strong>
                  <span>Kausar Park, Naregaon, Aurangabad (Chhatrapati Sambhajinagar), Maharashtra, India</span>
                </div>
              </div>
              <div className="pp-contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l2 2" /></svg>
                <div>
                  <strong>Response Time</strong>
                  <span>We aim to respond to all privacy-related enquiries within 7 business days.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Footer bottom */}
          <div className="pp-page-footer">
            <span>&copy; {new Date().getFullYear()} Eduverse Academy. All rights reserved.</span>
            <Link to="/">← Back to Homepage</Link>
          </div>

        </div>
      </main>
    </div>
  )
}

export default PrivacyPolicy
