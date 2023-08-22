// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import ParticleBg from './components/ParticleBg'
import Home from './components/Home'
import Education from './components/Education'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About2 from './components/About2'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
      <Home />
      <About2 />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
