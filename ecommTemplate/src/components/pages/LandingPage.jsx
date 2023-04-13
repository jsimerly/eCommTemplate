import styles from '../../styles';
import { NewCustomers, FreeWagon } from '../banners';
import {
    Hero,
    HowItWorks,
    Categories,
    QualityHero,
    Change,
    BlogBanner,
} from '../landingPage';
import CarouselTemplate from "../cardsAndCarousels/CarouselTemplate"
import { useContext, useEffect, useState } from 'react';
import { ProductCard, SmallCard } from '../shopping';
import { fetchProductsBySlugs } from '../../api/fetchProducts';
import { MOST_POPULAR_SLUGS, NEW_ARRIVALS_SLUGS, TRENDING_SLUGS } from '../../api/landingPageConstants';
import { ShoppingContext } from '../../context';
import MobileSearch from '../landingPage/MobileSearch';

function scrollN(){
    if (window.innerWidth < 680) {
      return 1
    } else if (window.innerWidth < 1200) {
      return 2
    } else {
      return 3
    }
  }

const header = (text) => (
    <div className='flex justify-center sm:justify-start items-center relative text-[34px] text-center font-bold text-primary p-2'>
        {text}
    </div>
)

const Carousel = ({head, data}) => (
    <CarouselTemplate
        Card={ProductCard}
        cardData={data}
        cardW={298}
        header={head}
        scrollNFunc={scrollN}
    />
)

const LandingPage = ({searchInput, setSearchInput, searchParamActive, setSearchParamActive}) => {
    const [mostPopular, setMostPopular] = useState([])
    const [trending, setTrending] = useState([])
    const [newArrivals, setNewArrivals] = useState([])

    const {selectedDateRange} = useContext(ShoppingContext)

    useEffect(() => {
            const startDate = selectedDateRange.startDate
            const endDate = selectedDateRange.endDate
            const dateChange = selectedDateRange.first
    
            fetchProductsBySlugs(MOST_POPULAR_SLUGS, setMostPopular, startDate, endDate, dateChange)
            fetchProductsBySlugs(NEW_ARRIVALS_SLUGS, setNewArrivals, startDate, endDate, dateChange)
            fetchProductsBySlugs(TRENDING_SLUGS, setTrending, startDate, endDate, dateChange)
    }, [selectedDateRange])


  return (
    <div>
        <Hero/>
        <div className={`${styles.flexCenter} sm:mx-2`}>
            <div className={`${styles.boxWidth}`}>
                <MobileSearch
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    searchParamActive={searchParamActive}
                    setSearchParamActive={setSearchParamActive}
                />
                <HowItWorks/>
                <div className='hidden sm:block my-16'>
                    <NewCustomers/>
                </div>
                <div>
                <Carousel
                    head={header('Most Popular')}
                    data={mostPopular}
                />
                <Carousel
                    head={header('Trending')}
                    data={trending}
                />
                </div>
                <div className='my-6 sm:my-16'>
                <Categories/>
                </div>
                <div className='sm:my-6'>
                <Carousel
                    head={header('New Arrivals')}
                    data={newArrivals}
                />
                </div>
                <div className='sm:my-6'>
                </div>
                <div className='my-6 sm:my-16'>
                <QualityHero/>
                </div>
                <div className='my-6 hidden sm:block'>
                <FreeWagon />
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