export default function Logo({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <a
      href="#inicio"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="More BI — inicio"
    >
      {/* Icon — circuit-board M, recolored via CSS mask. Swap `background` for white/violet/gradient. */}
      <span
        className="relative block h-10 w-10 shrink-0 overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="absolute left-1/2 top-0 block -translate-x-1/2 transition-transform duration-200 group-hover:scale-105"
          style={{
            width: '54px',
            height: '54px',
            background: 'linear-gradient(135deg, #92b1ff 0%, #4169e1 50%, #20347b 100%)',
            WebkitMaskImage: 'url(/img/logo-morebi.png)',
            maskImage: 'url(/img/logo-morebi.png)',
            WebkitMaskSize: '54px auto',
            maskSize: '54px auto',
            WebkitMaskPosition: 'center top',
            maskPosition: 'center top',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />
      </span>
      <span className="text-[18px] font-extrabold leading-none tracking-[-0.01em]">
        <span className="text-ink">More</span>
        <span className="text-blue-200"> BI</span>
      </span>
    </a>
  )
}
