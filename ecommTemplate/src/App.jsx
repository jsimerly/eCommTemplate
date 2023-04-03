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
import {AllBlogsPage, BlogPage, ContactSupport, FAQ, Privacy, TermsConditionsPage, FindOrder, Feedback, AccountInformation, Partners, Cookies, SignUp, ResetPassword} from './components/auxillaryPages'
import AboutUs from './components/auxillaryPages/AboutUs';
import { fetchCartSize } from './api/fetchCart';
import NotificationBar from './components/navBar/NotificationBar';



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
  return sessionDest ? JSON.parse(sessionDest) : ''
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
    sessionStorage.setItem('destination', JSON.stringify(selectedDestination));
    sessionStorage.setItem('date_range', JSON.stringify(selectedDateRange));
    sessionStorage.setItem('category', JSON.stringify(selectedCategory) )
  }, [selectedDateRange, selectedDestination, selectedCategory])  

  const [cartSize, setCartSize] = useState(0)

  useEffect(()=>{
      fetchCartSize(setCartSize)
  },[])

  const [notifcationOpen, setNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')

  const handleNotification = (message) => {
    setNotificationMessage(message)
    setNotification(true)
    const timer = setTimeout(()=> {
      setNotification(false)
    }, 5000)

    return () => clearTimeout(timer);
  }

  return (
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <ShoppingContext.Provider value={
          {selectedDateRange, setSelectedDateRange, 
            selectedDestination, setSelectedDestination, 
            selectedCategory, setSelectedCategory,
            allDests, allCategories,
            cartSize, setCartSize,
            handleNotification
          }}
        >
          <Navbar
            immediateSearch={immediateSearch}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            searchParamActive={searchParamActive}
            setSearchParamActive={setSearchParamActive}
            cartSize={cartSize}
          />
          <NotificationBar
            message={notificationMessage}
            showPopup={notifcationOpen}
            setNotification={setNotification}
          />
          <div className='h-[80px]'/>
          <Routes>
            <Route exact path='/' element={ <LandingPage/>}/> 
            <Route path='/about-us' element={<AboutUs/>}/> 
            <Route path='/shopping/' element={<StandardShop/>}/> 
            <Route path='/search' element={<SearchPage/>}/> 
            <Route path='/p/:slug' element= {<ProductPage/>} 
            /> 
            <Route path='/cart' element={<CartPage/>}/> 
            <Route path='/help' element={<HelpPage/>} 
            /> 
            <Route path='/contact-support' element={<ContactSupport/>}/> 
            <Route path='/FAQ' element={<FAQ/>}/> {/* On Hold until Business Model */}
            <Route path='/find-order' element={<FindOrder/>}/> 
            <Route path='/feedback' element={<Feedback/>}/> 
            <Route path='/partner' element={<Partners/>}/> {/* On Hold until validtation */} 
            <Route path='/sign-up' element={<SignUp/>}/> 
            <Route path='/account-information' element={<AccountInformation/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/blogs' element={<AllBlogsPage/>}/> 
            <Route path='/blogs/:blogId' element={<BlogPage/>}/> 
            <Route path='/privacy' element={<Privacy/>}/> 
            <Route path='/cookies' element={<Cookies/>}/> {/* On hold until backend*/}
            <Route path='/terms-and-conditions' element={<TermsConditionsPage/>}/> 
          </Routes>
          <div className='flex justify-center items-center'>
            <Footer/>
          </div>
        </ShoppingContext.Provider>
      </div>
  )
}

export default App
