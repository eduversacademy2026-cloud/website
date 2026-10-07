import { useCallback, useEffect, useState } from 'react'
import { Reveal } from '../../hooks/useReveal.jsx'
import './Gallery.css'

const PHOTOS = [
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089227/WhatsApp_Image_2026-08-28_at_2.13.04_AM_1_ykrvo2.jpg', caption: 'Felicitation ceremony', tag: 'Ceremony' },
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089227/WhatsApp_Image_2026-08-28_at_2.13.04_AM_2_nkhfib.jpg', caption: 'Award presentation', tag: 'Awards' },
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089227/WhatsApp_Image_2026-08-28_at_2.13.04_AM_kvt9kz.jpg', caption: 'Prize distribution', tag: 'Awards' },
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089227/WhatsApp_Image_2026-08-28_at_2.13.05_AM_2_qkanqr.jpg', caption: 'Students on stage', tag: 'Students' },
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089227/WhatsApp_Image_2026-08-28_at_2.13.05_AM_3_nemvhm.jpg', caption: 'Achievers honoured', tag: 'Students' },
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089228/WhatsApp_Image_2026-08-28_at_2.13.06_AM_1_p79mec.jpg', caption: 'Certificate ceremony', tag: 'Ceremony' },
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089228/WhatsApp_Image_2026-08-28_at_2.13.07_AM_1_ljb6qo.jpg', caption: 'Toppers felicitated', tag: 'Awards' },
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089228/WhatsApp_Image_2026-08-28_at_2.13.07_AM_2_i20pnd.jpg', caption: 'Academy event', tag: 'Event' },
  { src: 'https://res.cloudinary.com/yyxm1nvc/image/upload/v1788089228/WhatsApp_Image_2026-08-28_at_2.13.07_AM_sbmixv.jpg', caption: 'Celebrating success', tag: 'Event' },
]

function Gallery() {
  const [active, setActive] = useState(null)

  const open = useCallback((i) => setActive(i), [])
  const close = useCallback(() => setActive(null), [])
  const prev = useCallback(() => setActive((i) => (i - 1 + PHOTOS.length) % PHOTOS.length), [])
  const next = useCallback(() => setActive((i) => (i + 1) % PHOTOS.length), [])

  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, prev, next])

  return (
    <section className="section galleria" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <Reveal direction="up">
          <div className="galleria-head">
            <p className="eyebrow">Gallery</p>
            <h2 className="section-title" id="gallery-heading">
              Life at <span className="accent">Eduverse Academy</span>
            </h2>
            <p className="section-sub">
              Felicitations, awards and the achievers we celebrate. Tap any moment to explore.
            </p>
          </div>
        </Reveal>

        <Reveal direction="up" delay={100}>
          <div className="galleria-mosaic">
            {PHOTOS.map((p, i) => (
              <button
                type="button"
                key={i}
                className={`galleria-cell galleria-cell--${i + 1}`}
                onClick={() => open(i)}
                aria-label={`View photo: ${p.caption}`}
              >
                <img src={p.src} alt={p.caption} loading="lazy" decoding="async" />
                <span className="galleria-cell__grad" aria-hidden="true" />
                <span className="galleria-cell__meta">
                  <span className="galleria-cell__tag">{p.tag}</span>
                  <span className="galleria-cell__cap">{p.caption}</span>
                </span>
                <span className="galleria-cell__plus" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {active !== null && (
        <div className="galleria-lb" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={close}>
          <button type="button" className="galleria-lb__close" onClick={close} aria-label="Close">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
          <button
            type="button"
            className="galleria-lb__nav galleria-lb__nav--prev"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <figure className="galleria-lb__stage" onClick={(e) => e.stopPropagation()}>
            <img src={PHOTOS[active].src} alt={PHOTOS[active].caption} />
            <figcaption>
              <span>{PHOTOS[active].caption}</span>
              <span className="galleria-lb__count">{active + 1} / {PHOTOS.length}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="galleria-lb__nav galleria-lb__nav--next"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
