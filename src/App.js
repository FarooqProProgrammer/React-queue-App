import React from 'react'
import Navbar from './common/Navbar/Navbar'
import Hero from './common/hero/Hero'
import About from './common/About/About'
import Project from './common/Project/Project'
import Contact from './common/ContactUs/Contact'
import Footer from './common/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App