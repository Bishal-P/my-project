// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ParticleBg from './components/ParticleBg'
import Home from './components/Home'
import Education from './components/Education'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ParticleBg>
      </ParticleBg>
    
      <div className='Main'>
        <img src="./images/123.jpg" alt="" />
      </div>
      <Home />
      <Education/>
    </>
  )
}

export default App
