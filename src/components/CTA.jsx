export default function CTA() {
  return (
    <section id="pros" className="bg-ink text-canvas">
      <div className="container-content py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
            Do the work? Meridian sends the leads.
          </h2>
          <p className="mt-4 text-canvas/75 max-w-md leading-relaxed">
            Licensed pros keep 100% of their rate, set their own schedule, and
            only pay when a job is booked. No monthly subscription.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:justify-end gap-3">
          <a href="#" className="px-6 py-3.5 rounded-sm bg-brass text-ink font-semibold text-[15px] hover:bg-brass-dark hover:text-canvas transition-colors text-center">
            Apply as a pro
          </a>
          <a href="#" className="px-6 py-3.5 rounded-sm border border-canvas/30 text-canvas font-semibold text-[15px] hover:border-canvas transition-colors text-center">
            See how it works
          </a>
        </div>
      </div>
    </section>
  )
}
