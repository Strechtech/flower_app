import { farmValues } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

function AboutSection() {
  return (
    <section className="about section-pad" id="nosotros" aria-labelledby="about-title">
      <div className="about__grid page-width">
        <div className="about__story">
          <SectionHeading
            id="about-title"
            eyebrow="Nuestra finca"
            title="Raíces profundas. Flores extraordinarias."
            description="Desde 1985, tres generaciones han cuidado cada etapa del cultivo para que la belleza de nuestras rosas llegue intacta a tus manos."
            align="left"
          />
          <div className="about__values">
            {farmValues.map(({ value, label }) => (
              <div className="about__value" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <figure className="about__portrait">
          <img src="/assets/bg_final.jpg" alt="Rosas cultivadas en nuestra finca" loading="lazy" />
          <figcaption>
            <span>De nuestra tierra</span>
            <span>con cariño, para ti.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default AboutSection
