import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { buttonClasses } from './Button'

const categoryColors = {
  Candles: 'text-gold',
  Wedding: 'text-crimson',
  Corporate: 'text-brown-mid',
  'Return Gifts': 'text-gold',
}

export default function ProductCard({ product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-sm shadow-sm overflow-hidden group"
    >
      <div className="h-64 bg-linen overflow-hidden relative">
        {product.image ? (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brown-deep/0 group-hover:bg-brown-deep/10 transition-colors duration-500" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 opacity-40">
              <div className="w-6 h-14 bg-gold rounded-t-sm" />
              <div className="w-10 h-2 bg-gold rounded-b-sm opacity-50" />
            </div>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className={`font-sans text-xs tracking-widest uppercase mb-1 ${categoryColors[product.category] ?? 'text-brown-light'}`}>
          {product.category}
        </p>
        <h3 className="font-serif text-xl text-brown-deep mb-1">{product.name}</h3>
        <p className="font-sans text-sm text-brown-light mb-1">{product.description}</p>
        <p className="font-sans text-sm font-medium text-brown-mid mb-5">₹ {product.price} · {product.size}</p>
        <Link to="/contact" className={buttonClasses('solid', 'block text-center py-2.5 px-0')}>
          Enquire Now
        </Link>
      </div>
    </motion.div>
  )
}
