import React from 'react'
import styles from './styles'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductCarousel from './components/ProductCarousel'
import QualityHeroV2 from './components/QualityHeroV2'
import HowItWorksV2 from './components/HowItWorksV2'
import HeroV2 from './components/HeroV2'

function App() {
  return (
      <div className='w-full overflow-hidden bg-tertiaryTone-100 relative font-roboto'>
        <Navbar/>
        <div className='mt-20'/>
        <HeroV2/>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <HowItWorksV2/>
            <ProductCarousel title='Top Vacation Sellers'/>
            <div className='my-6'>
              <ProductCarousel title='Popular Packages'/>
            </div>
            <div className='my-6'>
              <ProductCarousel title='New Arrivals'/>
            </div>
            <QualityHeroV2/>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Footer/>
        </div>
      </div>
  )
}

export default App
