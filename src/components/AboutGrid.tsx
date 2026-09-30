import type { CSSProperties } from 'react'
import { MapPin, SealCheck } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const CLAUDE = { src: '/icons/ai/claude-color.svg', name: 'Claude' }
const FIGMA = { src: '/icons/figma.svg', name: 'Figma' }
const XD = { src: '/icons/adobe-xd.svg', name: 'Adobe XD' }
const PS = { src: '/icons/photoshop.svg', name: 'Photoshop' }
const AI = { src: '/icons/illustrator.svg', name: 'Illustrator' }
const SLACK = { src: '/icons/ai/slack-color.svg', name: 'Slack' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const ZENDESK = { src: '/icons/zendesk-color.svg', name: 'Zendesk' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'UX Research & Strategy',
    marks: [GWS, CLAUDE, FIGMA],
  },
  {
    index: '02',
    title: 'Wireframes & Prototypes',
    marks: [FIGMA, XD],
  },
  {
    index: '03',
    title: 'UI & Visual Design',
    marks: [FIGMA, PS, AI],
  },
  {
    index: '04',
    title: 'Collaboration & Handoff',
    marks: [SLACK, GITHUB, ZENDESK],
  },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          A tech-savvy creative with a love for music, design, and everything in between.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I solve problems for the people using the product.
            <span> If it doesn’t help them reach their goal, it’s not done.</span>
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <SealCheck size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Foundations of User Experience (UX) Design</span>
                <span className="agrid__cell-meta">Coursera</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Philippines</span>
              </span>
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.hero.portraitSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
