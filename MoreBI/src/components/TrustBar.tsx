type Metric = Readonly<{ value: string; label: string }>

const METRICS: ReadonlyArray<Metric> = [
  { value: '1.2M+', label: 'Eventos/día procesados' },
  { value: '+200k', label: 'Usuarios servidos' },
  { value: '99.9%', label: 'Uptime productivo' },
]

export default function TrustBar() {
  return (
    <div className="relative border-y border-line bg-surface-card">
      {/* Metrics strip */}
      <div className="container-page">
        <div className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {METRICS.map((m) => (
            <div key={m.label} className="px-5 py-6 sm:px-8">
              <div className="text-[28px] font-extrabold leading-none tracking-[-0.03em] text-ink sm:text-[32px]">
                {m.value}
              </div>
              <div className="mt-1.5 t-mono text-ink-mute">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
