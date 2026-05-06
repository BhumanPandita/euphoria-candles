import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from '../ui/Logo'

const leftLinks = [
  { to: '/about', label: 'About' },
  { to: '/shop', label: 'Shop' },
]
const rightLinks = [
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll() // sync initial state on mount
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `font-sans text-xs tracking-widest uppercase transition-colors duration-200 ${
      isActive ? 'text-crimson' : 'text-brown-mid hover:text-crimson'
    }`

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-cream ${
        scrolled ? 'shadow-sm border-b border-gold/40' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left nav */}
        <nav className="hidden md:flex gap-8">
          {leftLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>

        {/* Logo — center */}
        <Link to="/" className="flex items-center justify-center py-1">
          <Logo size={52} variant="color" />
        </Link>

        {/* Right nav */}
        <nav className="hidden md:flex gap-8 justify-end">
          {rightLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden justify-self-end text-crimson"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-cream border-t border-blush px-6 py-6 flex flex-col gap-5"
        >
          {[...leftLinks, ...rightLinks].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
