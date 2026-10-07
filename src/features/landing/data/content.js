import {
  Award,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from 'lucide-react'

export const navigationLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'productos', label: 'Rosas' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'testimonios', label: 'Opiniones' },
  { id: 'contacto', label: 'Contacto' },
]

export const roseVarieties = [
  {
    name: 'Rojas clásicas',
    description: 'Un gesto inolvidable, cultivado para durar.',
    price: '$15.99',
    image:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&h=900&fit=crop',
    tone: 'rose',
  },
  {
    name: 'Blancas premium',
    description: 'Elegancia serena para los días importantes.',
    price: '$18.99',
    image:
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=900&fit=crop',
    tone: 'cream',
  },
  {
    name: 'Rosadas delicadas',
    description: 'Ternura y gratitud en cada pétalo.',
    price: '$16.99',
    image:
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&h=900&fit=crop',
    tone: 'pink',
  },
  {
    name: 'Amarillas radiantes',
    description: 'Un ramo luminoso para celebrar la amistad.',
    price: '$14.99',
    image:
      'https://images.unsplash.com/photo-1574684891174-df6b02ab38d7?w=800&h=900&fit=crop',
    tone: 'gold',
  },
]

export const farmServices = [
  {
    title: 'Arreglos a tu medida',
    description: 'Composiciones pensadas para esa persona y ocasión especial.',
    icon: Sparkles,
  },
  {
    title: 'Entrega con cuidado',
    description: 'Llevamos tus flores frescas hasta la puerta de tu casa.',
    icon: Truck,
  },
  {
    title: 'Flores para eventos',
    description: 'Diseñamos ambientes que hacen memorables tus celebraciones.',
    icon: Award,
  },
  {
    title: 'Consejos de cuidado',
    description: 'Te acompañamos para que tus rosas duren más tiempo.',
    icon: ShieldCheck,
  },
]

export const customerReviews = [
  {
    name: 'María González',
    text: 'Las rosas más hermosas que he visto. Perfectas para mi boda.',
    location: 'Guayaquil',
  },
  {
    name: 'Carlos Mendoza',
    text: 'Excelente servicio y calidad excepcional. Muy recomendado.',
    location: 'Samborondón',
  },
  {
    name: 'Ana Rodríguez',
    text: 'Siempre frescas y con el mejor aroma. Mi florería favorita.',
    location: 'Quito',
  },
]

export const contactDetails = [
  {
    label: 'Teléfono',
    value: '+593 4 123-4567',
    href: 'tel:+59341234567',
    icon: Phone,
  },
  {
    label: 'Correo',
    value: 'info@evergreensrosefarm.com',
    href: 'mailto:info@evergreensrosefarm.com',
    icon: Mail,
  },
  {
    label: 'Ubicación',
    value: 'Samborondón, Guayas, Ecuador',
    href: 'https://maps.google.com/?q=Samborondon,Guayas,Ecuador',
    icon: MapPin,
  },
]

export const openingHours = [
  { day: 'Lunes a viernes', hours: '8:00 a. m. – 6:00 p. m.' },
  { day: 'Sábados', hours: '8:00 a. m. – 4:00 p. m.' },
  { day: 'Domingos', hours: '9:00 a. m. – 2:00 p. m.' },
]

export const farmValues = [
  { value: '40+', label: 'años cultivando' },
  { value: '50k+', label: 'clientes felices' },
  { value: '25+', label: 'variedades' },
]
