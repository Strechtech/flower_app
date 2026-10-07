import { Flower2 } from 'lucide-react'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner page-width">
        <a className="brand brand--footer" href="#inicio">
          <span className="brand__mark" aria-hidden="true">
            <Flower2 size={23} strokeWidth={1.5} />
          </span>
          <span className="brand__name">
            <span>Ever Green</span>
            <small>Rose Farm · Ecuador</small>
          </span>
        </a>
        <p>Flores con origen, cultivadas con intención.</p>
        <small>© {new Date().getFullYear()} Ever Green Rose Farm</small>
      </div>
    </footer>
  )
}

export default SiteFooter
