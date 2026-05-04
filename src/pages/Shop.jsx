import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ui/ProductCard'
import SectionTitle from '../components/ui/SectionTitle'
import { products, categoryFilterList } from '../data/products'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const paramCategory = searchParams.get('category')
  const matchedLabel = categoryFilterList.find(
    (label) => label.toLowerCase().replace(/\s+/g, '-') === paramCategory
  )
  const [active, setActive] = useState(matchedLabel ?? 'All')

  useEffect(() => {
    if (active === 'All') setSearchParams({})
    else setSearchParams({ category: active.toLowerCase().replace(/\s+/g, '-') })
  }, [active, setSearchParams])

  const filtered = active === 'All' ? products : products.filter((p) => p.category === active)

  return (
    <div className="min-h-screen bg-cream">
      {/* Page header */}
      <section className="py-20 px-6 bg-linen text-center">
        <SectionTitle eyebrow="Browse" heading="Our Collection" center />
        <p className="font-sans text-sm text-brown-mid mt-4">
          Handcrafted soy candles for every occasion
        </p>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-40 bg-cream border-b border-blush px-6 py-4">
        <div className="max-w-6xl mx-auto flex gap-6 overflow-x-auto">
          {categoryFilterList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs tracking-widest uppercase whitespace-nowrap pb-1 transition-colors duration-200 ${
                active === cat
                  ? 'text-brown-deep border-b-2 border-gold'
                  : 'text-brown-light hover:text-brown-deep'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div key={product.id} custom={i} variants={fadeUp} initial="hidden" animate="visible">
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center font-sans text-sm text-brown-light py-20">
              No products in this category yet.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}
