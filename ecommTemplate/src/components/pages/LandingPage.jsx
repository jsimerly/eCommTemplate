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
import { ProductCard } from '../shopping';
import { fetchProductGrouping } from '../../api/fetchProducts';
import { ShoppingContext } from '../../context';


const header = (text) => (
    <div className='flex justify-center sm:justify-start items-center relative text-[34px] text-center font-bold text-primary p-2'>
        {text}
    </div>
)

const Carousel = ({head, data}) => (
    <CarouselTemplate
        Card={ProductCard}
        cardData={data}
        header={head}
    />
)

const LandingPage = () => {
    const [mostPopular, setMostPopular] = useState()
    const [trending, setTrending] = useState()
    const [newArrivals, setNewArrivals] = useState()

    const {selectedDateRange} = useContext(ShoppingContext)

    useEffect(() => {
        const fetchAllCaros = async () =>{
            const startDate = selectedDateRange.startDate
            const endDate = selectedDateRange.endDate
            const dateChange = selectedDateRange.first

            const newArrival_response = await fetchProductGrouping('new_arrivals_landing_page', startDate, endDate, dateChange)
            const mostPopular_response = await fetchProductGrouping('most_popular_landing_page', startDate, endDate, dateChange)
            const trending_response = await fetchProductGrouping('trending_landing_page', startDate, endDate, dateChange)

            if (newArrival_response.ok){
                const newArrival_resp = await newArrival_response.json()
                setNewArrivals(newArrival_resp)
            }
            if (mostPopular_response.ok){
                const mostPopular_resp = await mostPopular_response.json()
                setMostPopular(mostPopular_resp)
            }
            if (trending_response.ok){
                const trending_resp = await trending_response.json()
                setTrending(trending_resp)
            }
        }
        fetchAllCaros()
            
    }, [selectedDateRange])


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
                {mostPopular &&
                    <Carousel
                        head={header(mostPopular.display_name)}
                        data={mostPopular.products}
                    />
                }
                {trending &&
                    <Carousel
                        head={header(trending.display_name)}
                        data={trending.products}
                    />
                }
                </div>
                <div className='my-6 sm:my-16'>
                <Categories/>
                </div>
                <div className='sm:my-6'>
                {newArrivals &&
                    <Carousel
                        head={header(newArrivals.display_name)}
                        data={newArrivals.products}
                    />
                }

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