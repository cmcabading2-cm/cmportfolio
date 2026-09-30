import { Quotes, ShoppingCart, Car, Drop } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * TestimonialsGrid - the Testimonials view as a fixed viewport.
 *
 * Two columns inside one glass sheet: the client's own words on the left, the
 * client ledger on the right. The page is sized to the panel and does not
 * scroll.
 */

/** The testimonial. Only real words from a real client go here. */
const QUOTE = {
  text: 'Carissa took the time to understand how our customers shop and turned that into a cleaner, easier product browsing experience. Great to work with, open to feedback, and always focused on the user.',
  who: 'Anker Eufy',
  project: 'E-commerce Website',
}

/* The client ledger. `logoSrc` is optional - without it the medallion falls
   back to the icon. */

type Client = {
  index: string
  name: string
  role: string
  daily: string
  work: string[]
  logoSrc?: string
  Icon: Icon
}

const CLIENTS: Client[] = [
  {
    index: '01',
    name: 'Anker',
    role: 'UI/UX Designer',
    daily: 'Redesigned the online store to make product discovery and comparison easier across a wide range of chargers and accessories.',
    work: ['E-commerce Website', 'Mobile'],
    Icon: ShoppingCart,
  },
  {
    index: '02',
    name: 'Xpress PH',
    role: 'UI/UX Designer',
    daily: 'Designed the ride-hailing website and app so riders can book, pay, and track their driver from any device.',
    work: ['Progressive Web App', 'Mobile'],
    Icon: Car,
  },
  {
    index: '03',
    name: 'Lactofferin Co.',
    role: 'UI/UX Designer',
    daily: 'Designed the e-commerce website.',
    work: ['E-commerce Website'],
    Icon: Drop,
  },
]

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Testimonials</span>
        <h1 className="pgrid__title" id="testimonials-title">
          What clients say.
        </h1>
        <p className="pgrid__lede">
          Feedback from the brands I've designed for.
        </p>
      </header>

      <div className="home__glass tgrid__glass">
        {/* Left: the client's words, on one plate. */}
        <figure className="tgrid__quote">
          <Quotes className="tgrid__quote-mark" size={40} weight="fill" aria-hidden="true" />
          <blockquote className="tgrid__quote-text">
            <p>{QUOTE.text}</p>
          </blockquote>
          <figcaption className="tgrid__quote-who">
            <span className="tgrid__quote-name">{QUOTE.who}</span>
            <span className="tgrid__quote-meta">{QUOTE.project}</span>
          </figcaption>
        </figure>

        {/* Right: the client ledger, one row per client. */}
        <div className="tgrid__ledger">
          <div className="tgrid__ledger-head">
            <h2 className="tgrid__ledger-title">Brands I’ve designed for.</h2>
            <p className="tgrid__ledger-sub">E-commerce, web apps and mobile.</p>
          </div>

          {/* One plate, three rows split by hairlines. Three boxed cards each
              carrying their own border read as three separate widgets; a
              single ledger reads as one record. */}
          <ul className="tgrid__clients" role="list">
            {CLIENTS.map((c) => {
              const FallbackIcon = c.Icon
              return (
                <li key={c.index} className="tgrid__client">
                  <span className="tgrid__client-ghost" aria-hidden="true">{c.index}</span>
                  <span className="tgrid__client-mark" aria-hidden="true">
                    {c.logoSrc ? (
                      <img src={c.logoSrc} alt="" loading="lazy" decoding="async" />
                    ) : (
                      <FallbackIcon size={22} weight="duotone" />
                    )}
                  </span>

                  <span className="tgrid__client-body">
                    <span className="tgrid__client-head">
                      <span className="tgrid__client-name">{c.name}</span>
                      <span className="tgrid__client-role">{c.role}</span>
                    </span>
                    <span className="tgrid__client-daily">{c.daily}</span>
                    <ul className="tgrid__client-tags" role="list">
                      {c.work.map((w, i) => (
                        <li key={`${w}-${i}`} className="tgrid__client-tag">
                          {w}
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
