import { Star } from 'lucide-react'
import { customerReviews } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

function TestimonialsSection() {
  return (
    <section
      className="testimonials section-pad"
      id="testimonios"
      aria-labelledby="testimonials-title"
    >
      <div className="page-width">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Palabras que florecen"
          title="Lo cuentan mejor que nosotros."
        />
        <div className="review-grid">
          {customerReviews.map(({ name, text, location }) => (
            <figure className="review-card" key={name}>
              <div className="review-card__stars" aria-label="5 de 5 estrellas">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <blockquote>“{text}”</blockquote>
              <figcaption>
                <span className="review-card__initial" aria-hidden="true">
                  {name.charAt(0)}
                </span>
                <span>
                  <strong>{name}</strong>
                  <small>{location}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
