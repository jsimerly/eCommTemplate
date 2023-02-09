import React, { useState, useEffect} from 'react'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import Beach from './HeroBanners/beach.jsx';
import ProdPackages from './HeroBanners/prodPackages.jsx';
import Water from './HeroBanners/water.jsx';

const banners = [ Beach, ]

const HeroCarousel = () => {
    const [slideIndex, setSlideIndex] = useState(0)

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
        updateIndex(slideIndex+1)
   
      }, 10000)

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      }
    })

  return (
    <div className='flex flex-1 relative overflow-hidden'>
      <div 
        className={`flex flex-row transform transition ease-in-out duration-700 `}
        style={{transform: `translateX(-${slideIndex*100}%)`}}
      >
        {banners.map((Banner, index) => (
          <div className='inline-flex min-w-full'>
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
  )
}

export default HeroCarousel