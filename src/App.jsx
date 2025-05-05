import { useState } from 'react'
import './App.css'

function App() {
  const [selectedFlower, setSelectedFlower] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const flowers = [
    {
      id: 1,
      name: "Ramo de Rosas",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&q=80",
      description: "Hermoso ramo de rosas rojas frescas, perfecto para expresar amor y pasión.",
      stock: 10,
      category: "ramos"
    },
    {
      id: 2,
      name: "Girasoles",
      price: 39.99,
      image: "https://scontent.fuio1-2.fna.fbcdn.net/v/t1.6435-9/71727808_885342851849497_5697343417441320960_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=kM1nm8-BwvAQ7kNvwEEH-JB&_nc_oc=AdlDENsUDGsvkHL--H793HQXrPxy3addptQhqrOsdWRG__lyxmlYUXr6PyySJIAmOpMuhEAlfr2sM3OK_k9qRxxc&_nc_zt=23&_nc_ht=scontent.fuio1-2.fna&_nc_gid=AacE6-Td1_pZasHNxaFlkg&oh=00_AfHt3cjSVXVN_DjlEXGOzJbvQTha_x5Co5-E5kJ-UKnd-A&oe=68408B1F",
      description: "Brillantes girasoles para alegrar cualquier espacio y traer la energía del sol a tu hogar.",
      stock: 8,
      category: "individuales"
    },
    {
      id: 3,
      name: "Orquídeas",
      price: 59.99,
      image: "https://la-botanika.com/cdn/shop/articles/PORTADA_-_ORQUIDEAS.jpg?v=1621807238&width=1920",
      description: "Elegantes orquídeas para ocasiones especiales que representan belleza y refinamiento.",
      stock: 5,
      category: "exoticas"
    },
    {
      id: 4,
      name: "Ramo Primaveral",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&q=80",
      description: "Combinación de flores primaverales en tonos pastel para celebrar la temporada.",
      stock: 12,
      category: "ramos",
      featured: true
    },
    {
      id: 5,
      name: "Lirios Blancos",
      price: 42.99,
      image: "https://images.unsplash.com/photo-1469259943454-aa100abba749?auto=format&fit=crop&q=80",
      description: "Lirios blancos que simbolizan pureza y elegancia, ideales para eventos formales.",
      stock: 3,
      category: "individuales"
    },
    {
      id: 6,
      name: "Tulipanes",
      price: 36.99,
      image: "https://static.wixstatic.com/media/e50e1f_88b1222fe8e74ba6bc6393d10c381802~mv2.jpg/v1/fill/w_650,h_750,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e50e1f_88b1222fe8e74ba6bc6393d10c381802~mv2.jpg",
      description: "Coloridos tulipanes, un toque de distinción y alegría para tu hogar u oficina.",
      stock: 15,
      category: "individuales",
      featured: true
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: "María García",
      text: "Las flores de Petal Flow son simplemente espectaculares. Siempre las recomiendo para cualquier ocasión especial.",
      rating: 5
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      text: "Mi esposa quedó encantada con el catálogo de flores. La variedad y calidad es impresionante.",
      rating: 5
    },
    {
      id: 3,
      name: "Laura Martínez",
      text: "Consulté para un evento corporativo y recibí asesoramiento excelente sobre las mejores opciones florales.",
      rating: 4
    }
  ]

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'ramos', name: 'Ramos' },
    { id: 'individuales', name: 'Flores Individuales' },
    { id: 'exoticas', name: 'Exóticas' }
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    alert('¡Gracias por suscribirte! Recibirás nuestro catálogo actualizado y novedades.')
  }

  const handleContactClick = () => {
    alert('Para más información, contáctanos en info@petalflow.com o llama al +34 912 345 678')
  }

  const filteredFlowers = activeCategory === 'all' 
    ? flowers 
    : flowers.filter(flower => flower.category === activeCategory)

  const featuredFlowers = flowers.filter(flower => flower.featured)

  return (
    <div className="flower-landing">
      {/* Navigation */}
      <nav className="main-nav">
        <div className="container">
          <div className="logo">
            <span className="flower-emoji">🌸</span>
            <h1>Petal Flow</h1>
          </div>
          
          <div className="nav-links">
            <a href="#home">Inicio</a>
            <a href="#featured">Destacados</a>
            <a href="#catalog">Catálogo</a>
            <a href="#testimonials">Testimonios</a>
            <a href="#contact">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h2>Flores frescas para cada momento especial</h2>
            <p>
              Descubre nuestra selección de arreglos florales exclusivos para cualquier ocasión.
              Consulta nuestro catálogo y déjanos asesorarte para tu evento perfecto.
            </p>
            <div className="hero-buttons">
              <a href="#catalog" className="btn btn-primary">
                Ver Catálogo
              </a>
              <a href="#contact" className="btn btn-outline">
                Contactar
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1567696153798-9111f9cd3d0d?auto=format&fit=crop&q=80" 
              alt="Flores hermosas"
            />
            <div className="hero-badge">
              <p>Consulta</p>
              <small>Sin compromiso</small>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="featured">
        <div className="container">
          <h2 className="section-title">Nuestros Destacados</h2>
          
          <div className="flower-grid">
            {featuredFlowers.map((flower) => (
              <div key={flower.id} className="flower-card featured-card">
                <div className="flower-image">
                  <img 
                    src={flower.image} 
                    alt={flower.name}
                  />
                  <div className="flower-badge">
                    DESTACADO
                  </div>
                  <div className="quick-view-btn" onClick={() => setSelectedFlower(flower)}>
                    👁️
                  </div>
                </div>
                
                <div className="flower-details">
                  <h3>{flower.name}</h3>
                  <p className="flower-desc">{flower.description}</p>
                  
              
                  <div className="flower-price-action">
                    <p className="price">Desde ${flower.price}</p>
                    <button 
                      onClick={handleContactClick}
                      className="btn btn-primary"
                    >
                      Consultar
                    </button>
                  </div>
                  
                  <div className="availability-indicator">
                    <span className="availability-dot in-stock"></span>
                    <span className="availability-text">
                      Disponible por encargo
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?auto=format&fit=crop&q=80" 
                alt="Nuestra floristería"
              />
            </div>
            <div className="about-text">
              <h2>Sobre Petal Flow</h2>
              <p>
                Desde 2015, nos dedicamos a crear experiencias florales únicas para nuestros clientes. 
                Cada arreglo que diseñamos está cuidadosamente elaborado con las flores más frescas 
                y de la más alta calidad.
              </p>
              <p>
                Nuestro equipo de expertos floristas está capacitado para asesorarte en cualquier 
                evento o celebración, desde bodas y cumpleaños hasta eventos corporativos.
              </p>
              <div className="about-highlights">
                <div className="highlight">
                  <span className="highlight-icon">🌿</span>
                  <h4>Flores Frescas</h4>
                  <p>Seleccionadas diariamente para garantizar su belleza y durabilidad</p>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">💐</span>
                  <h4>Diseño Exclusivo</h4>
                  <p>Creaciones únicas adaptadas a tus necesidades y gustos</p>
                </div>
                <div className="highlight">
                  <span className="highlight-icon">🎨</span>
                  <h4>Asesoramiento Personalizado</h4>
                  <p>Te ayudamos a elegir las flores perfectas para cada ocasión</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="catalog">
        <div className="container">
          <h2 className="section-title">Nuestro Catálogo</h2>
          <p className="catalog-intro">
            Explora nuestra selección de flores y arreglos. Los precios son referenciales y pueden variar según la temporada y disponibilidad.
            Para consultas específicas, no dudes en contactarnos.
          </p>
          
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Product Grid */}
          <div className="flower-grid">
            {filteredFlowers.map((flower) => (
              <div 
                key={flower.id} 
                className="flower-card"
                onClick={() => setSelectedFlower(flower)}
              >
                <div className="flower-image">
                  <img 
                    src={flower.image} 
                    alt={flower.name}
                  />
                </div>
                
                <div className="flower-details">
                  <h3>{flower.name}</h3>
                  <p className="flower-desc">{flower.description}</p>
                  
                  <div className="flower-price-action">
                    <p className="price">Desde ${flower.price}</p>
                    <button 
                      onClick={handleContactClick}
                      className="btn btn-outline"
                    >
                      Más Info
                    </button>
                  </div>
                  
                  <div className="availability-indicator">
                    <span className="availability-dot in-stock"></span>
                    <span className="availability-text">
                      Disponible para consulta
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💒</div>
              <h3>Eventos Especiales</h3>
              <p>Decoración floral para bodas, cumpleaños, aniversarios y otras celebraciones.</p>
              <button onClick={handleContactClick} className="btn btn-outline">Consultar</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🏢</div>
              <h3>Eventos Corporativos</h3>
              <p>Arreglos florales para oficinas, conferencias, inauguraciones y eventos de empresa.</p>
              <button onClick={handleContactClick} className="btn btn-outline">Consultar</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🌱</div>
              <h3>Asesoramiento</h3>
              <p>Servicio de consultoría para seleccionar las flores más adecuadas según la ocasión.</p>
              <button onClick={handleContactClick} className="btn btn-outline">Consultar</button>
            </div>
            
            <div className="service-card">
              <div className="service-icon">🎁</div>
              <h3>Detalles Personalizados</h3>
              <p>Creación de arreglos florales personalizados para regalos y ocasiones especiales.</p>
              <button onClick={handleContactClick} className="btn btn-outline">Consultar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {selectedFlower && (
        <div className="modal-backdrop" onClick={() => setSelectedFlower(null)}>
          <div className="flower-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedFlower(null)}>✕</button>
            
            <div className="modal-content">
              <div className="modal-image">
                <img src={selectedFlower.image} alt={selectedFlower.name} />
              </div>
              
              <div className="modal-details">
                <h3>{selectedFlower.name}</h3>
                <p className="modal-price">Desde ${selectedFlower.price}</p>
                <p className="modal-description">{selectedFlower.description}</p>
                
                <div className="modal-info">
                  <div className="info-item">
                    <h4>Categoría</h4>
                    <p>{categories.find(cat => cat.id === selectedFlower.category)?.name || 'General'}</p>
                  </div>
                  
                  <div className="info-item">
                    <h4>Disponibilidad</h4>
                    <p>Por encargo</p>
                  </div>
                  
                  <div className="info-item">
                    <h4>Tiempo de preparación</h4>
                    <p>24-48 horas</p>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <button onClick={handleContactClick} className="btn btn-primary">
                    Solicitar Información
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contáctanos</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Dirección</h3>
                  <p>Av. de las Flores 123, Madrid</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h3>Teléfono</h3>
                  <p>+34 912 345 678</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h3>Email</h3>
                  <p>info@petalflow.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h3>Horario</h3>
                  <p>Lunes a Viernes: 9:00 - 19:00</p>
                  <p>Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <h3>¿Tienes alguna consulta?</h3>
              <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
              
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nombre</label>
                  <input type="text" id="name" placeholder="Tu nombre" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Tu email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input type="tel" id="phone" placeholder="Tu teléfono" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mensaje</label>
                  <textarea id="message" placeholder="¿En qué podemos ayudarte?" rows="4" required></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Enviar Consulta</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>¿Quieres conocer más sobre nuestras flores?</h2>
          <p>Suscríbete para recibir nuestro catálogo digital y estar al día de las novedades florales de temporada.</p>
          
          <form className="subscribe-form" onSubmit={handleSubscribe}>
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              required
            />
            <button 
              type="submit" 
              className="btn btn-light"
            >
              Solicitar Catálogo
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Petal Flow</h3>
              <p>Llevando belleza natural a tu hogar desde 2015.</p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📱</a>
                <a href="#" aria-label="Instagram">📸</a>
                <a href="#" aria-label="Pinterest">🔖</a>
              </div>
            </div>
            
            <div className="footer-col">
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Sobre Nosotros</a></li>
                <li><a href="#catalog">Catálogo</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Servicios</h3>
              <ul>
                <li>Eventos Especiales</li>
                <li>Eventos Corporativos</li>
                <li>Asesoramiento Floral</li>
                <li>Arreglos Personalizados</li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Horario de Atención</h3>
              <ul>
                <li>Lunes a Viernes: 9:00 - 19:00</li>
                <li>Sábados: 10:00 - 14:00</li>
                <li>Domingos: Cerrado</li>
              </ul>
            </div>
          </div>
          
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Petal Flow. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App