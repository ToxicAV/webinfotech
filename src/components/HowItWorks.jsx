const steps = [
  {
    title: 'Describe the job',
    body: 'Tell us the trade, the scope, and when you need someone. Takes about ninety seconds.'
  },
  {
    title: 'Compare matched pros',
    body: 'We surface three to five vetted pros nearby with real reviews and license status.'
  },
  {
    title: 'Book and pay through Meridian',
    body: 'Your payment is held until the job is signed off, and every booking is covered by our guarantee.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 md:py-24 border-b border-line">
      <div className="container-content">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-md mb-12">
          From request to finished job.
        </h2>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
          {steps.map((step, i) => (
            <div key={step.title} className="relative pl-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display font-extrabold text-3xl text-line select-none">{String(i + 1).padStart(2, '0')}</span>
                <div className="h-px flex-1 bg-line" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-ink-faint leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
