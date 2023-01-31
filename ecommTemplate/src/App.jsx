import React, { useState } from 'react'
import styles from './styles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryHero from './components/CategoryHero'

function App() {
  return (

      <div className='w-full overflow-hidden bg-tertiaryTone-100'>
        <Navbar/>
        <Hero/>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <CategoryHero/>

          </div>
        </div>
      </div>
  )
}

export default App
