import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linen overflow-hidden px-6">
      {/* Candle silhouettes — left */}
      <div className="absolute left-8 md:left-16 bottom-0 flex gap-3 items-end opacity-20 pointer-events-none">
        <div className="w-4 h-32 bg-gold rounded-t-sm" />
        <div className="w-3 h-20 bg-gold rounded-t-sm" />
        <div className="w-5 h-40 bg-gold rounded-t-sm" />
      </div>
      {/* Candle silhouettes — right */}
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
        <p className="font-sans text-xs tracking-widest uppercase text-gold mb-6">
          Handcrafted in India
        </p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-brown-deep leading-tight mb-6">
          Light up every<br /><em>special moment</em>
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mb-6" />
        <p className="font-sans text-sm md:text-base text-brown-mid leading-relaxed mb-10">
          Scented soy candles handpoured for weddings,<br className="hidden md:block" />
          corporate gifting & everyday joy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/shop"
            className="font-sans text-xs tracking-widest uppercase bg-brown-deep text-cream px-8 py-4 hover:bg-gold transition-colors duration-200"
          >
            Explore Collection
          </Link>
          <Link
            to="/contact"
            className="font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-cream transition-colors duration-200"
          >
            Get a Quote
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  )
}
