import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'


function App() {
  return (
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <Navbar/>
        <LandingPage/>
        <div className='flex justify-center items-center'>
          <Footer/>
        </div>
      </div>
  )
}

export default App
