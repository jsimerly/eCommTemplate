import { useEffect, useState } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useLocation } from 'react-router-dom';
import { yeti45 }from '../../assets/images/products'
import Information from '../product/Information';
import ProductMain from '../product/ProductMain';
import { BoughtTogether, KeepShopping } from '../product';
import { fetchFullProductBySlug } from '../../api/fetchProducts';
import { create_full_image_path, getImagesFromFolder } from '../../assets/util';

const bullets = ['Very very tall', '86 Cans in total', 'Weighs 64oz', 'Contains actual magic']


const ProductPage = () => {
  const [productInfo, setProductInfo] = useState()
  const [mainImg, setMainImg] = useState()
  const [imgList, setImgList] = useState([])

  const location = useLocation();
  const segments = location.pathname.split('/');
  const slug = segments[segments.length - 1];

  useEffect(() => {
    fetchFullProductBySlug(slug, setProductInfo)
  }, [])
  
  useEffect(() => {

    if (productInfo && productInfo.main_img_location && productInfo.img_folder_path) {
      const img = create_full_image_path(productInfo.img_folder_path, productInfo.main_img_location);
      setMainImg(img);

      getImagesFromFolder(productInfo.img_folder_path)
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
            mainMain={mainImg}
            imgList={imgList}
            bullets={bullets}
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