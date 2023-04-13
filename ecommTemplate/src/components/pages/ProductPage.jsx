import { useEffect, useState, useContext } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useLocation } from 'react-router-dom';
import Information from '../product/Information';
import ProductMain from '../product/ProductMain';
import { BoughtTogether, KeepShopping } from '../product';
import { fetchFullProductBySlug } from '../../api/fetchProducts';
import { ShoppingContext } from '../../context';
import navigateShopping from '../../hooks/navigateShopping';

const ProductPage = () => {
  const navigate = navigateShopping()
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
    days: 6,
  })
  const [frequentlyBought, setFrequentlyBought] = useState([])

  const location = useLocation();
  const segments = location.pathname.split('/');
  const slug = segments[segments.length - 1];


  const {selectedDateRange, selectedDestination} = useContext(ShoppingContext)

  useEffect(() => {
    const startDate = selectedDateRange.startDate
    const endDate = selectedDateRange.endDate
    const dateChange = selectedDateRange.first

    fetchFullProductBySlug(slug, setProductInfo, startDate, endDate, dateChange)
  }, [slug, selectedDateRange])

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
      setCategory(productInfo.product.category)
    }
  }, [productInfo])

  const [category, setCategory] = useState()

  const LinkPath = ({category}) => {
    const categoryPath = [];

    let currentCategory = category;
    let chev = false

    const createOnClickHandler = (cat) => {
      return () => {
        navigate(category=cat)
      };
    };

    while (currentCategory) {
      console.log(currentCategory)
      categoryPath.push(
        <div key={currentCategory.fe_id}>
          <a 
            onClick={createOnClickHandler(currentCategory)}
            className='hover:underline cursor-pointer'>
              {currentCategory.name}
          </a>
          {chev && <ChevronRightIcon className='scale-75' />}
        </div>
      );
      currentCategory = currentCategory.parent;
      chev = true
    }

    categoryPath.push(
      <div key="home">
        <a href="/" className='hover:underline cursor-pointer'>Home</a>
        <ChevronRightIcon className='scale-75' />
      </div>
    );

    return (
      <>
        {categoryPath.reverse()}
      </>
      );
    }

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1280px] w-full">
        <div className='my-4 text-[12px] text-tertiary flex flex-row items-center'>
          <LinkPath category={category}/>
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