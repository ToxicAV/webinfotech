import { useState } from "react";
import { Icon } from "./Icons.jsx";
import { categories } from "../data/services.js";

export default function Hero() {
    const [service, setService] = useState("");
    const [zip, setZip] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);

        document
            .getElementById("estimate")
            ?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section
            id="top"
            className="relative overflow-hidden border-b border-line bg-canvas"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-brass/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />

                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#1B2430 1px, transparent 1px), linear-gradient(90deg, #1B2430 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            <div className="container-content relative grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-10 py-14 md:py-20 items-center">

                {/* ================= LEFT ================= */}
                <div>

                    {/* Small badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-line bg-panel text-sm font-medium text-ink-faint">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inline-flex w-full h-full rounded-full bg-teal opacity-50 animate-ping" />
                            <span className="relative inline-flex w-2 h-2 rounded-full bg-teal" />
                        </span>

                        Trusted home services
                    </div>

                    <h1 className="mt-5 font-extrabold text-slate-800 text-[2.7rem] leading-[0.98] uppercase md:text-6xl md:leading-[1.02] tracking-tight max-w-2xl">
                        Home repairs,
                        <span className="block text-teal">
                            handled right.
                        </span>
                    </h1>

                    <p className="mt-5 text-lg text-ink-faint max-w-xl leading-relaxed">
                        Find trusted professionals for repairs, maintenance,
                        renovations, and everything your home needs.
                    </p>

                    {/* Search */}
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 bg-panel border border-line rounded-md p-2 flex flex-col sm:flex-row gap-2 max-w-2xl shadow-card"
                    >
                        <label className="flex-1 flex items-center gap-2 px-3 py-2.5">
                            <Icon
                                name="search"
                                className="w-4 h-4 text-ink-faint shrink-0"
                            />

                            <input
                                value={service}
                                onChange={(e) =>
                                    setService(e.target.value)
                                }
                                type="text"
                                placeholder="What do you need done?"
                                className="w-full text-[15px] outline-none bg-transparent placeholder:text-ink-faint"
                            />
                        </label>

                        <div className="hidden sm:block w-px bg-line my-1" />

                        <label className="flex items-center gap-2 px-3 py-2.5 sm:w-36">
                            <Icon
                                name="pin"
                                className="w-4 h-4 text-ink-faint shrink-0"
                            />

                            <input
                                value={zip}
                                onChange={(e) =>
                                    setZip(e.target.value)
                                }
                                type="text"
                                inputMode="numeric"
                                placeholder="ZIP code"
                                className="w-full text-[15px] outline-none bg-transparent placeholder:text-ink-faint"
                            />
                        </label>

                        <button
                            type="submit"
                            className="px-6 py-3 rounded-md bg-brass text-ink font-bold text-[15px] hover:bg-brass-dark hover:text-canvas transition-all hover:-translate-y-0.5"
                        >
                            Find pros
                        </button>
                    </form>

                    {submitted && (
                        <p
                            className="mt-2 text-sm text-teal"
                            role="status"
                        >
                            Jump to the estimate tool below to see pricing
                            for {service || "your project"}.
                        </p>
                    )}

                    {/* Popular */}
                    <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-faint">
                        <span>Popular:</span>

                        {categories.slice(0, 4).map((c) => (
                            <a
                                key={c.id}
                                href="#categories"
                                className="underline decoration-line underline-offset-4 hover:text-teal hover:decoration-teal transition-colors"
                            >
                                {c.name}
                            </a>
                        ))}
                    </div>

                    {/* Trust stats */}
                    <div className="mt-9 flex flex-wrap gap-7">
                        <div>
                            <p className="text-2xl font-bold text-ink">
                                32K+
                            </p>
                            <p className="text-xs text-ink-faint">
                                Verified pros
                            </p>
                        </div>

                        <div className="w-px bg-line" />

                        <div>
                            <p className="text-2xl font-bold text-ink">
                                4.9/5
                            </p>
                            <p className="text-xs text-ink-faint">
                                Average rating
                            </p>
                        </div>

                        <div className="w-px bg-line" />

                        <div>
                            <p className="text-2xl font-bold text-ink">
                                120K+
                            </p>
                            <p className="text-xs text-ink-faint">
                                Jobs completed
                            </p>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="relative min-h-[460px]">

                    {/* Main house card */}
                    <div className="absolute inset-x-4 top-8 bottom-4 bg-[#1B2430] rounded-2xl overflow-hidden shadow-lifted">

                        {/* Background grid */}
                        <div
                            className="absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                            }}
                        />

                        {/* Glow */}
                        <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-brass/20 blur-3xl" />

                        {/* House */}
                        <svg
                            viewBox="0 0 480 420"
                            className="relative w-full h-full"
                            role="img"
                            aria-label="Home service illustration"
                        >
                            {/* House */}
                            <g
                                stroke="#E8B872"
                                strokeWidth="3"
                                fill="none"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            >
                                <path d="M100 210 240 90 380 210" />

                                <path d="M130 205V340H350V205" />

                                <path d="M210 340V260H270V340" />

                                <rect
                                    x="155"
                                    y="235"
                                    width="38"
                                    height="38"
                                />

                                <rect
                                    x="287"
                                    y="235"
                                    width="38"
                                    height="38"
                                />
                            </g>

                            {/* Door */}
                            <rect
                                x="218"
                                y="275"
                                width="44"
                                height="65"
                                rx="2"
                                fill="#C98A34"
                                opacity="0.9"
                            />

                            {/* Windows */}
                            <g stroke="#EDEFEB" strokeWidth="2">
                                <line x1="174" y1="235" x2="174" y2="273" />
                                <line x1="155" y1="254" x2="193" y2="254" />

                                <line x1="306" y1="235" x2="306" y2="273" />
                                <line x1="287" y1="254" x2="325" y2="254" />
                            </g>

                            {/* Chimney */}
                            <path
                                d="M315 140V95H350V175"
                                stroke="#E8B872"
                                strokeWidth="3"
                                fill="none"
                            />

                            {/* Wrench */}
                            <g
                                transform="translate(350 55) rotate(25)"
                                stroke="#E8B872"
                                strokeWidth="5"
                                fill="none"
                                strokeLinecap="round"
                            >
                                <path d="M15 5a20 20 0 0 0-26 27L-55 75l17 17 53-54A20 20 0 0 0 40 15L25 30 10 15Z" />
                            </g>

                            {/* Check */}
                            <circle
                                cx="105"
                                cy="110"
                                r="28"
                                fill="#1F5C52"
                            />

                            <path
                                d="M91 110l9 9 19-22"
                                stroke="white"
                                strokeWidth="4"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    {/* ================= FLOATING CARDS ================= */}

                    {/* Verified card */}
                    <div className="absolute top-0 right-0 bg-panel border border-line rounded-xl shadow-lifted px-4 py-3 flex items-center gap-3 animate-[float_4s_ease-in-out_infinite]">
                        <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                            <Icon
                                name="shield"
                                className="w-5 h-5 text-teal"
                            />
                        </div>

                        <div>
                            <p className="font-bold text-sm">
                                Verified Pro
                            </p>

                            <p className="text-xs text-ink-faint">
                                License checked
                            </p>
                        </div>

                        <span className="text-teal text-lg">✓</span>
                    </div>

                    {/* Rating card */}
                    <div className="absolute left-0 top-28 bg-panel border border-line rounded-xl shadow-lifted px-4 py-3">
                        <div className="flex gap-1 text-brass">
                            ★ ★ ★ ★ ★
                        </div>

                        <p className="mt-1 text-sm font-semibold">
                            4.9 average rating
                        </p>

                        <p className="text-xs text-ink-faint">
                            From 18,000+ homeowners
                        </p>
                    </div>

                    {/* Service card */}
                    <div className="absolute bottom-0 right-0 bg-panel border border-line rounded-xl shadow-lifted px-4 py-4 w-52">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-sm">
                                Today's demand
                            </p>

                            <span className="text-xs text-teal font-semibold">
                                LIVE
                            </span>
                        </div>

                        <div className="mt-3 space-y-2">
                            <div className="flex items-center justify-between text-xs">
                                <span>Plumbing</span>
                                <span className="font-bold">82%</span>
                            </div>

                            <div className="h-1.5 bg-line rounded-full overflow-hidden">
                                <div className="h-full w-[82%] bg-teal rounded-full" />
                            </div>

                            <div className="flex items-center justify-between text-xs">
                                <span>Electrical</span>
                                <span className="font-bold">67%</span>
                            </div>

                            <div className="h-1.5 bg-line rounded-full overflow-hidden">
                                <div className="h-full w-[67%] bg-brass rounded-full" />
                            </div>
                        </div>
                    </div>

                    {/* Location pill */}
                    <div className="absolute bottom-20 left-2 bg-[#1B2430] text-white rounded-full px-4 py-2 shadow-lifted flex items-center gap-2">
                        <Icon
                            name="pin"
                            className="w-4 h-4 text-brass"
                        />

                        <span className="text-xs font-medium">
                            Pros near your location
                        </span>

                        <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Floating animation */}
            <style>
                {`
                    @keyframes float {
                        0%, 100% {
                            transform: translateY(0);
                        }
                        50% {
                            transform: translateY(-8px);
                        }
                    }
                `}
            </style>
        </section>
    );
}
// import { useState } from 'react'
// import { Icon } from './Icons.jsx'
// import { categories } from '../data/services.js'

// export default function Hero() {
//   const [service, setService] = useState('')
//   const [zip, setZip] = useState('')
//   const [submitted, setSubmitted] = useState(false)

//   function handleSubmit(e) {
//     e.preventDefault()
//     setSubmitted(true)
//     document.getElementById('estimate')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <section id="top" className="relative overflow-hidden border-b border-line">
//       <div className="container-content grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 py-14 md:py-20 items-center">
//         {/* Left: headline + search */}
//         <div>
//           <h1 className=" font-extrabold text-slate-800 text-[2.5rem] leading-1 uppercase md:text-6xl md:leading-[1.03] tracking-tight max-w-xl">
//             Home repairs, handled by someone who's done it before.
//           </h1>
//           <p className="mt-5 text-lg text-ink-faint  max-w-md leading-relaxed">
//             Webtech checks licenses, insurance, and past work before a pro ever
//             gets your address. Post a job, compare quotes, book with confidence.
//           </p>

//           <form onSubmit={handleSubmit} className="mt-8 bg-panel border border-line rounded-sm p-2 flex flex-col sm:flex-row gap-2 max-w-xl shadow-card">
//             <label className="flex-1 flex items-center gap-2 px-3 py-2.5">
//               <Icon name="search" className="w-4 h-4 text-ink-faint shrink-0" />
//               <input
//                 value={service}
//                 onChange={(e) => setService(e.target.value)}
//                 type="text"
//                 placeholder="What do you need done?"
//                 className="w-full text-[15px] outline-none bg-transparent placeholder:text-ink-faint"
//               />
//             </label>
//             <div className="hidden sm:block w-px bg-line my-1" />
//             <label className="flex items-center gap-2 px-3 py-2.5 sm:w-36">
//               <Icon name="pin" className="w-4 h-4 text-ink-faint shrink-0" />
//               <input
//                 value={zip}
//                 onChange={(e) => setZip(e.target.value)}
//                 type="text"
//                 inputMode="numeric"
//                 placeholder="ZIP code"
//                 className="w-full text-[15px] outline-none bg-transparent placeholder:text-ink-faint"
//               />
//             </label>
//             <button
//               type="submit"
//               className="px-5 py-2.5 rounded-sm bg-brass text-ink font-semibold text-[15px] hover:bg-brass-dark hover:text-canvas transition-colors"
//             >
//               Find pros
//             </button>
//           </form>
//           {submitted && (
//             <p className="mt-2 text-sm text-teal" role="status">
//               Jump to the estimate tool below to see pricing for {service || 'your project'}.
//             </p>
//           )}

//           <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-faint">
//             <span>Popular:</span>
//             {categories.slice(0, 4).map((c) => (
//               <a key={c.id} href="#categories" className="underline decoration-line underline-offset-4 hover:text-teal hover:decoration-teal">
//                 {c.name}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Right: illustration + floating stat */}
//         <div className="relative">
//           <HeroIllustration />
//           <div className="absolute -bottom-4 -left-4 md:-left-8 bg-panel border border-line rounded-sm shadow-lifted px-5 py-4 max-w-xs">
//             <div className="flex items-center gap-2">
//               <Icon name="shield" className="w-5 h-5 text-teal" />
//               <span className="font-display font-bold text-2xl leading-none">32,000+</span>
//             </div>
//             <p className="text-sm text-ink-faint mt-1.5">background-checked pros verified this year</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function HeroIllustration() {
//   return (
//     <svg viewBox="0 0 480 420" className="w-full h-auto" role="img" aria-label="Line illustration of a house cross-section with a wrench and a checklist">
//       <rect x="0" y="0" width="480" height="420" rx="4" fill="#1B2430" />
//       <g stroke="#EDEFEB" strokeWidth="1.4" opacity="0.18">
//         {Array.from({ length: 9 }).map((_, i) => (
//           <line key={i} x1={0} y1={i * 52} x2={480} y2={i * 52} />
//         ))}
//       </g>
//       {/* House outline */}
//       <g stroke="#E8B872" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
//         <path d="M120 230 240 130 360 230" />
//         <path d="M150 230V330H330V230" />
//         <path d="M215 330V270H265V330" />
//         <rect x="175" y="255" width="30" height="30" />
//         <rect x="275" y="255" width="30" height="30" />
//       </g>
//       {/* Wrench accent */}
//       <g transform="translate(300 90) rotate(18)" stroke="#C98A34" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
//         <path d="M20 4a12 12 0 0 0-16.2 16.2L-30 54l10 10 34-33.8A12 12 0 0 0 30 14l-8 8-6-6 8-8Z" />
//       </g>
//       {/* Checklist card */}
//       <g transform="translate(70 60)">
//         <rect width="120" height="86" rx="3" fill="#EDEFEB" opacity="0.95" />
//         <g stroke="#1F5C52" strokeWidth="2.4" strokeLinecap="round">
//           <path d="M14 22h92" opacity="0.5" />
//           <path d="M14 40h64" opacity="0.5" />
//           <path d="M14 58h78" opacity="0.5" />
//         </g>
//         <g stroke="#C98A34" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M96 55l6 6 12-14" />
//         </g>
//       </g>
//     </svg>
//   )
// }
