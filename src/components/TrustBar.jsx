import { useState } from "react";

const stats = [
  {
    value: "4.8/5",
    label: "average rating across 210,000 completed jobs",
    title: "Highly Rated",
    icon: "★",
    detail: "Homeowners consistently rate our verified professionals highly.",
    progress: 96,
  },
  {
    value: "48 hrs",
    label: "typical time from request to first quote",
    title: "Fast Quotes",
    icon: "⚡",
    detail: "Most homeowners receive their first professional quote within 48 hours.",
    progress: 82,
  },
  {
    value: "100%",
    label: "pros carry active license and insurance",
    title: "Fully Verified",
    icon: "✓",
    detail: "Every professional is checked for active licensing and insurance.",
    progress: 100,
  },
  {
    value: "$2M",
    label: "workmanship guarantee on every booking",
    title: "Protected Work",
    icon: "◆",
    detail: "Every eligible booking comes with up to $2M in workmanship protection.",
    progress: 90,
  },
];

export default function TrustBar() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative overflow-hidden bg-ink text-canvas">

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-teal/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-40 w-40 rounded-full bg-brass/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container-content relative py-8 md:py-10">

        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-7">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-light font-semibold">
              Why homeowners trust us
            </p>

            <h2 className="mt-1 font-display text-xl md:text-2xl font-bold">
              Numbers that speak for themselves.
            </h2>
          </div>

          <p className="text-xs text-canvas/50">
            Hover or tap a statistic
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">

          {stats.map((s, i) => {
            const isActive = active === i;

            return (
              <button
                key={s.label}
                type="button"
                onClick={() =>
                  setActive(isActive ? null : i)
                }
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className={`
                                    group relative text-left
                                    rounded-xl border
                                    p-4 md:p-5
                                    overflow-hidden
                                    transition-all duration-500
                                    min-h-48
                                    ${isActive
                    ? "border-brass/60 bg-white/[0.09] -translate-y-1"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }
                                `}
              >

                {/* Animated glow */}
                <div
                  className={`
                                        absolute -right-10 -top-10
                                        w-24 h-24 rounded-full
                                        bg-brass/10 blur-2xl
                                        transition-all duration-500
                                        ${isActive
                      ? "scale-[2] opacity-100"
                      : "opacity-0"
                    }
                                    `}
                />

                {/* Top row */}
                <div className="relative flex items-start justify-between">

                  <span
                    className={`
                                            flex items-center justify-center
                                            w-9 h-9 rounded-lg
                                            text-lg
                                            transition-all duration-500
                                            ${isActive
                        ? "bg-brass text-ink rotate-3 scale-110"
                        : "bg-white/5 text-brass-light"
                      }
                                        `}
                  >
                    {s.icon}
                  </span>

                  <span
                    className={`
                                            text-[10px] uppercase tracking-wider
                                            transition-all duration-300
                                            ${isActive
                        ? "text-brass-light"
                        : "text-canvas/30"
                      }
                                        `}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Value */}
                <p
                  className={`
                                        relative mt-4
                                        font-display font-extrabold
                                        text-2xl md:text-3xl
                                        transition-all duration-500
                                        ${isActive
                      ? "text-brass-light"
                      : "text-canvas"
                    }
                                    `}
                >
                  {s.value}
                </p>

                {/* Title */}
                <p className="relative mt-1 text-sm font-semibold">
                  {s.title}
                </p>

                {/* Progress */}
                <div className="relative mt-3 h-1 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-brass transition-all duration-700"
                    style={{
                      width: isActive
                        ? `${s.progress}%`
                        : "20%",
                    }}
                  />
                </div>

                {/* Expanded description */}
                <div
                  className={`
                                        relative overflow-hidden
                                        transition-all duration-500
                                        ${isActive
                      ? "max-h-20 opacity-100 mt-3"
                      : "max-h-0 opacity-0 mt-0"
                    }
                                    `}
                >
                  <p className="text-xs leading-relaxed text-canvas/60">
                    {s.detail}
                  </p>
                </div>

                {/* Original label */}
                {!isActive && (
                  <p className="relative mt-2 text-xs text-canvas/50 leading-snug">
                    {s.label}
                  </p>
                )}

                {/* Arrow */}
                <span
                  className={`
                                        absolute bottom-4 right-4
                                        text-xs
                                        transition-all duration-300
                                        ${isActive
                      ? "text-brass translate-x-1"
                      : "text-canvas/20"
                    }
                                    `}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom trust indicator */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-canvas/40">
          <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
          Data updated continuously from completed bookings
        </div>
      </div>
    </section>
  );
}
// const stats = [
//   { value: '4.8/5', label: 'average rating across 210,000 completed jobs' },
//   { value: '48 hrs', label: 'typical time from request to first quote' },
//   { value: '100%', label: 'pros carry active license and insurance' },
//   { value: '$2M', label: 'workmanship guarantee on every booking' }
// ]

// export default function TrustBar() {
//   return (
//     <section className="bg-ink text-canvas">
//       <div className="container-content py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
//         {stats.map((s) => (
//           <div key={s.label}>
//             <p className="font-display font-extrabold text-2xl md:text-3xl text-brass-light">{s.value}</p>
//             <p className="text-sm text-canvas/70 mt-1 leading-snug">{s.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
