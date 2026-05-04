const base = 'inline-block font-sans text-xs tracking-widest uppercase transition-all duration-200 px-6 py-3 rounded-sm'

const variantClasses = {
  solid: 'bg-brown-deep text-cream hover:bg-gold',
  outline: 'border border-gold text-gold hover:bg-gold hover:text-cream',
  gold: 'bg-gold text-cream hover:bg-brown-deep',
}

export function buttonClasses(variant = 'solid', className = '') {
  return `${base} ${variantClasses[variant] ?? variantClasses.solid} ${className}`
}

export default function Button({ children, variant = 'solid', onClick, type = 'button', disabled = false, className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${buttonClasses(variant, className)} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  )
}
