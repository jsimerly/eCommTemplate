import { SmallCard } from '../shopping'
import CloseIcon from '@mui/icons-material/Close';
import { fetchAllFavorited, fetchFavoriteDelete } from '../../api/fetchCart';
import { useEffect, useState } from 'react';
import Empty from '../utils/Empty';
import { favoritesCopy } from '../../../constants/pages/cart_copy';

const CustomCard = ({item, deleteFavorite, handleFetchCart}) => {

  const handleDeleteClicked = () => {
    try{

      fetchFavoriteDelete(item.uuid)
      deleteFavorite(item.uuid)

    } catch (error){
      throw (error)
    }
  }


  return (
    <div className='relative'>
      <div 
        className='absolute right-0 top-0 p-3'
        onClick={handleDeleteClicked}
      >
        <CloseIcon className='cursor-pointer hover:scale-110'/>
      </div>
      <SmallCard
        item={item}
        addExtraFunction={handleFetchCart}
      />
    </div>
  )
}

const Favorites = ({getCost, selectedDateRange, handleFetchCart}) => {
  const [favorites, setFavorites] = useState([])

  const deleteFavorite = (itemUUID) => {
    setFavorites((favorites) => {
      const updateFavorites = [...favorites];
      const itemIndex = updateFavorites.findIndex((item) => item.uuid === itemUUID)
      if (itemIndex !== -1){
        updateFavorites.splice(itemIndex, 1)
      }
      return updateFavorites
    })
  }

  useEffect(()=>{
    fetchAllFavorited(setFavorites, selectedDateRange.startDate, selectedDateRange.endDate, selectedDateRange.first)
  },[selectedDateRange])

  return (
    <div className='mt-2'>
      <h2 className='sm:pl-0 pl-6 text-[30px] font-bold '>
        Favorites
      </h2>
      <div className='py-6 px-6'>
        <p className='pb-3'>{favoritesCopy.header}</p>
        <div className='flex flex-wrap justify-start items-center'>
          {favorites.length === 0 ? 
          <div className='flex w-full justify-center p-4'>
              <Empty/>
          </div>
          :
          favorites.map((item, i) => (
            <CustomCard
              item={item}
              getCost={getCost}
              deleteFavorite={deleteFavorite}
              key={'favorites_card_'+i}
              handleFetchCart={handleFetchCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favorites