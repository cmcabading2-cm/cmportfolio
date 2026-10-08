import { ShoppingCart, Car, Sparkle, PawPrint, type Icon } from '@/components/slab'

/** A featured project: a card in the Projects stack that opens its screenshot. */
export type FeaturedWork = {
  id: string
  category: string
  name: string
  what: string
  result: string
  /** Live site, opened from the pop-up. */
  href: string
  /** Screenshot in public/work/. */
  image: string
  Icon: Icon
  /** A page of its own (a case study). When set, the card goes there instead of opening the pop-up. */
  to?: string
}

export const featuredWork: FeaturedWork[] = [
  {
    id: 'anker',
    category: 'E-commerce Website',
    name: 'Anker',
    what: 'I redesigned the Anker online store to make product discovery and comparison easier across its wide range of chargers and accessories.',
    result: 'The result: a cleaner browsing flow and a faster, more confident path from product page to checkout.',
    href: 'https://anker.ph/',
    image: '/work/anker.webp',
    Icon: ShoppingCart,
  },
  {
    id: 'xpress',
    category: 'Website & Native App',
    name: 'Xpress',
    what: 'Designed a ride-hailing website and mobile app that let riders book, pay, and track their driver from any device.',
    result: 'The result: one consistent experience across web and mobile that makes getting a ride quick and easy.',
    href: 'https://www.xpress.ph/',
    image: '/work/xpress.webp',
    Icon: Car,
  },
  {
    id: 'llc-cosmetic',
    category: 'Omnichannel Website',
    name: 'LLC Cosmetic Laser Clinics',
    what: "Redesigned the clinic's service pages and booking flow, making treatments, prices, and available slots easy to find.",
    result: 'The result: more online bookings and fewer steps to schedule an appointment.',
    href: 'https://llccosmetic.com/',
    image: '/work/llc-cosmetic.webp',
    Icon: Sparkle,
  },
  {
    id: 'eco-doggy',
    category: 'Omnichannel Website',
    name: 'Eco Doggy',
    what: 'Designed an omnichannel website that connects online shopping with in-store pickup, stock checks, and a shared cart across devices.',
    result: 'The result: pet owners can shop however they like, with one consistent experience from phone to store.',
    href: 'https://ecodoggy.com.au/',
    image: '/work/eco-doggy.webp',
    Icon: PawPrint,
  },
]

export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  /** Optional - omit for gradient placeholder cards */
  imageSrc?: string
  /** CSS object-position override. Defaults to 'top center'. */
  imagePosition?: string
  /** External brand color - not a site token. Passed via --app-color inline prop. */
  accentColor: string
  stats: AppStat[]
  badge: string
}

/** @deprecated use AppProject */
export type MobileApp = AppProject

/**
 * App designs, shown under "Apps and tools" on Projects. Screenshots live in
 * public/apps/ and are shown whole (object-fit: contain in a 4:3 frame).
 * Stats describe the design itself - screens and category - not usage.
 */
export const mobileApps: MobileApp[] = [
  {
    name: 'Omar',
    tagline: 'Find unique furniture for your home.',
    description: 'A furniture shopping app: browsing, product details and a cart with promo codes.',
    imageSrc: '/apps/omar.jpg',
    accentColor: '#2F5D46',
    stats: [
      { value: '3', label: 'Screens' },
      { value: 'Shop', label: 'Category' },
    ],
    badge: 'Mobile App',
  },
  {
    name: 'Luxora',
    tagline: 'Fashion, one tap away.',
    description: 'A fashion store app with offers, collections and a product overview with sizes and colors.',
    imageSrc: '/apps/luxora.jpg',
    accentColor: '#2F6BFF',
    stats: [
      { value: '2', label: 'Screens' },
      { value: 'Fashion', label: 'Category' },
    ],
    badge: 'Mobile App',
  },
  {
    name: 'TheTravelNest',
    tagline: 'Explore. Discover. Belong.',
    description: 'A travel app for flights, hotels and experiences, from search to booking confirmation.',
    imageSrc: '/apps/travelnest.jpg',
    accentColor: '#1E6BF0',
    stats: [
      { value: '10', label: 'Screens' },
      { value: 'Travel', label: 'Category' },
    ],
    badge: 'Mobile App',
  },
  {
    name: 'Good Food',
    tagline: 'Fresh food and daily essentials in one place.',
    description: 'A grocery delivery app covering categories, cart, checkout, order tracking and profile.',
    imageSrc: '/apps/grocery.jpg',
    accentColor: '#2E9E44',
    stats: [
      { value: '10', label: 'Screens' },
      { value: 'Grocery', label: 'Category' },
    ],
    badge: 'Mobile App',
  },
  {
    name: 'Taskly',
    tagline: 'Plan today, achieve tomorrow.',
    description: 'A task manager with onboarding, projects, a calendar and progress tracking.',
    imageSrc: '/apps/taskly.jpg',
    accentColor: '#5B5BF0',
    stats: [
      { value: '10', label: 'Screens' },
      { value: 'Productivity', label: 'Category' },
    ],
    badge: 'Mobile App',
  },
  {
    name: 'Ride app redesign',
    tagline: 'Concept A to Concept B.',
    description: 'A ride-hailing home screen redesigned for quicker access to saved places and services.',
    imageSrc: '/apps/ride.jpg',
    accentColor: '#1F6B45',
    stats: [
      { value: '2', label: 'Concepts' },
      { value: 'Mobility', label: 'Category' },
    ],
    badge: 'Redesign',
  },
]
