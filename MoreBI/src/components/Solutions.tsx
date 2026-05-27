import SectionHeading from './SectionHeading'

type Solution = Readonly<{
  code: string
  title: string
  description: string
  chips: ReadonlyArray<string>
  accent: 'violet' | 'amber'
}>

const SOLUTIONS: ReadonlyArray<Solution> = [
  {
    code: 'SOL/01',
    title: 'Plataforma de analítica operativa',
    description:
      'Dashboards para visualizar entradas, salidas, ocupación, conversión y métricas clave integrando cámaras Hikvision, Dahua y fuentes de datos operativos.',
    chips: ['Dashboards', 'KPIs', 'Tiempo real', 'Hikvision', 'Dahua'],
    accent: 'violet',
  },
  {
    code: 'SOL/02',
    title: 'Automatización empresarial',
    description: 'Flujos automáticos para reducir tareas manuales, errores operativos y tiempos de ejecución con reportes SAST integrados en pipeline.',
    chips: ['Workflows', 'Batch', 'Validaciones', 'SonarQube'],
    accent: 'amber',
  },
  {
    code: 'SOL/03',
    title: 'Integraciones corporativas y Zero Trust',
    description: 'APIs y conectores para unificar datos entre sistemas internos y externos, con acceso seguro mediante arquitectura Zero Trust sobre Cloudflare.',
    chips: ['REST', 'Cloudflare', 'Zero Trust', 'ESB'],
    accent: 'violet',
  },
  {
    code: 'SOL/04',
    title: 'Sistemas de enrolamiento, acceso y ESL',
    description: 'Registro, validación, biometría, control de acceso con Hikvision/Dahua y gestión de etiquetas electrónicas (ESL) en retail e industria.',
    chips: ['Biometría', 'Dahua', 'Hikvision', 'ESL', 'HikCentral'],
    accent: 'amber',
  },
]

export default function Solutions() {
  return (
    <section id="soluciones" className="section">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Soluciones"
          title="Soluciones que construimos"
          highlight="construimos"
          description="Plataformas listas para escalar, adaptarse y crecer con cada nuevo proceso del negocio."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((s, idx) => (
            <article
              key={s.code}
              className="reveal card-neo group"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className={`t-mono ${s.accent === 'violet' ? 'text-violet-200' : 'text-amber'}`}>{s.code}</span>
                <span
                  className="grid h-10 w-10 place-items-center border-2 border-line-variant bg-surface-low text-ink transition group-hover:border-violet group-hover:bg-violet group-hover:text-white"
                  style={{ borderRadius: '0.25rem' }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                    <path d="M7 17 17 7" /><path d="M7 7h10v10" />
                  </svg>
                </span>
              </div>
              <h3 className="t-h3 mt-5 text-[19px] sm:text-[21px]">{s.title}</h3>
              <p className="mt-3 t-body">{s.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.chips.map((c) => (
                  <span key={c} className={s.accent === 'violet' ? 'chip-violet' : 'chip-amber'}>{c}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
