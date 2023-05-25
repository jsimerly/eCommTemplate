import { useEffect, useState, useContext, useRef } from 'react'

import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';

import { ItemsV2 }  from '.';
import { Items } from '.';
import FilterOptions from './FilterOptions';
import useDropdown from '../../hooks/useDropdown';
import { ShoppingContext } from '../../context';
import { WhiteButton } from '../utils';
import AllCategories from './AllCategories';

const ShoppingMain = ({filterData, relatedCategories, products, brands}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  //need to just create a util at this point...
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    } 
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  },[])

  //Filter Setters
  const [priceFilter, setPriceFilter] = useState([null,null])
  const [priceExtrema, setPriceExtrma] = useState([0,100])
  const [starFilter, setStarFilter] = useState([1,5])

  const [original_brandData, setOriginalBrandData] = useState([])
  const [brandFilter, setBrandFilter] = useState([])

  const [original_filterData, setOriginalFilterData] = useState([])

  const [filterActive, setFilterActive] = useState(false)
  const [filters, setFilters] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([])

  //Filter Open and Close
  const [openFilter, setOpenFilter] = useState()
  let filterNode = useRef()
  useEffect(() => {
    if (windowWidth < 768) {
      let filterHandler = (e) => {
        if (!filterNode.current?.contains(e.target)) {
          setOpenFilter(false);
        }
      }
  
      document.addEventListener('mousedown', filterHandler);

      return () => {
        document.removeEventListener('mousedown', filterHandler);
      }
    }
  });

  const areFiltersEqual = () => {
    if (starFilter[0] !== 1 || starFilter[1] !== 5){
      return false
    }
    
    if (
      (priceFilter[0] !== null && priceFilter[0] !== priceExtrema[0]) ||
      (priceFilter[1] !== null && priceFilter[1] !== priceExtrema[1])
    ) {
      return false;
    }

    for (let i = 0; i < brandFilter.length; i++){
      if (brandFilter[i].checked !== original_brandData[i].checked){
        return false;
      }
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
    console.log('closeFilter')
  }

  const handleResetFilters = () => {
    setFilters(JSON.parse(JSON.stringify(original_filterData)))
    setBrandFilter(JSON.parse(JSON.stringify(original_brandData)))
    setStarFilter([1,5])
    setPriceFilter([null, null])
  }

  useEffect(()=>{
    const isActive = areFiltersEqual()
    setFilterActive(!isActive)
  },[filters, starFilter[0], starFilter[1], priceFilter, brandFilter])

  useEffect(()=>{
    setFilters(filterData)
    setOriginalFilterData(JSON.parse(JSON.stringify(filterData)))
  }, [filterData])

  useEffect(()=>{
    setBrandFilter(brands)
    setOriginalBrandData(JSON.parse(JSON.stringify(brands)))
  },[brands])

  useEffect(() => {
    if (products.length > 0) {
      const minPrice = Math.min(...products.map(product => product.total_cost));
      const maxPrice = Math.max(...products.map(product => product.total_cost));
      setPriceExtrma([minPrice, maxPrice]);
    } else {
      setPriceExtrma([0, 100]); //Set default min and max values if filteredProducts is empty
    }
  }, [products]);

  const createUpdatedItems = (items, itemIndex, originalItems, itemProperties) => {
    const updatedItems = [...items];
    const index = originalItems.findIndex(
      (find_item) => find_item.name === items[itemIndex].name
    );
  
    if (index !== -1) {
      const updatedItem = { ...updatedItems[itemIndex], ...itemProperties };
      updatedItems[itemIndex] = updatedItem;
    }
  
    return updatedItems;
  };
  
  const handleCheckboxClicked = (categoryIndex, tagIndex) => {
    const updatedFilters = createUpdatedItems(
      filters[categoryIndex].tags,
      tagIndex,
      filterData[categoryIndex].tags,
      {
        checked: !filters[categoryIndex].tags[tagIndex].checked,
      }
    );
  
    const updatedFilterOptions = filters.map((filter, index) =>
      index === categoryIndex
        ? { ...filter, tags: updatedFilters }
        : filter
    );
  
    setFilters(updatedFilterOptions);
  };
  
  const handleBrandCheckClicked = (brandIndex) => {
    const updatedBrands = createUpdatedItems(
      brandFilter,
      brandIndex,
      original_brandData,
      { checked: !brandFilter[brandIndex].checked }
    );
  
    setBrandFilter(updatedBrands);
  };

  //Filter User
  const shouldDisplayProduct = (product) => {
    const {total_cost, average_rating, filter_tags, brand, n_ratings} = product

    if (priceFilter[0] !== null && total_cost < priceFilter[0]){
      return false
    }
    if (priceFilter[1] !== null && total_cost > priceFilter[1]){
      return false
    }

    if (n_ratings > 0) {
      if (average_rating + .5 < starFilter[0] || average_rating > starFilter[1]){
        return false
      }
    }


    for (let i = 0; i < brandFilter.length; i++){
      const individualBrandFilter = brandFilter[i]
      if (
        !individualBrandFilter.checked && 
        individualBrandFilter.name === brand.name
      ){
        return false
      }
    }

    for (let i = 0; i < filters.length; i++){
      for (let j = 0; j < filters[i].tags.length; j++){
        const client_tag = filters[i].tags[j];
        if (
          !client_tag.checked && 
          filter_tags.some(filterTag => filterTag.name === client_tag.name)
        ){ 
          return false
        }
      }
    }
    return true
  }

  useEffect(()=> {
    const newFilteredProducts = products.filter(shouldDisplayProduct)
    setFilteredProducts([...newFilteredProducts])
  },[products, filters, priceFilter, starFilter, brandFilter])

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
        <div className='flex space-x-10 items-center sm:w-1/5'>
          <div className='flex space-x-2'>
            <WhiteButton 
              onClick={()=>{setOpenFilter(openFilter => !openFilter); console.log('whitebutton')}}
              content={
                <div>
                  <TuneIcon className='mr-1 text-neutralDark group-hover:scale-110'/>
                  Filter
                </div>
              }
              className='!text-neutralDark'
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
            <div 
              className='hidden sm:flex flex-col items-center justify-center flex-1 pb-4'
            >
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
              <div className='flex justify-end items-center sm:minw-1/5 sm:relative'>
                <div ref={sortNode}>
                  <div className='h-[42px] group sm:min-w-[100px]'>
                    <WhiteButton
                      onClick={handleSortClick}
                      content={
                        <div className='flex flex-row justify-between'>
                          Sort By<span className='hidden sm:block'>: {sortBy}
                          <ExpandMoreIcon className='ml-1 text-neutralDark group-hover:scale-110'/>
                          </span>
                        </div>
                      }
                      className='!text-neutralDark'
                    />
                  </div>
                <div 
                  className={`${sortOpen ? '' : 'hidden'} fixed sm:absolute z-20 p-2 bg-white rounded-md shadow-md w-full left-0 bottom-[60px] sm:-bottom-[70px] min-h-[400px] sm:min-h-0`}
                >
                  <div>
                    <div className='sm:hidden w-full flex flex-row justify-between'>
                      <h3>
                        Sort By
                      </h3>
                      <button>
                        <CloseIcon
                          onClick={() => setSortOpen(false)}
                        />
                      </button>
                    </div>
                    <ul>
                      {sortByOptions.map((option, i) => (
                        <li 
                          key={i}
                          className='hover:underline cursor-pointer space-y-2 sm:space-y-0 text-[20px] sm:text-[16px]'
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
              
            </div>
            <div className='flex flex-row w-full'>
                      {/* put hide back when */}
              <div className={`mr-0 sm:mr-2  ms:min-w-[300px]`}>
                <div className={`${openFilter ? '' : 'hidden'} mb-6 `} ref={filterNode}>
                  <FilterOptions
                    filters={filters}
                    handleCloseFilter={handleCloseFilter}
                    handleCheckboxClicked={handleCheckboxClicked}

                    starFilter={starFilter}
                    setStarFilter={setStarFilter}

                    priceFilter={priceFilter}
                    setPriceFilter={setPriceFilter}
                    priceExtrema={priceExtrema}

                    brandFilter={brandFilter}
                    handleBrandCheckClicked={handleBrandCheckClicked}
                  />
                </div>
                <AllCategories

                />
              </div>
              <div className='flex flex-1 w-full'>
                <ItemsV2
                  products={filteredProducts}
                  sortBy={sortBy}
                />
              </div>
            </div>
    </div>
  )
}

export default ShoppingMain