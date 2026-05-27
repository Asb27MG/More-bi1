import { useState } from 'react'
import SectionHeading from './SectionHeading'

type Item = Readonly<{
  q: string
  a: string
}>

const QUESTIONS: ReadonlyArray<Item> = [
  {
    q: '¿Desarrollan software desde cero?',
    a: 'Sí. Diseñamos y desarrollamos soluciones a medida según el proceso, necesidad y madurez tecnológica del cliente.',
  },
  {
    q: '¿Pueden integrarse con sistemas existentes?',
    a: 'Sí. Trabajamos con APIs, bases de datos, servicios externos, sistemas legacy y plataformas empresariales.',
  },
  {
    q: '¿Trabajan con soluciones cloud?',
    a: 'Sí. Podemos diseñar y desplegar soluciones en AWS u otras plataformas cloud según el caso.',
  },
  {
    q: '¿Pueden crear dashboards de negocio?',
    a: 'Sí. Diseñamos tableros para visualizar métricas operativas, comerciales, técnicas o ejecutivas.',
  },
  {
    q: '¿Ofrecen mantenimiento?',
    a: 'Sí. Podemos trabajar por proyecto puntual o mediante soporte evolutivo mensual.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section">
      <div className="container-page">
        <SectionHeading
          index="09"
          eyebrow="FAQ"
          title="Preguntas frecuentes"
          highlight="frecuentes"
          description="Resolvemos las dudas más comunes antes de iniciar un proyecto con nosotros."
          align="center"
        />

        <div
          className="reveal mx-auto mt-12 max-w-3xl border border-line bg-surface-card"
          style={{ borderRadius: '0.5rem', boxShadow: '6px 6px 0 0 #2d2838' }}
        >
          {QUESTIONS.map((item, idx) => {
            const isOpen = open === idx
            return (
              <div
                key={item.q}
                className={idx > 0 ? 'border-t border-line' : ''}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-surface-low sm:px-7"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${idx}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="t-mono text-ink-mute">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="t-h3 text-[16px] sm:text-[18px]">{item.q}</span>
                  </span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center border-2 transition-all duration-150 ${
                      isOpen
                        ? 'border-violet bg-violet text-white'
                        : 'border-line-variant bg-surface-low text-ink'
                    }`}
                    style={{ borderRadius: '0.25rem' }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
                      {isOpen ? <path d="M5 12h14" /> : <><path d="M12 5v14" /><path d="M5 12h14" /></>}
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-${idx}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-line px-5 py-5 t-body sm:px-7">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
