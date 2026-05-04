export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm min-w-72 max-w-sm flex-shrink-0">
      <div className="text-gold font-serif text-4xl leading-none mb-4">"</div>
      <p className="font-serif italic text-brown-mid text-base leading-relaxed mb-6">
        {testimonial.quote}
      </p>
      <div className="h-px w-8 bg-gold mb-4" />
      <p className="font-sans text-xs font-medium text-brown-deep tracking-wide">{testimonial.name}</p>
      <p className="font-sans text-xs text-brown-light mt-0.5">{testimonial.occasion}</p>
    </div>
  )
}
