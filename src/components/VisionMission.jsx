import { useState } from 'react'

const VALUES = [
  {
    title: 'Vision',
    text: 'To become a Gulf regional business that leads in catering and support services by delivering trusted, sustainable, and innovative solutions, building a legacy of excellence and regional synergy, while maximising value for all stakeholders.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="8" />
        <line x1="24" y1="6" x2="24" y2="16" />
        <line x1="24" y1="32" x2="24" y2="42" />
        <line x1="6" y1="24" x2="16" y2="24" />
        <line x1="32" y1="24" x2="42" y2="24" />
      </svg>
    ),
  },
  {
    title: 'Mission',
    text: 'To deliver efficient, client and customer-focused catering and support services by leveraging scale, empowering our people, and driving operational excellence—while enriching people\'s experiences through quality-of-life services that create value, satisfaction, and care in every space we serve.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" />
        <polyline points="16,24 22,30 34,18" />
      </svg>
    ),
  },
  {
    title: 'Values',
    type: 'pride',
    prideItems: [
      { letter: 'P', word: 'Progress' },
      { letter: 'R', word: 'Respect' },
      { letter: 'I', word: 'Integrity' },
      { letter: 'D', word: 'Dedication' },
      { letter: 'E', word: 'Excellence' },
    ],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <path d="M24 4l16 8v16l-16 8-16-8V12l16-8z" />
        <path d="M24 4v32M8 12l16 8 16-8M8 28l16 8 16-8" />
      </svg>
    ),
  },
]

export default function VisionMission() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <div className="vision-mission">
      <div className="vision-mission__values">
        {VALUES.map((item, index) => {
          const isActive = activeIndex === index
          return (
            <button
              key={item.title}
              type="button"
              className={`vm-value${isActive ? ' vm-value--active' : ''}`}
              aria-expanded={isActive}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className="vm-value__front">
                <div className="vm-value__icon">{item.icon}</div>
                <h3 className="vm-value__title">{item.title}</h3>
              </div>
              <div className="vm-value__hover">
                {item.type === 'pride' ? (
                  <div className="vm-value__pride">
                    <div className="vm-value__pride-brand">
                      <span className="vm-value__pride-tagline">Serving with</span>
                      <span className="vm-value__pride-word">PRIDE</span>
                    </div>
                    <div className="vm-value__pride-divider" aria-hidden />
                    <ul className="vm-value__pride-list">
                      {item.prideItems.map(({ letter, word }) => (
                        <li key={letter}>
                          <strong>{letter}</strong>
                          {word.slice(1)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="vm-value__text">{item.text}</p>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
