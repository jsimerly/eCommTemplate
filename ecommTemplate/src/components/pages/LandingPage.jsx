import React from 'react';
import styles from '../../styles';
import { NewCustomers } from '../banners';
import {
    Hero,
    HowItWorks,
    ProductCarousel,
    Categories,
    QualityHero,
    Change,
    BlogBanner,
} from '../landingPage';

const LandingPage = () => {
  return (
    <div>
    <div className='mt-20'/>
        <Hero/>
        <div className={`${styles.flexCenter} sm:mx-2`}>
            <div className={`${styles.boxWidth}`}>
                <HowItWorks/>
                <div className='hidden sm:block my-16'>
                    <NewCustomers/>
                </div>
                <div>
                <ProductCarousel title='Most Popular'/>
                </div>
                <div className='sm:my-6'>
                <ProductCarousel title='Top Deals'/>
                </div>
                <div className='my-6 sm:my-16'>
                <Categories/>
                </div>
                <div className='sm:my-6'>
                <ProductCarousel title='New Arrivals'/>
                </div>
                <div className='sm:my-6'>
                <ProductCarousel title='Family Packages'/>
                </div>
                <div className='my-6 sm:my-16'>
                <QualityHero/>
                </div>
                <div className='my-6 hidden sm:block'>
                {/* <FreeWagon /> */}
                </div>
                <div className='my-16'>
                <Change/>
                </div>
                <div className='my-6'>
                <BlogBanner/>
                </div>
            </div>
        </div>
    </div>

  )
}

export default LandingPage