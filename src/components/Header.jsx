import { useEffect, useRef, useState } from 'react'
import { Icon } from './Icons.jsx'
import { megaMenuGroups } from '../data/services.js'
import logo from '../../public/logo-white-webtech.svg'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false) // mega menu (desktop)
  const [drawerOpen, setDrawerOpen] = useState(false) // mobile drawer
  const menuRef = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    function onKey(e) {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        setDrawerOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-slate-400 panel/95 backdrop-blur border-b border-line">
      <div className="container-content flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0 ">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            {/* <span className="grid place-items-center w-8 h-8 rounded-sm bg-ink text-brass">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 16V8l7 5 7-5v8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span> */}
            <img className=' h-16 w-32 md:h-40 md:w-56' src={logo} alt="Meridian Logo" />
            {/* <span className="font-display font-extrabold text-lg tracking-tight">Meridian</span> */}
          </a>
        </div>
        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" ref={menuRef}>
          <button
            className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-ink-soft hover:text-ink rounded-sm cursor-pointer"
            aria-expanded={menuOpen}
            aria-haspopup="true"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Browse services
            <Icon name="chevron" className={`w-4 h-4 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
          </button>
          <a href="#how" className="px-3 py-2 text-[15px] font-medium text-ink-soft hover:text-ink rounded-sm">How it works</a>
          <a href="#estimate" className="px-3 py-2 text-[15px] font-medium text-ink-soft hover:text-ink rounded-sm">Get an estimate</a>
          <a href="#pros" className="px-3 py-2 text-[15px] font-medium text-ink-soft hover:text-ink rounded-sm">For professionals</a>

          {/* Mega menu panel */}
          {menuOpen && (
            <div className="absolute left-0 right-0 top-full bg-panel border-b border-line shadow-lifted">
              <div className="container-content py-8 grid grid-cols-4 gap-8">
                {megaMenuGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-sm font-semibold text-ink mb-3">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li key={item}>
                          <a href="#categories" className="text-[15px] text-ink-faint hover:text-teal" onClick={() => setMenuOpen(false)}>
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="bg-teal-dark rounded-sm p-5 text-canvas flex flex-col justify-between">
                  <div>
                    <p className="font-display font-bold text-lg leading-tight">Not sure what you need?</p>
                    <p className="text-sm text-canvas/80 mt-1.5">Answer three questions and we'll match the right pro.</p>
                  </div>
                  <a href="#estimate" className="mt-4 text-sm font-semibold text-brass-light" onClick={() => setMenuOpen(false)}>
                    Start the estimate
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* Right side: search + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <label className="relative">
            <span className="sr-only">Search services</span>
            <Icon name="search" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
            <input
              type="text"
              placeholder="Search services"
              className="w-48 lg:w-56 pl-9 pr-3 py-2 text-sm rounded-sm border border-line bg-canvas focus:bg-panel outline-none focus:border-teal transition-colors"
            />
          </label>
          <a
            href="#estimate"
            className="flex items-center justify-center space-x-0 px-4 py-2 text-sm font-semibold rounded-sm bg-ink text-canvas hover:bg-teal-dark transition-colors"
          >
            Book a pro
            <svg width="20" height="20" viewBox="0 0 300 300">
              <defs>
                <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="gold" />
                  <stop offset="50%" stop-color="orange" />
                  <stop offset="100%" stop-color="red" />
                </linearGradient>
              </defs>
              <polygon
                points="150,20 180,110 275,110 198,165
                    225,260 150,205 75,260 102,165
                    25,110 120,110"
                fill="url(#starGradient)"
                stroke="black"
                stroke-width="4"
              />
              <polygon
                points="150,20 180,110 275,110 198,165
                    225,260 150,205 75,260 102,165
                    25,110 120,110"
                fill="none"
                stroke="white"
                stroke-width="2"
                opacity="0.5"
                transform="translate(10,10)"
              />
            </svg>
          </a>

        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 -mr-2"
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <Icon name={drawerOpen ? 'close' : 'menu'} className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="lg:hidden border-t border-line bg-panel">
          <div className="container-content py-5">
            <label className="relative block mb-5">
              <span className="sr-only">Search services</span>
              <Icon name="search" className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" />
              <input
                type="text"
                placeholder="Search services"
                className="w-full pl-9 pr-3 py-2.5 text-sm rounded-sm border border-line bg-canvas outline-none focus:border-teal"
              />
            </label>

            {megaMenuGroups.map((group) => (
              <div key={group.title} className="mb-5">
                <h3 className="text-sm font-semibold text-ink mb-2">{group.title}</h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <a href="#categories" className="text-[15px] text-ink-faint" onClick={() => setDrawerOpen(false)}>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="flex flex-col gap-2 pt-2 border-t border-line">
              <a href="#how" className="py-2 text-[15px] font-medium" onClick={() => setDrawerOpen(false)}>How it works</a>
              <a href="#pros" className="py-2 text-[15px] font-medium" onClick={() => setDrawerOpen(false)}>For professionals</a>
              <a
                href="#estimate"
                className="mt-2 text-center px-4 py-2.5 text-sm font-semibold rounded-sm bg-ink text-canvas"
                onClick={() => setDrawerOpen(false)}
              >
                Book a pro
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
