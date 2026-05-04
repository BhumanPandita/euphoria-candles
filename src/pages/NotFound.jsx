import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">404</p>
      <h1 className="font-serif text-4xl text-brown-deep mb-4"><em>Page not found</em></h1>
      <div className="h-px w-12 bg-gold mx-auto mb-6" />
      <p className="font-sans text-sm text-brown-mid mb-8">The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="font-sans text-xs tracking-widest uppercase border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-cream transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  )
}
