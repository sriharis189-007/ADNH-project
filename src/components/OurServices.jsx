import { useState } from 'react'

const SERVICES = [
  'Employee Dining',
  'Patient Services',
  'Retail and Coffee Shops',
  'Events',
  'Cleaning & Housekeeping',
  'Hospitality',
  'Manpower Supply Services',
  'Pest Control',
  'Fueling Future Minds',
]

const FEATURED = {
  'Employee Dining': {
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=700&h=500&fit=crop',
    description: 'Whether we\'re operating a vibrant dining space within your office environment or delivering emergency meals to the nation\'s heroes, we provide fully tailored catering solutions designed around your exact requirements. When a branded experience adds value, we can introduce Hive — our fresh, flexible employee dining concept.',
  },
  'Patient Services': {
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&h=500&fit=crop',
    description: 'Healthcare demands true specialisation. Our healthcare-focused catering and housekeeping teams are trained for clinical environments, operating to rigorous hygiene standards and patient-centred service principles.',
  },
  'Retail and Coffee Shops': {
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&h=500&fit=crop',
    description: 'We design and operate cafés, grab-and-go outlets, and high-street-style coffee bars that keep people coming back. With our own home-grown brand, Husk, alongside bespoke concepts tailored to your environment.',
  },
  Events: {
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=500&fit=crop',
    description: 'From intimate VIP gatherings to large-scale national events, we deliver seamless catering and hospitality solutions from start to finish. Our expert teams manage every detail with precision and professionalism.',
  },
  'Cleaning & Housekeeping': {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&h=500&fit=crop',
    description: 'Through Task+, our dedicated housekeeping and environmental services arm, we keep your spaces clean, safe, and welcoming. From hospital wards and classrooms to offices and accommodation.',
  },
  Hospitality: {
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=500&fit=crop',
    description: 'Our Hospitality teams shape the first and last impression of your sites, delivering warm, professional service across reception, front-of-house, and workplace environments.',
  },
  'Manpower Supply Services': {
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&h=500&fit=crop',
    description: 'Our manpower supply services provide reliable, fully vetted professionals across a range of sectors, seniority levels, and technical specialisations.',
  },
  'Pest Control': {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop',
    description: 'Effective pest control protects your reputation as much as your premises. Through Task+, we combine highly trained technicians, safe and compliant treatments, and proactive monitoring programmes.',
  },
  'Fueling Future Minds': {
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da280a25?w=700&h=500&fit=crop',
    description: 'Good food helps students concentrate, participate and get more from their day. Through Food Nation, our specialist chef-led education brand, we create school dining experiences that balance nutrition with genuine student appeal.',
  },
}

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="our-services bg-pattern">
      <div className="container our-services__header">
        <p className="section-label our-services__label">Solutions</p>
        <h2 className="section-title our-services__title">Our Services</h2>
        <p className="our-services__intro">
          At ADNH Catering, we provide the widest portfolio of food service and support service solutions in the world. From prestigious venues, hospitals and workplaces, to schools and universities, to defence, offshore and remote locations.
        </p>
      </div>

      <div
        className="our-services__accordion"
        role="list"
        aria-label="Our services"
      >
        {SERVICES.map((name, index) => {
          const featured = FEATURED[name]
          const isActive = activeIndex === index
          return (
            <article
              key={name}
              className={`our-services__panel${isActive ? ' our-services__panel--active' : ''}`}
              role="listitem"
              tabIndex={0}
              aria-expanded={isActive}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveIndex(index)
                }
              }}
            >
              <span className="our-services__panel-label" aria-hidden="true">
                {name}
              </span>
              <div className="our-services__panel-content">
                <img src={featured.image} alt="" loading="lazy" />
                <div className="our-services__panel-overlay">
                  <h3 className="our-services__panel-title">{name}</h3>
                  <p className="our-services__panel-desc">{featured.description}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
