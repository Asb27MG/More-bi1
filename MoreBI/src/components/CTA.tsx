export default function CTA() {
  return (
    <section id="contacto" className="section">
      <div className="container-page">
        <div
          className="relative overflow-hidden border-2 border-violet bg-surface-card p-10 sm:p-14 lg:p-20"
          style={{ borderRadius: '0.5rem', boxShadow: '10px 10px 0 0 #4169e1' }}
        >
          <div className="pointer-events-none absolute inset-0 grid-dots opacity-50" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 grid-lines opacity-40 lg:block" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="reveal">
              <span className="t-eyebrow">
                <span className="h-1.5 w-1.5 animate-pulse-soft bg-amber" aria-hidden="true" />
                <span>Hablemos</span>
              </span>

              <h2 className="mt-6 t-h1 text-[28px] sm:text-[40px] lg:text-[52px]">
                ¿Tenés un proceso que querés digitalizar,{' '}
                <span className="text-violet-200 underline-brutal">automatizar o escalar</span>
                <span>?</span>
              </h2>

              <p className="mt-5 max-w-xl t-body sm:text-body-lg">
                Hablemos de tu proyecto y evaluemos cómo More BI puede ayudarte a convertir datos, procesos e integraciones en una solución real.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a href="mailto:info@morebi.ai" className="btn-primary">
                  Agendar una reunión
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                    <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
                  </svg>
                </a>
                <a href="#servicios" className="btn-secondary">
                  Ver servicios
                </a>
              </div>
            </div>

            {/* Contact info block */}
            <aside
              className="reveal self-center border border-line bg-surface p-6"
              style={{ borderRadius: '0.5rem' }}
            >
              <div className="t-mono text-ink-mute">contact / direct</div>
              <ul className="mt-4 grid gap-0">
                <li className="border-t border-line py-3.5">
                  <a className="flex items-center justify-between gap-3 text-ink transition hover:text-violet-200" href="mailto:info@morebi.ai">
                    <span className="t-mono text-ink-mute">email</span>
                    <span className="font-bold">info@morebi.ai</span>
                  </a>
                </li>
                <li className="flex items-center justify-between gap-3 border-t border-line py-3.5">
                  <span className="t-mono text-ink-mute">response</span>
                  <span className="flex items-center gap-2 font-bold text-amber">
                    <span className="h-1.5 w-1.5 animate-pulse-soft bg-amber" aria-hidden="true" />
                    <span>{'< 24h'}</span>
                  </span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
