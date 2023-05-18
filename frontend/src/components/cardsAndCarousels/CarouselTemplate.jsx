import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './swiper.css'
import { Empty } from '../utils';
import ErrorBoundry from '../utils/ErrorBoundry';
import { useRef, useEffect } from 'react';
import "./carouselTemplate.css";

const CarouselTemplate = ({ Card, cardData, header, addExtraFunction }) => {
  const swiperRef = useRef(null)
  useEffect(() => {
    if (swiperRef.current){
      swiperRef.current.swiper.update()
    }
  },[cardData])

  return (

    <ErrorBoundry fallback="Oops, Sorry! We appear to be missing something.">
      <div className="flex flex-col">
        {header}
        <div className="overflow-hidden flex flex-row relative py-4 sm:rounded-md">
          {cardData.length === 0 ? (
            <Empty />
          ) : (
            <div className='swiper-container'>
            <Swiper
              ref={swiperRef}
              spaceBetween={0} // Adjust space between slides
              slidesPerView={'auto'} // Adjust number of slides per view
              className='custom-swiper'
            >
              {cardData.map((data, index) => (
                <SwiperSlide key={index} className='inline-flex w-auto'>
                  <div className='inline-flex w-auto'>
                    <Card item={data} addExrtaFunction={addExtraFunction}/>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundry>
  );
};

export default CarouselTemplate;