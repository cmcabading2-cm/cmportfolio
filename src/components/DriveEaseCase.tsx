import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, CheckCircle } from '@/components/slab'

/**
 * DriveEase - a case study page of its own, at /projects/driveease.
 *
 * A head, then one glass sheet in two columns: the story on the left (what
 * the site does, the details that make it easy to use, the palette), the
 * live site on the right in a browser window, so a visitor can try the price
 * estimator without leaving the portfolio. Everything below comes from the
 * DriveEase project itself; edit the text here.
 */

const LIVE = 'https://driveease-lyart.vercel.app/'

const HIGHLIGHTS = [
  'A price estimator: pick a car, dates and trip area, and the price updates live.',
  'It applies the day rate automatically whenever that is cheaper than paying by the hour.',
  'Provincial trips add 20%, 25% or 30% by zone, shown up front.',
  'Category buttons filter the car list straight away.',
  'Buttons use dark green text on orange instead of white, so the text is easy to read.',
  'Works on phones, tablets and desktop.',
]

const SECTIONS = ['Hero', 'Price estimator', 'Brands', 'Categories', 'Featured cars', 'Offer', 'About', 'Reviews', 'Stats', 'Stories', 'App preview']

const PALETTE = [
  { name: 'Cream', hex: '#FCFAEE', use: 'Background' },
  { name: 'Orange', hex: '#FF6801', use: 'Buttons' },
  { name: 'Sand', hex: '#DBD0BE', use: 'Borders' },
  { name: 'Green', hex: '#0C5446', use: 'Text' },
]

/** Matches the dialog's frame delay: load the live site after the page has settled. */
const FRAME_DELAY_MS = 300

export default function DriveEaseCase() {
  const [mounted, setMounted] = useState(false)
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), FRAME_DELAY_MS)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <section className="case" aria-labelledby="case-title">
      <header className="case__head">
        <Link to="/projects" className="case__back">
          <ArrowLeft size={14} weight="bold" aria-hidden="true" />
          All projects
        </Link>
        <div className="pgrid__head">
          <span className="pgrid__eyebrow">Case study · Car Rental Website</span>
          <h1 className="pgrid__title" id="case-title">DriveEase</h1>
          <p className="pgrid__lede">
            A one-page car rental website for Metro Manila and nearby provinces, built around a
            live price estimator.
          </p>
        </div>
      </header>

      <div className="home__glass case__glass">
        <div className="case__story">
          <div className="case__block">
            <h2 className="case__label">What makes it easy</h2>
            <ul className="case__list" role="list">
              {HIGHLIGHTS.map((h) => (
                <li key={h}>
                  <CheckCircle size={16} weight="duotone" aria-hidden="true" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="case__block">
            <h2 className="case__label">On the page</h2>
            <ul className="case__chips" role="list">
              {SECTIONS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="case__block">
            <h2 className="case__label">Colors</h2>
            <ul className="case__palette" role="list">
              {PALETTE.map((c) => (
                <li key={c.hex}>
                  <span className="case__swatch" style={{ background: c.hex }} aria-hidden="true" />
                  <span className="case__swatch-name">{c.name}</span>
                  <span className="case__swatch-meta">
                    {c.hex} · {c.use}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a className="case__cta" href={LIVE} target="_blank" rel="noopener noreferrer">
            Open the live site
            <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
          </a>
        </div>

        {/* The live site, in a browser window. */}
        <div className="ppanel ppanel--frame case__window">
          <div className="ppanel__bar">
            <span className="ppanel__dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="ppanel__url">
              <span className="ppanel__url-host">driveease-lyart.vercel.app</span>
            </span>
            <a className="ppanel__ext" href={LIVE} target="_blank" rel="noopener noreferrer">
              Visit live site
              <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
            </a>
          </div>
          <div className="ppanel__stage">
            {!ready && <div className="ppanel__skeleton" aria-hidden="true" />}
            {mounted && (
              <iframe
                className="ppanel__iframe"
                src={LIVE}
                title="DriveEase live website"
                loading="eager"
                onLoad={() => setReady(true)}
                data-ready={ready ? 'true' : 'false'}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
