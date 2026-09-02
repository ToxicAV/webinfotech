import { useState } from 'react'
import { Icon } from './Icons.jsx'

const steps = [
  {
    number: '01',
    title: 'Describe the job',
    short: 'Tell us what you need.',
    body: 'Tell us the trade, the scope, and when you need someone. Takes about ninety seconds.',
    icon: 'edit',
    color: 'bg-teal',
  },
  {
    number: '02',
    title: 'Compare matched pros',
    short: 'Find trusted professionals.',
    body: 'We surface three to five vetted pros nearby with real reviews and license status.',
    icon: 'users',
    color: 'bg-brass',
  },
  {
    number: '03',
    title: 'Book and pay through Meridian',
    short: 'Get the job done safely.',
    body: 'Your payment is held until the job is signed off, and every booking is covered by our guarantee.',
    icon: 'check',
    color: 'bg-indigo-500',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const step = steps[activeStep]

  return (
    <section
      id="how"
      className="relative overflow-hidden py-16 md:py-24 border-b border-line bg-canvas"
    >
      {/* Background decoration */}
      <div className="absolute -top-32 right-[-120px] w-[320px] h-[320px] rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-[-120px] w-[320px] h-[320px] rounded-full bg-brass/10 blur-3xl pointer-events-none" />

      <div className="container-content relative">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-panel text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Simple process
            </div>

            <h2 className="font-display font-extrabold text-3xl md:text-5xl tracking-tight max-w-xl leading-[1.05]">
              From request to
              <span className="text-teal"> finished job.</span>
            </h2>
          </div>

          <p className="text-ink-faint max-w-sm leading-relaxed">
            No endless searching. No guessing who to trust. Just three simple
            steps to get the right professional for the job.
          </p>
        </div>

        {/* Progress */}
        <div className="relative mb-10 hidden md:block">
          <div className="absolute top-5 left-[8%] right-[8%] h-px bg-line" />

          <div
            className="absolute top-5 left-[8%] h-px bg-teal transition-all duration-500"
            style={{
              width: `${(activeStep / (steps.length - 1)) * 84}%`,
            }}
          />

          <div className="relative grid grid-cols-3">
            {steps.map((item, index) => (
              <button
                key={item.number}
                onClick={() => setActiveStep(index)}
                className="group flex flex-col items-center text-center focus:outline-none"
              >
                <span
                  className={`
                    relative z-10 flex items-center justify-center
                    w-10 h-10 rounded-full border-2
                    font-display font-bold text-sm
                    transition-all duration-300
                    ${
                      activeStep === index
                        ? 'border-teal bg-teal text-ink scale-110 shadow-lg shadow-teal/20'
                        : index < activeStep
                        ? 'border-teal bg-teal/10 text-teal'
                        : 'border-line bg-canvas text-ink-faint group-hover:border-teal/50'
                    }
                  `}
                >
                  {index < activeStep ? '✓' : item.number}
                </span>

                <span
                  className={`
                    mt-4 text-sm font-semibold transition-colors
                    ${
                      activeStep === index
                        ? 'text-ink'
                        : 'text-ink-faint group-hover:text-ink'
                    }
                  `}
                >
                  {item.short}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile step selector */}
        <div className="flex md:hidden gap-2 mb-8">
          {steps.map((item, index) => (
            <button
              key={item.number}
              onClick={() => setActiveStep(index)}
              className={`
                flex-1 py-3 rounded-lg border text-sm font-semibold
                transition-all
                ${
                  activeStep === index
                    ? 'border-teal bg-teal/10 text-teal'
                    : 'border-line bg-panel text-ink-faint'
                }
              `}
            >
              {item.number}
            </button>
          ))}
        </div>

        {/* Main interactive area */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">

          {/* Step cards */}
          <div className="space-y-3">
            {steps.map((item, index) => (
              <button
                key={item.number}
                onClick={() => setActiveStep(index)}
                className={`
                  w-full text-left rounded-2xl border p-5 md:p-6
                  transition-all duration-300 group
                  ${
                    activeStep === index
                      ? 'border-teal/40 bg-panel shadow-xl shadow-ink/5'
                      : 'border-line bg-transparent hover:bg-panel hover:border-line'
                  }
                `}
              >
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className={`
                      shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
                      transition-all duration-300
                      ${
                        activeStep === index
                          ? `${item.color} text-ink scale-105`
                          : 'bg-panel text-ink-faint group-hover:text-ink'
                      }
                    `}
                  >
                    <Icon name={item.icon} size={21} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-ink-faint tracking-widest">
                          STEP {item.number}
                        </span>

                        <h3 className="font-display font-bold text-lg md:text-xl mt-1">
                          {item.title}
                        </h3>
                      </div>

                      <span
                        className={`
                          shrink-0 w-8 h-8 rounded-full border
                          flex items-center justify-center
                          transition-all duration-300
                          ${
                            activeStep === index
                              ? 'border-teal bg-teal text-ink rotate-0'
                              : 'border-line text-ink-faint -rotate-45'
                          }
                        `}
                      >
                        →
                      </span>
                    </div>

                    {/* Expanded text */}
                    <div
                      className={`
                        grid transition-all duration-300
                        ${
                          activeStep === index
                            ? 'grid-rows-[1fr] opacity-100 mt-3'
                            : 'grid-rows-[0fr] opacity-0'
                        }
                      `}
                    >
                      <div className="overflow-hidden">
                        <p className="text-ink-faint text-sm leading-relaxed pr-4">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Interactive preview */}
          <div className="relative min-h-[360px] md:min-h-[420px] rounded-2xl bg-ink text-canvas overflow-hidden border border-ink">

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
              }}
            />

            {/* Glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brass/10 rounded-full blur-3xl" />

            <div className="relative h-full min-h-[360px] md:min-h-[420px] p-6 md:p-8 flex flex-col">

              {/* Top bar */}
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.18em] text-canvas/50">
                  Your journey
                </span>

                <span className="flex items-center gap-2 text-xs text-teal">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  Live
                </span>
              </div>

              {/* Center content */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-md">

                  {/* Big number */}
                  <div className="flex items-center gap-4 mb-5">
                    <span className="font-display font-extrabold text-6xl md:text-8xl text-canvas/10">
                      {step.number}
                    </span>

                    <div>
                      <p className="text-xs uppercase tracking-widest text-teal font-bold">
                        Step {activeStep + 1} of 3
                      </p>

                      <h3 className="font-display font-bold text-2xl md:text-3xl mt-1">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-canvas/65 leading-relaxed max-w-md">
                    {step.body}
                  </p>

                  {/* Progress bar */}
                  <div className="mt-8">
                    <div className="flex justify-between text-xs text-canvas/40 mb-2">
                      <span>Progress</span>
                      <span>{Math.round(((activeStep + 1) / 3) * 100)}%</span>
                    </div>

                    <div className="h-1.5 rounded-full bg-canvas/10 overflow-hidden">
                      <div
                        className="h-full bg-teal rounded-full transition-all duration-500"
                        style={{
                          width: `${((activeStep + 1) / 3) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom navigation */}
              <div className="flex items-center justify-between pt-5 border-t border-canvas/10">

                <button
                  disabled={activeStep === 0}
                  onClick={() =>
                    setActiveStep((prev) => Math.max(prev - 1, 0))
                  }
                  className="text-sm font-semibold text-canvas/60 hover:text-canvas disabled:opacity-20 transition"
                >
                  ← Previous
                </button>

                <div className="flex gap-1.5">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${
                          activeStep === index
                            ? 'w-8 bg-teal'
                            : 'w-1.5 bg-canvas/20'
                        }
                      `}
                    />
                  ))}
                </div>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() =>
                    setActiveStep((prev) =>
                      Math.min(prev + 1, steps.length - 1)
                    )
                  }
                  className="text-sm font-semibold text-canvas/60 hover:text-canvas disabled:opacity-20 transition"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-ink-faint">
          <span className="flex items-center gap-2">
            <span className="text-teal">✓</span>
            No obligation to book
          </span>

          <span className="flex items-center gap-2">
            <span className="text-teal">✓</span>
            Vetted professionals
          </span>

          <span className="flex items-center gap-2">
            <span className="text-teal">✓</span>
            Protected payments
          </span>
        </div>

      </div>
    </section>
  )
}


// const steps = [
//   {
//     title: 'Describe the job',
//     body: 'Tell us the trade, the scope, and when you need someone. Takes about ninety seconds.'
//   },
//   {
//     title: 'Compare matched pros',
//     body: 'We surface three to five vetted pros nearby with real reviews and license status.'
//   },
//   {
//     title: 'Book and pay through Meridian',
//     body: 'Your payment is held until the job is signed off, and every booking is covered by our guarantee.'
//   }
// ]

// export default function HowItWorks() {
//   return (
//     <section id="how" className="py-16 md:py-24 border-b border-line">
//       <div className="container-content">
//         <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-md mb-12">
//           From request to finished job.
//         </h2>
//         <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
//           {steps.map((step, i) => (
//             <div key={step.title} className="relative pl-0">
//               <div className="flex items-center gap-3 mb-3">
//                 <span className="font-display font-extrabold text-3xl text-line select-none">{String(i + 1).padStart(2, '0')}</span>
//                 <div className="h-px flex-1 bg-line" />
//               </div>
//               <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
//               <p className="text-ink-faint leading-relaxed">{step.body}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
