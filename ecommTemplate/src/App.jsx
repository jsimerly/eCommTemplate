import React from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import StandardShop from './components/pages/StandardShop';

function App() {
  return (
    <Router>
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <Navbar/>
        <div className='my-20'/>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/shopping' element={<StandardShop/>}/>
        </Routes>
        <div className='flex justify-center items-center'>
          <Footer/>
        </div>
      </div>
    </Router>

  )
}

export default App
