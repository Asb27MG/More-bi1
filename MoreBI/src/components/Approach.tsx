import SectionHeading from './SectionHeading'

type Pillar = Readonly<{
  number: string
  title: string
  description: string
  tone: 'violet' | 'amber' | 'line'
}>

const PILLARS: ReadonlyArray<Pillar> = [
  {
    number: '01',
    title: 'Arquitectura primero',
    description: 'Antes de desarrollar, analizamos procesos, datos, integraciones, escalabilidad y riesgos técnicos.',
    tone: 'violet',
  },
  {
    number: '02',
    title: 'Desarrollo seguro y escalable',
    description: 'Creamos soluciones pensadas para crecer, mantenerse estables y facilitar la evolución del negocio.',
    tone: 'amber',
  },
  {
    number: '03',
    title: 'Datos accionables',
    description: 'No solo mostramos información: ayudamos a convertir datos en decisiones.',
    tone: 'line',
  },
]

const TONE_NUMBER: Record<Pillar['tone'], string> = {
  violet: 'border-violet bg-violet text-white',
  amber: 'border-amber bg-amber text-surface',
  line: 'border-line-variant bg-surface-low text-violet-200',
}

export default function Approach() {
  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Nuestro enfoque"
          title="Nuestra forma de construir software"
          highlight="construir software"
          description="Un método claro, técnico y orientado a resultados que conecta diseño, ingeniería y operación."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, idx) => (
            <article
              key={p.number}
              className="reveal card-neo"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div
                className={`inline-grid h-14 w-14 place-items-center border-2 font-mono text-[16px] font-bold ${TONE_NUMBER[p.tone]}`}
                style={{ borderRadius: '0.25rem' }}
              >
                {p.number}
              </div>
              <h3 className="t-h3 mt-5 text-[20px]">{p.title}</h3>
              <p className="mt-3 t-body">{p.description}</p>
              <div className="mt-6 border-t border-line pt-4 t-mono text-ink-mute">
                pilar / {p.number}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
