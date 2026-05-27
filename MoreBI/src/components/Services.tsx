import SectionHeading from './SectionHeading'

type Accent = 'violet' | 'amber'

type Service = Readonly<{
  code: string
  title: string
  description: string
  accent: Accent
  badge?: string
  icon: JSX.Element
}>

function Icon({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  )
}

const SERVICES: ReadonlyArray<Service> = [
  {
    code: 'S/01', accent: 'violet',
    title: 'Desarrollo a medida',
    description: 'Aplicaciones web, backend, frontend, APIs y plataformas empresariales desde MVPs hasta sistemas complejos.',
    icon: <Icon><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></Icon>,
  },
  {
    code: 'S/02', accent: 'amber',
    title: 'Business Intelligence',
    description: 'Tableros de control, métricas operativas y reportes ejecutivos para decisiones basadas en datos.',
    icon: <Icon><path d="M3 3v18h18" /><path d="M7 14l4-4 4 4 5-6" /></Icon>,
  },
  {
    code: 'S/03', accent: 'violet',
    title: 'Integración de sistemas',
    description: 'Conectamos ERPs, CRMs, sistemas legacy y servicios externos mediante APIs REST y microservicios.',
    icon: <Icon><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></Icon>,
  },
  {
    code: 'S/04', accent: 'violet',
    title: 'Automatización de procesos',
    description: 'Reportes, cargas masivas, validaciones y procesos batch para liberar capacidad operativa.',
    icon: <Icon><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 17h7M17 14v7" /></Icon>,
  },
  {
    code: 'S/05', accent: 'amber',
    title: 'Cloud & DevOps',
    description: 'Infraestructura cloud-ready en AWS, Docker, CI/CD y gestión de ambientes productivos.',
    icon: <Icon><path d="M17.5 19a4.5 4.5 0 1 0-1.4-8.78A6 6 0 0 0 4.6 12.2 3.8 3.8 0 0 0 6.5 19h11z" /></Icon>,
  },
  {
    code: 'S/06', accent: 'amber',
    badge: 'Nuevo',
    title: 'Zero Trust con Cloudflare',
    description: 'Arquitecturas Zero Trust con cloudflared: acceso sin VPN, políticas de identidad y perímetro por software.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    code: 'S/07', accent: 'violet',
    badge: 'Nuevo',
    title: 'SAST con SonarQube',
    description: 'Análisis estático, detección de vulnerabilidades y reportes de calidad de código integrados en pipelines.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M4 22 Q8 10 12 8 Q18 6 22 14" />
        <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    code: 'S/08', accent: 'amber',
    title: 'Cámaras, IoT y ESL',
    description: 'Afluencia y control de acceso con Hikvision y Dahua. Gestión de etiquetas electrónicas (ESL) para retail.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" />
      </svg>
    ),
  },
]

const ACCENT_BAR: Record<Accent, string> = {
  violet: 'bg-violet',
  amber:  'bg-amber',
}

const BADGE_STYLE: Record<Accent, string> = {
  violet: 'border-violet/50 bg-violet/10 text-violet-200',
  amber:  'border-amber/50 bg-amber/10 text-amber',
}

const CODE_STYLE: Record<Accent, string> = {
  violet: 'text-violet-200',
  amber:  'text-amber',
}

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-page">

        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="01"
            eyebrow="Qué hacemos"
            title="Servicios que mueven la operación"
            highlight="la operación"
            description="Cubrimos el ciclo completo: diagnóstico, desarrollo, cloud, seguridad y analítica."
          />
          <a href="#contacto" className="btn-secondary shrink-0">
            Empezar un proyecto
          </a>
        </div>

        {/* 8 cards — 1 col → 2 col → 4 col */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, idx) => (
            <article
              key={s.code}
              className="reveal group flex flex-col border border-line bg-surface-card transition-all duration-200 hover:-translate-y-1 hover:border-line-strong"
              style={{
                borderRadius: '0.5rem',
                boxShadow: '4px 4px 0 0 #2d2838',
                transitionDelay: `${idx * 40}ms`,
              }}
            >
              {/* accent top stripe */}
              <span className={`h-[3px] w-full shrink-0 ${ACCENT_BAR[s.accent]}`} style={{ borderRadius: '0.5rem 0.5rem 0 0' }} aria-hidden="true" />

              <div className="flex flex-1 flex-col p-5">
                {/* icon + code row */}
                <div className="flex items-start justify-between gap-2">
                  <div
                    className="grid h-10 w-10 place-items-center border border-line bg-surface text-ink-dim transition-colors group-hover:border-violet-200/50 group-hover:text-violet-200"
                    style={{ borderRadius: '0.25rem' }}
                  >
                    {s.icon}
                  </div>
                  <div className="flex items-center gap-1.5">
                    {s.badge && (
                      <span
                        className={`border px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest ${BADGE_STYLE[s.accent]}`}
                        style={{ borderRadius: '0.25rem' }}
                      >
                        {s.badge}
                      </span>
                    )}
                    <span className={`font-mono text-[11px] font-bold ${CODE_STYLE[s.accent]}`}>
                      {s.code}
                    </span>
                  </div>
                </div>

                {/* title */}
                <h3 className="mt-4 font-display text-[15px] font-bold leading-snug text-ink">
                  {s.title}
                </h3>

                {/* description */}
                <p className="mt-2 flex-1 text-[13px] leading-relaxed text-ink-dim">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
