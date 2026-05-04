import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import SectionTitle from '../components/ui/SectionTitle'
import CategoryCard from '../components/ui/CategoryCard'
import ProductCard from '../components/ui/ProductCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { testimonials } from '../data/testimonials'
import { INSTAGRAM_URL } from '../data/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linen overflow-hidden px-6">
      <div className="absolute left-8 md:left-16 bottom-0 flex gap-3 items-end opacity-20 pointer-events-none">
        <div className="w-4 h-32 bg-gold rounded-t-sm" />
        <div className="w-3 h-20 bg-gold rounded-t-sm" />
        <div className="w-5 h-40 bg-gold rounded-t-sm" />
      </div>
      <div className="absolute right-8 md:right-16 bottom-0 flex gap-3 items-end opacity-20 pointer-events-none">
        <div className="w-5 h-36 bg-gold rounded-t-sm" />
        <div className="w-3 h-24 bg-gold rounded-t-sm" />
        <div className="w-4 h-28 bg-gold rounded-t-sm" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="text-center max-w-2xl z-10"
      >
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6">Handcrafted in India</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brown-deep leading-tight mb-6">
          Light up every<br /><em>special moment</em>
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mb-6" />
        <p className="font-sans text-sm md:text-base text-brown-mid leading-relaxed mb-10">
          Scented soy candles handpoured for weddings,<br className="hidden md:block" />
          corporate gifting & everyday joy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase bg-brown-deep text-cream px-8 py-4 hover:bg-gold transition-colors duration-200">
            Explore Collection
          </Link>
          <Link to="/contact" className="font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-cream transition-colors duration-200">
            Get a Quote
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

function FeaturedCategories() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle eyebrow="What we offer" heading="Made for every occasion" center />
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <CategoryCard category={cat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  const featured = products.filter((p) => p.featured)
  return (
    <section className="py-20 px-6 bg-linen">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle eyebrow="Our favourites" heading="Featured candles" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/shop" className="font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-cream transition-colors duration-200">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

function BrandStory() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle eyebrow="Our story" heading={<>Every candle is<br /><em>poured with intention</em></>} />
          <p className="font-sans text-sm text-brown-mid leading-relaxed mt-6">
            Euphoria Candles was born from a love of warmth, fragrance, and the art of gifting. Each candle is
            handpoured in small batches using natural soy wax and premium fragrance oils — crafted to create
            moments worth remembering.
          </p>
          <p className="font-sans text-sm text-brown-mid leading-relaxed mt-4">
            From intimate wedding favours to thoughtful corporate gifts, we create candles that carry meaning.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 font-sans text-xs tracking-widest uppercase text-gold border-b border-gold pb-0.5 hover:text-brown-deep hover:border-brown-deep transition-colors duration-200"
          >
            Read our story →
          </Link>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-80 bg-linen rounded-sm flex items-center justify-center"
        >
          <div className="flex gap-4 items-end opacity-40">
            <div className="w-8 h-32 bg-gold rounded-t-sm" />
            <div className="w-10 h-44 bg-gold rounded-t-sm" />
            <div className="w-6 h-24 bg-gold rounded-t-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="py-20 px-6 bg-linen overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle eyebrow="Kind words" heading="What our customers say" center />
        </motion.div>
        <div className="flex gap-6 mt-12 overflow-x-auto pb-4 scrollbar-hide">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} className="min-w-72 max-w-sm flex-shrink-0" />
          ))}
        </div>
      </div>
    </section>
  )
}

function InstagramStrip() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle eyebrow="Follow along" heading="@euphoriacandles040" center />
          <p className="font-sans text-sm text-brown-mid mt-4 mb-10">See our latest creations on Instagram</p>
        </motion.div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square bg-linen flex items-center justify-center">
              <div className="w-6 h-10 bg-gold opacity-20 rounded-t-sm" />
            </div>
          ))}
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-cream transition-colors duration-200"
        >
          <Instagram size={14} /> Follow on Instagram
        </a>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <BrandStory />
      <Testimonials />
      <InstagramStrip />
    </div>
  )
}
