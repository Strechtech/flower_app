import React, { useState, useEffect } from 'react';
import { Heart, Flower, Star, Phone, Mail, MapPin, Menu, X, Sparkles, Award, Truck, Clock, Shield } from 'lucide-react';

const RosaLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rosaVarieties = [
    { name: "Rosas Rojas Clásicas", description: "Símbolo eterno de amor y pasión.", price: "$15.99", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop", gradient: "from-red-500 to-rose-600" },
    { name: "Rosas Blancas Premium", description: "Elegancia pura para bodas.", price: "$18.99", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop", gradient: "from-gray-100 to-white" },
    { name: "Rosas Rosadas Delicadas", description: "Ternura y gratitud en cada pétalo.", price: "$16.99", image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=300&fit=crop", gradient: "from-pink-400 to-rose-500" },
    { name: "Rosas Amarillas Radiantes", description: "Alegría y amistad.", price: "$14.99", image: "https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=400&h=300&fit=crop", gradient: "from-yellow-400 to-orange-500" },

    { name: "Rosas Naranjas Vibrantes", description: "Energía y entusiasmo.", price: "$17.99", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop", gradient: "from-orange-400 to-red-500" },
    { name: "Rosas Lavanda Encantadoras", description: "Misterio y sofisticación.", price: "$19.99", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop", gradient: "from-purple-400 to-indigo-500" },
    { name: "Rosas Bicolor Exóticas", description: "Belleza única con combinaciones sorprendentes.", price: "$20.99", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop", gradient: "from-pink-500 to-yellow-500" },
    { name: "Rosas Verdes Naturales", description: "Frescura y originalidad.", price: "$22.99", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=300&fit=crop", gradient: "from-green-400 to-teal-500" }
  ];

  const services = [
    { title: "Arreglos Personalizados", description: "Composiciones únicas para cada ocasión especial.", icon: Sparkles, color: "from-purple-400 to-pink-500" },
    { title: "Entrega a Domicilio", description: "Frescura garantizada directa a tu puerta.", icon: Truck, color: "from-green-400 to-emerald-500" },
    { title: "Eventos Especiales", description: "Decoración completa para celebraciones memorables.", icon: Award, color: "from-blue-400 to-indigo-500" },
    { title: "Cuidado Expert", description: "Consejos profesionales para mantener la frescura.", icon: Shield, color: "from-rose-400 to-pink-500" }
  ];

  const testimonials = [
    { name: "María González", text: "Las rosas más hermosas que he visto. Perfectas para mi boda.", rating: 5, location: "Guayaquil" },
    { name: "Carlos Mendoza", text: "Excelente servicio y calidad excepcional. Muy recomendado.", rating: 5, location: "Samborondón" },
    { name: "Ana Rodríguez", text: "Siempre frescos y con el mejor aroma. Mi florería favorita.", rating: 5, location: "Quito" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const FloatingElement = ({ children, delay = 0 }) => (
    <div className={`animate-bounce`} style={{ animationDelay: `${delay}s`, animationDuration: '3s' }}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-green-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-green-500 p-3 rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-300">
              <Flower className="text-white w-8 h-8" />
            </div>
            <div>
              <span className="font-serif text-2xl bg-gradient-to-r from-rose-600 to-green-600 bg-clip-text text-transparent font-bold">
                Ever Green Rose Farm
              </span>
              <p className="text-xs text-gray-500 font-medium">Cultivando belleza desde 1985</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['inicio', 'nosotros', 'productos', 'servicios', 'testimonios', 'contacto'].map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} 
                className="text-gray-700 hover:text-rose-600 font-medium transition-all capitalize relative group py-2">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-rose-500 to-green-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
              </button>
            ))}
          </div>

          <button className="md:hidden text-rose-600 p-3 rounded-xl hover:bg-rose-50 transition-all" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-rose-100 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['inicio', 'nosotros', 'productos', 'servicios', 'testimonios', 'contacto'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} 
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 capitalize rounded-xl transition-all">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
<section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  <div className="absolute inset-0"></div>
  <img 
    src="../src/assets/bg_roses.jpg" 
    alt="Beautiful rose garden background" 
    className="absolute inset-0 w-full h-full object-cover"
    style={{ transform: `translateY(${scrollY * 0.5}px)` }}
  />
  {/* Overlay para reducir contraste */}
  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <FloatingElement delay={0}>
            <div className="absolute top-32 left-16 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          </FloatingElement>
          <FloatingElement delay={1}>
            <div className="absolute top-48 right-24 w-32 h-32 bg-rose-300/20 rounded-full blur-2xl"></div>
          </FloatingElement>
          <FloatingElement delay={2}>
            <div className="absolute bottom-32 left-32 w-20 h-20 bg-green-300/20 rounded-full blur-xl"></div>
          </FloatingElement>
        </div>
      
        <div className="relative z-10 text-center text-white px-4 max-w-6xl">
          <div className="mb-8">
          </div>
            <Sparkles className="w-20 h-20 mx-auto mb-6 animate-pulse text-[#ffffff]" />
          <h1 className="font-serif text-7xl md:text-9xl mb-8 leading-tight drop-shadow-2xl bg-gradient-to-r from-white bg-clip-text ">
            Ever Green Rose Farm
          </h1>
          <p className="text-2xl md:text-4xl mb-12 font-light max-w-4xl mx-auto drop-shadow-xl opacity-95 leading-relaxed">
            Donde cada rosa cuenta una historia de amor, belleza y tradición familiar
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button onClick={() => scrollToSection('productos')}
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-12 py-6 rounded-full text-xl font-bold hover:from-rose-600 hover:to-pink-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-rose-500/25">
              Descubre Nuestras Rosas ✨
            </button>
            <button onClick={() => scrollToSection('contacto')}
              className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-12 py-6 rounded-full text-xl font-bold hover:bg-white/30 transform hover:scale-110 transition-all duration-300 shadow-2xl">
              Contáctanos 💐
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-32 bg-gradient-to-br from-white via-rose-50/30 to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-100/20 to-green-100/20"></div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center relative">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-rose-600 font-semibold text-lg tracking-wider uppercase">Nuestra Historia</span>
              <h2 className="font-serif text-6xl bg-gradient-to-r from-rose-600 via-pink-600 to-green-600 bg-clip-text text-transparent leading-tight">
                Tres Generaciones de Excelencia
              </h2>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Desde 1985, Ever Green Rose Farm ha sido sinónimo de calidad y tradición. 
              Tres generaciones perfeccionando el arte de cultivar rosas que transmiten emociones profundas y momentos inolvidables.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { num: "38+", text: "Años de Experiencia", color: "from-rose-600 to-pink-600", icon: "🏆" },
                { num: "50k+", text: "Clientes Satisfechos", color: "from-green-600 to-emerald-600", icon: "❤️" },
                { num: "25+", text: "Variedades de Rosas", color: "from-pink-600 to-rose-600", icon: "🌹" }
              ].map((stat, i) => (
                <div key={i} className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>{stat.num}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-rose-100 via-pink-50 to-green-100 rounded-3xl p-12 text-center shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50">
              <div className="text-9xl mb-8 animate-bounce">🌹</div>
              <h3 className="font-serif text-4xl bg-gradient-to-r from-rose-600 to-green-600 bg-clip-text text-transparent mb-6">
                Tradición Familiar
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Cada rosa lleva el amor y dedicación de tres generaciones comprometidas con la excelencia y la belleza natural.
              </p>
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-rose-200/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-200/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-32 bg-gradient-to-br from-gray-50 to-rose-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-rose-600 font-semibold text-lg tracking-wider uppercase mb-4 block">Nuestras Rosas</span>
            <h2 className="font-serif text-6xl bg-gradient-to-r from-rose-600 to-green-600 bg-clip-text text-transparent mb-8 leading-tight">
              Colección Premium
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Cada variedad cuidadosamente seleccionada para máxima calidad, belleza y durabilidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {rosaVarieties.map((rosa, i) => (
              <div key={i} className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden border border-gray-100">
                <div className="relative overflow-hidden">
                  <img src={rosa.image} alt={rosa.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${rosa.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="font-serif text-xl text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">{rosa.name}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{rosa.description}</p>
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent mb-6">{rosa.price}</div>
                  <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-2xl hover:from-rose-600 hover:to-pink-600 transition-all font-semibold shadow-lg hover:shadow-rose-500/25 transform hover:scale-105">
                    Ver Detalles
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
            <h3 className="font-serif text-4xl bg-gradient-to-r from-rose-600 to-green-600 bg-clip-text text-transparent mb-12 text-center">
              ¿Por qué elegir nuestras rosas?
            </h3>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Star, title: "Calidad Premium", text: "Seleccionamos solo las mejores rosas con estándares de calidad internacional.", color: "from-yellow-400 to-orange-500" },
                { icon: Heart, title: "Cultivadas con Amor", text: "Cuidado personal y atención detallada desde la siembra hasta la entrega.", color: "from-rose-400 to-pink-500" },
                { icon: Flower, title: "Variedades Únicas", text: "Especies raras y exclusivas que no encontrarás en otros lugares.", color: "from-green-400 to-emerald-500" }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className={`bg-gradient-to-br ${item.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-4 text-xl">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-green-50/30"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-24">
            <span className="text-rose-600 font-semibold text-lg tracking-wider uppercase mb-4 block">Nuestros Servicios</span>
            <h2 className="font-serif text-6xl bg-gradient-to-r from-rose-600 to-green-600 bg-clip-text text-transparent mb-8 leading-tight">
              Experiencias Inolvidables
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">Más que vender rosas, creamos momentos mágicos y recuerdos duraderos</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {services.map((service, i) => (
              <div key={i} className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-rose-200">
                <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-green-500 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 to-green-600/20"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-5xl mb-8">¿Tienes una ocasión especial?</h3>
                <p className="text-xl mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
                  Permítenos ayudarte a crear el arreglo perfecto para tu momento único e irrepetible
                </p>
                <button onClick={() => scrollToSection('contacto')}
                  className="bg-white text-rose-600 px-12 py-5 rounded-full font-bold text-lg hover:bg-rose-50 transition-all shadow-xl hover:scale-105 transform">
                  Consulta Personalizada ✨
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-32 bg-gradient-to-br from-rose-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-rose-600 font-semibold text-lg tracking-wider uppercase mb-4 block">Testimonios</span>
            <h2 className="font-serif text-6xl bg-gradient-to-r from-rose-600 to-green-600 bg-clip-text text-transparent mb-8">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 bg-gradient-to-br from-white to-rose-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="text-rose-600 font-semibold text-lg tracking-wider uppercase mb-4 block">Contacto</span>
            <h2 className="font-serif text-6xl bg-gradient-to-r from-rose-600 to-green-600 bg-clip-text text-transparent mb-8">
              Conectemos
            </h2>
            <p className="text-xl text-gray-700">Estamos aquí para ayudarte a encontrar las rosas perfectas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="space-y-8">
              <div className="space-y-8">
                {[
                  { icon: Phone, title: "Teléfono", info: "+593 4 123-4567", color: "from-green-400 to-emerald-500" },
                  { icon: Mail, title: "Email", info: "info@evergreensrosefarm.com", color: "from-rose-400 to-pink-500" },
                  { icon: MapPin, title: "Ubicación", info: "Samborondón, Guayas, Ecuador", color: "from-blue-400 to-indigo-500" }
                ].map((contact, i) => (
                  <div key={i} className="flex items-center space-x-6 bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
                    <div className={`bg-gradient-to-br ${contact.color} p-5 rounded-2xl shadow-lg`}>
                      <contact.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-800 text-xl mb-1">{contact.title}</div>
                      <div className="text-gray-700 text-lg">{contact.info}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
                <h4 className="font-serif text-3xl text-gray-800 mb-8 flex items-center">
                  <Clock className="w-8 h-8 text-rose-600 mr-3" />
                  Horarios de Atención
                </h4>
                <div className="space-y-4 text-gray-700">
                  {[
                    { day: "Lunes - Viernes:", time: "8:00 AM - 6:00 PM" },
                    { day: "Sábados:", time: "8:00 AM - 4:00 PM" },
                    { day: "Domingos:", time: "9:00 AM - 2:00 PM" }
                  ].map((schedule, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3">
                      <span className="text-lg">{schedule.day}</span>
                      <span className="font-semibold text-rose-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <h3 className="font-serif text-4xl text-gray-800 mb-10 text-center">Envíanos un Mensaje</h3>
              <div className="space-y-6">
                <input type="text" placeholder="Tu nombre completo"
                  className="w-full p-5 border-2 border-rose-200 rounded-2xl focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-200/50 transition-all text-lg" />
                <input type="email" placeholder="Tu correo electrónico"
                  className="w-full p-5 border-2 border-rose-200 rounded-2xl focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-200/50 transition-all text-lg" />
                <input type="tel" placeholder="Tu número de teléfono"
                  className="w-full p-5 border-2 border-rose-200 rounded-2xl focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-200/50 transition-all text-lg" />
                <textarea placeholder="¿En qué podemos ayudarte? Compártenos los detalles de tu ocasión especial..." rows="5"
                  className="w-full p-5 border-2 border-rose-200 rounded-2xl focus:border-rose-500 focus:outline-none focus:ring-4 focus:ring-rose-200/50 resize-vertical transition-all text-lg"></textarea>
                <button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-5 rounded-2xl hover:from-rose-600 hover:to-pink-600 transition-all font-bold text-xl shadow-xl hover:shadow-rose-500/25 transform hover:scale-105">
                  Enviar Mensaje 💕
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/10 to-green-900/10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="bg-gradient-to-r from-rose-500 to-green-500 p-4 rounded-2xl shadow-xl">
              <Flower className="w-10 h-10 text-white" />
            </div>
            <div className="text-left"></div>
            <div>
              <span className="font-serif text-3xl bg-gradient-to-r from-rose-600 to-green-600 bg-clip-text text-transparent font-bold">
                Ever Green Rose Farm
              </span>
              <p className="text-sm text-gray-300">Cultivando belleza desde 1985</p>
            </div>
          </div>
          <div className="text-gray-400 mb-12">
            <p className="text-sm">© 2023 Ever Green Rose Farm. Todos los derechos reservados.</p>
            <p className="text-xs">Diseñado con amor y pasión por la naturaleza</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Heart className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Flower className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Star className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>   
          </div>
          <div className="mt-12 text-gray-500 text-xs">
            <p>Hecho con ❤️ por [Tu Nombre]</p>
            <p>Inspirado en la belleza de la naturaleza y el amor por las flores</p>
          </div>
        </div>
      </footer>
    </div>
  );    

}
export default RosaLandingPage;