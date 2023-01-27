import React, { useState } from 'react'
import styles from './styles'
import Navbar from './components/Navbar'
import SearchHero from './components/SearchHero'

function App() {
  const [startdate, setStartDate] = useState(null)

  return (

      <div className='w-full overflow-hidden'>
        <Navbar/>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <div className='flex justify-center border'>
              <div className='min-h-[500px] border'></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
