import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
      <div className="overflow-x-hidden bg-gradient-to-b from-[#F7F7F7] via-[#AABFB4] to-[#ABA580] text-white">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
      </div>
  )
}

export default App
