// A small set of consistent line icons (24x24, 1.75 stroke) so the page
// doesn't depend on an external icon library. Each icon is purpose-built
// for a service category rather than a generic symbol set.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
}

export function Icon({ name, className = 'w-6 h-6' }) {
  const props = { viewBox: '0 0 24 24', className, ...base }
  switch (name) {
    case 'bolt':
      return (
        <svg {...props}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      )
    case 'drop':
      return (
        <svg {...props}>
          <path d="M12 3c3.2 4 6 7.4 6 11a6 6 0 0 1-12 0c0-3.6 2.8-7 6-11Z" />
        </svg>
      )
    case 'gauge':
      return (
        <svg {...props}>
          <path d="M4 15a8 8 0 1 1 16 0" />
          <path d="M12 15l4-5" />
          <path d="M12 15h.01" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg {...props}>
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="M12 9a3 3 0 0 0 3 3 3 3 0 0 0-3 3 3 3 0 0 0-3-3 3 3 0 0 0 3-3Z" />
        </svg>
      )
    case 'leaf':
      return (
        <svg {...props}>
          <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" />
          <path d="M5 19c2-4 5-7 9-9" />
        </svg>
      )
    case 'wrench':
      return (
        <svg {...props}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
        </svg>
      )
    case 'roof':
      return (
        <svg {...props}>
          <path d="M3 12 12 4l9 8" />
          <path d="M6 11v9h12v-9" />
        </svg>
      )
    case 'brush':
      return (
        <svg {...props}>
          <path d="M17 3c1.5 1.5 1.5 3.5 0 5l-6 6-3-3 6-6c1.5-1.5 3.5-1.5 5-2Z" />
          <path d="M8 14l-4 7 7-4" />
        </svg>
      )
    case 'search':
      return (
        <svg {...props}>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...props}>
          <path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
          <circle cx="12" cy="9" r="2.4" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'chevron':
      return (
        <svg {...props}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...props}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg {...props}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      )
    case 'star':
      return (
        <svg {...props}>
          <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3.5Z" />
        </svg>
      )
    default:
      return null
  }
}
