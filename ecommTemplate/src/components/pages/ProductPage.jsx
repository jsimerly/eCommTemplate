import { useEffect, useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useLocation } from 'react-router-dom';
import { yeti45 }from '../../assets/images/products'
import Information from '../product/Information';
import ProductMain from '../product/ProductMain';
import { BoughtTogether, KeepShopping } from '../product';
import { fetchFullProductBySlug } from '../../api/fetchProducts';
import { create_full_image_path, getImagesFromFolder, calculate_product_cost } from '../../assets/util';

const bullets = ['Very very tall', '86 Cans in total', 'Weighs 64oz', 'Contains actual magic']


const ProductPage = () => {
  const [productInfo, setProductInfo] = useState()
  const [mainCardInfo, setMainCardInfo] = useState({
    name:'',
    brand: '',
    mainImg: null, 
    imgList: [], 
    price:0, 
    insurance:0, 
    rating:0, 
    nRatings:0,
    prodDesc:'',
    bullets:[]
  })

  const location = useLocation();
  const segments = location.pathname.split('/');
  const slug = segments[segments.length - 1];

  useEffect(() => {
    fetchFullProductBySlug(slug, setProductInfo)
  }, [])
  
  useEffect(() => {

    if (productInfo && productInfo.main_img_location && productInfo.img_folder_path) {
      const img = create_full_image_path(productInfo.img_folder_path, productInfo.main_img_location);
      console.log(productInfo)
      const prod_cost = calculate_product_cost(productInfo.base_cost,productInfo.daily_cost, 7)
      const insurance_cost = calculate_product_cost(productInfo.insurance_base_cost, productInfo.insurance_daily_cost, 7)

      setMainCardInfo(
        {
          name: productInfo.name,
          brand: productInfo.brand.name,
          mainImg: img, 
          imgList: [yeti45, yeti45, yeti45, yeti45, yeti45, yeti45], 
          price: prod_cost, 
          insurance: insurance_cost, 
          rating: productInfo.average_rating, 
          nRatings: productInfo.n_ratings,
          prodDesc:'Testing For Now',
          bullets:['ABC 123', "test 2", 'test 3']
        }
      )
    };

  }, [productInfo]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <Information/>
        <BoughtTogether/>
        <KeepShopping/>
      </div>
    </div>
  )
}

export default ProductPage