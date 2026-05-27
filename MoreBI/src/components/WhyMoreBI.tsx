const REASONS: ReadonlyArray<string> = [
  'Foco en soluciones empresariales',
  'Experiencia en APIs, datos e integraciones',
  'Desarrollo cloud-ready',
  'Automatización de procesos complejos',
  'Escalabilidad, seguridad y mantenibilidad',
  'Acompañamiento técnico en todo el ciclo',
]

export default function WhyMoreBI() {
  return (
    <div className="border-y border-line bg-surface">
      <div className="container-page py-8 sm:py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
          <div className="shrink-0">
            <span className="t-mono text-ink-mute">por qué More BI</span>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-dim">
              Combinamos experiencia técnica con visión de negocio. No desarrollamos software aislado: construimos soluciones que conectan sistemas y mejoran procesos reales.
            </p>
          </div>
          <div className="h-px w-full bg-line-variant lg:h-12 lg:w-px" aria-hidden="true" />
          <ul className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <li key={r} className="flex items-center gap-2.5">
                <span
                  className="grid h-5 w-5 shrink-0 place-items-center border-2 border-violet bg-violet text-white"
                  style={{ borderRadius: '0.25rem' }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-[13px] font-medium text-ink-dim">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
