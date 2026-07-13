const BRAND_CARDS = [
  {
    name: 'Employee Dining',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=400&h=500&fit=crop',
  },
  {
    name: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=500&fit=crop',
  },
  {
    name: 'Education',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da280a25?w=400&h=500&fit=crop',
  },
  {
    name: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=500&fit=crop',
  },
  {
    name: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=500&fit=crop',
  },
]

const BRAND_LOGOS = [
  { name: 'Husk', style: 'husk' },
  { name: 'tas by ADNH', sub: 'BY ADNH', style: 'tas' },
  { name: 'hive', style: 'hive' },
  { name: 'Food Nation', tagline: 'EAT RIGHT, LIVE BRIGHT', style: 'foodnation' },
  { name: 'Task+', style: 'task' },
]

export default function OurBrands() {
  return (
    <section id="brands" className="our-brands bg-pattern">
      <div className="container">
        <p className="our-brands__label">Solutions</p>
        <h2 className="section-title our-brands__title">Our Brands</h2>
        <div className="our-brands__cards">
          {BRAND_CARDS.map((card) => (
            <div key={card.name} className="brand-sector-card">
              <img src={card.image} alt={card.name} className="brand-sector-card__img" />
              <div className="brand-sector-card__overlay">
                <span className="brand-sector-card__name">{card.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="our-brands__grid">
          {BRAND_LOGOS.map((brand) => (
            <div key={brand.name} className={`brand-card brand-card--${brand.style}`}>
              <div className="brand-card__content">
                <span className="brand-card__name">{brand.name}</span>
                {brand.sub && <span className="brand-card__sub">{brand.sub}</span>}
                {brand.tagline && <span className="brand-card__tagline">{brand.tagline}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
