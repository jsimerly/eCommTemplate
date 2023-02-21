import { useState } from 'react'

import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Filter, Items }  from '../shopping';

import useClickOutside from '../../hooks/useClickOutside';


const ShoppingMain = ({shoppingData, relatedCategories}) => {
  //Filter Related
  const checkboxOptions = shoppingData
  const checkboxOptions_deepCopy = JSON.parse(JSON.stringify(checkboxOptions))
  const deepCopy2 = JSON.parse(JSON.stringify(checkboxOptions_deepCopy)) //clean up the memory management

  const [checkFilterOptions, setCheckFilterOptions] = useState(checkboxOptions_deepCopy)
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterApplied, setFilterApplied] = useState(false)

  const areListsEqual = (deepCopy, stateCopy) =>{

    for (let i=0; i < deepCopy.length; i++){
      const dict1 = deepCopy[i].tags
      const dict2 = stateCopy[i].tags

      for (const key in dict1){
        if (dict1[key] != dict2[key]){
          return false
        }
      }
    }
    return true
  }

  const checkForFilterApplied = () => {
    const bool = areListsEqual(deepCopy2, checkFilterOptions)
    setFilterApplied(!bool)
  }

  const handleClearClick = () => {
    setCheckFilterOptions([...checkboxOptions_deepCopy])
    setFilterApplied(false)
  }

  //Category Related
 
  //sort related
  const sortByOptions = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Most Popular',
  ]
  
  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState('Featured')

  let sortNode = useClickOutside(() => {
    setSortOpen(false);
  })


  return (
    <div>
    <div className='flex flex-row justify-between min-h-[80px]'>
              <div className='flex space-x-10 items-center'>
                <div className='flex space-x-2'>
                  <button
                    className='flex justify-center items-center bg-white p-2 border border-primary rounded-md hover:underline group min-h-[42px]'
                    onClick={()=> setFilterOpen((filterOpen) => !filterOpen) }
                  >
                    <TuneIcon className='mr-1 text-tertiary group-hover:scale-110'/>
                    Filter
                  </button>
                  <button 
                    className={`${filterApplied ? '' : 'hidden'} text-white bg-primary rounded-md h-full p-2 shadow-md group min-h-[42px] min-w-[42px]`}
                    onClick={handleClearClick}
                  >
                    <DeleteForeverIcon 
                      className='group-hover:scale-125'
                    />
                  </button>
                </div>

              </div>
              <div className='flex flex-col items-center justify-center flex-1 pb-4'>
                <h4 className='text-[14px] font-semibold'>
                  Related Categories
                </h4>
                <div className='flex text-[18px] space-x-8'>
                  {relatedCategories.map((cat, i) => (
                    <p className='hover:underline cursor-pointer '>{cat.name}</p>
                  ))}

                </div>
              </div>
              <div className='flex justify-center items-center'>
                <div
                
                ref={sortNode}
              >
                <button
                  className='flex justify-center items-center bg-white p-2 border border-primary rounded-md hover:underline relative group min-h-[42px]'
                  onClick={()=> setSortOpen((sortOpen) => !sortOpen)}
                >
                  Sort By: {sortBy}
                  <ExpandMoreIcon className='ml-1 text-tertiary group-hover:scale-125'/>
                </button>
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
            <div className='flex flex-row mt-2'>
              <div className={`${filterOpen ? '' : 'hidden'} mr-2`}>
                <Filter
                  closeFunc={setFilterOpen}
                  checkFilterOptions={checkFilterOptions}
                  setCheckFilterOptions={setCheckFilterOptions}
                  checkForFilterApplied={checkForFilterApplied}
                />
              </div>
              <div className='flex flex-1 w-full'>
                <Items/>
              </div>
            </div>
    </div>
  )
}

export default ShoppingMain