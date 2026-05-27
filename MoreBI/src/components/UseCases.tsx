type UseCase = Readonly<{
  code: string
  title: string
  description: string
}>

const USE_CASES: ReadonlyArray<UseCase> = [
  { code: '01', title: 'Retail', description: 'Afluencia, ESL, conversión y dashboards para tiendas.' },
  { code: '02', title: 'Educación', description: 'Enrolamiento, validación y control de acceso institucional.' },
  { code: '03', title: 'Seguridad', description: 'Hikvision, Dahua, HikCentral y acceso Zero Trust.' },
  { code: '04', title: 'Telco', description: 'APIs, batch, microservicios y reportes SAST.' },
  { code: '05', title: 'Industria', description: 'Automatización, monitoreo IoT y trazabilidad.' },
  { code: '06', title: 'Finanzas', description: 'Reportes, conciliaciones e integración de datos.' },
]

export default function UseCases() {
  return (
    <div className="border-y border-line bg-surface-card">
      <div className="container-page">
        <div className="flex flex-wrap items-stretch divide-x divide-line">
          <div className="flex items-center px-5 py-5 sm:px-8 sm:py-6">
            <span className="t-mono whitespace-nowrap text-ink-mute">industrias:</span>
          </div>
          {USE_CASES.map((uc) => (
            <div
              key={uc.code}
              className="group flex flex-1 flex-col px-5 py-5 transition-colors hover:bg-surface-low sm:px-6 sm:py-6"
            >
              <div className="flex items-center gap-2">
                <span className="t-mono text-violet-200">{uc.code}</span>
                <span className="text-[14px] font-bold text-ink">{uc.title}</span>
              </div>
              <p className="mt-1 text-[12px] leading-snug text-ink-mute">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
