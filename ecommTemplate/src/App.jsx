import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import StandardShop from './components/pages/StandardShop';
import { dests } from './api/temp'
import { allCategories } from './constants';
import { ShoppingContext } from './context';

function App() {
  const [selectedDestination, setSelectedDestination] = useState('')
  const [selectedDateRange, setSelectedDateRage] = useState(    
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      first: false
    })
  const [selectedCategory, setSelectedCategory] = useState(
    {
      name: '',
      link: '',
    })

  useEffect(() => {
    localStorage.setItem('destination', selectedDestination);
    localStorage.setItem('date_range', JSON.stringify(selectedDateRange));
  }, [selectedDateRange, selectedDestination])
  

  return (
    <Router>
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <ShoppingContext.Provider value={
          {selectedDateRange, setSelectedDateRage, 
            selectedDestination, setSelectedDestination, 
            selectedCategory, setSelectedCategory}}
        >
          <Navbar 
              dests={dests}
              allCategories={allCategories}
          />
          <div className='h-[80px]'/>
          <Routes>
            <Route 
              exact path='/' 
              element={
              <LandingPage/>
              }/>
            <Route path='/shopping/:where/:startDate/:endDate/:category' element={<StandardShop/>}/>*
          </Routes>
          <div className='flex justify-center items-center'>
            <Footer/>
          </div>
        </ShoppingContext.Provider>
      </div>
    </Router>

  )
}

export default App
