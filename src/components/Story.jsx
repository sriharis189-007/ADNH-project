import { useRef, useEffect, useState, useCallback } from 'react'
import VisionMission from './VisionMission'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=600&fit=crop',
    alt: 'ADNH Catering team celebrating together',
  },
  {
    src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=900&h=600&fit=crop',
    alt: 'Chef preparing food at buffet station',
  },
]

function getRevealProgress(rect, viewportH) {
  const start = viewportH * 0.95
  const end = viewportH * 0.35
  return Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
}

export default function Story() {
  const sectionRef = useRef(null)
  const imagesRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    const imagesEl = imagesRef.current
    if (!imagesEl) return
    setProgress(getRevealProgress(imagesEl.getBoundingClientRect(), window.innerHeight))
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [updateProgress])

  const getImageStyle = (stagger = 0) => {
    const p = Math.min(1, Math.max(0, (progress - stagger) / (1 - stagger)))
    const eased = 1 - (1 - p) ** 3

    return {
      opacity: eased,
      transform: `perspective(1200px) rotateX(${22 * (1 - eased)}deg) translateY(${48 * (1 - eased)}px) scale(${0.96 + eased * 0.04})`,
      filter: `blur(${10 * (1 - eased)}px)`,
    }
  }

  return (
    <section id="about" ref={sectionRef} className="story bg-pattern">
      <div className="container">
        <p className="story__label">About Us</p>
        <h2 className="story__title">
          <span className="story__title-gold">The Story Behind</span>{' '}
          <span className="story__title-navy">ADNH Catering</span>
        </h2>
        <div className="story__content">
          <p>
            We take great pride in how the story of ADNH Catering is intertwined with the story of the UAE — our home. Founded by royal decree of His Highness Sheikh Zayed bin Sultan Al Nahyan in 1976, Abu Dhabi National Hotels was among the nation&apos;s first established hospitality groups, providing hotels, transport, and catering services to a young country just beginning to welcome the world.
          </p>
          <p>
            Over the past few decades, that early catering and support services arm evolved into what is now ADNH Catering — a homegrown, dedicated business serving the UAE&apos;s most critical sectors. From defence and corrections to healthcare, education, and business and industry, ADNH Catering has grown not only in capability, but also in responsibility.
          </p>
          <p>
            Today, with operations extending into the Kingdom of Saudi Arabia, ADNH Catering combines deep local and regional heritage with modern concepts, trusted brands, and advanced technology — delivering reliable food and support services at scale across the UAE and the wider Gulf.
          </p>
        </div>

        <div ref={imagesRef} className="story__images">
          {IMAGES.map((image, index) => (
            <div
              key={image.alt}
              className="story__image-wrap"
              style={getImageStyle(index * 0.12)}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <VisionMission />
      </div>
    </section>
  )
}
