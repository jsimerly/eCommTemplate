import styles from '../../styles';
import { yeti45 } from '../../assets/images/products';
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
import { useEffect, useState } from 'react';
import { ProductCard } from '../shopping';
import { fetchProductsByUUIDs, fetchProductsBySlugs } from '../../api/fetchProductsByUUIDs';
import { MOST_POPULAR_SLUGS, NEW_ARRIVALS_UUIDS, TRENDING_UUIDS } from '../../api/landingPageConstants';



const data =  [
    {text: 'Test1', img: yeti45, price:'$33.33'},
    {text: 'Test2', img: yeti45, price:'$33.33'},
    {text: 'Test3', img: yeti45, price:'$33.00'},
    {text: 'Test4', img: yeti45, price:'$33.33'},
    {text: 'Test5', img: yeti45, price:'$33.33'},
    {text: 'Test6', img: yeti45, price:'$33.33'},
    {text: 'Test1', img: yeti45, price:'$33.33'},
    {text: 'Test2', img: yeti45, price:'$33.33'},
    {text: 'Test3', img: yeti45, price:'$33.33'},
    {text: 'Test4', img: yeti45, price:'$33.33'},
    {text: 'Test5', img: yeti45, price:'$33.33'},
    {text: 'Test6', img: yeti45, price:'$33.33'},
    {text: 'Test1', img: yeti45, price:'$33.33'},
    {text: 'Test2', img: yeti45, price:'$33.33'},
    {text: 'Test3', img: yeti45, price:'$33.33'},
]

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

const LandingPage = ({immediateSearch}) => {
    const [mostPopular, setMostPopular] = useState([])
    const [trending, setTrending] = useState([])
    const [newArrivals, setNewArrivals] = useState([])

    useEffect(() => {
        const most_popular_data = fetchProductsBySlugs(MOST_POPULAR_SLUGS, setMostPopular)
        console.log(most_popular_data)
    }, [])



    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);

  return (
    <div>
        <Hero/>
        <div className={`${styles.flexCenter} sm:mx-2`}>
            <div className={`${styles.boxWidth}`}>
                <HowItWorks/>
                <div className='hidden sm:block my-16'>
                    <NewCustomers/>
                </div>
                <div>
                <Carousel
                    head={header('Most Popular')}
                    data={data}
                />
                <Carousel
                    head={header('Trending')}
                    data={data}
                />
                </div>
                <div className='my-6 sm:my-16'>
                <Categories/>
                </div>
                <div className='sm:my-6'>
                <Carousel
                    head={header('New Arrivals')}
                    data={data}
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