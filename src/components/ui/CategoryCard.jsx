import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CategoryCard({ category }) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
      <Link
        to={`/shop?category=${category.id}`}
        className="flex flex-col items-center text-center p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 group"
      >
        <span className="text-4xl mb-4">{category.emoji}</span>
        <h3 className="font-serif text-lg text-brown-deep mb-1 group-hover:text-gold transition-colors duration-200">
          {category.label}
        </h3>
        <p className="font-sans text-xs text-brown-light mb-4 leading-relaxed">{category.description}</p>
        <span className="flex items-center gap-1 font-sans text-xs tracking-widest uppercase text-gold">
          Shop <ArrowRight size={12} />
        </span>
      </Link>
    </motion.div>
  )
}
