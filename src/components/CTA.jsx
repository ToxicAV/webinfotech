import { useState } from "react";
import { Icon } from "./Icons.jsx";

export default function CTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="pros"
      className="relative overflow-hidden bg-ink text-canvas"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Ambient lights */}
        <div className="absolute -top-32 -right-20 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />

        <div className="absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-brass/10 blur-3xl" />

      </div>

      <div className="container-content relative py-16 md:py-24">

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-10 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="
                            inline-flex items-center gap-2
                            px-3 py-1.5 rounded-full
                            border border-white/10
                            bg-white/5
                            text-xs font-semibold
                            text-canvas/70
                        ">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-teal opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-teal" />
              </span>

              For licensed professionals
            </div>

            {/* Heading */}
            <h2 className="
                            mt-6
                            font-display font-extrabold
                            text-3xl md:text-5xl
                            tracking-tight
                            leading-[1.05]
                            max-w-xl
                        ">
              Do the work.
              <br />

              <span className="text-brass">
                We'll bring the customers.
              </span>
            </h2>

            <p className="
                            mt-5
                            text-canvas/65
                            max-w-lg
                            leading-relaxed
                            text-[15px] md:text-base
                        ">
              Webinfotech connects licensed professionals with
              homeowners who are actively looking for help.
              Keep your rates, choose your schedule, and only
              pay when you win a job.
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-3 gap-3 mt-8 max-w-xl">

              <div className="
                                rounded-xl border border-white/10
                                bg-white/[0.04]
                                p-4
                                transition-all duration-300
                                hover:bg-white/[0.07]
                                hover:-translate-y-1
                            ">
                <div className="text-brass text-xl">
                  100%
                </div>

                <p className="text-xs text-canvas/50 mt-1">
                  Your rate
                </p>
              </div>

              <div className="
                                rounded-xl border border-white/10
                                bg-white/[0.04]
                                p-4
                                transition-all duration-300
                                hover:bg-white/[0.07]
                                hover:-translate-y-1
                            ">
                <div className="text-brass text-xl">
                  $0
                </div>

                <p className="text-xs text-canvas/50 mt-1">
                  Monthly fee
                </p>
              </div>

              <div className="
                                rounded-xl border border-white/10
                                bg-white/[0.04]
                                p-4
                                transition-all duration-300
                                hover:bg-white/[0.07]
                                hover:-translate-y-1
                            ">
                <div className="text-brass text-xl">
                  24/7
                </div>

                <p className="text-xs text-canvas/50 mt-1">
                  Lead access
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT INTERACTIVE CARD */}
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="
                            relative
                            rounded-3xl
                            border border-white/10
                            bg-white/[0.05]
                            p-5 md:p-6
                            transition-all duration-500
                            hover:border-brass/40
                            hover:-translate-y-2
                        "
          >

            {/* Card glow */}
            <div className={`
                            absolute -top-20 -right-20
                            w-48 h-48 rounded-full
                            bg-brass/10 blur-3xl
                            transition-opacity duration-500
                            ${hovered ? "opacity-100" : "opacity-40"}
                        `} />

            <div className="relative">

              {/* Card header */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-canvas/40">
                    Professional dashboard
                  </p>

                  <h3 className="font-display text-xl font-bold mt-1">
                    Your next job
                  </h3>
                </div>

                <div className="
                                    w-11 h-11
                                    rounded-xl
                                    bg-brass
                                    text-ink
                                    flex items-center justify-center
                                    text-lg
                                    transition-transform duration-500
                                    hover:rotate-12
                                ">
                  <Icon
                    name="briefcase"
                    className="w-5 h-5"
                  />
                </div>

              </div>

              {/* Fake lead card */}
              <div className="
                                mt-6
                                rounded-2xl
                                bg-canvas
                                text-ink
                                p-5
                                transition-transform duration-500
                                hover:scale-[1.02]
                            ">

                <div className="flex items-start justify-between">

                  <div>
                    <p className="text-xs text-ink-faint">
                      New homeowner request
                    </p>

                    <h4 className="font-bold mt-1">
                      Kitchen plumbing repair
                    </h4>
                  </div>

                  <span className="
                                        px-2 py-1
                                        rounded-full
                                        bg-teal/10
                                        text-teal
                                        text-[10px]
                                        font-bold
                                    ">
                    NEW
                  </span>

                </div>

                <div className="grid grid-cols-2 gap-3 mt-5">

                  <div className="p-3 rounded-xl bg-panel">
                    <p className="text-[10px] text-ink-faint">
                      Distance
                    </p>

                    <p className="text-sm font-bold mt-1">
                      2.4 miles
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-panel">
                    <p className="text-[10px] text-ink-faint">
                      Est. value
                    </p>

                    <p className="text-sm font-bold mt-1">
                      $350–$520
                    </p>
                  </div>

                </div>

                {/* Match score */}
                <div className="mt-5">

                  <div className="flex justify-between text-xs">
                    <span className="text-ink-faint">
                      Match score
                    </span>

                    <span className="font-bold text-teal">
                      96%
                    </span>
                  </div>

                  <div className="mt-2 h-1.5 bg-ink/10 rounded-full overflow-hidden">

                    <div
                      className={`
                                                h-full bg-teal rounded-full
                                                transition-all duration-1000
                                                ${hovered
                          ? "w-[96%]"
                          : "w-[70%]"
                        }
                                            `}
                    />

                  </div>

                </div>

                {/* Lead action */}
                <button
                  type="button"
                  className="
                                        w-full mt-5
                                        py-3 rounded-xl
                                        bg-ink text-canvas
                                        text-sm font-semibold
                                        transition-all duration-300
                                        hover:bg-teal
                                        hover:text-ink
                                    "
                >
                  View opportunity →
                </button>

              </div>

              {/* Bottom indicators */}
              <div className="
                                flex items-center justify-between
                                mt-5 text-xs
                            ">

                <span className="flex items-center gap-2 text-canvas/45">
                  <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                  Matching homeowners
                </span>

                <span className="text-canvas/30">
                  Updated just now
                </span>

              </div>

            </div>
          </div>

        </div>

        {/* CTA buttons */}
        <div className="
                    mt-10
                    flex flex-col sm:flex-row
                    gap-3
                    lg:absolute lg:left-0
                    lg:bottom-10
                ">

          <a
            href="#"
            className="
                            group
                            px-6 py-3.5
                            rounded-xl
                            bg-brass text-ink
                            font-semibold text-[15px]
                            text-center
                            transition-all duration-300
                            hover:bg-brass-dark
                            hover:-translate-y-1
                        "
          >
            Apply as a pro
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#"
            className="
                            px-6 py-3.5
                            rounded-xl
                            border border-white/20
                            text-canvas
                            font-semibold text-[15px]
                            text-center
                            transition-all duration-300
                            hover:border-white/50
                            hover:bg-white/5
                        "
          >
            See how it works
          </a>

        </div>

      </div>
    </section>
  );
}
// export default function CTA() {
//   return (
//     <section id="pros" className="bg-ink text-canvas">
//       <div className="container-content py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
//         <div>
//           <h2 className="font-display font-extrabold text-3xl text-indigo-100 md:text-4xl tracking-tight leading-tight">
//             Do the work? Webinfotech sends the leads.
//           </h2>
//           <p className="mt-4 text-canvas/75 max-w-md leading-relaxed">
//             Licensed pros keep 100% of their rate, set their own schedule, and
//             only pay when a job is booked. No monthly subscription.
//           </p>
//         </div>
//         <div className="flex flex-col sm:flex-row md:justify-end gap-3">
//           <a href="#" className="px-6 py-3.5 rounded-sm bg-brass text-ink font-semibold text-[15px] hover:bg-brass-dark hover:text-canvas transition-colors text-center">
//             Apply as a pro
//           </a>
//           <a href="#" className="px-6 py-3.5 rounded-sm border border-canvas/30 text-canvas font-semibold text-[15px] hover:border-canvas transition-colors text-center">
//             See how it works
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }
