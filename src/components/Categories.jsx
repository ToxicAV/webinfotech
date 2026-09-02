import { useState } from "react";

const steps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Describe your home repair in a few simple steps.",
        icon: "📝",
    },
    {
        number: "02",
        title: "Get matched with pros",
        text: "We find verified professionals who match your project.",
        icon: "👷",
    },
    {
        number: "03",
        title: "Compare quotes",
        text: "Review pricing, ratings, experience and availability.",
        icon: "⚖️",
    },
    {
        number: "04",
        title: "Book with confidence",
        text: "Choose your professional and schedule the work.",
        icon: "📅",
    },
];

export default function HowItWorks() {
    const [active, setActive] = useState(0);

    return (
        <section className="bg-canvas py-20">
            <div className="container-content">

                <div className="max-w-2xl mb-12">
                    <p className="text-xs uppercase tracking-[0.2em] text-brass font-semibold">
                        Simple process
                    </p>

                    <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold text-ink">
                        From problem to solved.
                    </h2>

                    <p className="mt-4 text-ink/60">
                        Getting reliable help shouldn't feel complicated.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-stretch">

                    {/* Steps */}
                    <div className="space-y-3">
                        {steps.map((step, index) => {
                            const isActive = active === index;

                            return (
                                <button
                                    key={step.number}
                                    onClick={() => setActive(index)}
                                    className={`
                                        w-full text-left rounded-2xl border p-5
                                        transition-all duration-500
                                        ${
                                            isActive
                                                ? "border-brass bg-ink text-canvas translate-x-2"
                                                : "border-ink/10 bg-white hover:border-ink/20"
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-4">

                                        <span className={`
                                            w-11 h-11 rounded-xl flex items-center
                                            justify-center text-lg shrink-0
                                            ${
                                                isActive
                                                    ? "bg-brass text-ink"
                                                    : "bg-ink/5"
                                            }
                                        `}>
                                            {step.icon}
                                        </span>

                                        <div className="flex-1">
                                            <div className="text-xs opacity-50">
                                                STEP {step.number}
                                            </div>

                                            <h3 className="font-bold mt-1">
                                                {step.title}
                                            </h3>

                                            <div className={`
                                                overflow-hidden transition-all duration-500
                                                ${
                                                    isActive
                                                        ? "max-h-20 opacity-100 mt-2"
                                                        : "max-h-0 opacity-0"
                                                }
                                            `}>
                                                <p className="text-sm opacity-60">
                                                    {step.text}
                                                </p>
                                            </div>
                                        </div>

                                        <span className={`
                                            transition-transform duration-300
                                            ${isActive ? "rotate-90" : ""}
                                        `}>
                                            →
                                        </span>

                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Interactive visual */}
                    <div className="relative rounded-3xl bg-ink overflow-hidden min-h-[350px]">

                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
                                backgroundSize: "30px 30px",
                            }}
                        />

                        <div className="relative h-full flex flex-col items-center justify-center p-10 text-center">

                            <div
                                key={active}
                                className="text-7xl animate-[pop_.5s_ease]"
                            >
                                {steps[active].icon}
                            </div>

                            <p className="mt-8 text-brass text-xs uppercase tracking-[0.25em]">
                                Step {steps[active].number}
                            </p>

                            <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold text-canvas">
                                {steps[active].title}
                            </h3>

                            <p className="mt-3 max-w-sm text-canvas/50">
                                {steps[active].text}
                            </p>

                            <div className="mt-8 flex gap-2">
                                {steps.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`
                                            h-1 rounded-full transition-all duration-500
                                            ${
                                                active === index
                                                    ? "w-10 bg-brass"
                                                    : "w-3 bg-white/20"
                                            }
                                        `}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes pop {
                    0% { transform: scale(.7); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
            `}</style>
        </section>
    );
}
// import { Icon } from './Icons.jsx'
// import { categories } from '../data/services.js'

// export default function Categories() {
//   return (
//     <section id="categories" className="py-16 md:py-24 border-b border-line">
//       <div className="container-content">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
//           <div>
//             <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-md">
//               Every trade, one intake form.
//             </h2>
//             <p className="mt-3 text-ink-faint max-w-md">
//               Tell us the job once. We route it to pros in your area who do that
//               specific work, not a general contractor guessing at scope.
//             </p>
//           </div>
//           <a href="#estimate" className="text-[15px] font-semibold text-teal border-b border-teal/40 hover:border-teal shrink-0">
//             See pricing for any category
//           </a>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
//           {categories.map((c) => (
//             <a
//               key={c.id}
//               href="#estimate"
//               className="group bg-panel p-6 flex flex-col gap-4 hover:bg-canvas transition-colors relative"
//             >
//               <span className="absolute top-0 left-0 h-1 w-0 bg-brass group-hover:w-full transition-all duration-300" />
//               <Icon name={c.icon} className="w-7 h-7 text-teal" />
//               <div>
//                 <h3 className="font-display font-bold text-lg leading-snug">{c.name}</h3>
//                 <p className="text-sm text-ink-faint mt-1 leading-relaxed">{c.blurb}</p>
//               </div>
//               <p className="text-sm font-semibold text-ink mt-auto pt-2">
//                 From ${c.basePrice}
//                 <span className="text-ink-faint font-normal"> avg. call-out</span>
//               </p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
