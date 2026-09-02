import { useState } from 'react'

// Sub-component: Newsletter subscription form
function NewsletterForm({ onSubscribe }) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
    onSubscribe?.(email)
  }

  if (subscribed) {
    return (
      <div className="rounded-xl border border-teal/30 bg-teal/10 p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal text-ink flex items-center justify-center font-bold">
            ✓
          </div>
          <div>
            <p className="font-semibold">You're on the list!</p>
            <p className="text-sm text-canvas/50 mt-0.5">We'll keep you updated.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="
          flex-1 min-w-0
          px-4 py-3.5
          rounded-lg
          bg-canvas/[0.07]
          border border-canvas/10
          text-canvas
          placeholder:text-canvas/35
          outline-none
          focus:border-teal/60
          focus:ring-2
          focus:ring-teal/10
          transition
        "
      />
      <button
        type="submit"
        className="
          px-5 py-3.5
          rounded-lg
          bg-brass
          text-ink
          font-bold
          text-sm
          hover:bg-brass-dark
          hover:-translate-y-0.5
          active:translate-y-0
          transition-all
          whitespace-nowrap
        "
      >
        Subscribe →
      </button>
    </form>
  )
}

// Sub-component: Social links
function SocialLinks({ socials }) {
  return (
    <div className="flex items-center gap-2">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href || '#'}
          aria-label={social.name}
          className="
            w-9 h-9 rounded-lg border border-canvas/10
            bg-canvas/3 flex items-center justify-center
            text-xs font-bold text-canvas/50
            hover:text-canvas hover:bg-canvas/10 hover:border-canvas/20
            hover:-translate-y-1 transition-all
          "
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}

// Sub-component: Stats grid
function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map(({ value, label }) => (
        <div
          key={label}
          className="
            group rounded-xl border border-canvas/10
            bg-canvas/3 p-4
            hover:bg-canvas/[0.07] hover:border-teal/30
            transition-all
          "
        >
          <div className="font-display font-extrabold text-xl md:text-2xl text-teal group-hover:scale-105 origin-left transition-transform">
            {value}
          </div>
          <div className="mt-1 text-xs text-canvas/40">{label}</div>
        </div>
      ))}
    </div>
  )
}

// Sub-component: Footer links columns
function FooterLinks({ columns }) {
  return (
    <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {columns.map((col) => (
        <div key={col.title}>
          <h3 className="text-sm font-bold text-canvas mb-4">{col.title}</h3>
          <ul className="space-y-3">
            {col.links.map((link) => (
              <li key={link}>
                <a
                  href={link.href || '#'}
                  className="
                    inline-flex items-center
                    text-sm
                    text-canvas/50
                    hover:text-canvas
                    hover:translate-x-1
                    transition-all
                  "
                >
                  {link.label || link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// Sub-component: Trust bar
function TrustBar({ trustItems }) {
  return (
    <div className="border-t border-b border-canvas/10 py-5">
      <div className="flex flex-wrap items-center justify-center md:justify-between gap-5 text-xs text-canvas/45">
        {trustItems.map((item) => (
          <span key={item} className="flex items-center gap-2">
            <span className="text-teal font-bold">✓</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// Main Footer Component
export default function Footer({
  brandName = 'Webinfotech',
  brandIcon = 'W',
  brandDescription = 'A smarter booking platform connecting homeowners with licensed, trusted home service professionals.',
  columns = [
    {
      title: 'Services',
      links: [
        'Electrical',
        'Plumbing',
        'Heating & Cooling',
        'Deep Cleaning',
        'Landscaping',
      ],
    },
    {
      title: 'Company',
      links: [
        'About Meridian',
        'Careers',
        'Press',
        'Trust & safety',
      ],
    },
    {
      title: 'Resources',
      links: [
        'Cost guides',
        'Help center',
        'Pro directory',
        'Referral program',
      ],
    },
    {
      title: 'For professionals',
      links: [
        'Apply as a pro',
        'How payouts work',
        'Insurance requirements',
      ],
    },
  ],
  socials = [
    { name: 'Instagram', icon: '◎' },
    { name: 'Facebook', icon: 'f' },
    { name: 'LinkedIn', icon: 'in' },
    { name: 'X', icon: '𝕏' },
  ],
  stats = [
    { value: '340+', label: 'Cities served' },
    { value: '32K+', label: 'Verified pros' },
    { value: '4.8/5', label: 'Average rating' },
    { value: '$2M', label: 'Guarantee coverage' },
  ],
  trustItems = [
    'Licensed professionals',
    'Secure payments',
    'Verified reviews',
    'Workmanship guarantee',
  ],
  ctaTitle = 'Home maintenance,',
  ctaDescription = 'Get practical home-care tips, seasonal reminders and exclusive offers delivered to your inbox.',
  onNewsletterSubscribe = null,
}) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden bg-teal-dark text-canvas">
      {/* BACKGROUND DECORATIONS */}
      <div
        className="absolute inset-0 opacity-[0.045] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute -top-40 -right-40 w-105 h-105 rounded-full bg-teal/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-105 h-105 rounded-full bg-brass/10 blur-3xl pointer-events-none" />

      <div className="container-content relative">
        {/* TOP CTA SECTION */}
        <div className="py-12 md:py-16 border-b border-canvas/10">
          <div className="rounded-2xl border border-canvas/10 bg-canvas/4 backdrop-blur-sm overflow-hidden">
            <div className="p-6 md:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-canvas/10 bg-canvas/5 text-xs font-semibold uppercase tracking-[0.16em] text-canvas/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
                  Stay in the loop
                </div>
                <h2 className="font-display font-extrabold text-2xl md:text-4xl tracking-tight leading-tight">
                  {ctaTitle}
                  <br />
                  <span className="text-teal">made easier.</span>
                </h2>
                <p className="mt-3 text-sm md:text-base text-canvas/60 max-w-md leading-relaxed">
                  {ctaDescription}
                </p>
              </div>

              {/* Newsletter Section */}
              <div className="w-full lg:max-w-md">
                <NewsletterForm onSubscribe={onNewsletterSubscribe} />
                <p className="mt-3 text-[11px] text-canvas/35">
                  No spam. Just useful things for your home.
                </p>
              </div>
            </div>
          </div>
        </div>
         {/* BRAND + STATS SECTION */}
        <div className="py-12 md:py-14 grid lg:grid-cols-[1.4fr_1fr] gap-12 border-b border-canvas/10">
          {/* Brand */}
          <div>
            <a href="#" className="inline-flex items-center gap-3 group">
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-brass text-ink font-display font-extrabold text-xl group-hover:rotate-6 transition-transform">
                {brandIcon}
              </span>
              <span className="font-display font-extrabold text-2xl tracking-tight p-2">
                {brandName}
              </span>
            </a>

            <p className="mt-5 text-sm text-canvas/55 max-w-sm leading-relaxed">
              {brandDescription}
            </p>

            {/* Social Links */}
            {socials.length > 0 && <div className="mt-6"><SocialLinks socials={socials} /></div>}
          </div>

          {/* Stats */}
          {stats.length > 0 && <StatsGrid stats={stats} />}
        </div>

        {/* FOOTER LINKS */}
        <FooterLinks columns={columns} />

        {/* TRUST STRIP */}
        <TrustBar trustItems={trustItems} />


        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-xs text-canvas/35 text-center md:text-left">
            © {new Date().getFullYear()} {brandName} Home Services, Inc. All rights reserved.
          </p>


          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">

            <a
              href="#"
              className="text-canvas/40 hover:text-canvas transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-canvas/40 hover:text-canvas transition"
            >
              Terms
            </a>

            <a
              href="#"
              className="text-canvas/40 hover:text-canvas transition"
            >
              Licenses by state
            </a>

            <button
              onClick={scrollTop}
              className="
                ml-2
                w-9 h-9
                rounded-lg
                border border-canvas/10
                flex items-center justify-center
                text-canvas/50
                hover:text-canvas
                hover:border-teal/40
                hover:bg-teal/10
                transition-all
              "
              aria-label="Back to top"
            >
              ↑
            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
          LARGE BRAND WATERMARK
      ====================================================== */}

      <div className="relative overflow-hidden pointer-events-none select-none">

        <div
          className="
            font-display
            font-extrabold
            text-[13vw]
            leading-[0.7]
            tracking-[-0.07em]
            text-center
            text-canvas/7
            whitespace-nowrap
            translate-y-2
          "
        >
          {brandName.toUpperCase()}
        </div>

      </div>

    </footer>
  )
}
