type IconProps = Readonly<{ className?: string }>

// ── Frontend ─────────────────────────────────────────────────────────────
export function ReactIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <circle cx="14" cy="14" r="2.5" fill="currentColor" stroke="none" />
      <ellipse cx="14" cy="14" rx="12" ry="4.5" />
      <ellipse cx="14" cy="14" rx="12" ry="4.5" transform="rotate(60 14 14)" />
      <ellipse cx="14" cy="14" rx="12" ry="4.5" transform="rotate(120 14 14)" />
    </svg>
  )
}

export function TypeScriptIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="currentColor" aria-hidden="true">
      <rect x="3" y="3" width="22" height="22" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="5.5" y="20.5" fontSize="11.5" fontWeight="800" fontFamily="Geist Mono,monospace" letterSpacing="-0.5">TS</text>
    </svg>
  )
}

export function TailwindIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10c1.5-4 4.5-5.5 7-4C13 7.5 13 10 15 11.5c2 1.5 4.5 1.5 6 0" />
      <path d="M4 17c1.5-4 4.5-5.5 7-4 2 1.5 2 4 4 5.5 2 1.5 4.5 1.5 6 0" />
    </svg>
  )
}

export function ShadcnIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="9" height="9" />
      <rect x="15" y="4" width="9" height="9" />
      <rect x="4" y="15" width="9" height="9" />
      <circle cx="19.5" cy="19.5" r="4.5" />
    </svg>
  )
}

export function RechartsIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 24V10" />
      <path d="M4 24h20" />
      <rect x="7" y="14" width="4" height="10" fill="currentColor" stroke="none" opacity="0.5" />
      <rect x="13" y="9" width="4" height="15" fill="currentColor" stroke="none" opacity="0.8" />
      <rect x="19" y="12" width="4" height="12" fill="currentColor" stroke="none" opacity="0.5" />
    </svg>
  )
}

// ── Backend ───────────────────────────────────────────────────────────────
export function NodeIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="14,3 25,9 25,21 14,27 3,21 3,9" />
      <path d="M10 18V10l8 8V10" />
    </svg>
  )
}

export function NestIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 22c-3-2-5-5.5-5-9a11 11 0 0 1 22 0c0 3.5-2 7-5 9" />
      <path d="M14 4v10" />
      <path d="M10 14l4-10 4 10" />
      <path d="M8 22l6 2 6-2" />
    </svg>
  )
}

export function PythonIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3C9 3 7 5 7 8v3h7v1H5c-2 0-4 1.5-4 5s2 5 4 5h2v-3c0-2 1.5-4 4-4h6c2 0 3-1 3-3V8c0-3-2-5-6-5z" />
      <path d="M14 25c5 0 7-2 7-5v-3h-7v-1h9c2 0 4-1.5 4-5" />
      <circle cx="11" cy="7" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="21" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function FastApiIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="14" cy="14" r="11" />
      <path d="M15 4l-7 13h7l-1 7 7-13h-7z" fill="currentColor" stroke="none" opacity="0.7" />
    </svg>
  )
}

// ── Cloud & DevOps ────────────────────────────────────────────────────────
export function AwsIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 14a8 8 0 0 1 16 0" />
      <path d="M4 19h20" />
      <path d="M7 19v2" /><path d="M14 19v2" /><path d="M21 19v2" />
      <path d="M10.5 14l3.5-5 3.5 5" />
      <path d="M9 14h10" />
    </svg>
  )
}

export function DockerIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="12" width="4" height="3" />
      <rect x="8" y="12" width="4" height="3" />
      <rect x="13" y="12" width="4" height="3" />
      <rect x="8" y="8" width="4" height="3" />
      <rect x="13" y="8" width="4" height="3" />
      <rect x="13" y="4" width="4" height="3" />
      <path d="M2 15.5 Q4 20 10 19 Q20 18 26 12" />
      <circle cx="23" cy="10" r="1.5" />
      <path d="M22 10 Q20 7 18 8" />
    </svg>
  )
}

export function GithubActionsIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="14" cy="14" r="11" />
      <path d="M10 18V10l8 4z" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  )
}

export function CloudflareIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19h18" />
      <path d="M7 19a5 5 0 0 1-.5-10A7 7 0 0 1 21 13a4 4 0 0 1-3 6" />
      <path d="M18 7l2-3" /><path d="M22 9l-3 1" /><path d="M21 13l2 1" />
    </svg>
  )
}

export function SonarQubeIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M4 22 Q8 10 14 8 Q20 6 24 14" />
      <path d="M4 18 Q8 9 14 8 Q22 7 24 18" />
      <circle cx="14" cy="8" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function CiCdIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="14" r="3" />
      <circle cx="22" cy="14" r="3" />
      <path d="M9 14h10" />
      <path d="M18 10l4 4-4 4" />
    </svg>
  )
}

// ── Data & BI ─────────────────────────────────────────────────────────────
export function SqlIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="14" cy="7" rx="9" ry="3.5" />
      <path d="M5 7v5c0 2 4 3.5 9 3.5s9-1.5 9-3.5V7" />
      <path d="M5 12v5c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-5" />
      <path d="M5 17v3c0 2 4 3.5 9 3.5s9-1.5 9-3.5v-3" />
    </svg>
  )
}

export function DashboardIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="10" height="10" />
      <rect x="15" y="3" width="10" height="10" />
      <rect x="3" y="15" width="10" height="10" />
      <path d="M15 20h10" /><path d="M15 23h7" />
    </svg>
  )
}

export function PipelineIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="10" width="6" height="8" />
      <rect x="11" y="7" width="6" height="14" />
      <rect x="19" y="5" width="6" height="16" />
      <path d="M3 24h22" />
    </svg>
  )
}

// ── Databases ─────────────────────────────────────────────────────────────
export function PostgresIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 4c3 0 7 1.5 7 5 0 2-1 3-2 3.5L23 22c0 1-1 2-2 2s-2-.5-2-2v-5" />
      <path d="M9 24c-4 0-6-3-6-7V8c0-2 2-4 6-4s6 2 6 4v9c0 4-2 7-6 7z" />
      <path d="M3 11h12" />
    </svg>
  )
}

export function OracleIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <ellipse cx="14" cy="14" rx="11" ry="7" />
      <text x="9" y="18.5" fontSize="10" fontWeight="800" fontFamily="Geist Mono,monospace" fill="currentColor" stroke="none">DB</text>
    </svg>
  )
}

export function DynamoDbIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3l10 5v12l-10 5L4 20V8z" />
      <path d="M14 3v24" /><path d="M4 8l10 5 10-5" />
    </svg>
  )
}

export function RedisIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="14" cy="8" rx="10" ry="3.5" />
      <path d="M4 8v4c0 2 4.5 3.5 10 3.5S24 14 24 12V8" />
      <path d="M4 12v4c0 2 4.5 3.5 10 3.5S24 18 24 16v-4" />
      <path d="M4 16v4c0 2 4.5 3.5 10 3.5S24 22 24 20v-4" />
    </svg>
  )
}

// ── Integrations ──────────────────────────────────────────────────────────
export function RestApiIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 8L3 14l5 6" />
      <path d="M20 8l5 6-5 6" />
      <path d="M16 5l-4 18" />
    </svg>
  )
}

export function IpCameraIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="2" y="6" width="14" height="16" rx="1" />
      <circle cx="9" cy="14" r="3" />
    </svg>
  )
}

export function OnvifIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M23 10l-7 4 7 4V10z" />
      <rect x="2" y="8" width="14" height="12" />
      <path d="M7 14h4" /><path d="M9 11v6" />
      <circle cx="22" cy="7" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function VmsIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" />
      <rect x="17" y="3" width="8" height="8" />
      <rect x="3" y="17" width="8" height="8" />
      <rect x="17" y="17" width="8" height="8" />
      <circle cx="14" cy="14" r="3" fill="currentColor" stroke="none" opacity="0.6" />
    </svg>
  )
}

export function EslIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="6" width="22" height="16" rx="2" />
      <path d="M8 11h12" /><path d="M8 14h8" /><path d="M8 17h5" />
      <circle cx="20" cy="17" r="2.5" fill="currentColor" stroke="none" opacity="0.7" />
      <path d="M19 17l.7.7 1.8-2" stroke="white" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

// ── Security ──────────────────────────────────────────────────────────────
export function ZeroTrustIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 3L4 7v7c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7z" />
      <path d="M10 14l3 3 5-5" />
    </svg>
  )
}

export function SastIcon({ className = 'h-7 w-7' }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4h12l4 4v16H6z" />
      <path d="M18 4v4h4" />
      <path d="M10 12l2 2-2 2" />
      <path d="M14 16h4" />
      <circle cx="21" cy="21" r="4" className="stroke-current" fill="none" strokeWidth="1.7" />
      <path d="M24 24l2.5 2.5" />
    </svg>
  )
}
