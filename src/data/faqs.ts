export type QA = { q: string; a: string }

/**
 * The questions people ask before they email. One list, used by the FAQ
 * accordion on the Contact view (and the legacy long-scroll FAQ section).
 * Five questions, two or three sentences each: the accordion sits in a
 * fixed panel and more than that pushes the email row off the plate.
 */
export const FAQS: QA[] = [
  {
    q: 'What do you do?',
    a: 'UI/UX design for websites and apps: user research, user flows, wireframes and prototypes, UI design, and testing. I work with people and businesses, from e-commerce stores to service brands.',
  },
  {
    q: 'How fast can you start?',
    a: 'Usually within a week. Small fixes can often start sooner.',
  },
  {
    q: 'How much do you charge?',
    a: 'It depends on the project: per project for new work, hourly for smaller changes. Tell me what you need and I’ll send a quote.',
  },
  {
    q: 'Where are you based?',
    a: 'Quezon City, Philippines (GMT+8). I work remotely with clients in other timezones.',
  },
  {
    q: 'What happens after I write?',
    a: 'I reply within 24 hours, then we set up a short call to talk about your project.',
  },
]
