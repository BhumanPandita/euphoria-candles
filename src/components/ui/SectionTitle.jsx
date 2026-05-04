export default function SectionTitle({ eyebrow, heading, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-brown-deep leading-snug">{heading}</h2>
      <div className={`mt-4 h-px w-12 bg-gold ${center ? 'mx-auto' : ''}`} />
    </div>
  )
}
