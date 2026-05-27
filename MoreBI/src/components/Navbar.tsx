import { useEffect, useState } from 'react'
import Logo from './Logo'

const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? 'border-line bg-surface/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between sm:h-[72px]">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-0 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="t-label px-3 py-2 text-[12px] text-ink-dim transition-colors hover:text-violet-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#ia-demo" className="btn-secondary text-[12px]">
            Demo IA
          </a>
          <a href="#contacto" className="btn-primary text-[12px]">
            Agendar consultoría
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
              <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border-2 border-line bg-surface-card text-ink transition hover:border-violet hover:text-violet-200 lg:hidden"
          style={{ borderRadius: '0.25rem' }}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
              <path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="container-page border-t border-line bg-surface pb-6 pt-4">
            <nav aria-label="Móvil" className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="t-label border-t border-line py-4 text-[13px] text-ink-dim transition hover:bg-surface-low hover:text-ink first:border-t-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#ia-demo"
                onClick={() => setOpen(false)}
                className="btn-secondary mt-5 w-full"
              >
                Demo IA
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="btn-primary mt-5 w-full"
              >
                Agendar consultoría
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
