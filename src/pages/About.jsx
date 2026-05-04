import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const values = [
  { emoji: '🌿', title: 'Small Batch', desc: 'Every candle is poured in small quantities to ensure quality and consistency in every pour.' },
  { emoji: '🕯️', title: 'Soy Wax', desc: 'We use 100% natural soy wax — cleaner burning, longer lasting, and kinder to the planet.' },
  { emoji: '🇮🇳', title: 'Made in India', desc: 'Proudly crafted in India, celebrating local artisanship and the warmth of homegrown creativity.' },
]

export default function About() {
  return (
    <div className="bg-cream">
      {/* Hero */}
      <section className="py-28 px-6 bg-linen text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Our story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-brown-deep leading-tight">
            Born from a love of<br /><em>warmth &amp; fragrance</em>
          </h1>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionTitle eyebrow="How it began" heading="The Euphoria story" />
            <div className="mt-8 space-y-5 font-sans text-sm text-brown-mid leading-relaxed">
              <p>
                Euphoria Candles started as a personal passion — a quiet corner of creativity where fragrance
                met artistry. What began as handpoured gifts for friends and family quickly grew into something
                more: a small business built on the belief that a candle can carry emotion, memory, and warmth.
              </p>
              <p>
                Today, we create candles for weddings, corporate events, return gifts, and everyday moments —
                each one made by hand, in small batches, with care. We believe the best gifts are the ones that
                linger long after the occasion has passed.
              </p>
              <p>
                Every scent we blend is chosen thoughtfully. Every label is designed with intention. And every
                candle that leaves our hands is made to bring a little more light into your world.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-linen">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionTitle eyebrow="What we stand for" heading="Our values" center />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white p-8 rounded-sm shadow-sm"
              >
                <span className="text-4xl block mb-4">{v.emoji}</span>
                <h3 className="font-serif text-xl text-brown-deep mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-brown-mid leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
