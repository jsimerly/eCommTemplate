import { useState, useEffect } from "react"
import { yeti45 } from "../../assets/images/products"
import { SmallCard } from "./"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const suggestions = ['Tundra - 45 Hard Cooler asdfs', 'B', 'C', 'D', 'E', 'F','F','G']

function windowToScrollN(){

    if (window.innerWidth < 680) {
      return 1
    } else if (window.innerWidth < 1200) {
      return 2
    } else {
      return 3
    }
  }
  
const SmallCarousel = ({header}) => {

    const [translateDistance, setTranslateDistance] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(null)
    const [nCardsPerView, setNCardsPerView] = useState(windowToScrollN)
    const cardWidth = 316
    const maxLength = (suggestions.length - nCardsPerView) * cardWidth
  
    function handleTranslate(newPosition){
      if (newPosition > 0) {
        if (newPosition < maxLength){
          setTranslateDistance(newPosition)
        } else {
          setTranslateDistance(maxLength)
        }
      } else {
        setTranslateDistance(0)
      }
    }
  
    const handleMouseDown = (e) => {
      setStartX(e.touches[0].clientX)
      setIsDragging(true);
    };
  
    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.touches[0].clientX - startX
        console.log(deltaX)
        if (deltaX > 0){
          console.log('here')
          handleTranslate(translateDistance-1)
        } else {
          console.log('not')
          handleTranslate(translateDistance+1)
        }
      }
    };
  
    const handleMouseUp = () => {
      setIsDragging(false)
    }
  
    function leftButtonClick(){
      const deltaX = nCardsPerView * cardWidth
      handleTranslate(translateDistance-deltaX)
    }
  
    function rightButtonClick(){
      const deltaX = nCardsPerView * cardWidth
      handleTranslate(translateDistance+deltaX)
    }
  
    useEffect(() => {
      let handleWindowResize = () => {
        let n = windowToScrollN()
        setNCardsPerView(n)
      }
      window.addEventListener("resize", handleWindowResize);
  
      return () => window.removeEventListener('resize', handleWindowResize);
    }, [])
  
    return (
      <div className='flex flex-col bg-white sm:rounded-md p-2 sm:p-6'>
        <div className='flex justify-center sm:justify-start items-center relative text-[36px] text-center font-bold text-primary p-2 sm:pb-6 sm:mx-6'>
          {header}
        </div>
        
        <div 
          
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className='overflow-hidden flex flex-row relative px-6'
        >
          <button 
          className={`text-white bg-primary rounded-md absolute top-1/2 z-10 mx-1 ${translateDistance === 0 ? 'sm:hidden' : 'sm:block'} p-2 bg-opacity-20 hover:bg-opacity-50 hidden`}
          onClick={()=> leftButtonClick()}
          >
            <ArrowBackIosNewIcon/>
          </button>
          <div 
            className={`flex transform transition ease-linear duration-300`}
            style={{ transform: 'translateX(-'+translateDistance+'px)'}}
            >
            {suggestions.map((suggest, index) => {
              return (
                <SmallCard 
                    text={suggest} 
                    key={index}
                    img={yeti45}
                    price={'$32.44'}
                />
              )
            })}
          </div>
          <button 
          className={`text-white bg-primary rounded-md absolute top-1/2 right-0 z-10 mx-1 p-2 bg-opacity-20 hover:bg-opacity-50 ${translateDistance >= maxLength ? 'sm:hidden' : 'sm:block'} hidden`}
          onClick={() => rightButtonClick()}
          >
            <ArrowForwardIosIcon/>
          </button>
        </div>
      </div>
    )
}

export default SmallCarousel