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
import {AllBlogsPage, BlogPage, ContactSupport, DisputeDamages, ExchangeItem, FAQ, Privacy, TermsConditionsPage, UpdateOrderPage, Feedback, Account,Partners} from './components/auxillaryPages'

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
            <Route exact path='/' element={ <LandingPage/>}/>
            <Route path='/shopping/' element={<StandardShop/>}/>
            <Route path='/p/:slug' element= {<ProductPage/>}
            />
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/help' element={<HelpPage/>}
            />
            <Route path='/contact-support' element={<ContactSupport/>}/>
            <Route path='/FAQ' element={<FAQ/>}/>
            <Route path='/update-order' element={<UpdateOrderPage/>}/>
            <Route path='/exchange-item' element={<ExchangeItem/>}/>
            <Route path='/dispute-damages' element={<DisputeDamages/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/partner' element={<Partners/>}/>
            <Route path='/account-management' element={<Account/>}/>
            <Route path='/Blogs' element={<AllBlogsPage/>}/>
            <Route path='/Blogs/:blogID' element={<BlogPage/>}/>
            <Route path='/privacy' element={<Privacy/>}/>
            <Route path='/account-management' element={<TermsConditionsPage/>}/>
          </Routes>
          <div className='flex justify-center items-center'>
            <Footer/>
          </div>
        </ShoppingContext.Provider>
      </div>
  )
}

export default App
