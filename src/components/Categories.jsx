import { Icon } from './Icons.jsx'
import { categories } from '../data/services.js'

export default function Categories() {
  return (
    <section id="categories" className="py-16 md:py-24 border-b border-line">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-md">
              Every trade, one intake form.
            </h2>
            <p className="mt-3 text-ink-faint max-w-md">
              Tell us the job once. We route it to pros in your area who do that
              specific work, not a general contractor guessing at scope.
            </p>
          </div>
          <a href="#estimate" className="text-[15px] font-semibold text-teal border-b border-teal/40 hover:border-teal shrink-0">
            See pricing for any category
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {categories.map((c) => (
            <a
              key={c.id}
              href="#estimate"
              className="group bg-panel p-6 flex flex-col gap-4 hover:bg-canvas transition-colors relative"
            >
              <span className="absolute top-0 left-0 h-[3px] w-0 bg-brass group-hover:w-full transition-all duration-300" />
              <Icon name={c.icon} className="w-7 h-7 text-teal" />
              <div>
                <h3 className="font-display font-bold text-lg leading-snug">{c.name}</h3>
                <p className="text-sm text-ink-faint mt-1 leading-relaxed">{c.blurb}</p>
              </div>
              <p className="text-sm font-semibold text-ink mt-auto pt-2">
                From ${c.basePrice}
                <span className="text-ink-faint font-normal"> avg. call-out</span>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
