import React, { useState } from 'react'
import styles from './styles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Carousel from './components/Carousel'
import ProductCard from './components/ProductCard'

function App() {
  return (

      <div className='w-full overflow-hidden bg-secondaryTone-30'>
        <Navbar/>
        <Hero/>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Carousel/>

          </div>
        </div>
      </div>
  )
}

export default App
