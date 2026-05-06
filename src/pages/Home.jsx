import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/ui/SectionTitle'
import CategoryCard from '../components/ui/CategoryCard'
import ProductCard from '../components/ui/ProductCard'
import TestimonialCard from '../components/ui/TestimonialCard'
import { categories } from '../data/categories'
import { products } from '../data/products'
import { testimonials } from '../data/testimonials'
import { INSTAGRAM_URL } from '../data/constants'
import { heroBg, brandStoryImage, instagramImages } from '../data/images'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-105"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brown-deep/85 via-brown-deep/50 to-brown-deep/80" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cream to-transparent z-10" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        className="text-center max-w-3xl z-20 relative"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.3em' }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-8"
        >
          Handcrafted in India
        </motion.p>
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-8">
          Light up every<br /><em>special moment</em>
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <p className="font-sans text-sm md:text-base text-blush/90 leading-relaxed mb-12 max-w-xl mx-auto">
          Scented soy candles handpoured for weddings,<br className="hidden md:block" />
          corporate gifting & everyday joy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/shop" className="font-sans text-xs tracking-[0.2em] uppercase bg-gold text-cream px-10 py-4 hover:bg-cream hover:text-crimson transition-all duration-300">
            Explore Collection
          </Link>
          <Link to="/contact" className="font-sans text-xs tracking-[0.2em] uppercase border border-cream/70 text-cream px-10 py-4 hover:bg-cream hover:text-crimson transition-all duration-300">
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
              className="h-full"
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
    <section className="py-24 px-6 bg-brown-deep">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-gold mb-4">Our story</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream leading-tight mb-5">
            Every candle is<br /><em>poured with intention</em>
          </h2>
          <div className="h-px w-16 bg-gold mb-8" />
          <p className="font-sans text-sm text-blush leading-relaxed">
            Euphoria Candles was born from a love of warmth, fragrance, and the art of gifting. Each candle is
            handpoured in small batches using natural soy wax and premium fragrance oils — crafted to create
            moments worth remembering.
          </p>
          <p className="font-sans text-sm text-blush leading-relaxed mt-4">
            From intimate wedding favours to thoughtful corporate gifts, we create candles that carry meaning.
          </p>
          <Link
            to="/about"
            className="inline-block mt-10 font-sans text-xs tracking-[0.2em] uppercase text-gold border-b border-gold pb-0.5 hover:text-cream hover:border-cream transition-colors duration-200"
          >
            Read our story →
          </Link>
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="h-96 rounded-sm overflow-hidden shadow-2xl group"
        >
          <img src={brandStoryImage} alt="Handpoured candles" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
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
            <TestimonialCard key={t.id} testimonial={t} className="min-w-80 max-w-sm flex-shrink-0" />
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
          {instagramImages.map((src, i) => (
            <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="aspect-square overflow-hidden block group">
              <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </a>
          ))}
        </div>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-cream transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg> Follow on Instagram
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
