import { useState, useEffect, useRef } from 'react'

const SECTORS = [
  {
    title: 'Business & Industry',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=800&fit=crop',
    description:
      'Powering workplaces with reliable catering and soft services that keep teams focused and productive.',
  },
  {
    title: 'Energy',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=800&fit=crop',
    description:
      'Supporting remote and high-demand energy sites with dependable food and facility solutions.',
  },
  {
    title: 'Defence',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=800&fit=crop',
    description:
      'Delivering mission-ready catering and support services for defence environments that never stand still.',
  },
  {
    title: 'Correctional',
    image: 'https://images.unsplash.com/photo-1589829545855-d5d63dffe4e6?w=600&h=800&fit=crop',
    description:
      'Providing secure, consistent meal and facility services tailored to complex correctional settings.',
  },
  {
    title: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=800&fit=crop',
    description:
      'Enhancing healing environments with nutritious meals and soft services that support patient wellbeing.',
  },
  {
    title: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da280a25?w=600&h=800&fit=crop',
    description:
      'Inspiring healthier, happier learning through nutritious meals students love and families trust.',
  },
  {
    title: 'Support Services by Task+',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop',
    description:
      'Integrated soft services that elevate spaces, support people, and keep operations running smoothly.',
  },
]

const AUTO_DELAY = 5000

export default function OurSectors() {
  const [activeIndex, setActiveIndex] = useState(4)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)

  const count = SECTORS.length

  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count)
    }, AUTO_DELAY)

    return () => clearInterval(timer)
  }, [isPaused, count])

  const goTo = (index) => {
    setActiveIndex((index + count) % count)
  }

  const goNext = () => goTo(activeIndex + 1)
  const goPrev = () => goTo(activeIndex - 1)

  const getOffset = (index) => {
    let offset = index - activeIndex
    if (offset > count / 2) offset -= count
    if (offset < -count / 2) offset += count
    return offset
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 40) return
    if (delta < 0) goNext()
    else goPrev()
  }

  return (
    <section id="sectors" className="our-sectors bg-pattern">
      <div className="container">
        <p className="our-sectors__label">Solutions</p>
        <h2 className="section-title our-sectors__title">Our Sectors</h2>
        <p className="our-sectors__intro">
          Our sectorization approach ensures that our business partners work with teams who truly understand their individual worlds. Each key market is led by a dedicated Business Director with deep expertise in that industry, from healthcare and education to business and industry, oil and gas, defence, and events.
        </p>
      </div>

      <div
        className="our-sectors__stage"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="our-sectors__track" aria-live="polite">
          {SECTORS.map((sector, index) => {
            const offset = getOffset(index)
            const isActive = offset === 0
            const absOffset = Math.abs(offset)

            return (
              <article
                key={sector.title}
                className={`sector-card ${isActive ? 'sector-card--active' : ''}`}
                style={{
                  '--offset': offset,
                  '--abs-offset': absOffset,
                  zIndex: isActive ? 10 : Math.max(1, 6 - absOffset),
                }}
                aria-hidden={!isActive && absOffset > 2}
                onClick={() => {
                  if (!isActive) goTo(index)
                }}
              >
                <div className="sector-card__media">
                  <img src={sector.image} alt={sector.title} />
                  <div className="sector-card__overlay">
                    <h3 className="sector-card__title">{sector.title}</h3>
                    {isActive && (
                      <>
                        <p className="sector-card__desc">{sector.description}</p>
                        <span className="sector-card__icon" aria-hidden>
                          ↗
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <button
          type="button"
          className="our-sectors__nav our-sectors__nav--prev"
          aria-label="Previous sector"
          onClick={goPrev}
        >
          ‹
        </button>
        <button
          type="button"
          className="our-sectors__nav our-sectors__nav--next"
          aria-label="Next sector"
          onClick={goNext}
        >
          ›
        </button>
      </div>
    </section>
  )
}
