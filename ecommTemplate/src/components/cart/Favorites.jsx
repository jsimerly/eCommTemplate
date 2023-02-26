import { SmallCard } from '../shopping'
import { yeti45 } from '../../assets/images/products'
import CloseIcon from '@mui/icons-material/Close';

const CustomCard = ({item, img, price}) => (
  <div className='relative'>
    <div className='absolute right-0 top-0 p-3'>
      <CloseIcon className='cursor-pointer hover:scale-110'/>
    </div>
    <SmallCard
      text={item}
      img={img}
      price={price}
    />
  </div>
)

const Favorites = ({favorites}) => {
  return (
    <div className='mt-2'>
      <h2 className='text-[30px] font-bold '>
        Favorites
      </h2>
      <div className='bg-white rounded-md py-6 px-6'>
        <p className='pb-3'>Something missing from you cart? Maybe it's one of your favorites. Add items from your favorites list to the cart.</p>
        <div className='flex flex-wrap justify-start items-center'>
          {favorites.map((item, i) => (
            <CustomCard
              item={item.text}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favorites