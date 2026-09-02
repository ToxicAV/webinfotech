import { useEffect, useMemo, useState } from "react";
import { Icon } from "./Icons.jsx";
import { categories } from "../data/services.js";

const scopes = [
  {
    id: "small",
    label: "Quick fix",
    hint: "Under 2 hours, one visit",
    mult: 1,
    icon: "⚡",
  },
  {
    id: "standard",
    label: "Standard job",
    hint: "Half-day, parts included",
    mult: 2.6,
    icon: "🔧",
  },
  {
    id: "full",
    label: "Full project",
    hint: "Multi-day, may need a permit",
    mult: 5.4,
    icon: "🏠",
  },
];

function zipFactor(zip) {
  if (!zip || zip.length < 3) return 1;

  const digits = zip
    .split("")
    .reduce((sum, ch) => sum + (Number(ch) || 0), 0);

  return 0.9 + (digits % 10) * 0.02;
}

function nextSlot(categoryId, scopeId) {
  const base =
    2 +
    (categoryId.length % 3) +
    (scopeId === "full" ? 3 : 0);

  const d = new Date();
  d.setDate(d.getDate() + base);

  return d.toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export default function Estimator() {
  const [categoryId, setCategoryId] = useState(categories[0].id);
  const [scopeId, setScopeId] = useState("standard");
  const [zip, setZip] = useState("");
  const [requested, setRequested] = useState(false);
  const [animatePrice, setAnimatePrice] = useState(false);

  const category =
    categories.find((c) => c.id === categoryId) || categories[0];

  const scope =
    scopes.find((s) => s.id === scopeId) || scopes[1];

  const { low, high } = useMemo(() => {
    const factor = zipFactor(zip);
    const mid = category.basePrice * scope.mult * factor;

    return {
      low: Math.round((mid * 0.85) / 5) * 5,
      high: Math.round((mid * 1.2) / 5) * 5,
    };
  }, [category, scope, zip]);

  // Trigger price animation whenever estimate changes
  useEffect(() => {
    setAnimatePrice(true);

    const timer = setTimeout(() => {
      setAnimatePrice(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [low, high]);

  return (
    <section
      id="estimate"
      className="relative overflow-hidden py-16 md:py-24 bg-panel border-b border-line"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 right-10 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />

        <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full bg-brass/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg,#000 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-content relative grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">

        {/* LEFT */}
        <div className="flex flex-col justify-center">

          <div className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-teal/5 border border-teal/10 text-teal text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
            Instant estimate
          </div>

          <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight mt-5 max-w-lg">
            Know the price before the work begins.
          </h2>

          <p className="mt-4 text-ink-faint max-w-md leading-relaxed">
            Build your project in seconds and get an estimated
            price range based on service, project size and location.
          </p>

          {/* Mini trust indicators */}
          <div className="grid grid-cols-2 gap-3 mt-8 max-w-md">

            <div className="p-4 rounded-xl bg-canvas border border-line">
              <div className="text-teal text-xl">✓</div>
              <p className="text-sm font-semibold mt-2">
                No account
              </p>
              <p className="text-xs text-ink-faint mt-1">
                Required for estimates
              </p>
            </div>

            <div className="p-4 rounded-xl bg-canvas border border-line">
              <div className="text-brass text-xl">⚡</div>
              <p className="text-sm font-semibold mt-2">
                Instant pricing
              </p>
              <p className="text-xs text-ink-faint mt-1">
                Updates as you change options
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT ESTIMATOR */}
        <div className="relative">

          <div className="rounded-2xl border border-line bg-canvas p-5 md:p-7 shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between mb-7">

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-ink-faint">
                  Build your estimate
                </p>

                <h3 className="font-display text-xl font-bold mt-1">
                  Tell us about your project
                </h3>
              </div>

              <div className="w-10 h-10 rounded-xl bg-ink text-canvas flex items-center justify-center">
                <Icon
                  name="search"
                  className="w-5 h-5"
                />
              </div>

            </div>

            {/* SERVICE */}
            <fieldset>
              <legend className="text-sm font-semibold text-ink mb-3">
                What do you need?
              </legend>

              <div className="flex flex-wrap gap-2">

                {categories.map((c) => {
                  const active = categoryId === c.id;

                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setCategoryId(c.id);
                        setRequested(false);
                      }}
                      aria-pressed={active}
                      className={`
                                                px-3.5 py-2.5 rounded-xl
                                                text-sm font-medium
                                                border transition-all duration-300
                                                ${active
                          ? "bg-ink text-canvas border-ink scale-[1.02] shadow-sm"
                          : "bg-panel text-ink-soft border-line hover:border-ink-faint hover:-translate-y-0.5"
                        }
                                            `}
                    >
                      {c.name}
                    </button>
                  );
                })}

              </div>
            </fieldset>

            {/* SCOPE */}
            <fieldset className="mt-7">

              <div className="flex items-center justify-between mb-3">
                <legend className="text-sm font-semibold text-ink">
                  Project size
                </legend>

                <span className="text-xs text-ink-faint">
                  Choose one
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">

                {scopes.map((s) => {
                  const active = scopeId === s.id;

                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => {
                        setScopeId(s.id);
                        setRequested(false);
                      }}
                      aria-pressed={active}
                      className={`
                                                relative text-left p-4
                                                rounded-xl border
                                                transition-all duration-300
                                                overflow-hidden
                                                ${active
                          ? "border-teal bg-teal/5 -translate-y-1"
                          : "border-line bg-panel hover:border-ink-faint"
                        }
                                            `}
                    >

                      {/* Active indicator */}
                      {active && (
                        <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-teal animate-pulse" />
                      )}

                      <span className="text-xl">
                        {s.icon}
                      </span>

                      <p className="text-sm font-bold mt-3">
                        {s.label}
                      </p>

                      <p className="text-xs text-ink-faint mt-1 leading-relaxed">
                        {s.hint}
                      </p>

                      <div className="mt-3 text-xs font-semibold text-teal">
                        {s.mult}× base
                      </div>

                    </button>
                  );
                })}

              </div>
            </fieldset>

            {/* ZIP */}
            <label className="block mt-7">

              <span className="text-sm font-semibold text-ink mb-3 block">
                Where is the project?
              </span>

              <div className="relative max-w-xs">

                <Icon
                  name="pin"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-faint"
                />

                <input
                  value={zip}
                  onChange={(e) => {
                    setZip(
                      e.target.value
                        .replace(/[^0-9]/g, "")
                        .slice(0, 5)
                    );
                    setRequested(false);
                  }}
                  type="text"
                  inputMode="numeric"
                  placeholder="Enter ZIP code"
                  className="
                                        w-full pl-10 pr-3.5 py-3
                                        text-sm rounded-xl
                                        border border-line
                                        bg-panel outline-none
                                        focus:border-teal
                                        focus:ring-2 focus:ring-teal/10
                                        transition-all
                                    "
                />

              </div>

            </label>

            {/* PRICE RESULT */}
            <div className="relative mt-8 rounded-2xl bg-ink text-canvas overflow-hidden">

              {/* Glow */}
              <div className="absolute -right-16 -top-16 w-40 h-40 rounded-full bg-teal/10 blur-3xl" />

              <div className="relative p-6">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-canvas/50">
                      Estimated range
                    </p>

                    <p className="text-sm text-canvas/60 mt-1">
                      {category.name} · {scope.label}
                    </p>
                  </div>

                  <div className="px-2.5 py-1 rounded-full bg-teal/10 text-teal text-[10px] font-bold">
                    ESTIMATE
                  </div>

                </div>

                {/* PRICE */}
                <div
                  className={`
                                        mt-4 font-display font-extrabold
                                        text-4xl md:text-5xl
                                        transition-all duration-300
                                        ${animatePrice
                      ? "scale-105 text-brass"
                      : "scale-100 text-canvas"
                    }
                                    `}
                >
                  ${low}
                  <span className="text-canvas/40 font-body font-normal text-2xl">
                    {" "}– ${high}
                  </span>
                </div>

                {/* Confidence */}
                <div className="mt-5">

                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-canvas/50">
                      Estimate confidence
                    </span>

                    <span className="text-teal font-semibold">
                      High
                    </span>
                  </div>

                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-teal rounded-full transition-all duration-700"
                      style={{
                        width: zip.length >= 3
                          ? "92%"
                          : "72%",
                      }}
                    />

                  </div>

                </div>

                {/* Next availability */}
                <div className="mt-5 flex items-center gap-2 text-sm text-canvas/60">

                  <Icon
                    name="clock"
                    className="w-4 h-4 text-teal"
                  />

                  Next available:
                  <span className="text-canvas font-medium">
                    {nextSlot(categoryId, scopeId)}
                  </span>

                </div>

              </div>

            </div>

            {/* ACTION */}
            <button
              type="button"
              onClick={() => setRequested(true)}
              className="
                                group relative w-full mt-5
                                px-5 py-3.5 rounded-xl
                                bg-brass text-ink
                                font-semibold text-sm
                                overflow-hidden
                                transition-all duration-300
                                hover:bg-brass-dark
                                hover:-translate-y-0.5
                                active:translate-y-0
                            "
            >

              <span className="relative z-10 flex items-center justify-center gap-2">

                {requested
                  ? "Estimate requested ✓"
                  : "Request this estimate"}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </span>

            </button>

            {/* Success */}
            <div
              className={`
                                overflow-hidden transition-all duration-500
                                ${requested
                  ? "max-h-20 opacity-100 mt-4"
                  : "max-h-0 opacity-0"
                }
                            `}
            >
              <div className="p-3 rounded-xl bg-teal/5 border border-teal/10 text-center">
                <p className="text-sm font-semibold text-teal">
                  ✓ Your estimate is ready
                </p>

                <p className="text-xs text-ink-faint mt-1">
                  A verified professional can review this estimate with you.
                </p>
              </div>
            </div>

          </div>

          {/* Floating badge */}
          <div className="
                        hidden md:flex absolute
                        -right-5 top-10
                        items-center gap-2
                        px-3 py-2 rounded-full
                        bg-canvas border border-line
                        shadow-lg
                        text-xs font-semibold
                        animate-bounce
                    ">
            <span className="w-2 h-2 rounded-full bg-teal" />
            Live estimate
          </div>

        </div>
      </div>
    </section>
  );
}
// import { useMemo, useState } from 'react'
// import { Icon } from './Icons.jsx'
// import { categories } from '../data/services.js'

// const scopes = [
//   { id: 'small', label: 'Quick fix', hint: 'Under 2 hours, one visit', mult: 1 },
//   { id: 'standard', label: 'Standard job', hint: 'Half-day, parts included', mult: 2.6 },
//   { id: 'full', label: 'Full project', hint: 'Multi-day, may need a permit', mult: 5.4 }
// ]

// // Small deterministic offset so the same zip always estimates the same way,
// // without needing a live pricing service for the demo.
// function zipFactor(zip) {
//   if (!zip || zip.length < 3) return 1
//   const digits = zip.split('').reduce((sum, ch) => sum + (Number(ch) || 0), 0)
//   return 0.9 + (digits % 10) * 0.02
// }

// function nextSlot(categoryId, scopeId) {
//   const base = 2 + (categoryId.length % 3) + (scopeId === 'full' ? 3 : 0)
//   const d = new Date()
//   d.setDate(d.getDate() + base)
//   return d.toLocaleDateString(undefined, { weekday: 'long', month: 'short', day: 'numeric' })
// }

// export default function Estimator() {
//   const [categoryId, setCategoryId] = useState(categories[0].id)
//   const [scopeId, setScopeId] = useState('standard')
//   const [zip, setZip] = useState('')

//   const category = categories.find((c) => c.id === categoryId)
//   const scope = scopes.find((s) => s.id === scopeId)

//   const { low, high } = useMemo(() => {
//     const factor = zipFactor(zip)
//     const mid = category.basePrice * scope.mult * factor
//     return {
//       low: Math.round((mid * 0.85) / 5) * 5,
//       high: Math.round((mid * 1.2) / 5) * 5
//     }
//   }, [category, scope, zip])

//   return (
//     <section id="estimate" className="py-16 md:py-24 bg-panel border-b border-line">
//       <div className="container-content grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16">
//         <div>
//           <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-sm">
//             See a real price range before you talk to anyone.
//           </h2>
//           <p className="mt-3 text-ink-faint max-w-sm leading-relaxed">
//             This is a starting estimate built from what similar jobs cost nearby.
//             Your final quote comes from the pro after they see the job.
//           </p>
//           <ul className="mt-6 space-y-3 text-sm text-ink-faint max-w-sm">
//             <li className="flex gap-2"><Icon name="shield" className="w-4 h-4 text-teal mt-0.5 shrink-0" />No payment or account needed to see pricing.</li>
//             <li className="flex gap-2"><Icon name="clock" className="w-4 h-4 text-teal mt-0.5 shrink-0" />Estimates update instantly as you adjust scope.</li>
//           </ul>
//         </div>

//         <div className="border border-line rounded-sm p-5 md:p-7 bg-canvas">
//           <fieldset>
//             <legend className="text-sm font-semibold text-ink mb-3">Service</legend>
//             <div className="flex flex-wrap gap-2">
//               {categories.map((c) => (
//                 <button
//                   key={c.id}
//                   type="button"
//                   onClick={() => setCategoryId(c.id)}
//                   aria-pressed={categoryId === c.id}
//                   className={`px-3.5 py-2 rounded-sm text-sm font-medium border transition-colors ${
//                     categoryId === c.id
//                       ? 'bg-ink text-canvas border-ink'
//                       : 'bg-panel text-ink-soft border-line hover:border-ink-faint'
//                   }`}
//                 >
//                   {c.name}
//                 </button>
//               ))}
//             </div>
//           </fieldset>

//           <fieldset className="mt-6">
//             <legend className="text-sm font-semibold text-ink mb-3">Scope</legend>
//             <div className="grid sm:grid-cols-3 gap-2">
//               {scopes.map((s) => (
//                 <button
//                   key={s.id}
//                   type="button"
//                   onClick={() => setScopeId(s.id)}
//                   aria-pressed={scopeId === s.id}
//                   className={`text-left px-4 py-3 rounded-sm border transition-colors ${
//                     scopeId === s.id ? 'border-teal bg-teal/5' : 'border-line bg-panel hover:border-ink-faint'
//                   }`}
//                 >
//                   <p className="text-sm font-semibold text-ink">{s.label}</p>
//                   <p className="text-xs text-ink-faint mt-0.5">{s.hint}</p>
//                 </button>
//               ))}
//             </div>
//           </fieldset>

//           <label className="mt-6 block">
//             <span className="text-sm font-semibold text-ink mb-3 block">ZIP code (optional)</span>
//             <input
//               value={zip}
//               onChange={(e) => setZip(e.target.value.replace(/[^0-9]/g, '').slice(0, 5))}
//               type="text"
//               inputMode="numeric"
//               placeholder="e.g. 60614"
//               className="w-full sm:w-48 px-3.5 py-2.5 text-sm rounded-sm border border-line bg-panel outline-none focus:border-teal"
//             />
//           </label>

//           <div className="mt-7 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
//             <div>
//               <p className="text-sm text-ink-faint">Estimated range for {category.name.toLowerCase()}</p>
//               <p className="font-display font-extrabold text-4xl mt-1">
//                 ${low}<span className="text-ink-faint font-body font-normal text-2xl"> – ${high}</span>
//               </p>
//               <p className="text-sm text-ink-faint mt-2 flex items-center gap-1.5">
//                 <Icon name="clock" className="w-4 h-4" />
//                 Next available: {nextSlot(categoryId, scopeId)}
//               </p>
//             </div>
//             <button
//               type="button"
//               className="px-5 py-3 rounded-sm bg-brass text-ink font-semibold text-sm hover:bg-brass-dark hover:text-canvas transition-colors shrink-0"
//             >
//               Request this estimate
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
