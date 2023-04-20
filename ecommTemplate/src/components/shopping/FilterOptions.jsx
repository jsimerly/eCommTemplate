import CloseIcon from '@mui/icons-material/Close';

import RatingComp from './filters/RatingComp';
import PriceComp from './filters/PriceComp';
import OptionComp from './filters/OptionsComp';
import BrandComp from './filters/BrandComp';



const FilterOptions = ({filters, handleCheckboxClicked, handleCloseFilter, starFilter, setStarFilter, priceFilter, setPriceFilter, priceExtrema, brandFilter, handleBrandCheckClicked}) => {

  return (
    <div 
        className='bg-white rounded-md p-2 w-[300px] shadow-md'
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