import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import ProductCard from './ProductCard'

const Carousel = () => {
  return (
    <div>
    <Swiper
        breakpoints={{
            640:{
                width: 640,
                slidesPerView: 1,
            },
            768:{
                width: 768,
                slidesPerView: 4,
            }
        }
        }
        spaceBetween={30}
        slidesPerView={5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}

    >
      <SwiperSlide><ProductCard lol='slide 1'/></SwiperSlide>
      <SwiperSlide className='border'>Slide 2</SwiperSlide>
      <SwiperSlide><div className='min-w-[200px] border'> test</div></SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Carousel