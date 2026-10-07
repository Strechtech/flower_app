import { createElement } from 'react'
import { farmServices } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

function ServicesSection() {
  return (
    <section className="services section-pad" id="servicios" aria-labelledby="services-title">
      <div className="page-width services__layout">
        <div className="services__intro">
          <SectionHeading
            id="services-title"
            eyebrow="Más que flores"
            title="Cuidamos cada detalle."
            description="Desde el primer boceto hasta la entrega, ponemos nuestra experiencia al servicio de tu ocasión."
            align="left"
          />
          <a className="text-link" href="#contacto">
            Hablemos de tu idea <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="service-list">
          {farmServices.map(({ title, description, icon }) => (
            <article className="service-item" key={title}>
              {createElement(icon, {
                className: 'service-item__icon',
                size: 23,
                strokeWidth: 1.5,
                'aria-hidden': true,
              })}
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
