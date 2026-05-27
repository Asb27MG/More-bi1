import SectionHeading from './SectionHeading'

type Project = Readonly<{
  code: string
  title: string
  description: string
  tags: ReadonlyArray<string>
  metric: Readonly<{ label: string; value: string }>
}>

const PROJECTS: ReadonlyArray<Project> = [
  {
    code: 'PRJ-01',
    title: 'Dashboard de afluencia con cámaras IP',
    description: 'Sistema para visualizar entradas, salidas, ocupación y métricas operativas integrando cámaras IP y VMS.',
    tags: ['BI', 'Cámaras IP', 'VMS', 'IoT'],
    metric: { label: 'eventos/día', value: '1.2M' },
  },
  {
    code: 'PRJ-02',
    title: 'Plataforma de autoenrolamiento y ESL',
    description: 'Aplicación web para registro, validación biométrica, control de acceso y gestión de etiquetas electrónicas (ESL) en retail.',
    tags: ['Web app', 'Biometría', 'ESL', 'Cámaras IP'],
    metric: { label: 'usuarios', value: '50k+' },
  },
  {
    code: 'PRJ-03',
    title: 'Automatización con SAST y reportes',
    description: 'Procesos batch con validación automática de calidad de código vía SonarQube y reportes SAST integrados al pipeline de CI/CD.',
    tags: ['Batch', 'SonarQube', 'SAST', 'CI/CD'],
    metric: { label: 'horas/mes', value: '320h' },
  },
  {
    code: 'PRJ-04',
    title: 'API Gateway con Zero Trust Cloudflare',
    description: 'Capa centralizada para exponer servicios con acceso seguro Zero Trust mediante cloudflared, políticas de identidad y tunelado sin VPN.',
    tags: ['APIs', 'Zero Trust', 'Cloudflare', 'cloudflared'],
    metric: { label: 'req/s', value: '8k' },
  },
]

export default function Portfolio() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          index="07"
          eyebrow="Portfolio"
          title="Proyectos que podemos construir"
          highlight="construir"
          description="Ejemplos representativos del tipo de soluciones que entregamos en More BI."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, idx) => (
            <article
              key={p.code}
              className="reveal card-neo group"
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="t-mono text-violet-200">{p.code}</span>
                <span className="chip-amber">Caso tipo</span>
              </div>
              <h3 className="t-h3 mt-5 text-[18px] sm:text-[20px]">{p.title}</h3>
              <p className="mt-3 t-body">{p.description}</p>
              <div className="mt-6 grid grid-cols-[1fr_auto] items-end gap-4 border-t border-line pt-5">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <div className="text-right">
                  <div className="t-mono text-ink-mute">{p.metric.label}</div>
                  <div className="mt-1 font-mono text-[18px] font-bold text-amber">{p.metric.value}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
