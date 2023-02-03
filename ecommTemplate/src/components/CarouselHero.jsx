import CaroProdCard from './CaroProdCard';
import { useState } from 'react';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', '1', '2','3', '4']

const CarouselHero = () => {
  const [cardn, setCardn] = useState(0)

  function leftButtonClick(){
    setCardn(cardn-1)
  }

  function rightButtonClick(){
    setCardn(cardn+1)
  }

  function translateX(n, list, scrollN){
    let suffix = Math.round(n / list.length * 100 * scrollN).toString() + '%)'
    console.log(suffix)
    let fullTrans = 'translateX(-' + suffix
    return(fullTrans)
  }

  return (
    <div className='bg-white rounded-md shadow-md flex'>
      <div className='flex justify-center items-center py-4 px-10 ml-4 relative text-[36px] text-center'>TOP SELLERS
      
      </div>
      
      <div className='overflow-hidden flex flex-row border relative'>
        <button 
        className={`text-white bg-primary rounded-full absolute top-1/2 z-10 mx-1 ${cardn === 0 ? 'hidden' : ''}`}
        onClick={()=> leftButtonClick()}
        >
          {cardn}
        </button>
        <div 
          className={`flex transform transition ease-linear duration-200`}
          style={{ transform: translateX(cardn, list, 3)}}
          >
          {list.map((item, index) => {
            return (
              <CaroProdCard food={item} key={index}/>
            )
          })}
        </div>
        <button 
        className='text-white bg-primary rounded-full absolute top-1/2 right-0 z-10 mx-1'
        onClick={() => rightButtonClick()}
        >
          BUTTOn
        </button>
      </div>
    </div>


  )
}

export default CarouselHero