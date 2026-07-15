const BOARD = [
  { name: 'Khalaf Sultan Rashed Saeed Al Dhaheri', title: 'Chairman' },
  { name: 'H.E Sheikh Ahmed Mohammed Sultan Suroor Al Dhaheri', title: 'Deputy Chairman' },
  { name: 'Mohamed Khalaf Ahmed Khalaf Alotaiba', title: 'Board Member' },
  { name: 'Rauda Abdulla Sorour Al Dhaheri', title: 'Board Member' },
  { name: 'Darwish Ahmed Darwish Ahmed Alketbi', title: 'Board Member' },
  { name: 'Khalid Ahmad Mohammad Anib', title: 'Board Member' },
  { name: 'Clive Cowley', title: 'Board Member' },
]

const LEADERSHIP = [
  { name: "Colm O'Mahony", title: 'Chief Executive Officer ME' },
  { name: 'Danisha Patel', title: 'Legal Services Director ME' },
  { name: 'Peter Nichols', title: 'Chief Operating Officer' },
  { name: 'Mayah Haidar', title: 'Client Services and Marketing Director ME' },
  { name: 'Laura Abizova', title: 'Procurement and Supply Chain Director ME' },
  { name: 'Anthony Childers', title: 'Chief Financial Officer ME' },
  { name: 'Ghida Sarieddine', title: 'Growth & Commercial Director ME' },
  { name: 'Vishal Subba', title: 'Chief People Officer ME' },
  { name: 'Scott Durand', title: 'Country Managing Director, Kingdom of Saudi Arabia' },
]

const PORTRAITS = [
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1463453091185-61582044d556?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=480&h=640&fit=crop&crop=face',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=480&h=640&fit=crop&crop=face',
]

function LeaderCard({ person, imageIndex, showArrow = false }) {
  return (
    <article className="leader-card">
      <div className="leader-card__media">
        <img
          src={PORTRAITS[imageIndex % PORTRAITS.length]}
          alt={person.name}
        />
        {showArrow && (
          <span className="leader-card__arrow" aria-hidden>
            ↗
          </span>
        )}
        <div className="leader-card__overlay">
          <h4 className="leader-card__name">{person.name}</h4>
          <p className="leader-card__title">
            <span className="leader-card__divider" aria-hidden />
            {person.title}
          </p>
        </div>
      </div>
    </article>
  )
}

function DecorPaths() {
  return (
    <svg
      className="our-leadership__decor"
      viewBox="0 0 1200 700"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="our-leadership__path"
        d="M-20 180 C180 40, 320 320, 520 220 S820 40, 1020 160 S1220 320, 1280 280"
        fill="none"
      />
      <path
        className="our-leadership__path"
        d="M-40 420 C160 520, 340 280, 560 380 S860 560, 1080 420 S1260 280, 1300 360"
        fill="none"
      />
      <g className="our-leadership__stars">
        <polygon points="90,150 96,168 116,168 100,180 106,198 90,186 74,198 80,180 64,168 84,168" />
        <polygon points="380,250 385,262 398,262 388,270 392,282 380,274 368,282 372,270 362,262 375,262" />
        <polygon points="720,120 726,136 744,136 730,146 735,162 720,152 705,162 710,146 696,136 714,136" />
        <polygon points="980,210 985,222 998,222 988,230 992,242 980,234 968,242 972,230 962,222 975,222" />
        <polygon points="250,450 256,466 274,466 260,476 265,492 250,482 235,492 240,476 226,466 244,466" />
        <polygon points="620,470 625,482 638,482 628,490 632,502 620,494 608,502 612,490 602,482 615,482" />
        <polygon points="1050,480 1056,496 1074,496 1060,506 1065,522 1050,512 1035,522 1040,506 1026,496 1044,496" />
      </g>
    </svg>
  )
}

export default function OurLeadership() {
  return (
    <section id="people" className="our-leadership">
      <div className="container our-leadership__inner">
        <div className="our-leadership__header">
          <p className="section-label our-leadership__label">Our Team</p>
          <h2 className="section-title our-leadership__title">Board of Directors</h2>
        </div>

        <div className="our-leadership__board-wrap">
          <DecorPaths />
          <div className="our-leadership__grid our-leadership__grid--board">
            {BOARD.map((person, i) => (
              <LeaderCard
                key={person.name}
                person={person}
                imageIndex={i}
                showArrow={i === BOARD.length - 1}
              />
            ))}
          </div>
        </div>

        <h2 className="section-title our-leadership__title our-leadership__title--sub">
          Leadership Team
        </h2>
        <div className="our-leadership__grid our-leadership__grid--leadership">
          {LEADERSHIP.map((person, i) => (
            <LeaderCard
              key={person.name}
              person={person}
              imageIndex={i + 7}
              showArrow={i === LEADERSHIP.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
