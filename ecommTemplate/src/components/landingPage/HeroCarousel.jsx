import React, { useState, useEffect } from 'react'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import Polariod from '../heroBanners/Polariod.jsx';
import Beach from '../heroBanners/Beach'
import Cancel from '../heroBanners/Cancel.jsx';
import ErrorBoundry from '../utils/ErrorBoundry.jsx';

const banners = [Beach, Cancel, Polariod]

const HeroCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
      if (newIndex < 0) {
        newIndex = banners.length - 1
      } else if (newIndex >= banners.length) {
        newIndex = 0
      }
      
      setSlideIndex(newIndex)
    }

    useEffect(() => {
      const interval = setInterval(() => {
        if (!paused) {
          updateIndex(slideIndex+1);
        }
      }, 7500)

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      }
    })

  return (
    <ErrorBoundry fallback="Oops, Sorry! We appear to be missing something.">
    <div 
      className='flex-1 relative overflow-hidden hidden sm:flex'
      onMouseEnter={()=> setPaused(true)}
      onMouseLeave={()=> setPaused(false)}
      >
      <div 
        className={`flex flex-row transform transition ease-in-out duration-700 `}
        style={{transform: `translateX(-${slideIndex*100}%)`}}
        >
        {banners.map((Banner, index) => (
          <div className='inline-flex min-w-full' key={index}>
            <Banner key={index}/>
          </div>

        ))}
        </div>
      <div className='absolute bottom-0 left-1/2 p-1 flex justify-center items-center transform transition ease-in-out duration-700'>
        {banners.map((banner, index) => {
          if (slideIndex === index) {
            return (
              <CircleIcon 
              className='scale-75'
              key={index}
              onClick={()=>updateIndex(index)}
              />
              )
            }
            return (
              <CircleOutlinedIcon 
              key={index}
              className='mx-1 scale-75'
              onClick={()=>updateIndex(index)}
              />
              )
            })}
      </div>
    </div>
    </ErrorBoundry>
  )
}

export default HeroCarousel