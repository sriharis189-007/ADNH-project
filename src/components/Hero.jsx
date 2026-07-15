import { useState, useEffect, useRef } from 'react'
import { asset } from '../utils/assets'

const HERO_IMAGES = [
  {
    src: asset('images/catering-team.png'),
    alt: 'Catering team preparing food in kitchen',
  },
  {
    src: asset('images/Gourmet-plated-dish.jpg'),
    alt: 'Gourmet plated dish',
  },
  {
    src: asset('images/Support-services-staff.jpg'),
    alt: 'Support services staff',
  },
]

const AUTO_DELAY = 10000

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const isPaused = useRef(false)
  const hoveredRef = useRef(null)

  const expandedIndex = hoveredIndex ?? activeIndex

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % HERO_IMAGES.length)
      }
    }, AUTO_DELAY)

    return () => clearInterval(timer)
  }, [])

  const handlePanelEnter = (index) => {
    isPaused.current = true
    hoveredRef.current = index
    setHoveredIndex(index)
  }

  const handleCarouselLeave = () => {
    if (hoveredRef.current !== null) {
      setActiveIndex(hoveredRef.current)
    }
    hoveredRef.current = null
    setHoveredIndex(null)
    isPaused.current = false
  }

  return (
    <section id="home" className="hero bg-pattern">
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__welcome">Welcome to</p>
          <h1 className="hero__title">ADNH Catering</h1>
          <p className="hero__text">
            ADNH Catering is the GCC&apos;s market leader in quality catering and integrated soft services, supporting businesses and institutions of all scales—from complex, high-volume operations to more streamlined environments.
          </p>
          <p className="hero__text">
            Leveraging our scale and expertise, we deliver consistently high standards across the UAE and Saudi Arabia, combining operational rigor, a people-first approach, and trusted partnerships with the flexibility to provide bespoke solutions tailored to each client&apos;s unique needs.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn-navy">
              Get In Touch <span aria-hidden>›</span>
            </a>
            <a href="#about" className="btn-link">
              Explore More <span aria-hidden>›</span>
            </a>
          </div>
        </div>

        <div
          className="hero__carousel"
          onMouseLeave={handleCarouselLeave}
          role="region"
          aria-label="Hero image gallery"
        >
          {HERO_IMAGES.map((image, index) => (
            <button
              key={image.alt}
              type="button"
              className={`hero__panel ${expandedIndex === index ? 'hero__panel--active' : ''}`}
              onMouseEnter={() => handlePanelEnter(index)}
              onFocus={() => handlePanelEnter(index)}
              aria-label={image.alt}
              aria-expanded={expandedIndex === index}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
