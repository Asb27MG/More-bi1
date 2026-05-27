import SectionHeading from './SectionHeading'
import {
  ReactIcon, TypeScriptIcon, TailwindIcon, ShadcnIcon, RechartsIcon,
  NodeIcon, NestIcon, PythonIcon, FastApiIcon,
  AwsIcon, DockerIcon, GithubActionsIcon, CloudflareIcon, SonarQubeIcon, CiCdIcon,
  SqlIcon, DashboardIcon, PipelineIcon,
  PostgresIcon, OracleIcon, DynamoDbIcon, RedisIcon,
  RestApiIcon, HikvisionIcon, DahuaIcon, HikCentralIcon, EslIcon,
  ZeroTrustIcon, SastIcon,
} from './TechIcon'

type Tech = Readonly<{ name: string; icon: JSX.Element }>
type Group = Readonly<{ code: string; label: string; tone: 'violet' | 'amber' | 'neutral'; items: ReadonlyArray<Tech> }>

const GROUPS: ReadonlyArray<Group> = [
  {
    code: '01', label: 'Frontend', tone: 'violet',
    items: [
      { name: 'React', icon: <ReactIcon /> },
      { name: 'TypeScript', icon: <TypeScriptIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
      { name: 'ShadCN', icon: <ShadcnIcon /> },
      { name: 'Recharts', icon: <RechartsIcon /> },
    ],
  },
  {
    code: '02', label: 'Backend', tone: 'neutral',
    items: [
      { name: 'Node.js', icon: <NodeIcon /> },
      { name: 'NestJS', icon: <NestIcon /> },
      { name: 'Python', icon: <PythonIcon /> },
      { name: 'FastAPI', icon: <FastApiIcon /> },
    ],
  },
  {
    code: '03', label: 'Cloud & DevOps', tone: 'violet',
    items: [
      { name: 'AWS', icon: <AwsIcon /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'GitHub Actions', icon: <GithubActionsIcon /> },
      { name: 'Cloudflare', icon: <CloudflareIcon /> },
      { name: 'CI/CD', icon: <CiCdIcon /> },
    ],
  },
  {
    code: '04', label: 'Seguridad', tone: 'amber',
    items: [
      { name: 'Zero Trust', icon: <ZeroTrustIcon /> },
      { name: 'SonarQube', icon: <SonarQubeIcon /> },
      { name: 'SAST/DAST', icon: <SastIcon /> },
    ],
  },
  {
    code: '05', label: 'Data & BI', tone: 'neutral',
    items: [
      { name: 'SQL', icon: <SqlIcon /> },
      { name: 'Dashboards', icon: <DashboardIcon /> },
      { name: 'Pipelines', icon: <PipelineIcon /> },
    ],
  },
  {
    code: '06', label: 'Bases de datos', tone: 'violet',
    items: [
      { name: 'PostgreSQL', icon: <PostgresIcon /> },
      { name: 'Oracle', icon: <OracleIcon /> },
      { name: 'DynamoDB', icon: <DynamoDbIcon /> },
      { name: 'Redis', icon: <RedisIcon /> },
    ],
  },
  {
    code: '07', label: 'Integraciones', tone: 'amber',
    items: [
      { name: 'APIs REST', icon: <RestApiIcon /> },
      { name: 'Hikvision', icon: <HikvisionIcon /> },
      { name: 'Dahua', icon: <DahuaIcon /> },
      { name: 'HikCentral', icon: <HikCentralIcon /> },
      { name: 'ESL / Etiquetas', icon: <EslIcon /> },
    ],
  },
]

const TONE_HEADER: Record<Group['tone'], string> = {
  violet: 'border-violet bg-violet/10 text-violet-200',
  amber:  'border-amber/50 bg-amber/10 text-amber',
  neutral: 'border-line-variant bg-surface-high text-ink-dim',
}

const TONE_ICON_HOVER: Record<Group['tone'], string> = {
  violet: 'group-hover:border-violet group-hover:text-violet-200',
  amber:  'group-hover:border-amber group-hover:text-amber',
  neutral: 'group-hover:border-line-strong group-hover:text-ink',
}

export default function Stack() {
  return (
    <section id="tecnologias" className="section">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            index="05"
            eyebrow="Stack tecnológico"
            title="Tecnologías con las que trabajamos"
            highlight="trabajamos"
            description="Herramientas modernas, probadas en producción, elegidas para construir soluciones robustas, seguras y escalables."
          />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {GROUPS.map((g, gIdx) => (
            <article
              key={g.code}
              className="reveal border border-line bg-surface-card"
              style={{
                borderRadius: '0.5rem',
                boxShadow: '4px 4px 0 0 #2d2838',
                transitionDelay: `${gIdx * 55}ms`,
              }}
            >
              {/* Category header */}
              <div className={`flex items-center justify-between border-b border-line px-5 py-3`}>
                <h3 className="font-display text-[15px] font-bold text-ink">{g.label}</h3>
                <span className={`border px-2 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest ${TONE_HEADER[g.tone]}`} style={{ borderRadius: '0.25rem' }}>
                  {g.code}
                </span>
              </div>

              {/* Icon grid */}
              <div className="grid grid-cols-4 gap-0 p-4 sm:grid-cols-5">
                {g.items.map((tech) => (
                  <div
                    key={tech.name}
                    className={`group flex cursor-default flex-col items-center gap-2 p-3 transition-all duration-150 hover:bg-surface-low`}
                    style={{ borderRadius: '0.25rem' }}
                    title={tech.name}
                  >
                    <span
                      className={`grid h-11 w-11 place-items-center border border-line bg-surface text-ink-dim transition-all duration-150 ${TONE_ICON_HOVER[g.tone]}`}
                      style={{ borderRadius: '0.25rem' }}
                    >
                      {tech.icon}
                    </span>
                    <span
                      className="max-w-[64px] text-center font-mono text-[9px] font-bold uppercase leading-tight tracking-[0.06em] text-ink-mute transition-colors group-hover:text-ink-dim"
                    >
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
