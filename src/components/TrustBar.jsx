const stats = [
  { value: '4.8/5', label: 'average rating across 210,000 completed jobs' },
  { value: '48 hrs', label: 'typical time from request to first quote' },
  { value: '100%', label: 'pros carry active license and insurance' },
  { value: '$2M', label: 'workmanship guarantee on every booking' }
]

export default function TrustBar() {
  return (
    <section className="bg-ink text-canvas">
      <div className="container-content py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display font-extrabold text-2xl md:text-3xl text-brass-light">{s.value}</p>
            <p className="text-sm text-canvas/70 mt-1 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
