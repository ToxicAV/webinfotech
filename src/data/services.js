export const categories = [
  {
    id: 'electrical',
    name: 'Electrical',
    blurb: 'Panel upgrades, rewiring, fixture installs.',
    basePrice: 140,
    icon: 'bolt'
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    blurb: 'Leaks, repipes, water heaters, fixtures.',
    basePrice: 120,
    icon: 'drop'
  },
  {
    id: 'hvac',
    name: 'Heating & Cooling',
    blurb: 'Furnace, AC, and duct service or install.',
    basePrice: 165,
    icon: 'gauge'
  },
  {
    id: 'cleaning',
    name: 'Deep Cleaning',
    blurb: 'One-time or recurring home cleaning.',
    basePrice: 95,
    icon: 'sparkle'
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    blurb: 'Lawn care, planting, drainage, hardscape.',
    basePrice: 110,
    icon: 'leaf'
  },
  {
    id: 'handyman',
    name: 'Handyman',
    blurb: 'Repairs, mounting, small carpentry jobs.',
    basePrice: 85,
    icon: 'wrench'
  },
  {
    id: 'roofing',
    name: 'Roofing',
    blurb: 'Inspections, patch repair, full replacement.',
    basePrice: 210,
    icon: 'roof'
  },
  {
    id: 'painting',
    name: 'Painting',
    blurb: 'Interior, exterior, and cabinet refinishing.',
    basePrice: 130,
    icon: 'brush'
  }
]

export const megaMenuGroups = [
  {
    title: 'Inside the home',
    items: ['Electrical', 'Plumbing', 'Deep Cleaning', 'Handyman']
  },
  {
    title: 'Outside the home',
    items: ['Landscaping', 'Roofing', 'Painting', 'Gutter Service']
  },
  {
    title: 'Comfort systems',
    items: ['Heating & Cooling', 'Water Heaters', 'Air Quality', 'Insulation']
  }
]
