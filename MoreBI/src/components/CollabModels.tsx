import SectionHeading from './SectionHeading'

type Model = Readonly<{
  code: string
  name: string
  tagline: string
  description: string
  ideal: string
  includes: ReadonlyArray<string>
  tone: 'violet' | 'amber' | 'line'
  featured?: boolean
}>

const MODELS: ReadonlyArray<Model> = [
  {
    code: 'MOD/01',
    name: 'Proyecto cerrado',
    tagline: 'Alcance fijo · Precio fijo',
    description: 'Definimos juntos el alcance, los entregables y el plazo. Ideal cuando el problema está claro y se necesita ejecución precisa.',
    ideal: 'MVPs, módulos específicos, integraciones puntuales',
    includes: ['Análisis y diseño', 'Desarrollo completo', 'Testing y QA', 'Despliegue inicial'],
    tone: 'line',
  },
  {
    code: 'MOD/02',
    name: 'Equipo dedicado',
    tagline: 'Squad completo · Velocidad máxima',
    description: 'Un squad multidisciplinario trabaja exclusivamente en tu producto: PM, Tech Lead, devs, QA y DevOps integrados en tu operación.',
    ideal: 'Productos en crecimiento, startups, plataformas complejas',
    includes: ['PM + Tech Lead', '2–4 Devs + QA', 'DevOps / infra', 'Reportes semanales'],
    tone: 'violet',
    featured: true,
  },
  {
    code: 'MOD/03',
    name: 'Staff Augmentation',
    tagline: 'Talento puntual · Integración directa',
    description: 'Sumamos ingenieros senior a tu equipo existente. Trabajan bajo tu metodología, en tus repos y con tu stack.',
    ideal: 'Empresas con equipo propio que necesitan capacidad extra',
    includes: ['Perfiles senior', 'Integración directa', 'Onboarding en 48h', 'Cobertura por rol'],
    tone: 'amber',
  },
]

const TONE_STYLES: Record<Model['tone'], { header: string; check: string; badge: string }> = {
  violet: {
    header: 'border-violet bg-violet text-white',
    check: 'border-violet bg-violet text-white',
    badge: 'border-violet/50 bg-violet/10 text-violet-200',
  },
  amber: {
    header: 'border-amber/60 bg-amber/10 text-amber',
    check: 'border-amber bg-amber text-surface',
    badge: 'border-amber/40 bg-amber/10 text-amber',
  },
  line: {
    header: 'border-line-variant bg-surface-low text-ink',
    check: 'border-line-variant bg-surface-low text-violet-200',
    badge: 'border-line-variant bg-surface-low text-ink-dim',
  },
}

export default function CollabModels() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="02b"
            eyebrow="Cómo trabajamos con vos"
            title="Modelos de colaboración"
            highlight="colaboración"
            description="Tres formas de trabajar juntos, adaptadas al tamaño, madurez y velocidad que tu empresa necesita."
          />
          <a href="#contacto" className="btn-secondary shrink-0">
            Consultar modelo ideal
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MODELS.map((m, idx) => {
            const tone = TONE_STYLES[m.tone]
            return (
              <article
                key={m.code}
                className="reveal relative flex flex-col border border-line bg-surface-card transition-all duration-200"
                style={{
                  borderRadius: '0.5rem',
                  boxShadow: m.featured ? '6px 6px 0 0 #4169e1' : '4px 4px 0 0 #2d2838',
                  transitionDelay: `${idx * 80}ms`,
                }}
              >
                {m.featured && (
                  <div className="absolute -top-3 left-6 border border-violet bg-violet px-3 py-0.5 text-[11px] font-bold uppercase tracking-widest text-white" style={{ borderRadius: '0.25rem' }}>
                    Más popular
                  </div>
                )}

                <div className="border-b border-line p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="t-mono text-ink-mute">{m.code}</span>
                      <h3 className="mt-1 font-display text-[22px] font-bold leading-tight text-ink">{m.name}</h3>
                    </div>
                    <span className={`border px-2.5 py-1 t-mono ${tone.badge}`} style={{ borderRadius: '0.25rem' }}>
                      {m.tone === 'violet' ? '★' : m.tone === 'amber' ? '◆' : '●'}
                    </span>
                  </div>
                  <p className="mt-1 t-mono text-ink-mute">{m.tagline}</p>
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <p className="t-body text-[15px]">{m.description}</p>

                  <div className="border border-line bg-surface-low p-4" style={{ borderRadius: '0.25rem' }}>
                    <span className="t-mono text-ink-mute">ideal para:</span>
                    <p className="mt-1 text-[13px] font-medium text-ink-dim">{m.ideal}</p>
                  </div>

                  <ul className="grid gap-2">
                    {m.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-3">
                        <span
                          className={`grid h-6 w-6 shrink-0 place-items-center border-2 ${tone.check}`}
                          style={{ borderRadius: '0.25rem' }}
                          aria-hidden="true"
                        >
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-[14px] font-medium text-ink-dim">{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    <a href="#contacto" className={m.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                      Consultar este modelo
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Kickoff timeline strip */}
        <div
          className="reveal mt-10 border border-line bg-surface-card p-6 sm:p-8"
          style={{ borderRadius: '0.5rem', boxShadow: '4px 4px 0 0 #2d2838' }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-0">
            <div className="shrink-0 lg:w-48">
              <span className="t-mono text-ink-mute">onboarding</span>
              <div className="mt-1 text-[18px] font-bold text-ink">Kickoff en 7 días</div>
            </div>
            <div className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:gap-0">
              {[
                { day: 'Día 0', label: 'Discovery call' },
                { day: 'Día 2', label: 'Alineación técnica' },
                { day: 'Día 5', label: 'Propuesta + roadmap' },
                { day: 'Día 7', label: 'Sprint 0 activo' },
              ].map((step, idx, arr) => (
                <div key={step.day} className="flex flex-1 items-center gap-0 lg:flex-col lg:text-center">
                  <div className="flex flex-1 flex-col lg:items-center">
                    <span className="t-mono text-violet-200">{step.day}</span>
                    <span className="mt-0.5 text-[13px] font-bold text-ink">{step.label}</span>
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="mx-4 h-px flex-1 bg-line-variant lg:hidden" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
