import { ArrowDown, ArrowUpRight } from 'lucide-react'

function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero__image"
        src="/assets/bg_roses.jpg"
        alt=""
        fetchPriority="high"
      />
      <div className="hero__shade" />
      <div className="hero__content page-width">
        <p className="hero__overline">Cultivamos belleza desde 1985</p>
        <h1 id="hero-title">
          Cada rosa
          <br />
          <em>cuenta algo.</em>
        </h1>
        <p className="hero__intro">
          Flores de nuestra finca, cosechadas con cuidado y preparadas para
          acompañar tus momentos más especiales.
        </p>
        <div className="hero__actions">
          <a className="button button--light" href="#productos">
            Explorar las rosas <ArrowUpRight size={17} />
          </a>
          <a className="hero__text-link" href="#nosotros">
            Conoce nuestra historia <ArrowDown size={15} />
          </a>
        </div>
      </div>
      <p className="hero__side-note" aria-hidden="true">
        CULTIVADAS EN ECUADOR · 00° SUR
      </p>
      <a className="hero__scroll" href="#nosotros" aria-label="Desplazarse a nuestra historia">
        <ArrowDown size={18} />
      </a>
    </section>
  )
}

export default HeroSection
