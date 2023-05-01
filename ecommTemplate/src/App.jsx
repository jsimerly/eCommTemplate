import React, {useEffect, useState} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer'
import LandingPage from './components/pages/LandingPage'
import StandardShop from './components/pages/StandardShop';
import CartPage from './components/pages/CartPage';
import { allDests } from './api/temp'
import { ShoppingContext } from './context';
import ProductPage from './components/pages/ProductPage';
import Navbar from './components/Navbar';
import HelpPage from './components/auxillaryPages/HelpPage'
import SearchPage from './components/pages/SearchPage'
import {AllBlogsPage, BlogPage, ContactSupport, FAQ, Privacy, TermsConditionsPage, FindOrder, Feedback, AccountInformation, Partners, Cookies, SignUp, ResetPassword} from './components/auxillaryPages'
import AboutUs from './components/auxillaryPages/AboutUs';
import { fetchCartSize } from './api/fetchCart';
import NotificationBar from './components/navBar/NotificationBar';
import ErrorBoundry from './components/utils/ErrorBoundry';
import Empty from './components/utils/Empty';
import MobileSearch from './components/searchbar/mobileSearchbar/MobileSearch';

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

function getDestination() {
  const sessionDest = sessionStorage.getItem('destination');
  try {
    const dest = sessionDest ? JSON.parse(sessionDest) : null;
    return dest;
  } catch (error) {
    console.error('Error parsing destination:', error);
    return null;
  }
}

function getCategory(){
  const sessionCat = sessionStorage.getItem('category')
    return sessionCat ? JSON.parse(sessionCat) : null
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
    sessionStorage.setItem('category', JSON.stringify(selectedCategory))
  }, [selectedDateRange, selectedDestination, selectedCategory])  

  const [cartSize, setCartSize] = useState(0)

  useEffect(()=>{
      fetchCartSize(setCartSize)
  },[])

  const [notifcationOpen, setNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notifcationCta, setNotificationCta] = useState(null)
  const [notificationError, setNotificationError] = useState(false)

  const handleNotification = (message, cta=null, error=false) => {
    setNotificationMessage(message)
    setNotification(true)
    setNotificationCta(cta)
    setNotificationError(error)

    const timer = setTimeout(()=> {
      setNotification(false)
    }, 500000)

    return () => clearTimeout(timer);
  }

  return (
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <ShoppingContext.Provider value={
          {selectedDateRange, setSelectedDateRange, 
            selectedDestination, setSelectedDestination, 
            selectedCategory, setSelectedCategory,
            allDests,
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
          <MobileSearch
            immediateSearch={immediateSearch}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            searchParamActive={searchParamActive}
            setSearchParamActive={setSearchParamActive}
          />
          <NotificationBar
            message={notificationMessage}
            showPopup={notifcationOpen}
            setNotification={setNotification}
            cta={notifcationCta}
            error={notificationError}
          />
          <div className='h-[80px]'/>
          <ErrorBoundry fallback={<Empty className='my-[200px]'/>}>
          <Routes>
            <Route exact path='/' element={
              <LandingPage/>}/>
            <Route path='/about-us' element={<AboutUs/>}/> {/* X */}
            <Route path='/shopping/' element={<StandardShop/>}/> 
            <Route path='/search/' element={<SearchPage/>}/>
            <Route path='/p/:slug' element= {<ProductPage/>} 
            /> {/* X */}
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/help' element={<HelpPage/>}/>
            <Route path='/contact-support' element={<ContactSupport/>}/>
            <Route path='/FAQ' element={<FAQ/>}/> {/* On Hold until Business Model */} {/* X */}
            <Route path='/find-order' element={<FindOrder/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/partner' element={<Partners/>}/> {/* On Hold until validtation */} {/* X */}
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/account-information' element={<AccountInformation/>}/>
            <Route path='/reset-password' element={<ResetPassword/>}/>
            <Route path='/blogs' element={<AllBlogsPage/>}/>
            <Route path='/blogs/:blogId' element={<BlogPage/>}/>
            <Route path='/privacy' element={<Privacy/>}/> {/* X */}
            <Route path='/cookies' element={<Cookies/>}/> {/* On hold until backend*/}{/* X */}
            <Route path='/terms-and-conditions' element={<TermsConditionsPage/>}/> 
            <Route path='*' element={<Empty className='h-[600px]' message={
              <div>
                Oh dear, it seems that there is nothing here! <br/> <span className='text-[12px]'>(Page Not Found) </span>
              </div>
            }/>}/>
          </Routes>
          </ErrorBoundry>
          <div className='flex justify-center items-center'>
            <Footer/>
          </div>
        </ShoppingContext.Provider>
      </div>
      
  )
}

export default App
