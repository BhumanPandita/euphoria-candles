import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { INSTAGRAM_URL } from '../data/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
}

const placeholders = [
  { id: 1, label: 'Lavender Bliss', tall: true },
  { id: 2, label: 'Rose Amber Jar', tall: false },
  { id: 3, label: 'Mini Bloom Set', tall: false },
  { id: 4, label: 'Sandalwood Luxe', tall: false },
  { id: 5, label: 'Wedding Collection', tall: true },
  { id: 6, label: 'Corporate Gifting', tall: false },
  { id: 7, label: 'Citrus Morning', tall: false },
  { id: 8, label: 'Jasmine Serenade', tall: true },
  { id: 9, label: 'Custom Order', tall: false },
]

export default function Gallery() {
  return (
    <div className="bg-cream min-h-screen">
      <section className="py-20 px-6 bg-linen text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <SectionTitle eyebrow="Our work" heading={<>A glimpse into<br /><em>every creation</em></>} center />
          <p className="font-sans text-sm text-brown-mid mt-4">
            Each photo tells a story. Each candle, a memory.
          </p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`break-inside-avoid bg-linen overflow-hidden group relative ${item.tall ? 'h-72' : 'h-48'}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-2 items-end opacity-25">
                  <div className="w-4 h-12 bg-gold rounded-t-sm" />
                  <div className="w-6 h-16 bg-gold rounded-t-sm" />
                  <div className="w-3 h-9 bg-gold rounded-t-sm" />
                </div>
              </div>
              <div className="absolute inset-0 bg-brown-deep opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-serif text-sm italic text-cream">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
            className="inline-block font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-cream transition-colors duration-200">
            See more on Instagram
          </a>
        </div>
      </section>
    </div>
  )
}
