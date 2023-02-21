import { useState } from 'react'
import styles from '../../styles'

import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckboxFilter from '../shopping/CheckboxFilter';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import useClickOutside from '../../hooks/useClickOutside';
import { shoppingPageData } from '../../constants/shopping';


const Filter = ({closeFunc, checkFilterOptions, setCheckFilterOptions, checkForFilterApplied}) => {
  return (
    <div 
      className='bg-white mt-1 rounded-md p-2 w-[300px] shadow-md filter-parent'
    >
      <div className='flex justify-between'>
        <p className='text-[20px] mb-2'>
          Filter Options
        </p>
        <CloseIcon
          onClick={() => closeFunc(false)}
          className='hover:scale-105 cursor-pointer'
        />
      </div>
      <CheckboxFilter
        setCheckFilterOptions={setCheckFilterOptions}
        checkFilterOptions={checkFilterOptions}
        checkForFilterApplied={checkForFilterApplied}
      />
    </div>
  )
};

const StandardShop = () => {
  //filter related
  const checkboxOptions = shoppingPageData['0302']['checkboxOptions']
  const checkboxOptions_deepCopy = JSON.parse(JSON.stringify(checkboxOptions))
  const deepCopy2 = JSON.parse(JSON.stringify(checkboxOptions_deepCopy)) //clean up the memory management

  const [checkFilterOptions, setCheckFilterOptions] = useState(checkboxOptions_deepCopy)
  const [filterOpen, setFilterOpen] = useState(true)
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
    <div 
      className='flex justify-center items-start text-tertiary'>
      <div className={`${styles.boxWidth}`}>
        <div>
          <h1>
            Title
          </h1>
        </div>
        <div>
          <div className='flex flex-row justify-between'>
            <div className='flex space-x-1 items-center'>
              <button
                className='flex justify-center items-center bg-white p-2 border border-primary rounded-md hover:underline group'
                onClick={()=> setFilterOpen((filterOpen) => !filterOpen) }
              >
                <TuneIcon className='mr-1 text-tertiary group-hover:scale-110'/>
                Filter
              </button>
              <button 
                className={`${filterApplied ? '' : 'hidden'} text-white bg-primary rounded-md h-full p-2 shadow-md group`}
                onClick={handleClearClick}
              >
                <DeleteForeverIcon 
                  className='group-hover:scale-125'
                />
              </button>
            </div>
            <div
              ref={sortNode}
            >
              <button
                className='flex justify-center items-center bg-white p-2 border border-primary rounded-md hover:underline relative group'
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
          <div className='flex flex-row'>
            <div className={`${filterOpen ? '' : 'hidden'}`}>
              <Filter
                closeFunc={setFilterOpen}
                checkFilterOptions={checkFilterOptions}
                setCheckFilterOptions={setCheckFilterOptions}
                checkForFilterApplied={checkForFilterApplied}
              />
            </div>
            <div className='flex flex-1 w-full'>
              Items
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StandardShop