import { useEffect, useState, useContext } from "react"
import useClickOutside from '../../hooks/useClickOutside';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useLocation, useNavigate } from "react-router-dom";

import { fetchProductReviewsBySlug } from "../../api/fetchProducts";
import { AuthContext } from '../../context';
import { WhiteButton } from "../utils";
import { ReviewCard } from "./InfoContent";
import { Empty, Stars } from "../utils";
import LeaveReview from "./LeaveReview";

const Reviews = ({product}) => {
  const location = useLocation();
  const segments = location.pathname.split('/');
  const slug = segments[segments.length - 1];

  const {isLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const [reviews, setReviews] = useState([])
  const [leaveReviewOpen, setLeaveReviewOpen] = useState(false)
  const [filteredReviews, setFilteredReviews] = useState([])
  const [filterStars, setFilterStars] = useState(
    {
      1: true,
      2: true,
      3: true,
      4: true,
      5: true,
    })
  const [verifiedOnlyFilter, setVerifiedOnlyFilter] = useState(false)
  const [filterActive, setFilterActive] = useState(false)

  const areFiltersEqual = () => {
    const allCheckedTrue = Object.values(filterStars).every((checked) => checked);
    return allCheckedTrue & !verifiedOnlyFilter
  };

  const handleResetFilters = () => {
    setFilterStars(
      {
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
      })
    setVerifiedOnlyFilter(false)
  }

  useEffect(() => {
    const isActive = areFiltersEqual()
    setFilterActive(!isActive)
  },[filterStars, verifiedOnlyFilter])
 

  useEffect(() => {
    const getProductReview = async () => {
      const response = await fetchProductReviewsBySlug(slug)
      if (response.ok){
        const resp = await response.json()
        setReviews(resp)
      }
    }
    getProductReview()
  }, [slug])

  const [filterOpen, setFilterOpen] = useState(false)

  const filterNode = useClickOutside(()=> {
    setFilterOpen(false)
  })

  const handleVerfiedPurchaseClicked = () => {
    setVerifiedOnlyFilter((verified) => !verified)
  }

  const handleStarFilterClicked = (starN) => {
    setFilterStars((filter) => {
      const updatedFilter = {
        ...filter, // make a copy of the existing state
        [starN]: !filter[starN],
      };
      return updatedFilter;
    });
  };

  const shouldDisplayReview = (review) => {
    const {rating, verified_purchaser,} = review
    if (!filterStars[rating]) {
      return false;
    }
    if (verifiedOnlyFilter){
      return verified_purchaser
    }
    return true
  }

  useEffect(() => {
    const newFilteredReviews = reviews.filter(shouldDisplayReview)
    setFilteredReviews([...newFilteredReviews])
  },[reviews, filterStars, verifiedOnlyFilter])


  //Sort
  const sortByOptions = [
    'Most Recent',
    'Rating - High to Low',
    'Rating - Low to High',
  ]

  const sortReviews = (reviews, sortBy) => {
    const reviewsCopy = [...reviews];
    
    if (sortBy === 'Rating - Low to High') {
      return reviewsCopy.sort(
        (a, b) => parseFloat(a.rating) - parseFloat(b.rating)
      );
    } else if (sortBy === 'Rating - High to Low') {
      return reviewsCopy.sort(
        (a, b) => parseFloat(b.rating) - parseFloat(a.rating)
      );
    } else {
      return reviewsCopy.sort(
        (a, b) => new Date(b.date_created) - new Date(a.date_created)
      );
    }
  };

  const [sortOpen, setSortOpen] = useState(false)
  const [sortBy, setSortBy] = useState('Most Recent')

  const sortedReviews = sortReviews(filteredReviews, sortBy)

  const sortNode = useClickOutside(() => {
    setSortOpen(false);
  })

  const handleSortByClicked = () => {
    setSortOpen((sortOpen) => !sortOpen)
  }

  const handleFilterClicked = () => {
    setFilterOpen((filterOpen) => !filterOpen)
  }

  const handleLeaveReviewClicked = () => {
    if (leaveReviewOpen){
      setLeaveReviewOpen(false)
      return
    }
    if (isLoggedIn){
      setLeaveReviewOpen(true)
    } else {
      navigate('/sign-up')
    }
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
              className={`${filterActive ? '' : 'hidden'} text-white bg-primary rounded-md h-full p-2 shadow-md group min-h-[42px] min-w-[42px]`}
              onClick={handleResetFilters}
            >
              <DeleteForeverIcon 
                className='group-hover:scale-125'
              />
            </button>
          </div>
          <div 
            className={`${filterOpen ? '' : 'hidden'} absolute z-10 p-2 bg-white rounded-md shadow-md mt-1`}
          >
          <ul className="flex flex-col space-y-2 sm:space-y-1 ">
            {Object.entries(filterStars).map(([starN, checked]) => {
              return(
                <li
                  key={'filter_star_'+starN}
                  className="text-primary cursor-pointer"
                  onClick={() => handleStarFilterClicked(starN)}
                >
                  {checked ? <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>}
                  <Stars rating={starN} size={25}/> ({starN})
                </li>
              )
            })}
            <li 
              className="cursor-pointer"
              onClick={handleVerfiedPurchaseClicked}
            >
              {verifiedOnlyFilter ? <CheckBoxIcon className="text-primary"/> : <CheckBoxOutlineBlankIcon className="text-primary"/>}
              <span className="ml-1">Verified Purchasers Only</span>
            </li>
          </ul>
          </div>
        </div>
        <div ref={sortNode}
            className='relative'
        >
          <div className='h-[42px] group'>
                <WhiteButton
                  onClick={handleSortByClicked}
                  content={
                    <div className='flex flex-row justify-between'>
                      Sort By: <span className="hidden sm:block">{sortBy}</span>
                      <ExpandMoreIcon className='ml-1 text-tertiary group-hover:scale-110'/>
                    </div>
                  }
                  className='!text-tertiary'
                />
              </div>
          <div 
            className={`${sortOpen ? '' : 'hidden'} -left-[60px] sm:right-0 absolute z-10 p-2 bg-white rounded-md shadow-md mt-1`}
          >
            <ul className="space-y-2 sm:space-y-0">
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
        {filteredReviews.length === 0 ? 
        <Empty/>
        :
        sortedReviews.map((review, i) => (
          <ReviewCard
            key={'review_'+i}
            review={review}
          />
        ))}
      </div>
      {leaveReviewOpen && 
        <div className={` w-full flex flex-col justify-center items-center p-4`}>
          <LeaveReview
            product={product}
            setLeaveReviewOpen={setLeaveReviewOpen}
          />
        </div>
      }
      <div 
        className="underline cursor-pointer text-center"
        onClick={handleLeaveReviewClicked}
      >
        {leaveReviewOpen ? 'Close Review' : 'Leave a Review'}
      </div>
    </div>
  )
}

export default Reviews