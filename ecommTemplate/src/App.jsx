import {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import StandardShop from './components/pages/StandardShop';
import { dests } from './api/temp'
import { allCategories } from './constants';

function getDateRange(){
  const localDateRange = localStorage.getItem('date_range')
  if (localDateRange){

    let dateRange = JSON.parse(localDateRange)

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

function App() {

  const [selectedDestination, setSelectedDestination] = useState(
    localStorage.getItem('destination') || ''
  )
  const [selectedDateRange, setSelectedDateRage] = useState(
    getDateRange()
  )

  useEffect(() => {
    localStorage.setItem('destination', selectedDestination);
    localStorage.setItem('date_range', JSON.stringify(selectedDateRange));
  }, [selectedDateRange, selectedDestination])
  

  return (
    <Router>
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <Navbar 
            dests={dests}
            selectedDateRange={selectedDateRange}
            selectedDestination={selectedDestination}
            setSelectedDateRage={setSelectedDateRage}
            setSelectedDestination={setSelectedDestination}
            allCategories={allCategories}
        />
        <div className='my-20'/>
        <Routes>
          <Route 
            exact path='/' 
            element={
            <LandingPage
              dests={dests} 
              selectedDateRange={selectedDateRange}
              selectedDestination={selectedDestination}
              setSelectedDateRage={setSelectedDateRage}
              setSelectedDestination={setSelectedDestination}
              allCategories={allCategories}
            />
            }/>
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
