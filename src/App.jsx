// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import ParticleBg from './components/ParticleBg'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>  
      <Home />
      <About />
      <Education />
      <Skills/>
      <Contact/>
    </>
  )
}

export default App
