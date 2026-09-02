import { useMemo, useState } from 'react'
import { Icon } from './Icons.jsx'
import { categories } from '../data/services.js'

const scopes = [
  { id: 'small', label: 'Quick fix', hint: 'Under 2 hours, one visit', mult: 1 },
  { id: 'standard', label: 'Standard job', hint: 'Half-day, parts included', mult: 2.6 },
  { id: 'full', label: 'Full project', hint: 'Multi-day, may need a permit', mult: 5.4 }
]

// Small deterministic offset so the same zip always estimates the same way,
// without needing a live pricing service for the demo.
function zipFactor(zip) {
  if (!zip || zip.length < 3) return 1
  const digits = zip.split('').reduce((sum, ch) => sum + (Number(ch) || 0), 0)
  return 0.9 + (digits % 10) * 0.02
}

function nextSlot(categoryId, scopeId) {
  const base = 2 + (categoryId.length % 3) + (scopeId === 'full' ? 3 : 0)
  const d = new Date()
  d.setDate(d.getDate() + base)
  return d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })
}

export default function Estimator() {
  const [categoryId, setCategoryId] = useState(categories[0].id)
  const [scopeId, setScopeId] = useState('standard')
  const [zip, setZip] = useState('')

  const category = categories.find((c) => c.id === categoryId)
  const scope = scopes.find((s) => s.id === scopeId)

  const { low, high } = useMemo(() => {
    const factor = zipFactor(zip)
    const mid = category.basePrice * scope.mult * factor
    return {
      low: Math.round((mid * 0.85) / 5) * 5,
      high: Math.round((mid * 1.2) / 5) * 5
    }
  }, [category, scope, zip])

  return (
    <section id="estimate" className="py-16 md:py-24 bg-panel border-b border-line">
      <div className="container-content grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
        <div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-sm">
            See a real price range before you talk to anyone.
          </h2>
          <p className="mt-3 text-ink-faint max-w-sm leading-relaxed">
            This is a starting estimate built from what similar jobs cost nearby.
            Your final quote comes from the pro after they see the job.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-ink-faint max-w-sm">
            <li className="flex gap-2"><Icon name="shield" className="w-4 h-4 text-teal mt-0.5 shrink-0" />No payment or account needed to see pricing.</li>
            <li className="flex gap-2"><Icon name="clock" className="w-4 h-4 text-teal mt-0.5 shrink-0" />Estimates update instantly as you adjust scope.</li>
          </ul>
        </div>

        <div className="border border-line rounded-sm p-5 md:p-7 bg-canvas">
          <fieldset>
            <legend className="text-sm font-semibold text-ink mb-3">Service</legend>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCategoryId(c.id)}
                  aria-pressed={categoryId === c.id}
                  className={`px-3.5 py-2 rounded-sm text-sm font-medium border transition-colors ${
                    categoryId === c.id
                      ? 'bg-ink text-canvas border-ink'
                      : 'bg-panel text-ink-soft border-line hover:border-ink-faint'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold text-ink mb-3">Scope</legend>
            <div className="grid sm:grid-cols-3 gap-2">
              {scopes.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setScopeId(s.id)}
                  aria-pressed={scopeId === s.id}
                  className={`text-left px-4 py-3 rounded-sm border transition-colors ${
                    scopeId === s.id ? 'border-teal bg-teal/5' : 'border-line bg-panel hover:border-ink-faint'
                  }`}
                >
                  <p className="text-sm font-semibold text-ink">{s.label}</p>
                  <p className="text-xs text-ink-faint mt-0.5">{s.hint}</p>
                </button>
              ))}
            </div>
          </fieldset>

          <label className="mt-6 block">
            <span className="text-sm font-semibold text-ink mb-3 block">ZIP code (optional)</span>
            <input
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, '').slice(0, 5))}
              type="text"
              inputMode="numeric"
              placeholder="e.g. 60614"
              className="w-full sm:w-48 px-3.5 py-2.5 text-sm rounded-sm border border-line bg-panel outline-none focus:border-teal"
            />
          </label>

          <div className="mt-7 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <p className="text-sm text-ink-faint">Estimated range for {category.name.toLowerCase()}</p>
              <p className="font-display font-extrabold text-4xl mt-1">
                ${low}<span className="text-ink-faint font-body font-normal text-2xl"> – ${high}</span>
              </p>
              <p className="text-sm text-ink-faint mt-2 flex items-center gap-1.5">
                <Icon name="clock" className="w-4 h-4" />
                Next available: {nextSlot(categoryId, scopeId)}
              </p>
            </div>
            <button
              type="button"
              className="px-5 py-3 rounded-sm bg-brass text-ink font-semibold text-sm hover:bg-brass-dark hover:text-canvas transition-colors shrink-0"
            >
              Request this estimate
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
