import Logo from './Logo'

const LINKS: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-line bg-surface">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm t-body text-[14px]">
              Software, datos e integraciones para empresas que necesitan soluciones digitales escalables.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">B2B</span>
              <span className="chip-violet">Engineering</span>
              <span className="chip-amber">Cloud Ready</span>
            </div>
          </div>

          <div>
            <h3 className="t-mono text-ink-mute">Navegación</h3>
            <ul className="mt-4 flex flex-col">
              {LINKS.map((l, idx) => (
                <li key={l.href} className={idx > 0 ? 'border-t border-line' : ''}>
                  <a
                    className="block py-3 text-[14px] font-bold text-ink transition hover:text-violet-200"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="t-mono text-ink-mute">Redes</h3>
            <ul className="mt-4 flex flex-col">
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 py-3 text-[14px] font-bold text-ink transition hover:text-violet-200"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zm-1.5-10.3A1.7 1.7 0 1 1 8.2 7a1.7 1.7 0 0 1-1.7 1.7zM19 19h-3v-4.7c0-1.2 0-2.7-1.7-2.7s-1.9 1.3-1.9 2.6V19h-3v-9h2.9v1.3a3.1 3.1 0 0 1 2.8-1.5c3 0 3.6 2 3.6 4.6z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li className="border-t border-line">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-2 py-3 text-[14px] font-bold text-ink transition hover:text-violet-200"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.2-.8.1-.8.1-.8 1.3.1 2 1.3 2 1.3 1.1 2 3 1.4 3.8 1.1.1-.9.5-1.4.8-1.8-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .5.4.9 1.2.9 2.5v3.7c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li className="border-t border-line">
                <a
                  href="mailto:info@morebi.ai"
                  className="flex items-center gap-2 py-3 text-[14px] font-bold text-ink transition hover:text-violet-200"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  info@morebi.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="t-mono text-ink-mute">© 2026 More BI · Todos los derechos reservados.</p>
          <p className="t-mono text-ink-mute">
            built with <span className="text-violet-200">precision</span> · obsidian-kinetic
          </p>
        </div>
      </div>
    </footer>
  )
}
