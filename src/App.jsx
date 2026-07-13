import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Story from './components/Story'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import OurSectors from './components/OurSectors'
import OurBrands from './components/OurBrands'
import OurLeadership from './components/OurLeadership'
import InvestorRelations from './components/InvestorRelations'
import ContactFooter from './components/ContactFooter'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="app">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <main>
        <Hero />
        <Story />
        <AboutUs />
        <OurServices />
        <OurSectors />
        <OurBrands />
        <OurLeadership />
        <InvestorRelations />
        <ContactFooter />
      </main>
    </div>
  )
}

export default App
