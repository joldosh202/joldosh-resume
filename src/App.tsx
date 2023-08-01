import './App.css'
import WorkExp from './components/WorkExp'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {useRef} from 'react'
import React from 'react'
import MainPage from './components/MainPage'


function App() {

  const workRef = useRef<null | HTMLDivElement>(null)
  const skillsRef = useRef<null | HTMLDivElement>(null)
  const contactRef = useRef<null | HTMLDivElement>(null)

  return (
    <>
    <Navbar workRef={workRef} skillsRef={skillsRef} contactRef={contactRef}/>
    <div className='h-2100 sm:h-[2200px]'>
      
      <MainPage/>
      <div ref={workRef}>

      <WorkExp />
      </div>

     <div ref={skillsRef}>
      <Skills/>
     </div>

      <div ref={contactRef}>
      <Footer/>
      </div>

    </div>
    </>

  )
}

export default App
