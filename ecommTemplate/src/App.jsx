import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import StandardShop from './components/pages/StandardShop';
import { dests } from './api/temp'
import { allCategories } from './constants';
import { ShoppingContext } from './context';

function getDateRange(){
  const sessionDateRange = sessionStorage.getItem('date_range')
  if (sessionDateRange){
    let dateRange = JSON.parse(sessionDateRange)
    dateRange['startDate'] = new Date(dateRange['startDate'])
    dateRange['endDate'] = new Date(dateRange['endDate'])
    return dateRange

    
  }
  return (
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
      first: false
    }
  )
}

function getDestination(){
  const sessionDest = sessionStorage.getItem('destination')
  return sessionDest ? sessionDest : ''
}

function getCategory(){
  const sessionCat = sessionStorage.getItem('category')
    return sessionCat ? JSON.parse(sessionCat) : {name: '', id:'0000'}
  }

function App() {
  const [selectedDestination, setSelectedDestination] = useState(getDestination())
  const [selectedDateRange, setSelectedDateRage] = useState(getDateRange())
  const [selectedCategory, setSelectedCategory] = useState(getCategory())

  useEffect(() => {
    sessionStorage.setItem('destination', selectedDestination);
    sessionStorage.setItem('date_range', JSON.stringify(selectedDateRange));
    sessionStorage.setItem('category', JSON.stringify(selectedCategory) )
  }, [selectedDateRange, selectedDestination, selectedCategory])  

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
            <Route path='/shopping/' element={<StandardShop/>}/>*
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
