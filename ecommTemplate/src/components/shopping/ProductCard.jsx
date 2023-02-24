import { yeti45 }from '../../assets/images/products/'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import AddIcon from '@mui/icons-material/Add';
import navigateProduct from '../../hooks/navigateProduct';


const ProductCard = ({header}) => {
  const itemSlug = 'my-item-slug'
  let navigate = navigateProduct({itemSlug});

  return (
    <div className='w-[150px] h-[260px] sm:h-[470px] sm:w-[300px] rounded-md bg-tertiaryTone-100 p-2 sm:pt-4 sm:px-4 flex flex-col m-2'>
      <img 
        src={yeti45} 
        className='bg-white object-scale-down rounded-md hover:cursor-pointer'
        onClick={navigate}
      />
      <div className='mt-2 text-tertiary flex flex-col grow'>
        <div className='flex flex-col min-h-[60px]'>
          <h3 
            className='font-bold text-[16px] sm:text-[20px] sm:truncate hover:cursor-pointer hover:underline'
            onClick={navigate}
          >
            {header}
          </h3>
          <h4 className='text-[12px] sm:text-[18px] tracking-wide'>
            Yeti
          </h4>
        </div>
        <div className='hidden sm:block'>
          <div className='flex flex-row mt-2 hover:cursor-pointer'>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
            <div className='ml-1 sm:text-[16px]'>
             (6443)
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 w-full justify-between items-start sm:my-4'>
          <div className='flex justify-between w-full items-center mt-3 pb-5'>
            <div className='flex flex-col'>
              <div className='font-semibold sm:text-[26px] leading-none'>
                $16.98
              </div>
              <p className='leading-none text-[12px] text-center'>
                For 7 Days
              </p>
            </div>
            <button className='text-white p-3 bg-primary rounded justify-center items-center hover:underline hidden sm:flex'>
              Add to Cart
            </button>
            <div className='text-white bg-primary rounded-md sm:hidden'>
              <AddIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard