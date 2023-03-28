import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import StandardShop from './components/pages/StandardShop';
import CartPage from './components/pages/CartPage';
import { allDests } from './api/temp'
import { allCategories } from './components/categorySelect_constants';
import { ShoppingContext } from './context';
import ProductPage from './components/pages/ProductPage';
import Navbar from './components/Navbar';
import HelpPage from './components/auxillaryPages/HelpPage'
import SearchPage from './components/pages/SearchPage'
import {AllBlogsPage, BlogPage, ContactSupport, FAQ, Privacy, TermsConditionsPage, FindOrder, Feedback, Account, Partners, Cookies, SignUp} from './components/auxillaryPages'
import AboutUs from './components/auxillaryPages/AboutUs';
import { getCookie } from './api';



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
  const [selectedDateRange, setSelectedDateRange] = useState(getDateRange())

  const [selectedCategory, setSelectedCategory] = useState(getCategory())
  const [searchInput, setSearchInput] = useState('')
  const [searchParamActive, setSearchParamActive] = useState(false)

  const location = useLocation();
  const [immediateSearch, setImmediateSearch] = useState(false)

  useEffect(()=>{
    if (location.pathname === '/shopping' || location.pathname === '/search'){
      setImmediateSearch(true)
    } else {
      setImmediateSearch(false)
    }
  }, [location])

  useEffect(() => {
    sessionStorage.setItem('destination', selectedDestination);
    sessionStorage.setItem('date_range', JSON.stringify(selectedDateRange));
    sessionStorage.setItem('category', JSON.stringify(selectedCategory) )
  }, [selectedDateRange, selectedDestination, selectedCategory])  

  return (
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <ShoppingContext.Provider value={
          {selectedDateRange, setSelectedDateRange, 
            selectedDestination, setSelectedDestination, 
            selectedCategory, setSelectedCategory,
            allDests, allCategories}}
        >
          <Navbar
            immediateSearch={immediateSearch}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            searchParamActive={searchParamActive}
            setSearchParamActive={setSearchParamActive}
          />
          <div className='h-[80px]'/>
          <Routes>
            <Route exact path='/' element={ <LandingPage/>}/> {/* Mobile */}
            <Route path='/about-us' element={<AboutUs/>}/> {/* On hold until Business Model */}
            <Route path='/shopping/' element={<StandardShop/>}/> {/* Mobile */}
            <Route path='/search' element={<SearchPage/>}/> {/* Mobile */}
            <Route path='/p/:slug' element= {<ProductPage/>} 
            /> {/* Mobile */}
            <Route path='/cart' element={<CartPage/>}/> {/* Mobile */}
            <Route path='/help' element={<HelpPage/>} 
            /> {/* Mobile */}
            <Route path='/contact-support' element={<ContactSupport/>}/> {/* Mobile */}
            <Route path='/FAQ' element={<FAQ/>}/> {/* On Hold until Business Model */}
            <Route path='/find-order' element={<FindOrder/>}/> {/* Mobile */}
            <Route path='/feedback' element={<Feedback/>}/> {/* Mobile */}
            <Route path='/partner' element={<Partners/>}/> {/* On Hold until validtation */} 
            <Route path='/sign-up' element={<SignUp/>}/> {/* Completed */}
            <Route path='/blogs' element={<AllBlogsPage/>}/> {/* Mobile */}
            <Route path='/blogs/:blogId' element={<BlogPage/>}/> {/* Mobile */}
            <Route path='/privacy' element={<Privacy/>}/> {/* Mobile */}
            <Route path='/cookies' element={<Cookies/>}/> {/* On hold until backend*/}
            <Route path='/terms-and-conditions' element={<TermsConditionsPage/>}/> {/* Mobile */}
          </Routes>
          <div className='flex justify-center items-center'>
            <Footer/>
          </div>
        </ShoppingContext.Provider>
      </div>
  )
}

export default App
