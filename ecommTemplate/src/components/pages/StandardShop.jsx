import { useState } from 'react'
import styles from '../../styles'
import TuneIcon from '@mui/icons-material/Tune';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Filter } from '../shopping';
import useClickOutside from '../../hooks/useClickOutside';

const StandardShop = () => {
  const sortByOptions = [
    'Featured',
    'Price: Low to High',
    'Price: High to Low',
    'Most Popular',
  ]
  const [filterOpen, setFilterOpen] = useState(true)
  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState('Featured')

  let sortNode = useClickOutside(() => {
    setSortOpen(false);
  })

  return (
    <div className='flex justify-center items-start text-tertiary'>
      <div className={`${styles.boxWidth}`}>
        <div>
          <h1>
            Title
          </h1>
        </div>
        <div>
          <div className='flex flex-row justify-between'>
            <div>
              <button
                className='flex justify-center items-center bg-white p-2 border border-primary rounded-md hover:underline'
                onClick={()=> setFilterOpen((filterOpen) => !filterOpen) }
              >
                <TuneIcon className='mr-1 text-tertiary'/>
                Filter
              </button>
            </div>
            <div
              ref={sortNode}
            >
              <button
                className='flex justify-center items-center bg-white p-2 border border-primary rounded-md hover:underline relative'
                onClick={()=> setSortOpen((sortOpen) => !sortOpen)}
              >
                Sort By: {sortBy}
                <ExpandMoreIcon className='ml-1 text-tertiary'/>
              </button>
              <div 
                className={`${sortOpen ? '' : 'hidden'} absolute z-10 p-2 bg-white rounded-md shadow-md mt-1`}
              >
                <ul>
                  {sortByOptions.map((option, i) => (
                    <li 
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
              <Filter/>
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