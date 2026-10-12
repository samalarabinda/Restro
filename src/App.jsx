import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import TrustSection from './components/TrustSection/TrustSection'
import Available from './components/Available/Available'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TrustSection />
      <Available />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App