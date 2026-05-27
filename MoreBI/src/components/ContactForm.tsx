import { useState } from 'react'

type FormState = {
  name: string
  company: string
  type: string
  budget: string
  message: string
}

const PROJECT_TYPES = [
  'Desarrollo de software a medida',
  'Business Intelligence & Dashboards',
  'Integración de sistemas / APIs',
  'Automatización de procesos',
  'Arquitectura Cloud & DevOps',
  'Analítica con cámaras / IoT',
  'Otro',
]

const BUDGET_RANGES = [
  'Menos de $10k USD',
  '$10k – $30k USD',
  '$30k – $80k USD',
  '$80k+ USD',
  'A definir / No sé aún',
]

const CONTACT_LINKS: ReadonlyArray<{ label: string; value: string; href: string }> = [
  { label: 'email', value: 'info@morebi.ai', href: 'mailto:info@morebi.ai' },
  // { label: 'linkedin', value: '/more-bi', href: 'https://www.linkedin.com' },
  // { label: 'github', value: '@morebi', href: 'https://github.com' },
  { label: 'respuesta', value: '< 24h', href: '#' },
]

const EMPTY: FormState = { name: '', company: '', type: '', budget: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [sent, setSent] = useState(false)

  const set = (k: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="section">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:gap-16 xl:gap-24">

          {/* Left — heading + context */}
          <div className="flex flex-col justify-center">
            <span className="t-eyebrow">
              <span className="h-1.5 w-1.5 animate-pulse-soft bg-amber" aria-hidden="true" />
              <span>Contacto</span>
            </span>

            <h2 className="reveal mt-5 text-[clamp(28px,4vw,52px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
              ¿Tenés un proceso que querés{' '}
              <span className="text-violet-200 underline-brutal">digitalizar o escalar</span>
              <span>?</span>
            </h2>

            <p className="reveal mt-5 t-body sm:text-[18px]">
              Contanos tu proyecto y evaluamos cómo More BI puede ayudarte a convertir datos, procesos e integraciones en una solución real.
            </p>

            <ul className="reveal mt-8 flex flex-col border border-line bg-surface-card" style={{ borderRadius: '0.5rem' }}>
              {CONTACT_LINKS.map((c, idx) => (
                <li key={c.label} className={idx > 0 ? 'border-t border-line' : ''}>
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noreferrer noopener' : undefined}
                    className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-surface-low"
                  >
                    <span className="t-mono text-ink-mute">{c.label}</span>
                    <span className="text-[14px] font-bold text-ink">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="reveal mt-6 flex flex-wrap gap-3">
              <span className="chip-violet">NDA disponible</span>
              <span className="chip">Confidencialidad garantizada</span>
              <span className="chip-amber">Respuesta &lt; 24h</span>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal">
            {sent ? (
              <div
                className="flex flex-col items-center justify-center gap-5 border-2 border-violet bg-surface-card p-10 text-center"
                style={{ borderRadius: '0.5rem', boxShadow: '8px 8px 0 0 #4169e1', minHeight: '460px' }}
              >
                <span
                  className="grid h-16 w-16 place-items-center border-2 border-violet bg-violet text-white"
                  style={{ borderRadius: '0.5rem' }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div>
                  <h3 className="t-h3 text-[22px]">¡Mensaje recibido!</h3>
                  <p className="mt-3 t-body">Te respondemos en menos de 24h. Revisá tu email o LinkedIn.</p>
                </div>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setSent(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-line bg-surface-card p-6 sm:p-8"
                style={{ borderRadius: '0.5rem', boxShadow: '6px 6px 0 0 #2d2838' }}
                noValidate
              >
                <h3 className="t-mono text-ink-mute">formulario / contacto</h3>

                <div className="mt-6 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="t-mono mb-1.5 block text-ink-mute" htmlFor="cf-name">
                        nombre *
                      </label>
                      <input
                        id="cf-name"
                        className="input"
                        type="text"
                        placeholder="Tu nombre"
                        value={form.name}
                        onChange={set('name')}
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className="t-mono mb-1.5 block text-ink-mute" htmlFor="cf-company">
                        empresa
                      </label>
                      <input
                        id="cf-company"
                        className="input"
                        type="text"
                        placeholder="Nombre de tu empresa"
                        value={form.company}
                        onChange={set('company')}
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="t-mono mb-1.5 block text-ink-mute" htmlFor="cf-type">
                      tipo de proyecto *
                    </label>
                    <select
                      id="cf-type"
                      className="input"
                      value={form.type}
                      onChange={set('type')}
                      required
                    >
                      <option value="" disabled>Seleccioná una opción</option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="t-mono mb-1.5 block text-ink-mute" htmlFor="cf-budget">
                      presupuesto estimado
                    </label>
                    <select
                      id="cf-budget"
                      className="input"
                      value={form.budget}
                      onChange={set('budget')}
                    >
                      <option value="" disabled>Seleccioná un rango</option>
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="t-mono mb-1.5 block text-ink-mute" htmlFor="cf-message">
                      contanos tu proyecto *
                    </label>
                    <textarea
                      id="cf-message"
                      className="input resize-none"
                      rows={4}
                      placeholder="¿Qué proceso querés digitalizar, automatizar o mejorar?"
                      value={form.message}
                      onChange={set('message')}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary mt-6 w-full">
                  Enviar mensaje
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                    <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
                  </svg>
                </button>

                <p className="mt-4 text-center text-[12px] text-ink-mute">
                  Sin spam. Sin compromiso. Solo una conversación técnica.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
