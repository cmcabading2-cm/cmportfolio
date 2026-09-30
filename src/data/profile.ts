/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Every value below is a PLACEHOLDER.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, PenNib, Heart, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  /** Leave empty ('') to hide it; the role shows in its place. */
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Carissa Mae Cabading',
  firstName: 'CM',
  handle: '',
  role: 'UI/UX Designer',
  avatarSrc: '/avatar.jpg',
  verifiedLabel: 'Foundations of User Experience (UX) Design - Coursera',
  email: 'cmcabading2@gmail.com',
  location: 'Quezon City (GMT+8)',
  // Pick any icon from https://phosphoricons.com and import it above.
  stats: [
    { value: '6 yrs', label: 'Experience', Icon: Briefcase },
    { value: 'One-stop', label: 'Designer', Icon: PenNib },
    { value: 'Techie', label: 'By heart', Icon: Heart },
  ],
  // The intro types this line, then flies it into the Home headline.
  // Keep it short: two halves, 5-8 words total.
  displayName: { line1: 'Making complex', line2: 'things simple.' },
  hero: {
    body: 'I work with people and businesses to make their ideas clearer, simpler, and more meaningful through design.',
    portraitSrc: '/portrait.jpg',
    portraitAlt: 'Carissa Mae Cabading',
  },
  socials: [
    { label: 'Facebook profile', href: 'https://www.facebook.com/crssmcbdng', iconPath: '/icons/facebook.svg' },
    {
      label: 'LinkedIn profile',
      href: 'https://www.linkedin.com/in/carissa-mae-cabading-30760816b/',
      iconPath: '/icons/linkedin.svg',
    },
  ],
}
