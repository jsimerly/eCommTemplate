import { useEffect, useState } from "react"
import useClickOutside from '../../hooks/useClickOutside';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { WhiteButton } from "../utils";

import { ReviewCard } from "./InfoContent";
import { BlueButton } from "../utils";

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

  const sortNode = useClickOutside(() => {
    setSortOpen(false);
  })

  const handleSortByClicked = () => {
    setSortOpen((sortOpen) => !sortOpen)
  }

  const handleFilterClicked = () => {
    setFilterOpen((filterOpen) => !filterOpen)
  }


  return (
    <div className="w-full">
      <div className="flex flex-row justify-between w-full">
        <div ref={filterNode}>
          <div className="flex space-x-2">
            <WhiteButton 
              onClick={handleFilterClicked}
              content={
                <div>
                  <TuneIcon className='mr-1 text-tertiary group-hover:scale-110'/>
                  Filter
                </div>
              }
              className='!text-tertiary'
            />
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
          <div className='h-[42px] group'>
                <WhiteButton
                  onClick={handleSortByClicked}
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
      <div>
        {reviews.map((review, i) => (
          <ReviewCard
            review={review}
          />
        ))}

      </div>
      <div className="w-full flex justify-center p-4">
        <div>
          <BlueButton
            content='Leave a Review'
          />
        </div>
      </div>
    </div>
  )
}

export default Reviews