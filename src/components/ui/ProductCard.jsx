import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonClasses } from './Button'

const categoryColors = {
  Candles: 'text-brown-mid',
  Wedding: 'text-gold',
  Corporate: 'text-brown-light',
  'Return Gifts': 'text-brown-deep',
}

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-sm shadow-sm overflow-hidden group"
    >
      <div className="h-56 bg-linen flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 opacity-40">
            <div className="w-6 h-14 bg-gold rounded-t-sm" />
            <div className="w-10 h-2 bg-gold rounded-b-sm opacity-50" />
          </div>
        )}
      </div>
      <div className="p-5">
        <p className={`font-sans text-xs tracking-widest uppercase mb-1 ${categoryColors[product.category] ?? 'text-brown-light'}`}>
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-brown-deep mb-1">{product.name}</h3>
        <p className="font-sans text-sm text-brown-light mb-4">₹ {product.price} · {product.size}</p>
        <Link to="/contact" className={buttonClasses('solid', 'block text-center py-2.5 px-0')}>
          Enquire Now
        </Link>
      </div>
    </motion.div>
  )
}
