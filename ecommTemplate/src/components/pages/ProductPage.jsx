import { useEffect, useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useLocation } from 'react-router-dom';
import Information from '../product/Information';
import ProductMain from '../product/ProductMain';
import { BoughtTogether, KeepShopping } from '../product';
import { fetchFullProductBySlug } from '../../api/fetchProducts';
import { create_full_image_path, calculate_product_cost } from '../../assets/util';


const ProductPage = () => {
  const [productInfo, setProductInfo] = useState()
  const [mainCardInfo, setMainCardInfo] = useState({
    name: '',
    brand: '',
    mainImg: '',
    imgList: [],
    rating: 3,
    nRatings: 0,
    price: 0,
    insurance: 0,
    desc: '',
    bullets: [],
  })
  const [secondaryCardInfo, setSecondardCardInfo] = useState({
    full_desc: '',
    highlights: [],
    specs: {},
    category_rank:1,
    rankLink:'',
    msrp: 0,
    manufactured: '',
    brand: '',
    slugId: '',
    specs:{},
  })
  const [frequentlyBought, setFrequentlyBought] = useState([])

  const location = useLocation();
  const segments = location.pathname.split('/');
  const slug = segments[segments.length - 1];

  useEffect(() => {
    fetchFullProductBySlug(slug, setProductInfo)
    window.scrollTo(0, 0);
  }, [slug])

  useEffect(() => {
    if (productInfo){
      setMainCardInfo({
        name: productInfo.product.name,
        brand: productInfo.product.brand.name,
        mainImg: create_full_image_path(productInfo.product.main_image.image),
        imgList: productInfo.product.images,
        rating: productInfo.product.average_rating,
        nRatings: productInfo.product.n_ratings,
        price: calculate_product_cost(
          productInfo.product.base_cost,
          productInfo.product.daily_cost,
          7
        ),
        insurance: calculate_product_cost(
          productInfo.product.insurance_base_cost,
          productInfo.product.insurance_daily_cost,
          7
        ),
        desc: productInfo.main_desc,
        bullets: productInfo.bullets,
      })

      setSecondardCardInfo({
        full_desc: productInfo.prod_desc,
        highlights: productInfo.highlights,
        specs: productInfo.specs,
        categoryRank: productInfo.ranking,
        rankLink: productInfo.rank_link,
        msrp: productInfo.add_info_msrp,
        manufactured: productInfo.add_info_manu,
        brand: productInfo.product.brand.full_name,
        specs:productInfo.specs,
        sku:productInfo.product.slug
      })

      setFrequentlyBought(productInfo.product.frequently_bought_with)
    }
  }, [productInfo])

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1280px] w-full">
        <div className='my-4 text-[12px] text-tertiary'>
          <a className='hover:underline cursor-pointer'>Home</a>
          <ChevronRightIcon className='scale-75'/>
          <a className='hover:underline cursor-pointer'>All Categories</a>
          <ChevronRightIcon className='scale-75'/>
          <a className='hover:underline cursor-pointer'>On the Beach</a>
          <ChevronRightIcon className='scale-75'/>
          <a className='hover:underline cursor-pointer'>Coolers</a>
        </div>
        <div className='mt-20 mb-24'>
          <ProductMain
            mainCardInfo={mainCardInfo}
          />
        </div>
        <Information
          secondaryCardInfo={secondaryCardInfo}
        />
        <BoughtTogether
          frequentlyBought={frequentlyBought}
        />
        <KeepShopping/>
      </div>
    </div>
  )
}

export default ProductPage