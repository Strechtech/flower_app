import SiteHeader from './features/landing/components/SiteHeader.jsx'
import HeroSection from './features/landing/components/HeroSection.jsx'
import AboutSection from './features/landing/components/AboutSection.jsx'
import ProductsSection from './features/landing/components/ProductsSection.jsx'
import ServicesSection from './features/landing/components/ServicesSection.jsx'
import TestimonialsSection from './features/landing/components/TestimonialsSection.jsx'
import ContactSection from './features/landing/components/ContactSection.jsx'
import SiteFooter from './features/landing/components/SiteFooter.jsx'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

export default App
