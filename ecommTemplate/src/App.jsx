import React from 'react'
import styles from './styles'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductCarousel from './components/ProductCarousel'
import QualityHeroV2 from './components/QualityHeroV2'
import HowItWorksV2 from './components/HowItWorksV2'
import HeroV2 from './components/HeroV2'
import Change from './components/Change'
import BlogBanner from './components/BlogBanner'
import Categories from './components/Categories'
import NewCustomers from './components/adBanners.jsx/NewCustomers'
import FreeWagon from './components/adBanners.jsx/FreeWagon'

function App() {
  return (
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <Navbar/>
        <div className='mt-20'/>
        <HeroV2/>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <HowItWorksV2/>
            <div className='my-16'>
              <NewCustomers/>
            </div>
            <div className='my-6'>
              <ProductCarousel title='Most Popular'/>
            </div>
            <div className='my-6'>
              <ProductCarousel title='Top Deals'/>
            </div>
            <div className='my-16'>
               <Categories/>
            </div>
            <div className='my-6'>
              <ProductCarousel title='New Arrivals'/>
            </div>
            <div className='my-6'>
              <ProductCarousel title='Family Packages'/>
            </div>
            <div className='my-16'>
              <QualityHeroV2/>
            </div>
            <div className='my-6'>
              <FreeWagon />
            </div>
            <div className='my-16'>
               <Change/>
            </div>
            <div className='my-6'>
               <BlogBanner/>
            </div>
          </div>

        </div>
        <div className='flex justify-center items-center'>
          <Footer/>
        </div>
      </div>
  )
}

export default App
