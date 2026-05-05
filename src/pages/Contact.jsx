import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import { INSTAGRAM_URL, WHATSAPP_URL } from '../data/constants'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const occasions = ['Wedding', 'Corporate', 'Return Gift', 'General Enquiry']

const inputClass = 'w-full font-sans text-sm text-brown-deep bg-white border border-blush px-4 py-3 rounded-sm focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-brown-light'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', occasion: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // Phase 2: wire to backend / email service
    setSubmitted(true)
  }

  return (
    <div className="bg-cream min-h-screen">
      <section className="py-20 px-6 bg-linen text-center">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <SectionTitle eyebrow="Get in touch" heading={<>We&apos;d love to<br /><em>hear from you</em></>} center />
          <p className="font-sans text-sm text-brown-mid mt-4">
            For bulk orders, wedding packages, or corporate gifting — reach out and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {submitted ? (
              <div className="text-center py-12">
                <p className="font-serif text-3xl text-brown-deep mb-3"><em>Thank you!</em></p>
                <p className="font-sans text-sm text-brown-mid">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-brown-light mb-2">Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-brown-light mb-2">Email *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-brown-light mb-2">Phone</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClass} />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-brown-light mb-2">Occasion *</label>
                  <select name="occasion" required value={form.occasion} onChange={handleChange} className={inputClass}>
                    <option value="">Select an occasion</option>
                    {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-widest uppercase text-brown-light mb-2">Message *</label>
                  <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your requirements — quantity, occasion date, preferred scents..." className={`${inputClass} resize-none`} />
                </div>
                <Button type="submit" variant="gold" className="w-full">Send Enquiry</Button>
              </form>
            )}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Chat with us</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white font-sans text-sm px-6 py-3 rounded-sm hover:opacity-90 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Message on WhatsApp
              </a>
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Follow us</p>
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer"
                className="font-sans text-sm text-brown-mid hover:text-gold transition-colors duration-200">
                @euphoriacandles040
              </a>
            </div>
            <div>
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">Location</p>
              <p className="font-sans text-sm text-brown-mid">India</p>
            </div>
            <div className="h-px w-12 bg-gold" />
            <p className="font-sans text-xs text-brown-light leading-relaxed">
              We typically respond within 24 hours. For urgent orders, WhatsApp is the fastest way to reach us.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
