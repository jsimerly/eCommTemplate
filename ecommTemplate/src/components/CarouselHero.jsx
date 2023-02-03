import CaroProdCard from './CaroProdCard';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', '1', '2','3', '4']

const CarouselHero = () => {
  const [cardn, setCardn] = useState(0)
  const [rightCardHidden, setRightHidden] = useState(false)

  function leftButtonClick(){
    setCardn(cardn-1)
  }

  function rightButtonClick(){
    setCardn(cardn+1)
  }

  function translateXPerc(n, list, scrollN){
    if (n < 0) {
      setCardn(0)
      n = 0
    }
    let suffix = Math.round(n / list.length * 100 * scrollN).toString() + '%)'

    return('translateX(-' + suffix)
  }

  function translateXWidth(n, width, list, scrollN){
    if (n < 0) {
      setCardn(0)
      n = 0
    }
    if ((n+1)*scrollN > list.length){
      let remainingItems = list.length%scrollN
      let suffix = Math.round((n+1) * width * remainingItems).toString() + 'px)'

      return('translateX(-' + suffix)
    }

    let suffix = Math.round(n * width * scrollN).toString() + 'px)'
    console.log(suffix)
    return('translateX(-' + suffix)
  }

  const nCardsPerView = 3

  return (
    <div className='bg-white rounded-md shadow-md flex'>
      <div className='flex justify-center items-center py-4 px-10 ml-4 relative text-[36px] text-center font-bold text-primary'>TOP SELLERS
      
      </div>
      
      <div className='overflow-hidden flex flex-row border relative'>
        <button 
        className={`text-white bg-primary rounded-md absolute top-1/2 z-10 mx-1 ${cardn === 0 ? 'hidden' : ''} p-2 bg-opacity-20 hover:bg-opacity-50`}
        onClick={()=> leftButtonClick()}
        >
          <ArrowBackIosNewIcon/>
        </button>
        <div 
          className={`flex transform transition ease-linear duration-200`}
          style={{ transform: translateXWidth(cardn, 316, list , nCardsPerView)}}
          >
          {list.map((item, index) => {
            return (
              <CaroProdCard food={item} key={index}/>
            )
          })}
        </div>
        <button 
        className={`text-white bg-primary rounded-md absolute top-1/2 right-0 z-10 mx-1 p-2 bg-opacity-20 hover:bg-opacity-50 ${(cardn+1)*nCardsPerView > list.length ? 'hidden' : ''}`}
        onClick={() => rightButtonClick()}
        >
          <ArrowForwardIosIcon/>
        </button>
      </div>
    </div>


  )
}

export default CarouselHero