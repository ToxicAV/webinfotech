const columns = [
  {
    title: 'Services',
    links: ['Electrical', 'Plumbing', 'Heating & Cooling', 'Deep Cleaning', 'Landscaping']
  },
  {
    title: 'Company',
    links: ['About Meridian', 'Careers', 'Press', 'Trust & safety']
  },
  {
    title: 'Resources',
    links: ['Cost guides', 'Help center', 'Pro directory', 'Referral program']
  },
  {
    title: 'For professionals',
    links: ['Apply as a pro', 'How payouts work', 'Insurance requirements']
  }
]

export default function Footer() {
  return (
    <footer className="bg-teal-dark text-canvas">
      <div className="container-content py-14 grid sm:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-8 h-8 rounded-sm bg-canvas text-teal-dark">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 16V8l7 5 7-5v8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="font-display font-extrabold text-lg">Meridian</span>
          </div>
          <p className="mt-4 text-sm text-canvas/70 max-w-xs leading-relaxed">
            A booking platform for licensed home service professionals,
            operating in 340 cities across the country.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold mb-3">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-canvas/70 hover:text-canvas">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-canvas/15">
        <div className="container-content py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-canvas/60">
          <p>© {new Date().getFullYear()} Meridian Home Services, Inc.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-canvas">Privacy</a>
            <a href="#" className="hover:text-canvas">Terms</a>
            <a href="#" className="hover:text-canvas">Licenses by state</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
