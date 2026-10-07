import { createElement } from 'react'
import { contactDetails, openingHours } from '../data/content.js'
import SectionHeading from './SectionHeading.jsx'

const contactEmail = 'info@evergreensrosefarm.com'

function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone') || 'No indicado'
    const message = formData.get('message')
    const subject = encodeURIComponent(`Consulta desde la web - ${name}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\n\nMensaje:\n${message}`,
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section-pad" id="contacto" aria-labelledby="contact-title">
      <div className="page-width">
        <SectionHeading
          id="contact-title"
          eyebrow="Estamos para ayudarte"
          title="Hagamos algo hermoso."
          description="Cuéntanos qué estás celebrando y encontraremos las flores adecuadas."
        />
        <div className="contact__grid">
          <div className="contact__details">
            <div className="contact__links">
              {contactDetails.map(({ label, value, href, icon }) => (
                <a className="contact-link" href={href} key={label}>
                  {createElement(icon, { size: 19, strokeWidth: 1.5, 'aria-hidden': true })}
                  <span>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                </a>
              ))}
            </div>
            <div className="hours">
              <h3>Horario de atención</h3>
              {openingHours.map(({ day, hours }) => (
                <p key={day}>
                  <span>{day}</span>
                  <span>{hours}</span>
                </p>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Escríbenos</h3>
            <p>
              El formulario abrirá tu aplicación de correo con el mensaje preparado para enviar.
            </p>
            <label>
              Nombre
              <input autoComplete="name" name="name" required />
            </label>
            <label>
              Correo electrónico
              <input autoComplete="email" name="email" type="email" required />
            </label>
            <label>
              Teléfono <span className="field-optional">(opcional)</span>
              <input autoComplete="tel" name="phone" type="tel" />
            </label>
            <label>
              ¿Cómo podemos ayudarte?
              <textarea name="message" rows="4" required />
            </label>
            <button className="button button--dark" type="submit">
              Preparar correo <span aria-hidden="true">↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
