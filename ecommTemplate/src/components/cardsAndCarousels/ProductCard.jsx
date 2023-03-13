import AddIcon from '@mui/icons-material/Add';
import navigateProduct from '../../hooks/navigateProduct';
import { BlueButton, Stars } from '../utils';
import { calculate_product_cost, create_full_image_path } from '../../assets/util';


const ProductCard = ({name, brand, slug, average_rating, n_ratings, base_cost, daily_cost, main_img_location, img_folder_path}) => {

  let navigate = navigateProduct({slug});

  const img = create_full_image_path(img_folder_path, main_img_location)
  const cost = calculate_product_cost(base_cost, daily_cost, 7)

  return (
    <div className='w-[150px] h-[260px] sm:h-[486px] sm:w-[300px] rounded-md bg-tertiaryTone-100 p-2 sm:pt-2 sm:px-2 flex flex-col m-2'>
      <img 
        src={img} 
        className='bg-white object-scale-down rounded-md hover:cursor-pointer'
        onClick={navigate}
      />
      <div className='mt-2 p-2 text-tertiary flex flex-col grow'>
        <div className='flex flex-col min-h-[60px]'>
          <h3 
            className='font-bold text-[16px] sm:text-[20px] sm:truncate hover:cursor-pointer hover:underline'
            onClick={navigate}
          >
           {name}
          </h3>
          <h4 className='text-[12px] sm:text-[18px] tracking-wide'>
            {brand.name}
          </h4>
        </div>
        <div className='hidden sm:block'>
          <div className='flex flex-row mt-2 hover:cursor-pointer'>
            <Stars rating={average_rating}/>
            <div className='ml-1 sm:text-[16px]'>
             ({n_ratings})
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-full justify-between items-start sm:my-4'>
          <div className='flex justify-between w-full items-center h-[50px]'>
            <div className='flex flex-col h-full justify-center'>
              <div className='font-semibold sm:text-[26px] leading-none'>
                ${cost}
              </div>
              <p className='leading-none text-[12px] text-center'>
                For 7 Days
              </p>
            </div>
            <div className='h-full border hidden sm:block'>
              <BlueButton
                content='Add to Cart'
                onClick={()=>console.log('add to cart')}
              />
            </div>
            <div className='sm:hidden'>
              <BlueButton
                className='!p-1'
                content={<AddIcon/>}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard