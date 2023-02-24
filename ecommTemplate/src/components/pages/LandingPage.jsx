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
    CaroProdCard,
} from '../landingPage';
import CarouselTemplate from "../CarouselTemplate"
import { useEffect } from 'react';

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
    Card={CaroProdCard}
    cardData={data}
    cardW={298}
    header={head}
    scrollNFunc={scrollN}
/>
)

const LandingPage = ({immediateSearch}) => {

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
                </div>
                <div className='sm:mt-6'>
                <Carousel
                    head={header('Top Deals')}
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
                <Carousel
                    head={header('Spring Break!')}
                    data={data}
                />
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