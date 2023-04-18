import CloseIcon from '@mui/icons-material/Close';

import RatingComp from './filters/RatingComp';
import PriceComp from './filters/PriceComp';
import OptionComp from './filters/OptionsComp';


const FilterOptions = ({filters, handleCheckboxClicked, handleCloseFilter, minStar, maxStar, setMinStar, setMaxStar,starFilter, setStarFilter, priceFilter, setPriceFilter}) => {
  return (
    <div 
        className='bg-white rounded-md p-2 w-[300px]'
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
            minStar={minStar}
            maxStar={maxStar}
            setMinStar={setMinStar}
            setMaxStar={setMaxStar}
        />
        <PriceComp
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
        />
      </div>
  )
}

export default FilterOptions