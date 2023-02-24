import { useEffect, useState } from "react"
import useClickOutside from '../../hooks/useClickOutside';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const Reviews = () => {

  //Filter
  const filterOptions = [
    {'1 Star':  true },
    {'2 Stars':  true },
    {'3 Stars':  true },
    {'4 Stars':  true },
    {'5 Stars': true },
  ]

  const filterOptions_copy = JSON.parse(JSON.stringify(filterOptions))
  const [filters, setFilters] = useState(JSON.parse(JSON.stringify(filterOptions)))

  const [filterOpen, setFilterOpen] = useState(false)
  const [filterApplied, setFilterApplied] = useState(false)

  let filterNode = useClickOutside(()=> {
    setFilterOpen(false)
  })

  const CheckBox = ({name, checked}) => {
    
    return (
      <div className="flex ml-2 cursor-pointer">
        <div>
          {checked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
        </div>
        <p className="ml-2 pr-4">
          {name}
        </p>
      </div>
    )
  }

  const areListsEqual = (deepCopy, stateCopy) =>{
    console.log(deepCopy)
    console.log(stateCopy)
    for (let i=0; i < deepCopy.length; i++){
      const dict1 = deepCopy[i]
      const dict2 = stateCopy[i]

      for (const key in dict1){
        if (dict1[key] != dict2[key]){
          return false
        }
      }
    }
    return true
  }

  const checkForFilterApplied = () => {
    const bool = areListsEqual(filterOptions_copy, filters)
    setFilterApplied(!bool)
  }

  const handleCheckboxClicked = (title, checked) => {
    let new_list = filters
    filters.map((filterOption, i) => {
      const filter = Object.keys(filterOption)[0]
      if (title==filter){
        filterOption[filter] = !filterOption[filter]
        setFilters([...new_list])
      }
    })
    checkForFilterApplied()
  }

  const handleClearClick = () => {
    setFilters([...filterOptions_copy])
    setFilterApplied(false)
  }

  //Sort
  const sortByOptions = [
    'Most Recent',
    'Rating - High to Low',
    'Rating - Low to High',
  ]

  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState('Most Recent')
  let sortNode = useClickOutside(() => {
    setSortOpen(false);
  })

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between w-full">
        <div ref={filterNode}>
          <div className="flex space-x-2">
            <button
              className='flex justify-center items-center bg-white p-2 border border-primary rounded-md hover:underline group min-h-[42px] relative'
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
          <div 
            className={`${filterOpen ? '' : 'hidden'} absolute z-10 p-2 bg-white rounded-md shadow-md mt-1`}
          >
            <ul>
              {filters.map((filter, i) => {
                const title = Object.keys(filter)[0]
                const checked = filter[title]
                return(
                  <li 
                  key={i}
                  className='hover:underline cursor-pointer'
                  onClick={() => {handleCheckboxClicked(title, checked)}}
                  >
                    <CheckBox
                      name={title}
                      checked={checked}
                    />
                  </li>
                )})}
            </ul>
          </div>
        </div>
        <div ref={sortNode}>
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
      Reviews
    </div>
  )
}

export default Reviews