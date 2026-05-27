import ParticleField from './ParticleField'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pb-12 pt-24"
    >
      <div className="absolute inset-0 grid-lines" aria-hidden="true" />
      <div className="absolute inset-0 scanline opacity-50" aria-hidden="true" />
      <ParticleField spacing={40} />

      {/* Corner accents — brutalist structural decoration */}
      <span className="pointer-events-none absolute left-4 top-20 h-20 w-px bg-gradient-to-b from-violet to-transparent opacity-60 sm:left-8 lg:left-16" aria-hidden="true" />
      <span className="pointer-events-none absolute left-4 top-20 h-px w-20 bg-gradient-to-r from-violet to-transparent opacity-60 sm:left-8 lg:left-16" aria-hidden="true" />
      <span className="pointer-events-none absolute right-4 top-20 h-20 w-px bg-gradient-to-b from-amber to-transparent opacity-60 sm:right-8 lg:right-16" aria-hidden="true" />
      <span className="pointer-events-none absolute right-4 top-20 h-px w-20 bg-gradient-to-l from-amber to-transparent opacity-60 sm:right-8 lg:right-16" aria-hidden="true" />

      <div className="container-page relative z-10 flex flex-col items-center text-center">

        {/* Eyebrow — company brand */}
        <div className="mb-10 inline-flex items-center gap-3 border border-line bg-surface-card/80 px-4 py-2 backdrop-blur"
          style={{ borderRadius: '9999px' }}
        >
          <span className="block h-1.5 w-1.5 bg-violet" style={{ borderRadius: '9999px' }} aria-hidden="true" />
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.28em] text-ink sm:text-[13px]">
            More BI
          </span>
          <span className="h-3 w-px bg-line-variant" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-ink-mute sm:text-[12px]">
            Software Factory
          </span>
        </div>

        {/* Main headline — viewport-dominant */}
        <h1
          className="reveal text-[clamp(40px,7.5vw,92px)] font-extrabold leading-[1.0] tracking-[-0.04em] text-ink"
          style={{ maxWidth: '13ch' }}
        >
          <span>{'Software que '}</span>
          <span className="relative inline-block text-blue-200">
            <span>escala</span>
            <span
              className="pointer-events-none absolute -bottom-2 left-0 h-[5px] w-full bg-blue"
              aria-hidden="true"
            />
          </span>
          <span>{' tu operación.'}</span>
        </h1>

        <p className="reveal mx-auto mt-8 max-w-2xl text-[clamp(16px,1.6vw,20px)] leading-[1.6] text-ink-dim">
          Desarrollo a medida, BI, integraciones y cloud para empresas que necesitan
          decisiones en datos reales — no en planillas del viernes.
        </p>

        <div className="reveal mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <a href="#contacto" className="btn-primary w-full sm:w-auto">
            Solicitar una consultoría
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
              <path d="M5 12h14" /><path d="m13 5 7 7-7 7" />
            </svg>
          </a>
          <a href="#ia-demo" className="btn-secondary w-full sm:w-auto">
            Probar Demo IA
          </a>
          <a href="#servicios" className="btn-secondary w-full sm:w-auto">
            Ver servicios
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="reveal mt-16 flex flex-col items-center gap-2 sm:mt-20">
          <span className="t-mono text-ink-mute">scroll</span>
          <span className="flex h-8 w-5 items-start justify-center border border-line-variant pt-1.5" style={{ borderRadius: '9999px' }}>
            <span className="h-2 w-px animate-bounce bg-violet" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  )
}
