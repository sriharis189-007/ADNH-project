import { useState } from 'react'

const EnvelopeIcon = () => (
  <svg className="contact-footer__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="contact-footer__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const ABU_DHABI = {
  city: 'Abu Dhabi',
  address: 'Airport Road, Abu Dhabi National Hotels building (behind Carrefour & next to Department of Health)',
  email: 'sales@adnhc.ae',
  phone: '+971 2 408 7505',
}

const OFFICES = [
  {
    city: 'Saudi Arabia',
    address: 'Petroleum Center, Al Khobar, Al Jawharah District, Prince Sultan Road, PO Box 34431, Kingdom of Saudi Arabia',
    email: 'sales@adnhc.ae',
    phone: '+971 2 408 7505',
  },
  {
    city: 'Dubai',
    address: '4th Floor, JW Marriott Hotel Marina, Dubai Marina.',
    email: 'sales@adnhc.ae',
    phone: '+971 2 408 7505',
  },
]

const FOOTER_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'SECTORS', href: '#sectors' },
  { label: 'CONTACT US', href: '#contact', active: true },
  { label: 'PRIVACY NOTICE', href: '#' },
  { label: 'OSH POLICY', href: '#' },
  { label: 'COOKIE POLICY', href: '#' },
]

function OfficeBlock({ office }) {
  return (
    <div className="contact-footer__office">
      <strong className="contact-footer__office-city">{office.city}</strong>
      <p className="contact-footer__office-address">{office.address}</p>
      {office.email && (
        <a href={`mailto:${office.email}`} className="contact-footer__contact-line">
          <EnvelopeIcon />
          <span>{office.email}</span>
        </a>
      )}
      {office.phone && (
        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="contact-footer__contact-line">
          <PhoneIcon />
          <span>{office.phone}</span>
        </a>
      )}
    </div>
  )
}

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    services: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <footer id="contact" className="contact-footer">
      <div className="contact-footer__main">
        <div className="contact-footer__wave" aria-hidden />
        <div className="container contact-footer__inner">
          <div className="contact-footer__left">
            <h2 className="contact-footer__heading">
              Want to
              <em>reach out?</em>
            </h2>

            <OfficeBlock office={ABU_DHABI} />

            <div className="contact-footer__offices">
              {OFFICES.map((office) => (
                <OfficeBlock key={office.city} office={office} />
              ))}
            </div>
          </div>

          <div className="contact-footer__right">
            <p className="contact-footer__form-intro">
              We&apos;d love to hear from you and it&apos;s as simple as using one of the methods below.
            </p>
            <form className="contact-footer__form" onSubmit={handleSubmit}>
              <div className="contact-footer__row">
                <label className="contact-footer__label">
                  <span className="contact-footer__field-label">First Name *</span>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="contact-footer__label">
                  <span className="contact-footer__field-label">Last Name *</span>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="contact-footer__row">
                <label className="contact-footer__label">
                  <span className="contact-footer__field-label">Email Address *</span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label className="contact-footer__label">
                  <span className="contact-footer__field-label">Mobile Number *</span>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label className="contact-footer__label contact-footer__label--full">
                <span className="contact-footer__field-label">Services *</span>
                <input
                  type="text"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="contact-footer__label contact-footer__label--full">
                <span className="contact-footer__field-label">Your Message to us *</span>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit" className="contact-footer__submit">
                Let&apos;s Talk
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-footer__bottom">
        <div className="container contact-footer__bottom-inner">
          <div className="contact-footer__brand">
            <div className="contact-footer__social">
              <a href="#" className="contact-footer__social-link" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="contact-footer__social-link" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <a href="#home" className="contact-footer__logo">
              <img src="/images/Logo-white.png" alt="ADNH Catering" className="contact-footer__logo-img" />
            </a>
          </div>
          <nav className="contact-footer__links" aria-label="Footer">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`contact-footer__nav-link${link.active ? ' contact-footer__nav-link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="contact-footer__copyright">
          <div className="container contact-footer__copyright-inner">
            <span>© 2026 ADNH Catering PLC. All Rights Reserved.</span>
            <span className="contact-footer__credit">
              Handcrafted by <strong>2Base</strong> Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
