import { useEffect, useState, useContext } from 'react'

import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Items }  from '.';
import FilterOptions from './FilterOptions';
import useDropdown from '../../hooks/useDropdown';
import { ShoppingContext } from '../../context';
import { WhiteButton } from '../utils';

const ShoppingMain = ({filterData, relatedCategories, products}) => {

  //Constant Filter Related
  const [priceFilter, setPriceFilter] = useState([0,100])
  const [starFilter, setStarFilter] = useState([1,5])

  //Variable Filter Related
  const [original_filterData, setOriginalFilterData] = useState([])
  const [openFilter, setOpenFilter] = useState(false)
  const [filterActive, setFilterActive] = useState(false)
  const [filters, setFilters] = useState([])

  const areFiltersEqual = () => {
    if (starFilter[0] !== 1 || starFilter[1] !== 5){
      return false
    }
    if (priceFilter[0] !== 0 || priceFilter[1] !== 100) {
      return false;
    }
    for (let i = 0; i< filters.length; i++){
      for (let j = 0; j < filters[i].tags.length; j++) {
        if (filters[i].tags[j].checked !== original_filterData[i].tags[j].checked) {
          return false;
        }
      }
    }
    return true
  }

  const handleCloseFilter = () => {
    setOpenFilter(false)
  }

  const handleFilterToggle = () => {
    setOpenFilter(!openFilter)
  }

  const handleResetFilters = () => {
    setFilters(JSON.parse(JSON.stringify(original_filterData)))
    setStarFilter([1,5])
    setPriceFilter([0,100])
  }

  useEffect(()=>{
    const isActive = areFiltersEqual()
    setFilterActive(!isActive)
  },[filters, starFilter[0], starFilter[1], priceFilter])

  useEffect(()=>{
    setFilters(filterData)
    setOriginalFilterData(JSON.parse(JSON.stringify(filterData)))
  }, [filterData])


  const createUpdateFilters = (tag, categoryIndex, filterOptions, tagProperties) => {
    const updatedFilterOptions = [...filterOptions]
    const tagIndex = filterData[categoryIndex].tags.findIndex(
      find_tag => find_tag.name === tag.name
    )

    if (tagIndex !== -1){
      const updatedTag = {...updatedFilterOptions[categoryIndex].tags[tagIndex], ...tagProperties}
      updatedFilterOptions[categoryIndex].tags[tagIndex] = updatedTag
    }
    return updatedFilterOptions
  }

  const handleCheckboxClicked = (categoryIndex, tagIndex) => {
    const updateFilterOptions = createUpdateFilters(
      filters[categoryIndex].tags[tagIndex],
      categoryIndex,
      filters,
      {
        checked: !filters[categoryIndex].tags[tagIndex].checked
      }
    )

    setFilters(updateFilterOptions)
  }

  //Category Related
  const {setSelectedCategory} = useContext(ShoppingContext)
 
  //sort related
  const sortByOptions = [
    'Featured',
    'Price - Low to High',
    'Price - High to Low',
  ]
  
  const [sortOpen, setSortOpen, handleSortClick, sortNode] = useDropdown()
  const [sortBy, setSortBy] = useState('Featured')

  return (
    <div>
    <div className='flex flex-row justify-between min-h-[80px] w-full'>
              <div className='flex space-x-10 items-center w-1/5'>
                <div className='flex space-x-2'>
                  <WhiteButton 
                    onClick={handleFilterToggle}
                    content={
                      <div>
                        <TuneIcon className='mr-1 text-tertiary group-hover:scale-110'/>
                        Filter
                      </div>
                    }
                    className='!text-tertiary'
                  />
                  <button 
                    className={`${filterActive ? '' : 'hidden'} text-white bg-primary rounded-md h-full p-2 shadow-md group min-h-[42px] min-w-[42px]`}
                    onClick={handleResetFilters}
                  >
                    <DeleteForeverIcon 
                      className='group-hover:scale-125'
                    />
                  </button>
                </div>

              </div>
              {relatedCategories && relatedCategories.length > 0 && (
                <div className='flex flex-col items-center justify-center flex-1 pb-4'>
                <h4 className='text-[14px] font-semibold'>
                  Related Categories
                </h4>
                <div className='flex text-[18px] space-x-8 items-center'>
                  {relatedCategories.map((cat, i) => (
                    <a
                      className='hover:underline cursor-pointer text-center' 
                      key={i}
                      onClick={()=>{setSelectedCategory(cat)}}
                    >
                      {cat.name}
                    </a>
                  ))}
                </div>
              </div>
              )}
              <div className='flex justify-end items-center w-1/5'>
                <div ref={sortNode}>
                  <div className='h-[42px] group'>
                    <WhiteButton
                      onClick={handleSortClick}
                      content={
                        <div className='flex flex-row justify-between'>
                          Sort By: {sortBy}
                          <ExpandMoreIcon className='ml-1 text-tertiary group-hover:scale-110'/>
                        </div>
                      }
                      className='!text-tertiary'
                    />
                  </div>
                <div 
                  className={`${sortOpen ? '' : 'hidden'} absolute z-10 p-2 bg-white rounded-md shadow-md mt-1`}
                >
                  <ul>
                    {sortByOptions.map((option, i) => (
                      <li 
                        key={i}
                        className='hover:underline cursor-pointer'
                        onClick={() => {setSortBy(option); setSortOpen(false)}}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
              
            </div>
            <div className='flex flex-row mt-2 w-full'>
                      {/* put hide back when */}
              <div className={`mr-2 ${openFilter ? '' : 'hidden'}`}>
                <FilterOptions
                  filters={filters}
                  handleCloseFilter={handleCloseFilter}
                  handleCheckboxClicked={handleCheckboxClicked}

                  starFilter={starFilter}
                  setStarFilter={setStarFilter}
                  priceFilter={priceFilter}
                  setPriceFilter={setPriceFilter}
                />
              </div>
              <div className='flex flex-1 w-full'>
                <Items
                  products={products}
                />
              </div>
            </div>
    </div>
  )
}

export default ShoppingMain