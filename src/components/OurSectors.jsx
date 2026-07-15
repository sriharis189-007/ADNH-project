import { useState, useEffect, useRef, useCallback } from 'react'
import { asset } from '../utils/assets'

const SECTORS = [
  {
    title: 'Business & Industry',
    image: asset('images/sectors/business.jpg'),
    fallback: asset('images/img-6.png'),
    description:
      'Powering workplaces with reliable catering and soft services that keep teams focused and productive.',
  },
  {
    title: 'Energy',
    image: asset('images/sectors/energy.jpg'),
    fallback: asset('images/img-9.png'),
    description:
      'Supporting remote and high-demand energy sites with dependable food and facility solutions.',
  },
  {
    title: 'Defence',
    image: asset('images/sectors/defence.jpg'),
    fallback: asset('images/img-8.png'),
    description:
      'Delivering mission-ready catering and support services for defence environments that never stand still.',
  },
  {
    title: 'Correctional',
    image: asset('images/sectors/correctional.jpg'),
    fallback: asset('images/catering-team.png'),
    description:
      'Providing secure, consistent meal and facility services tailored to complex correctional settings.',
  },
  {
    title: 'Healthcare',
    image: asset('images/sectors/healthcare.jpg'),
    fallback: asset('images/Gourmet-plated-dish.jpg'),
    description:
      'Enhancing healing environments with nutritious meals and soft services that support patient wellbeing.',
  },
  {
    title: 'Education',
    image: asset('images/img-5.png'),
    fallback: asset('images/Hive.png'),
    description:
      'Inspiring healthier, happier learning through nutritious meals students love and families trust.',
  },
  {
    title: 'Support Services by Task+',
    image: asset('images/Support-services-staff.jpg'),
    fallback: asset('images/task-plus.png'),
    description:
      'Integrated soft services that elevate spaces, support people, and keep operations running smoothly.',
  },
]

const VISIBLE_RANGE = 3
const AUTO_MS = 4500
const EASE = 'cubic-bezier(0.25, 0.8, 0.25, 1)'

function wrapIndex(index, length) {
  return ((index % length) + length) % length
}

function shortestOffset(index, active, length) {
  let offset = index - active
  if (offset > length / 2) offset -= length
  if (offset < -length / 2) offset += length
  return offset
}

function getCardMetrics() {
  if (typeof window === 'undefined') {
    return { translate: 58, rotate: 26, minScale: 0.72 }
  }
  if (window.innerWidth <= 480) {
    return { translate: 42, rotate: 14, minScale: 0.8 }
  }
  if (window.innerWidth <= 768) {
    return { translate: 48, rotate: 18, minScale: 0.76 }
  }
  return { translate: 58, rotate: 26, minScale: 0.72 }
}

function cardStyle(offset) {
  const abs = Math.abs(offset)
  const { translate, rotate, minScale } = getCardMetrics()

  if (abs > VISIBLE_RANGE) {
    return {
      opacity: 0,
      pointerEvents: 'none',
      transform: `translate(-50%, -50%) translateX(${offset * (translate + 14)}%) rotateY(${offset * -rotate}deg) scale(0.62)`,
      zIndex: 0,
    }
  }

  const translateX = offset * translate
  const rotateY = offset * -rotate
  const scale = offset === 0 ? 1 : Math.max(minScale, 1 - abs * 0.1)
  const opacity = offset === 0 ? 1 : Math.max(0.55, 1 - abs * 0.18)

  return {
    opacity,
    zIndex: 100 - abs,
    transform: `translate(-50%, -50%) translateX(${translateX}%) rotateY(${rotateY}deg) scale(${scale})`,
    pointerEvents: abs <= 1 ? 'auto' : 'none',
  }
}

function SectorImage({ src, fallback, alt }) {
  const [current, setCurrent] = useState(src)

  return (
    <img
      src={current}
      alt={alt}
      onError={() => {
        if (fallback && current !== fallback) setCurrent(fallback)
      }}
    />
  )
}

export default function OurSectors() {
  const count = SECTORS.length
  const [active, setActive] = useState(0)
  const [hoverSide, setHoverSide] = useState(null)
  const [paused, setPaused] = useState(false)
  const [, setViewportTick] = useState(0)
  const stageRef = useRef(null)
  const dragRef = useRef({ startX: 0, dragging: false })
  const prevOffsetsRef = useRef({})

  const goNext = useCallback(() => {
    setActive((prev) => wrapIndex(prev + 1, count))
  }, [count])

  const goPrev = useCallback(() => {
    setActive((prev) => wrapIndex(prev - 1, count))
  }, [count])

  useEffect(() => {
    if (paused) return undefined
    const id = window.setInterval(goNext, AUTO_MS)
    return () => window.clearInterval(id)
  }, [paused, goNext])

  useEffect(() => {
    let frame = 0
    const onResize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setViewportTick((n) => n + 1))
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const handleStageMove = (e) => {
    const stage = stageRef.current
    if (!stage) return
    const { left, width } = stage.getBoundingClientRect()
    const ratio = (e.clientX - left) / width
    if (ratio < 0.32) setHoverSide('prev')
    else if (ratio > 0.68) setHoverSide('next')
    else setHoverSide(null)
  }

  const handleStageLeave = () => {
    setHoverSide(null)
    setPaused(false)
  }

  const handleNavClick = () => {
    if (hoverSide === 'prev') goPrev()
    else if (hoverSide === 'next') goNext()
  }

  const onPointerDown = (e) => {
    dragRef.current = { startX: e.clientX, dragging: true }
    setPaused(true)
  }

  const onPointerUp = (e) => {
    if (!dragRef.current.dragging) return
    const delta = e.clientX - dragRef.current.startX
    dragRef.current.dragging = false
    if (Math.abs(delta) > 40) {
      if (delta < 0) goNext()
      else goPrev()
    }
    setPaused(false)
  }

  return (
    <section id="sectors" className="our-sectors bg-pattern">
      <div className="container our-sectors__header">
        <p className="section-label our-sectors__label">Solutions</p>
        <h2 className="section-title our-sectors__title">Our Sectors</h2>
        <p className="our-sectors__intro">
          Our sectorization approach ensures that our business partners work with teams who truly understand their individual worlds. Each key market is led by a dedicated Business Director with deep expertise in that industry, from healthcare and education to business and industry, oil and gas, defence, and events.
        </p>
      </div>

      <div
        ref={stageRef}
        className={`our-sectors__stage${hoverSide ? ` our-sectors__stage--hover-${hoverSide}` : ''}`}
        onMouseMove={handleStageMove}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={handleStageLeave}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          dragRef.current.dragging = false
          setPaused(false)
        }}
      >
        <div className="our-sectors__track" aria-live="polite">
          {SECTORS.map((sector, index) => {
            const offset = shortestOffset(index, active, count)
            const prevOffset = prevOffsetsRef.current[index]
            const jumped = prevOffset !== undefined && Math.abs(offset - prevOffset) > 1
            prevOffsetsRef.current[index] = offset
            const isActive = offset === 0
            const style = {
              ...cardStyle(offset),
              transition: jumped ? 'none' : `transform 0.85s ${EASE}, opacity 0.85s ${EASE}`,
            }

            return (
              <article
                key={sector.title}
                className={`sector-card${isActive ? ' sector-card--active' : ''}`}
                style={style}
                aria-hidden={!isActive}
              >
                <div className="sector-card__media">
                  <SectorImage src={sector.image} fallback={sector.fallback} alt={sector.title} />
                  <div className="sector-card__overlay">
                    <h3 className="sector-card__title">{sector.title}</h3>
                    <p className="sector-card__desc">{sector.description}</p>
                    <span className="sector-card__icon" aria-hidden>
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <button
          type="button"
          className="our-sectors__nav our-sectors__nav--prev our-sectors__nav--persistent is-visible"
          aria-label="Previous sector"
          onClick={goPrev}
        >
          ←
        </button>
        <button
          type="button"
          className="our-sectors__nav our-sectors__nav--next our-sectors__nav--persistent is-visible"
          aria-label="Next sector"
          onClick={goNext}
        >
          →
        </button>

        <button
          type="button"
          className={`our-sectors__nav our-sectors__nav--desktop our-sectors__nav--${hoverSide || 'hidden'}${hoverSide ? ' is-visible' : ''}`}
          aria-label={hoverSide === 'prev' ? 'Previous sector' : 'Next sector'}
          aria-hidden={!hoverSide}
          tabIndex={hoverSide ? 0 : -1}
          onMouseEnter={(e) => {
            const stage = stageRef.current
            if (!stage) return
            const { left, width } = stage.getBoundingClientRect()
            setHoverSide(e.clientX - left < width / 2 ? 'prev' : 'next')
          }}
          onClick={handleNavClick}
        >
          {hoverSide === 'prev' ? '←' : '→'}
        </button>

        <div className="our-sectors__dots" role="tablist" aria-label="Sector slides">
          {SECTORS.map((sector, index) => (
            <button
              key={sector.title}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-label={`Show ${sector.title}`}
              className={`our-sectors__dot${active === index ? ' our-sectors__dot--active' : ''}`}
              onClick={() => {
                setActive(index)
                setPaused(true)
                window.setTimeout(() => setPaused(false), AUTO_MS)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
