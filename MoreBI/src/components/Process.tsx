import SectionHeading from './SectionHeading'

type Step = Readonly<{
  number: string
  title: string
  description: string
}>

const STEPS: ReadonlyArray<Step> = [
  {
    number: '01',
    title: 'Diagnóstico inicial',
    description: 'Entendemos el problema, los sistemas actuales, los datos y los objetivos del negocio.',
  },
  {
    number: '02',
    title: 'Diseño de solución',
    description: 'Definimos arquitectura, módulos, integraciones, alcance técnico y roadmap.',
  },
  {
    number: '03',
    title: 'Desarrollo iterativo',
    description: 'Construimos por etapas, validando avances funcionales y técnicos.',
  },
  {
    number: '04',
    title: 'Despliegue y monitoreo',
    description: 'Publicamos la solución en cloud o infraestructura del cliente, aplicando buenas prácticas de operación.',
  },
  {
    number: '05',
    title: 'Soporte y evolución',
    description: 'Acompañamos el crecimiento de la solución con mantenimiento, mejoras y nuevas funcionalidades.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section">
      <div className="container-page">
        <SectionHeading
          index="06"
          eyebrow="Proceso"
          title="Cómo trabajamos"
          highlight="trabajamos"
          description="Un proceso claro y predecible para llevar cada proyecto desde la idea hasta la operación estable."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, idx) => (
            <li
              key={step.number}
              className="reveal relative border border-line bg-surface-card p-6 transition-all duration-200 hover:border-violet hover:bg-surface-low"
              style={{
                borderRadius: '0.5rem',
                boxShadow: '4px 4px 0 0 #2d2838',
                transitionDelay: `${idx * 80}ms`,
              }}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[36px] font-extrabold leading-none text-violet-200">{step.number}</span>
                <span className="t-mono text-ink-mute">step</span>
              </div>
              <div className="mt-6 border-t border-line pt-5">
                <h3 className="t-h3 text-[16px]">{step.title}</h3>
                <p className="mt-2 t-body text-[14px] leading-[1.55]">{step.description}</p>
              </div>
              {idx < STEPS.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-line-variant lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
