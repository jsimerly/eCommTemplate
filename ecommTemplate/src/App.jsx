import React, { useState } from 'react'
import styles from './styles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [startdate, setStartDate] = useState(null)

  return (

      <div className='w-full overflow-hidden'>
        <Navbar/>
        <Hero/>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className='flex justify-center'>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
