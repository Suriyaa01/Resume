import { useState } from 'react'
import './index.css'

//Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Infoone from './components/Infoone'
import InfoTwo from './components/InfoTwo'
import CTA from './components/CTA'
import Testimonial from './components/Testimonial'
import Getintouch from './components/Getintouch'
import Footer from './components/Footer'

function App() {
  const [count , setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Infoone />
    <InfoTwo />
    <CTA />
    <Testimonial />
    <Getintouch />
    <Footer />
    </>
  )
}

export default App;
