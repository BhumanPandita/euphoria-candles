import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import { INSTAGRAM_URL } from '../data/constants'
import { galleryImages } from '../data/images'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
}

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
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`break-inside-avoid overflow-hidden group relative ${item.tall ? 'h-72' : 'h-48'}`}
            >
              <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brown-deep opacity-0 group-hover:opacity-55 transition-opacity duration-300" />
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
