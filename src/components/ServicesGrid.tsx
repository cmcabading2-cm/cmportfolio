import type { CSSProperties } from 'react'
import { MagnifyingGlass, PenNib, ArrowsClockwise, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Two bands, top to bottom: the three-step method (on a dark plate so it is
 * the first thing the eye lands on), then the five services as cards that
 * carry the marks of the tools each one uses. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  {
    index: '01',
    label: 'Understand',
    body: "I get to know the people I'm designing for: what bugs them, what they need, and what they're trying to get done.",
    Icon: MagnifyingGlass,
    chips: ['User research', 'User flows'],
  },
  {
    index: '02',
    label: 'Design',
    body: 'I sketch ideas fast, turn them into clickable prototypes, and bring it all together in the UI.',
    Icon: PenNib,
    chips: ['Wireframes', 'Prototypes', 'UI design'],
  },
  {
    index: '03',
    label: 'Test & improve',
    body: 'I watch real people use it, see where they get stuck, and fix it.',
    Icon: ArrowsClockwise,
    chips: ['Real users', 'Fixes'],
  },
]

/* ---------- The services ---------- */

// Tool marks from /public/icons, shown on each service.
const GWS = '/icons/googleworkspace.svg'
const FIGMA = '/icons/figma.svg'
const XD = '/icons/adobe-xd.svg'
const PS = '/icons/photoshop.svg'
const AI = '/icons/illustrator.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'User Research',
    description: "Before I design anything, I get to know the people I'm designing for. What bugs them, what they need, and what they're trying to get done.",
    chip: 'Discovery',
    logos: [GWS, FIGMA],
    bullets: ["What bugs your users", "What they need", "What they're trying to get done"],
  },
  {
    index: '02',
    title: 'User Flows',
    description: 'I figure out how someone gets from point A to point B, and try to make that path as short and clear as I can.',
    chip: 'Structure',
    logos: [FIGMA],
    bullets: ["From point A to point B", "Fewer steps", "A clearer path"],
  },
  {
    index: '03',
    title: 'Wireframes & Prototypes',
    description: 'I sketch ideas out fast and turn them into clickable prototypes, so we can test them early instead of guessing.',
    chip: 'Early testing',
    logos: [FIGMA, XD],
    bullets: ["Fast sketches", "Clickable prototypes", "Tested before it is built"],
  },
  {
    index: '04',
    title: 'UI Design',
    description: 'This is where it all comes together. Layouts, colors, type, and all the little details that make a product feel right.',
    chip: 'Visual design',
    logos: [FIGMA, PS, AI],
    bullets: ["Layouts and color", "Typography", "The little details"],
  },
  {
    index: '05',
    title: 'Testing & Improving',
    description: "I watch real people use what I've designed, see where they get stuck, and fix it.",
    chip: 'Iteration',
    logos: [FIGMA, GWS],
    bullets: ["Real people, real use", "Where they get stuck", "Fixed and improved"],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          I help turn confusing experiences into ones that just make sense.
        </h1>
        <p className="pgrid__lede">
          User research, user flows, wireframes and prototypes, UI design, and testing.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I work</span>
            <h2 className="sgrid__method-title" id="method-title">
              Understand. Design. Test.
              <br />
              <span>Three steps, every project.</span>
            </h2>
            <p className="sgrid__method-sub">
              I design with one question in mind: does this help the user get it done?
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">What I do.</h2>
            <p className="sgrid__offers-sub">Pick one step, or the whole process.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
