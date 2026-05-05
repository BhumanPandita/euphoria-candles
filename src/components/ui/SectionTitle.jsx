export default function SectionTitle({ eyebrow, heading, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl text-brown-deep leading-tight">{heading}</h2>
      <div className={`mt-5 h-px w-16 bg-gold ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
