import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { categoryImages } from '../../data/images'

export default function CategoryCard({ category }) {
  const imgSrc = categoryImages[category.id]

  return (
    <motion.div whileHover={{ y: -4, scale: 1.02 }} transition={{ duration: 0.3 }} className="h-full">
      <Link
        to={`/shop?category=${category.id}`}
        className="relative flex flex-col justify-end overflow-hidden rounded-sm shadow-md group h-full min-h-[220px]"
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt={category.label}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/90 via-brown-deep/40 to-transparent" />
        <div className="relative z-10 p-5">
          <span className="text-2xl block mb-1">{category.emoji}</span>
          <h3 className="font-serif text-lg text-cream leading-tight mb-1">{category.label}</h3>
          <span className="flex items-center gap-1 font-sans text-xs tracking-widest uppercase text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Shop <ArrowRight size={11} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
