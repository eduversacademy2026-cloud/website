import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './PrivacyPolicy.css'

const LAST_UPDATED   = 'January 15, 2025'
const EFFECTIVE_DATE = 'January 15, 2025'
const CONTACT_EMAIL  = 'eduversacademy2026@gmail.com'
const WEBSITE_URL    = 'https://www.eduverseacademy.in'
const APP_NAME       = 'Eduverse Academy'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy – Eduverse Academy'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="pp-page">

      {/* ── Top bar ── */}
      <header className="pp-topbar">
        <div className="pp-topbar__inner">
          <Link to="/" className="pp-logo" aria-label="Back to Eduverse Academy homepage">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
              width="20" height="20" aria-hidden="true">
              <path d="M3 7l9-4 9 4-9 4-9-4Z" />
              <path d="M7 9.5v5c0 1.4 2.2 3 5 3s5-1.6 5-3v-5" />
              <path d="M21 7v6" />
            </svg>
            <strong>Eduverse Academy</strong>
          </Link>
          <Link to="/" className="pp-back-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              width="16" height="16" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* ── Main ── */}
      <main className="pp-main" id="pp-main" role="main">
        <div className="pp-container">

          {/* ── Title ── */}
          <div className="pp-title-block">
            <h1 className="pp-title">Privacy Policy</h1>
            <div className="pp-meta">
              <span><strong>App / Service:</strong> {APP_NAME}</span>
              <span><strong>Effective Date:</strong> {EFFECTIVE_DATE}</span>
              <span><strong>Last Updated:</strong> {LAST_UPDATED}</span>
            </div>
            <p className="pp-intro">
              This Privacy Policy explains how <strong>Eduverse Academy</strong> (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, stores, shares, and protects
              personal information when you use our website, mobile application, or any related
              services (collectively, the &ldquo;Service&rdquo;) available at{' '}
              <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">{WEBSITE_URL}</a>.
            </p>
            <p className="pp-intro">
              <strong>By using our Service, you agree to the collection and use of information
              as described in this Privacy Policy.</strong> If you do not agree, please do not
              use the Service.
            </p>
          </div>

          {/* ── Table of contents ── */}
          <nav className="pp-toc" aria-label="Table of contents">
            <p className="pp-toc__label">Contents</p>
            <ol className="pp-toc__list">
              <li><a href="#pp-s1">1. Who We Are</a></li>
              <li><a href="#pp-s2">2. Information We Collect</a></li>
              <li><a href="#pp-s3">3. How We Use Your Information</a></li>
              <li><a href="#pp-s4">4. Data Sharing &amp; Disclosure</a></li>
              <li><a href="#pp-s5">5. Data Security</a></li>
              <li><a href="#pp-s6">6. Data Retention</a></li>
              <li><a href="#pp-s7">7. Data Deletion</a></li>
              <li><a href="#pp-s8">8. Children&apos;s Privacy</a></li>
              <li><a href="#pp-s9">9. Your Rights</a></li>
              <li><a href="#pp-s10">10. Third-Party Services</a></li>
              <li><a href="#pp-s11">11. Policy Updates</a></li>
              <li><a href="#pp-s12">12. Contact Us</a></li>
            </ol>
          </nav>

          {/* ══════════════════════════════════════
              1. WHO WE ARE
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s1">
            <h2 className="pp-section__heading">1. Who We Are</h2>
            <p>
              <strong>Eduverse Academy</strong> is an online educational platform that provides
              live and recorded classes for students in Class 1–12, scholarship exam preparation
              (4th &amp; 7th class), JEE / NEET foundations, 10th board exam prep, MPSC / UPSC
              coaching, and language learning courses. Content is delivered in English with
              Hindi / Urdu support.
            </p>
            <div className="pp-infobox">
              <div className="pp-infobox__row">
                <span className="pp-infobox__label">Legal Name</span>
                <span>Eduverse Academy</span>
              </div>
              <div className="pp-infobox__row">
                <span className="pp-infobox__label">Owner</span>
                <span>Ishrat Jabeen Shaikh Rehan</span>
              </div>
              <div className="pp-infobox__row">
                <span className="pp-infobox__label">Address</span>
                <span>Kausar Park, Naregaon, Aurangabad (Chhatrapati Sambhajinagar), Maharashtra – 431001, India</span>
              </div>
              <div className="pp-infobox__row">
                <span className="pp-infobox__label">Email</span>
                <span><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></span>
              </div>
              <div className="pp-infobox__row">
                <span className="pp-infobox__label">Website</span>
                <span><a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">{WEBSITE_URL}</a></span>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              2. INFORMATION WE COLLECT
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s2">
            <h2 className="pp-section__heading">2. Information We Collect</h2>

            <h3 className="pp-section__sub">2.1 Information You Provide to Us</h3>
            <p>
              When you fill out the <strong>enquiry / contact form</strong> on our website or app,
              we collect the following personal information:
            </p>
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Data Type</th>
                  <th>Example</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Full Name</strong></td>
                  <td>Riya Khan</td>
                  <td>To address you and identify your enquiry</td>
                </tr>
                <tr>
                  <td><strong>Phone Number</strong></td>
                  <td>+91 98765 43210</td>
                  <td>To contact you about your course enquiry</td>
                </tr>
                <tr>
                  <td><strong>Email Address</strong></td>
                  <td>riya@example.com</td>
                  <td>To send course details and follow-ups</td>
                </tr>
                <tr>
                  <td><strong>Timestamp</strong></td>
                  <td>2025-01-15 10:30 IST</td>
                  <td>Record when the enquiry was submitted</td>
                </tr>
              </tbody>
            </table>

            <h3 className="pp-section__sub">2.2 Information Collected Automatically</h3>
            <p>
              We do <strong>not</strong> use cookies, tracking pixels, or analytics tools such as
              Google Analytics. We do <strong>not</strong> automatically collect device identifiers,
              advertising IDs, or browsing history through our Service.
            </p>
            <p>
              Our hosting provider (Vercel) may maintain standard server access logs that include
              IP addresses and browser user-agent strings as part of normal operations. We do not
              use these logs to identify or track individual users.
            </p>

            <h3 className="pp-section__sub">2.3 Information We Do NOT Collect</h3>
            <div className="pp-notcollect">
              <div className="pp-notcollect__item">
                <span className="pp-notcollect__no">✗</span>
                <span>Payment card numbers or bank account details</span>
              </div>
              <div className="pp-notcollect__item">
                <span className="pp-notcollect__no">✗</span>
                <span>Government ID numbers (Aadhaar, PAN, Passport)</span>
              </div>
              <div className="pp-notcollect__item">
                <span className="pp-notcollect__no">✗</span>
                <span>Passwords or login credentials</span>
              </div>
              <div className="pp-notcollect__item">
                <span className="pp-notcollect__no">✗</span>
                <span>Precise location / GPS data from your device</span>
              </div>
              <div className="pp-notcollect__item">
                <span className="pp-notcollect__no">✗</span>
                <span>Photos, camera, microphone, or contacts access</span>
              </div>
              <div className="pp-notcollect__item">
                <span className="pp-notcollect__no">✗</span>
                <span>Biometric data or health information</span>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              3. HOW WE USE YOUR INFORMATION
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s3">
            <h2 className="pp-section__heading">3. How We Use Your Information</h2>
            <p>We use your personal information <strong>only</strong> for these purposes:</p>
            <ul className="pp-list">
              <li>
                <strong>Respond to your enquiry</strong> — our team will contact you about the
                course or programme you asked about.
              </li>
              <li>
                <strong>Provide counselling and admission guidance</strong> — to help you choose
                the right learning path and complete enrolment.
              </li>
              <li>
                <strong>Send relevant course information</strong> — class schedules, materials,
                and updates directly related to your enquiry.
              </li>
              <li>
                <strong>Maintain internal records</strong> — to manage student enquiries and
                improve our admissions process.
              </li>
            </ul>
            <div className="pp-highlight pp-highlight--red">
              <strong>We will NEVER:</strong>
              <ul className="pp-list" style={{ marginTop: '8px' }}>
                <li>Sell, rent, or trade your personal data to any third party</li>
                <li>Use your data for targeted advertising or ad profiling</li>
                <li>Share your data with advertisers or data brokers</li>
                <li>Send you unsolicited spam or marketing unrelated to your enquiry</li>
                <li>Use your data for automated decision-making that affects you</li>
              </ul>
            </div>
          </section>

          {/* ══════════════════════════════════════
              4. DATA SHARING & DISCLOSURE
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s4">
            <h2 className="pp-section__heading">4. Data Sharing &amp; Disclosure</h2>
            <p>
              We do <strong>not sell, rent, or trade</strong> your personal information.
              We share your data only in the limited situations below:
            </p>

            <h3 className="pp-section__sub">4.1 Google (Form Data Storage)</h3>
            <p>
              When you submit our contact form, your name, phone number, email, and timestamp
              are transmitted securely to <strong>Google Sheets</strong> via a
              <strong> Google Apps Script</strong> web application. Google acts as a data
              processor on our behalf. Your data is stored in a private Google Sheet accessible
              only to authorised Eduverse Academy team members.
            </p>
            <p>
              Google's handling of this data is governed by the{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>.
            </p>

            <h3 className="pp-section__sub">4.2 Cloudinary (Image Hosting)</h3>
            <p>
              Profile images of our team members and course thumbnails are hosted on
              <strong> Cloudinary</strong>, a cloud image CDN. Cloudinary does <strong>not</strong>
              receive or process any personal data you submit through our forms.
            </p>

            <h3 className="pp-section__sub">4.3 Vercel (Website Hosting)</h3>
            <p>
              Our website is hosted on <strong>Vercel</strong>. Vercel may process standard
              web server request data (IP address, user-agent) as part of serving our website.
              This is governed by{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Vercel's Privacy Policy
              </a>.
            </p>

            <h3 className="pp-section__sub">4.4 Legal Requirements</h3>
            <p>
              We may disclose your information if required by Indian law, a court order, or a
              government authority, or if necessary to protect the rights, property, or safety
              of Eduverse Academy, our students, or others.
            </p>

            <div className="pp-highlight pp-highlight--blue">
              <strong>Summary:</strong> Your personal data is shared with Google (form storage)
              only. It is not shared with any advertiser, social media platform, data broker,
              or other third party.
            </div>
          </section>

          {/* ══════════════════════════════════════
              5. DATA SECURITY
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s5">
            <h2 className="pp-section__heading">5. Data Security</h2>
            <p>We protect your information using the following measures:</p>
            <ul className="pp-list">
              <li>
                <strong>HTTPS Encryption</strong> — all data transmitted between your browser
                or app and our servers is encrypted using TLS / SSL.
              </li>
              <li>
                <strong>Encrypted Transmission to Google</strong> — form data is sent to
                Google's servers over encrypted HTTPS connections.
              </li>
              <li>
                <strong>Restricted Access</strong> — the Google Sheet storing your enquiry
                data is private and accessible only to authorised Eduverse Academy personnel.
              </li>
              <li>
                <strong>No Third-Party Trackers</strong> — we do not embed advertising scripts,
                tracking pixels, or analytics that could expose your data to outside parties.
              </li>
            </ul>
            <p>
              While we implement industry-standard security measures, no system is 100% secure.
              If you believe your data has been compromised, please contact us immediately at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </section>

          {/* ══════════════════════════════════════
              6. DATA RETENTION
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s6">
            <h2 className="pp-section__heading">6. Data Retention</h2>
            <p>
              We retain your personal information (name, phone, email, and submission timestamp)
              for the following periods:
            </p>
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Retention Period</th>
                  <th>Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enquiry form data (name, phone, email)</td>
                  <td>Up to 2 years from submission</td>
                  <td>Active student relationship management</td>
                </tr>
                <tr>
                  <td>Data after deletion request</td>
                  <td>Deleted within 30 days</td>
                  <td>User-requested removal</td>
                </tr>
              </tbody>
            </table>
            <p>
              After the retention period expires, or upon a valid deletion request, your data
              is <strong>permanently deleted</strong> from our Google Sheets database and
              cannot be recovered.
            </p>
          </section>

          {/* ══════════════════════════════════════
              7. DATA DELETION
          ══════════════════════════════════════ */}
          <section className="pp-section pp-section--highlight" id="pp-s7">
            <h2 className="pp-section__heading">7. Data Deletion</h2>
            <p>
              You have the right to request deletion of your personal data at any time,
              at no cost.
            </p>

            <h3 className="pp-section__sub">How to Request Deletion</h3>
            <div className="pp-steps">
              <div className="pp-steps__item">
                <span className="pp-steps__num">1</span>
                <div>
                  Send an email to{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="pp-steps__item">
                <span className="pp-steps__num">2</span>
                <div>
                  Use the subject line: <strong>&ldquo;Data Deletion Request&rdquo;</strong>
                </div>
              </div>
              <div className="pp-steps__item">
                <span className="pp-steps__num">3</span>
                <div>
                  Include the <strong>name, phone number, and email address</strong> you
                  submitted so we can locate your record.
                </div>
              </div>
              <div className="pp-steps__item">
                <span className="pp-steps__num">4</span>
                <div>
                  We will confirm deletion within <strong>30 days</strong> of receiving
                  your request.
                </div>
              </div>
            </div>

            <p>
              Once deleted, all your personally identifiable information will be permanently
              and irreversibly removed from our systems. We may retain a non-identifiable
              deletion log as required by applicable law.
            </p>
          </section>

          {/* ══════════════════════════════════════
              8. CHILDREN'S PRIVACY
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s8">
            <h2 className="pp-section__heading">8. Children&apos;s Privacy</h2>
            <p>
              Eduverse Academy provides educational services to students including children
              under the age of 13.
            </p>
            <div className="pp-highlight pp-highlight--yellow">
              <strong>Important:</strong> We do <strong>not</strong> knowingly collect
              personal information <em>directly from children under 13</em>. Our enquiry
              forms must be completed by a <strong>parent, guardian, or adult student
              (18 years or older)</strong> on behalf of the child.
            </div>
            <ul className="pp-list" style={{ marginTop: '16px' }}>
              <li>
                We do not target advertising at children or build profiles of minors.
              </li>
              <li>
                We do not collect sensitive information such as photos, location, or
                biometric data from any user, including children.
              </li>
              <li>
                If you are a parent or guardian and believe we have inadvertently collected
                personal information from a child under 13 <strong>without your consent</strong>,
                please contact us immediately at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                We will delete it within 7 days.
              </li>
            </ul>
          </section>

          {/* ══════════════════════════════════════
              9. YOUR RIGHTS
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s9">
            <h2 className="pp-section__heading">9. Your Rights</h2>
            <p>
              You have the following rights over your personal data. To exercise any right,
              email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              We will respond within <strong>30 days</strong>.
            </p>
            <div className="pp-rights">
              <div className="pp-rights__item">
                <div className="pp-rights__icon">👁</div>
                <div>
                  <strong>Access</strong>
                  <p>Request a copy of the personal data we hold about you.</p>
                </div>
              </div>
              <div className="pp-rights__item">
                <div className="pp-rights__icon">✏️</div>
                <div>
                  <strong>Correction</strong>
                  <p>Ask us to correct inaccurate or incomplete data.</p>
                </div>
              </div>
              <div className="pp-rights__item">
                <div className="pp-rights__icon">🗑️</div>
                <div>
                  <strong>Deletion</strong>
                  <p>Request permanent deletion of your data (see Section 7).</p>
                </div>
              </div>
              <div className="pp-rights__item">
                <div className="pp-rights__icon">🚫</div>
                <div>
                  <strong>Objection</strong>
                  <p>Object to our use of your data for communications.</p>
                </div>
              </div>
              <div className="pp-rights__item">
                <div className="pp-rights__icon">📦</div>
                <div>
                  <strong>Portability</strong>
                  <p>Receive your data in a structured, machine-readable format.</p>
                </div>
              </div>
              <div className="pp-rights__item">
                <div className="pp-rights__icon">🇮🇳</div>
                <div>
                  <strong>India DPDPA 2023</strong>
                  <p>Rights under India's Digital Personal Data Protection Act, 2023.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════
              10. THIRD-PARTY SERVICES
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s10">
            <h2 className="pp-section__heading">10. Third-Party Services</h2>
            <p>
              Our Service integrates the following third-party services. Each has its own
              privacy policy which governs their handling of data:
            </p>
            <table className="pp-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Purpose</th>
                  <th>Data Shared</th>
                  <th>Privacy Policy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Google Sheets / Apps Script</strong></td>
                  <td>Store enquiry form submissions</td>
                  <td>Name, phone, email, timestamp</td>
                  <td>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                      Google Policy
                    </a>
                  </td>
                </tr>
                <tr>
                  <td><strong>Cloudinary</strong></td>
                  <td>Host team/course images</td>
                  <td>None (static images only)</td>
                  <td>
                    <a href="https://cloudinary.com/privacy" target="_blank" rel="noopener noreferrer">
                      Cloudinary Policy
                    </a>
                  </td>
                </tr>
                <tr>
                  <td><strong>Vercel</strong></td>
                  <td>Website hosting</td>
                  <td>IP address, user-agent (server logs)</td>
                  <td>
                    <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                      Vercel Policy
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              We are <strong>not responsible</strong> for the privacy practices of these
              third-party services. We encourage you to review their privacy policies.
            </p>
            <p>
              Our Service does <strong>not</strong> contain third-party advertisements,
              advertising SDKs, social media tracking pixels, or cross-app tracking of any kind.
            </p>
          </section>

          {/* ══════════════════════════════════════
              11. POLICY UPDATES
          ══════════════════════════════════════ */}
          <section className="pp-section" id="pp-s11">
            <h2 className="pp-section__heading">11. Policy Updates</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or legal
              requirements. When we do:
            </p>
            <ul className="pp-list">
              <li>
                We will update the <strong>&ldquo;Last Updated&rdquo;</strong> date at the
                top of this page.
              </li>
              <li>
                For significant changes, we will notify you by email (if you have provided
                one) or post a notice on our website.
              </li>
              <li>
                Continued use of our Service after the update constitutes acceptance of the
                revised policy.
              </li>
            </ul>
            <p>
              The latest version of this policy is always available at{' '}
              <a href={`${WEBSITE_URL}/privacy-policy`} target="_blank" rel="noopener noreferrer">
                {WEBSITE_URL}/privacy-policy
              </a>.
            </p>
          </section>

          {/* ══════════════════════════════════════
              12. CONTACT US
          ══════════════════════════════════════ */}
          <section className="pp-section pp-section--last" id="pp-s12">
            <h2 className="pp-section__heading">12. Contact Us</h2>
            <p>
              For any questions, requests, or concerns about this Privacy Policy or your
              personal data, please contact us:
            </p>
            <div className="pp-contact">
              <div className="pp-contact__row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  width="18" height="18" aria-hidden="true">
                  <path d="M4 4h16v16H4V4Z"/><path d="m22 6-10 7L2 6"/>
                </svg>
                <div>
                  <strong>Email (Privacy Requests)</strong>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                  <span className="pp-contact__note">
                    Use subject: &ldquo;Privacy Request&rdquo; or &ldquo;Data Deletion Request&rdquo;
                  </span>
                </div>
              </div>
              <div className="pp-contact__row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  width="18" height="18" aria-hidden="true">
                  <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <strong>Postal Address</strong>
                  <span>
                    Eduverse Academy, Kausar Park, Naregaon,<br />
                    Aurangabad (Chhatrapati Sambhajinagar),<br />
                    Maharashtra – 431001, India
                  </span>
                </div>
              </div>
              <div className="pp-contact__row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  width="18" height="18" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v4l2 2"/>
                </svg>
                <div>
                  <strong>Response Time</strong>
                  <span>We respond to all privacy-related requests within <strong>7 business days</strong>.</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── Page footer ── */}
          <div className="pp-footer">
            <span>
              &copy; {new Date().getFullYear()} Eduverse Academy. All rights reserved.
            </span>
            <Link to="/">← Back to Homepage</Link>
          </div>

        </div>
      </main>
    </div>
  )
}
