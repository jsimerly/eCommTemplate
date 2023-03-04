import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import StandardShop from './components/pages/StandardShop';
import CartPage from './components/pages/CartPage';
import { allDests } from './api/temp'
import { allCategories } from './constants';
import { ShoppingContext } from './context';
import ProductPage from './components/pages/ProductPage';
import Navbar from './components/Navbar';
import HelpPage from './components/auxillaryPages/HelpPage'
import {AllBlogsPage, BlogPage, ContactSupport, DisputeDamages, ExchangeItem, FAQ, Privacy, TermsConditionsPage, FindOrder, Feedback, Account,Partners, Cookies} from './components/auxillaryPages'

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

  const location = useLocation();
  const [immediateSearch, setImmediateSearch] = useState(false)

  useEffect(()=>{
    if (location.pathname == '/shopping'){
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
          />
          <div className='h-[80px]'/>
          <Routes>
            <Route exact path='/' element={ <LandingPage/>}/> {/* Update the links */}
            <Route path='/shopping/' element={<StandardShop/>}/> {/* Completed */}
            <Route path='/p/:slug' element= {<ProductPage/>} 
            /> {/* Completed */}
            <Route path='/cart' element={<CartPage/>}/> {/* Completed */}
            <Route path='/help' element={<HelpPage/>} 
            /> {/* Add Address */}
            <Route path='/contact-support' element={<ContactSupport/>}/> {/* X */}
            <Route path='/FAQ' element={<FAQ/>}/> {/* Need to Update Answers */}
            <Route path='/find-order' element={<FindOrder/>}/> {/* Completed */}
            <Route path='/feedback' element={<Feedback/>}/> {/* Completed */}
            <Route path='/partner' element={<Partners/>}/> {/* X */}  
            <Route path='/account-management' element={<Account/>}/> {/* X */}
            <Route path='/blogs' element={<AllBlogsPage/>}/> {/* X */}
            <Route path='/blogs/:blogID' element={<BlogPage/>}/> {/* X */}
            <Route path='/privacy' element={<Privacy/>}/> {/* Completed */}
            <Route path='/cookies' element={<Privacy/>}/> {/* X*/}
            <Route path='/terms-and-conditions' element={<TermsConditionsPage/>}/> {/* Completed */}
          </Routes>
          <div className='flex justify-center items-center'>
            <Footer/>
          </div>
        </ShoppingContext.Provider>
      </div>
  )
}

export default App
