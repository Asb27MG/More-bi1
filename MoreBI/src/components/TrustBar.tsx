type Metric = Readonly<{ value: string; label: string }>
type Sector = Readonly<{ code: string; name: string }>

const METRICS: ReadonlyArray<Metric> = [
  { value: '1.2M+', label: 'Eventos/día procesados' },
  { value: '+200k', label: 'Usuarios servidos' },
  { value: '99.9%', label: 'Uptime productivo' },
]

const SECTORS: ReadonlyArray<Sector> = [
  { code: 'CLI-01', name: 'Retail LATAM' },
  { code: 'CLI-02', name: 'EduGroup' },
  { code: 'CLI-03', name: 'Telco Cono Sur' },
  { code: 'CLI-04', name: 'Seguridad Corp.' },
  { code: 'CLI-05', name: 'Industria Mx' },
  { code: 'CLI-06', name: 'FinTech AR' },
]

export default function TrustBar() {
  return (
    <div className="relative border-y border-line bg-surface-card">
      {/* Metrics strip */}
      <div className="container-page">
        <div className="grid grid-cols-1 divide-y divide-line border-b border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {METRICS.map((m) => (
            <div key={m.label} className="px-5 py-6 sm:px-8">
              <div className="text-[28px] font-extrabold leading-none tracking-[-0.03em] text-ink sm:text-[32px]">
                {m.value}
              </div>
              <div className="mt-1.5 t-mono text-ink-mute">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Client sectors row */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 px-5 py-5 sm:px-8">
          <span className="t-mono text-ink-mute">empresas que confían:</span>
          {SECTORS.map((s) => (
            <span key={s.code} className="inline-flex items-center gap-1.5 border border-line bg-surface-low px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-ink-dim" style={{ borderRadius: '0.25rem' }}>
              <span className="t-mono text-violet-200">{s.code}</span>
              <span className="h-3 w-px bg-line-variant" aria-hidden="true" />
              {s.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
