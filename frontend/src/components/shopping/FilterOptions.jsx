import CloseIcon from '@mui/icons-material/Close';

import RatingComp from './filters/RatingComp';
import PriceComp from './filters/PriceComp';
import OptionComp from './filters/OptionsComp';
import BrandComp from './filters/BrandComp';



const FilterOptions = ({filters, handleCheckboxClicked, handleCloseFilter, starFilter, setStarFilter, priceFilter, setPriceFilter, priceExtrema, brandFilter, handleBrandCheckClicked}) => {

  return (
    <div 
        className='bg-white rounded-t-md sm:rounded-md px-6 sm:pl-3 p-2 w-full sm:w-[300px] shadow-md fixed left-1/2 bottom-[60px] transform -translate-x-1/2 sm:static z-20 overflow-y-auto max-h-[550px] sm:max-h-full sm:max-h-none sm:translate-x-0 sm:translate-y-0 scrollbar-hide'
      >
        <div className='flex justify-between'>
          <p className='text-[20px]'>
            Filter Options
          </p>
          <CloseIcon
            onClick={handleCloseFilter}
            className='hover:scale-105 cursor-pointer'
          />
        </div>
        <BrandComp
          brands={brandFilter}
          handleBrandCheckClicked={handleBrandCheckClicked}
        />
        {filters.map((option, i) => {
            return (
                <OptionComp
                    key={'option_comp_'+i}
                    option={option}
                    option_index={i}
                    handleCheckboxClicked={handleCheckboxClicked}
                />
            )
        })}
        <RatingComp
          starFilter={starFilter}
          setStarFilter={setStarFilter}
        />
        <PriceComp
          priceFilter={priceFilter}
          setPriceFilter={setPriceFilter}
          priceExtrema={priceExtrema}
        />
      </div>
  )
}

export default FilterOptions