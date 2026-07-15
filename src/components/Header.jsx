import { useState, useEffect } from 'react'
import { asset } from '../utils/assets'

const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT US', href: '#about', hasDropdown: true },
  { label: 'SERVICES', href: '#services', hasDropdown: true },
  { label: 'SECTORS', href: '#sectors', hasDropdown: true },
  { label: 'BRANDS', href: '#brands', hasDropdown: true },
  { label: 'CONTACT US', href: '#contact' },
]

export default function Header({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen, setMobileMenuOpen])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#home" className="header__logo" onClick={() => setMobileMenuOpen(false)}>
          <img src={asset('images/Logo.png')} alt="ADNH Catering" className="header__logo-img" />
        </a>

        <button
          type="button"
          className={`header__backdrop${mobileMenuOpen ? ' header__backdrop--open' : ''}`}
          aria-label="Close menu"
          tabIndex={mobileMenuOpen ? 0 : -1}
          onClick={() => setMobileMenuOpen(false)}
        />

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`header__link${link.hasDropdown ? ' header__link--dropdown' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
              {link.hasDropdown ? <span className="header__chevron" aria-hidden /> : null}
            </a>
          ))}
          <a
            href="#investor"
            className="header__cta header__cta--mobile btn-navy"
            onClick={() => setMobileMenuOpen(false)}
          >
            Investor Relations
          </a>
        </nav>

        <a href="#investor" className="header__cta header__cta--desktop btn-navy">
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
