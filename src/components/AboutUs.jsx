import { useState, useEffect, useRef, useCallback } from 'react'

const SLIDES = [
  {
    image: '/images/img-6.png',
    title: 'Culinary Excellence',
    text: 'We are all in this business for one reason: food is our passion. Behind every menu is a team of chefs who understand flavour, nutrition, and what it takes to deliver exceptional food consistently — wherever we operate. Through our Inspiring Culinary Talent strategy, we focus on three pillars: Training & Development, Innovation and Engagement. We nurture talent through mentoring and structured development, giving chefs room to stretch, lead and innovate. Our annual Kitchen Social showcases and collaborative menu sessions bring teams together to experiment, share ideas and raise the bar. The result is food that looks good, tastes great and performs at scale.',
  },
  {
    image: '/images/img-5.png',
    title: 'Our People',
    text: 'They prepare safe, high-quality meals, maintain clean and welcoming environments, and deliver the essential support services our partners rely on every day. Our people are truly at the heart of everything we do. Together, we have built a people-first culture unlike any other in our industry. Through our industry-leading accommodation, welfare, and recruitment standards, we go the extra mile for our people, so they can go the extra mile for you.',
  },
  {
    image: '/images/img-4.png',
    title: 'Our History and Legacy',
    text: 'Many of our strategic partnerships span decades, evolving from single locations into country-wide portfolios. That continuity has shaped a legacy defined by reliability and excellence – values we embody in everything we do. Nothing brings us greater pride than hearing our clients say they remember ADNH serving meals in their local communities during their childhood in the UAE. Those memories are living proof of our legacy — a testament to being the longest-standing catering and support services provider in the region.',
  },
]

const AUTO_DELAY = 10000

export default function AboutUs() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const isPaused = useRef(false)

  const updateProgress = useCallback(() => {
    const section = sectionRef.current
    if (!section) return

    const rect = section.getBoundingClientRect()
    const viewportH = window.innerHeight
    const scrollable = section.offsetHeight - viewportH

    if (scrollable <= 0) {
      setProgress(rect.top <= 0 ? 1 : 0)
      return
    }

    const scrolled = -rect.top
    setProgress(Math.min(1, Math.max(0, scrolled / scrollable)))
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

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setInterval(() => {
      if (!isPaused.current) {
        setActiveSlide((prev) => (prev + 1) % SLIDES.length)
      }
    }, AUTO_DELAY)

    return () => clearInterval(timer)
  }, [isVisible])

  const isExpanded = progress > 0.5
  const gridOpacity = Math.max(0, 1 - progress * 1.8)
  const overlayOpacity = Math.max(0, (progress - 0.35) * 1.8)

  return (
    <section
      id="difference"
      ref={sectionRef}
      className="about-us"
      style={{ '--scroll-progress': progress }}
    >
      <div className="about-us__sticky">
        <div
          className="about-us__header container"
          style={{ opacity: Math.max(0, 1 - progress * 2.2) }}
        >
          <span className="about-us__badge">About Us</span>
          <h2 className="about-us__title">The ADNH Catering Difference</h2>
        </div>

        <div
          className={`about-us__frame ${isExpanded ? 'about-us__frame--expanded' : ''}`}
          onMouseEnter={() => { isPaused.current = true }}
          onMouseLeave={() => { isPaused.current = false }}
        >
          <div className="about-us__slides">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.title}
                className={`about-us__slide ${activeSlide === index ? 'about-us__slide--active' : ''}`}
                aria-hidden={activeSlide !== index}
              >
                <img src={slide.image} alt={slide.title} />
              </div>
            ))}
          </div>

          <div
            className="about-us__grid"
            style={{
              opacity: gridOpacity,
              pointerEvents: gridOpacity < 0.05 ? 'none' : 'auto',
            }}
            aria-hidden={gridOpacity < 0.05}
          >
            <span
              className="about-us__grid-line about-us__grid-line--h about-us__grid-line--h1"
              style={{ transform: `scaleX(${gridOpacity})` }}
            />
            <span
              className="about-us__grid-line about-us__grid-line--h about-us__grid-line--h2"
              style={{ transform: `scaleX(${gridOpacity})` }}
            />
            <span
              className="about-us__grid-line about-us__grid-line--v about-us__grid-line--v1"
              style={{ transform: `scaleY(${gridOpacity})` }}
            />
            <span
              className="about-us__grid-line about-us__grid-line--v about-us__grid-line--v2"
              style={{ transform: `scaleY(${gridOpacity})` }}
            />
          </div>

          <div
            className="about-us__content"
            style={{ opacity: overlayOpacity }}
          >
            <div className="about-us__content-inner container">
              <span className="about-us__content-line" />
              <h3 className="about-us__slide-title">{SLIDES[activeSlide].title}</h3>
              <p className="about-us__slide-text">{SLIDES[activeSlide].text}</p>
            </div>
          </div>

          <div
            className="about-us__dots"
            style={{ opacity: overlayOpacity }}
          >
            {SLIDES.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`about-us__dot ${activeSlide === index ? 'about-us__dot--active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide: ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
