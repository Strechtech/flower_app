import { ArrowUpRight } from 'lucide-react'
import { roseVarieties } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

function ProductsSection() {
  return (
    <section className="products section-pad" id="productos" aria-labelledby="products-title">
      <div className="page-width">
        <SectionHeading
          id="products-title"
          eyebrow="Selección de la finca"
          title="Encuentra tu manera de decirlo."
          description="Rosas frescas, escogidas una a una. Cada variedad tiene su propio lenguaje."
        />
        <div className="product-grid">
          {roseVarieties.map(({ name, description, price, image, tone }) => (
            <article className="product-card" key={name}>
              <a
                className={`product-card__image product-card__image--${tone}`}
                href="#contacto"
                aria-label={`Consultar disponibilidad de ${name}`}
              >
                <img src={image} alt={`Rosas ${name.toLowerCase()}`} loading="lazy" />
                <span className="product-card__arrow" aria-hidden="true">
                  <ArrowUpRight size={19} />
                </span>
              </a>
              <div className="product-card__info">
                <div>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
                <div className="product-card__price">
                  <span>Desde</span>
                  <strong>{price}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="products__note">
          ¿Buscas una variedad especial?{' '}
          <a href="#contacto">Cuéntanos qué tienes en mente.</a>
        </p>
      </div>
    </section>
  )
}

export default ProductsSection
