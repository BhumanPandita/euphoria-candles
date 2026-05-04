export default function Button({ children, variant = 'solid', onClick, type = 'button', className = '' }) {
  const base = 'inline-block font-sans text-xs tracking-widest uppercase transition-all duration-200 px-6 py-3 rounded-sm'
  const variants = {
    solid: 'bg-brown-deep text-cream hover:bg-gold',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-cream',
    gold: 'bg-gold text-cream hover:bg-brown-deep',
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  )
}
