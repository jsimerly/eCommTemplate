import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Information from '../product/Information';
import ProductMain from '../product/ProductMain';
import { BoughtTogether, KeepShopping } from '../product';
import { fetchFullProductBySlug } from '../../api/fetchProducts';
import { ShoppingContext } from '../../context';
import { LinkPath } from '../utils/LinkPath';
import MobileProductMain from '../product/MobileProductMain';

const ProductPage = () => {
  const [productInfo, setProductInfo] = useState()
  const [mainCardInfo, setMainCardInfo] = useState()
  const [secondaryCardInfo, setSecondardCardInfo] = useState()
  const [frequentlyBought, setFrequentlyBought] = useState([])
  const [category, setCategory] = useState()

  const location = useLocation();
  const segments = location.pathname.split('/');
  const slug = segments[segments.length - 1];

  const {selectedDateRange} = useContext(ShoppingContext)

  useEffect(() => {
    const startDate = selectedDateRange.startDate
    const endDate = selectedDateRange.endDate
    const dateChange = selectedDateRange.first

    fetchFullProductBySlug(slug, setProductInfo, startDate, endDate, dateChange)
  }, [slug, selectedDateRange])

  useEffect(()=>{
      window.scrollTo(0,0)
  },[slug])

  useEffect(() => {
    if (productInfo){
      setMainCardInfo({
        name: productInfo.product.name,
        brand: productInfo.product.brand.name,
        mainImg: productInfo.product.main_image.image,
        imgList: productInfo.product.images,
        rating: productInfo.product.average_rating,
        nRatings: productInfo.product.n_ratings,
        price: productInfo.product.total_cost,
        insurance: productInfo.product.insurance_total_cost,
        desc: productInfo.main_desc,
        bullets: productInfo.bullets,
        days: productInfo.product.days,
        favorited: productInfo.favorited,
        slug: productInfo.product.slug
      })

      setSecondardCardInfo({
        product: productInfo.product,
        full_desc: productInfo.prod_desc,
        highlights: productInfo.highlights,
        specs: productInfo.specs,
        categoryRank: productInfo.ranking,
        rankLink: productInfo.rank_link,
        msrp: productInfo.add_info_msrp,
        manufactured: productInfo.add_info_manu,
        brand: productInfo.product.brand.full_name,
        sku:productInfo.product.slug
      })
      setFrequentlyBought(productInfo.product.frequently_bought_with)
      setCategory(productInfo.product.category)
    }
  }, [productInfo])

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1280px] w-full">
        <div className='sm:ml-2 mt-2 sm:mt-4 sm:mb-4 text-[12px] text-neutralDark flex flex-row items-center w-full'>
          <LinkPath category={category}/>
        </div>
        <div className='hidden ms:block ms:mt-20 ms:mb-24'>
          <ProductMain
            mainCardInfo={mainCardInfo}
          />
        </div>
        <div className='ms:hidden mt-4'>
          <MobileProductMain
            mainCardInfo={mainCardInfo}
          />
        </div>
        <Information
          secondaryCardInfo={secondaryCardInfo}
        />
        {frequentlyBought.length > 1 && 
          <BoughtTogether
            frequentlyBought={frequentlyBought}
          />
        }
        <KeepShopping/>
      </div>
    </div>
  )
}

export default ProductPage