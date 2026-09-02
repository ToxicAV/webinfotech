import { useState } from 'react'
import { Icon } from './Icons.jsx'
import { categories } from '../data/services.js'

export default function Hero() {
  const [service, setService] = useState('')
  const [zip, setZip] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="container-content grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 py-14 md:py-20 items-center">
        {/* Left: headline + search */}
        <div>
          <h1 className="font-display font-extrabold text-[2.5rem] leading-[1.05] md:text-6xl md:leading-[1.03] tracking-tight max-w-xl">
            Home repairs, handled by someone who's done it before.
          </h1>
          <p className="mt-5 text-lg text-ink-faint max-w-md leading-relaxed">
            Meridian checks licenses, insurance, and past work before a pro ever
            gets your address. Post a job, compare quotes, book with confidence.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 bg-panel border border-line rounded-sm p-2 flex flex-col sm:flex-row gap-2 max-w-xl shadow-card">
            <label className="flex-1 flex items-center gap-2 px-3 py-2.5">
              <Icon name="search" className="w-4 h-4 text-ink-faint shrink-0" />
              <input
                value={service}
                onChange={(e) => setService(e.target.value)}
                type="text"
                placeholder="What do you need done?"
                className="w-full text-[15px] outline-none bg-transparent placeholder:text-ink-faint"
              />
            </label>
            <div className="hidden sm:block w-px bg-line my-1" />
            <label className="flex items-center gap-2 px-3 py-2.5 sm:w-36">
              <Icon name="pin" className="w-4 h-4 text-ink-faint shrink-0" />
              <input
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                type="text"
                inputMode="numeric"
                placeholder="ZIP code"
                className="w-full text-[15px] outline-none bg-transparent placeholder:text-ink-faint"
              />
            </label>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-sm bg-brass text-ink font-semibold text-[15px] hover:bg-brass-dark hover:text-canvas transition-colors"
            >
              Find pros
            </button>
          </form>
          {submitted && (
            <p className="mt-2 text-sm text-teal" role="status">
              Jump to the estimate tool below to see pricing for {service || 'your project'}.
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-faint">
            <span>Popular:</span>
            {categories.slice(0, 4).map((c) => (
              <a key={c.id} href="#categories" className="underline decoration-line underline-offset-4 hover:text-teal hover:decoration-teal">
                {c.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right: illustration + floating stat */}
        <div className="relative">
          <HeroIllustration />
          <div className="absolute -bottom-4 -left-4 md:-left-8 bg-panel border border-line rounded-sm shadow-lifted px-5 py-4 max-w-[220px]">
            <div className="flex items-center gap-2">
              <Icon name="shield" className="w-5 h-5 text-teal" />
              <span className="font-display font-bold text-2xl leading-none">32,000+</span>
            </div>
            <p className="text-sm text-ink-faint mt-1.5">background-checked pros verified this year</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 480 420" className="w-full h-auto" role="img" aria-label="Line illustration of a house cross-section with a wrench and a checklist">
      <rect x="0" y="0" width="480" height="420" rx="4" fill="#1B2430" />
      <g stroke="#EDEFEB" strokeWidth="1.4" opacity="0.18">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={i} x1={0} y1={i * 52} x2={480} y2={i * 52} />
        ))}
      </g>
      {/* House outline */}
      <g stroke="#E8B872" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M120 230 240 130 360 230" />
        <path d="M150 230V330H330V230" />
        <path d="M215 330V270H265V330" />
        <rect x="175" y="255" width="30" height="30" />
        <rect x="275" y="255" width="30" height="30" />
      </g>
      {/* Wrench accent */}
      <g transform="translate(300 90) rotate(18)" stroke="#C98A34" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4a12 12 0 0 0-16.2 16.2L-30 54l10 10 34-33.8A12 12 0 0 0 30 14l-8 8-6-6 8-8Z" />
      </g>
      {/* Checklist card */}
      <g transform="translate(70 60)">
        <rect width="120" height="86" rx="3" fill="#EDEFEB" opacity="0.95" />
        <g stroke="#1F5C52" strokeWidth="2.4" strokeLinecap="round">
          <path d="M14 22h92" opacity="0.5" />
          <path d="M14 40h64" opacity="0.5" />
          <path d="M14 58h78" opacity="0.5" />
        </g>
        <g stroke="#C98A34" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M96 55l6 6 12-14" />
        </g>
      </g>
    </svg>
  )
}
