import {useState} from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import TrustSection from './components/TrustSection/TrustSection'
import Available from './components/Available/Available'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import PopUp from './components/PopUp/PopUp'

const App = () => {
 const [popup, setPopUp] = useState(false)

 const handleClick = ()=>{
  setPopUp((prev)=>!prev)
  console.log(popup);
 }

  return (
    <>
      <Navbar handleClick={handleClick}/>
      <Hero handleClick={handleClick} />
      <Services />
      <TrustSection handleClick={handleClick}/>
      <Available />
      <Testimonials />
      <Footer />
      <PopUp handleClick={handleClick} popup={popup} setpopup={setPopUp}/>
    </>
  )
}

export default App