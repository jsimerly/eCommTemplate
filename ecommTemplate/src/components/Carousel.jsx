import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/swiper.min.css'
import Category from './CategoryTile'

import leisure from '../assets/images/leisure.jpg'
import games from '../assets/images/games.jpg'
import kids from '../assets/images/kids.jpg'
import home from '../assets/images/home.jpg'
import water from '../assets/images/water.jpg'
import packages from '../assets/images/package.jpg'

const Carousel = () => {
  return (
    <div>
    <Swiper
        breakpoints={{
            640:{
                width: 640,
                slidesPerView: 1,
            },
            741:{
                width: 768,
                slidesPerView: 4,
            }
        }
        }
        spaceBetween={30}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}

    >
      <SwiperSlide><Category image={packages}/></SwiperSlide>
      <SwiperSlide><Category image={leisure}/></SwiperSlide>
      <SwiperSlide><Category image={games}/></SwiperSlide>
      <SwiperSlide><Category image={kids}/></SwiperSlide>
      <SwiperSlide><Category image={home}/></SwiperSlide>
      <SwiperSlide><Category image={water}/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Carousel