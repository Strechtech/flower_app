import { useState } from 'react'
import { Flower2, Menu, X } from 'lucide-react'
import { navigationLinks } from '../data/content.js'

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="site-nav page-width" aria-label="Navegación principal">
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Ever Green Rose Farm, inicio">
          <span className="brand__mark" aria-hidden="true">
            <Flower2 size={25} strokeWidth={1.5} />
          </span>
          <span className="brand__name">
            <span>Ever Green</span>
            <small>Rose Farm · Ecuador</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-links"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          className={`site-nav__links${isMenuOpen ? ' site-nav__links--open' : ''}`}
          id="primary-links"
        >
          {navigationLinks.map(({ id, label }) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
