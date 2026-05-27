type Props = Readonly<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  highlight?: string
  index?: string
}>

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  highlight,
  index,
}: Props) {
  const alignment =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left'

  const renderTitle = () => {
    if (!highlight) return title
    const parts = title.split(highlight)
    return parts.flatMap((part, idx) =>
      idx < parts.length - 1
        ? [
            part,
            <span key={`${highlight}-${part.length}-${idx}`} className="text-violet-200 underline-brutal">
              {highlight}
            </span>,
          ]
        : [part]
    )
  }

  return (
    <div className={`reveal flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        {index && (
          <span className="t-mono border border-line bg-surface-card px-2 py-1 text-violet-200" style={{ borderRadius: '0.25rem' }}>
            {index}
          </span>
        )}
        {eyebrow && <span className="t-eyebrow">{eyebrow}</span>}
      </div>
      <h2 className="t-h2 sm:text-[36px] lg:text-[44px]">{renderTitle()}</h2>
      {description && <p className="t-body max-w-2xl">{description}</p>}
    </div>
  )
}
