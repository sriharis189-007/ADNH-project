import { asset } from '../utils/assets'

const BRAND_LOGOS = [
  { name: 'Husk', image: asset('images/husk.png') },
  { name: 'hive', image: asset('images/Hive.png') },
  { name: 'Food Nation', image: asset('images/FoodNation.png') },
  { name: 'Task+', image: asset('images/task-plus.png') },
]

export default function OurBrands() {
  return (
    <section id="brands" className="our-brands bg-pattern">
      <div className="container">
        <div className="our-brands__header">
          <p className="section-label our-brands__label">Solutions</p>
          <h2 className="section-title our-brands__title">Our Brands</h2>
        </div>
        <div className="our-brands__grid">
          {BRAND_LOGOS.map((brand) => (
            <div key={brand.name} className="brand-card">
              <img src={brand.image} alt={brand.name} className="brand-card__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
