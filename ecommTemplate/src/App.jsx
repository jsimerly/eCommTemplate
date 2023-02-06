import React, { useState } from 'react'
import styles from './styles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryHero from './components/CategoryHero'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import CarouselHero from './components/CarouselHero'
import QualityHero from './components/QualityHero'
import QualityHeroV2 from './components/QualityHeroV2'

function App() {
  return (

      <div className='w-full overflow-hidden bg-tertiaryTone-100'>
        <Navbar/>
        <Hero/>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <CategoryHero/>
            <HowItWorks/>
            <CarouselHero title='Top Vacation Sellers'/>
            <div className='my-6'>
              <CarouselHero title='Popular Packages'/>
            </div>
            <div className='my-6'>
              <CarouselHero title='New Arrivals'/>
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
