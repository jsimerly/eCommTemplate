import { useEffect, useState } from "react"
import useClickOutside from '../../hooks/useClickOutside';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { ReviewCard } from "./InfoContent";

const reviews = [
  {title: 'This worked pretty well', context: "This is a really great product, my family loved how cold our beers were the entire vacation. Only complain is it's fairly heavy so my husband had to carry it the entire trip. But i guess that's expected anyway when you walking around with 45 beers.",
  rating:4,  userName: 'Emily P.', recommonded: true, verifiedPurchaser: true},
  {title: 'Okay product', context: "The service was really great, but wish we would have went with different items. This cooler spefically was just to heavy and since it didn't have wheels we couldn't get it through the sand. We'll use Blue Elf again but will go for more convinent items.",
  rating:2.5,  userName: 'Jacob S.', recommended: false, verifiedPurchaser: false}
]

const Reviews = () => {

  //Filter
  const filterOptions = [
    {'1 Star':  true },
    {'2 Stars':  true },
    {'3 Stars':  true },
    {'4 Stars':  true },
    {'5 Stars': true },
    {'Verified Purchaser' : false}
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
      <div>
        {reviews.map((review, i) => (
          <ReviewCard
            review={review}
          />
        ))}

      </div>
      <div className="w-full flex justify-center p-4">
          <button className="bg-primary p-2 text-white rounded-md">
            Leave a Review
          </button>
        </div>
    </div>
  )
}

export default Reviews