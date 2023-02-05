import CaroProdCard from './CaroProdCard';
import { useState, useEffect } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSwipeable } from 'react-swipeable'

const list = ['Tundra - 45 Hard Cooler', 'B', 'C', 'D', 'E', 'F', 'G', '1', '2','3', '4', '5', '6', '7', '8', '9']

function windowToScrollN(){

  if (window.innerWidth < 680) {
    console.log(1)
    return 1
  } else if (window.innerWidth < 1200) {
    return 2
  } else {
    return 3
  }
}

const CarouselHero = (props) => {
  const [cardn, setCardn] = useState(0)
  const [translateString, setTranslate] = useState('translateX(0px)')
  const [scrollN, setScrollN] = useState(windowToScrollN)
  const [nCardsPerView, setNCardsPerView] = useState(windowToScrollN)
  const scrollWidth = 316

  useEffect(() => {
    let handleWindowResize = () => {
      let n = windowToScrollN()
      setScrollN(n)
      setNCardsPerView(n)
    }
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, [])

  function leftButtonClick(){
    if (cardn <= 0) {
      setCardn(0)
      return
    }
    setCardn(cardn-1)
    translateXWidth(cardn-1)
  }

  function rightButtonClick(){
    if ((cardn+1)*scrollN >= list.length){
      return
    }
    setCardn(cardn+1)
    translateXWidth(cardn+1)
  }


  const handlers = useSwipeable({
    onSwipedLeft: () => rightButtonClick(),
    onSwipedRight: () => leftButtonClick(),
  });




  function translateXWidth(n){
    if ((n+1)*scrollN >= list.length && list.length%scrollN != 0){

      let remainingItems = list.length%scrollN

      let suffix = Math.round(((n-1) * scrollWidth * scrollN) + (scrollWidth * remainingItems)).toString() + 'px)'

      setTranslate('translateX(-' + suffix)
      console.log(suffix)
      return
    }

    let suffix = Math.round(n * scrollWidth * scrollN).toString() + 'px)'

    console.log(suffix)
    setTranslate('translateX(-' + suffix)
    return
  }

  return (
    <div className='flex flex-col bg-white rounded-md shadow p-6'>
      <div className='flex justify-start items-center relative text-[36px] text-center font-bold text-primary pb-6 mx-6'>
        {props.title}
      </div>
      
      <div 
        {...handlers}
        className='overflow-hidden flex flex-row relative px-6'
      >
        <button 
        className={`text-white bg-primary rounded-md absolute top-1/2 z-10 mx-1 ${cardn === 0 ? 'hidden' : ''} p-2 bg-opacity-20 hover:bg-opacity-50`}
        onClick={()=> leftButtonClick()}
        >
          <ArrowBackIosNewIcon/>
        </button>
        <div 
          className={`flex transform transition ease-linear duration-300`}
          style={{ transform: translateString}}
          >
          {list.map((item, index) => {
            return (
              <CaroProdCard header={item} key={index}/>
            )
          })}
        </div>
        <button 
        className={`text-white bg-primary rounded-md absolute top-1/2 right-0 z-10 mx-1 p-2 bg-opacity-20 hover:bg-opacity-50 ${(cardn+1)*nCardsPerView >= list.length ? 'hidden' : ''}`}
        onClick={() => rightButtonClick()}
        >
          <ArrowForwardIosIcon/>
        </button>
      </div>
    </div>


  )
}

export default CarouselHero