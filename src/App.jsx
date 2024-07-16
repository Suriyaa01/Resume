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
import EmployeeTable from './components/Table/EmployeeTable'
import TableNat from './components/TestTable/TableNat'
import Template from './components/TestTable/Template'
import Demo from './components/Table/Demo'

function App() {
  const [count , setCount] = useState(0)
  const [name , setName] = useState("milerDev")

  return (
    <>
    {/* <Navbar />
    <Hero />
    <About />
    <Infoone />
    <InfoTwo />
    <CTA />
    <Testimonial />
    <EmployeeTable />
    <Getintouch />
    <Footer />
    <br></br>
    <TableNat /> */}
    {/* <Template />

    <p>Hello {name}</p>
    <button type="button" onClick={()=> setName("PP")} className='text-gray-600 mt-4 bg-blue-500'>G1</button> */}
    <Demo />
    
    </>
  )
}


export default App;
