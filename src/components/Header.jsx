import { useState, useEffect } from 'react'
import { asset } from '../utils/assets'

const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about' },
  { label: 'SERVICES', href: '#services' },
  { label: 'SECTORS', href: '#sectors' },
  { label: 'BRANDS', href: '#brands' },
  { label: 'CONTACT US', href: '#contact' },
]

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#home" className="header__logo">
          <img src={asset('images/Logo.png')} alt="ADNH Catering" className="header__logo-img" />
        </a>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header__link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#investor" className="header__cta btn-navy">
          Investor Relations
        </a>

        <button
          type="button"
          className="header__burger"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
