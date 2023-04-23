import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { BlueButton } from '../utils';
import { useState, useContext } from 'react';
import { fetchCreateReview } from '../../api/fetchProducts';
import { ShoppingContext } from '../../context';

const LeaveReview = ({product, setLeaveReviewOpen}) => {
  const [rating, setRating] = useState()
  const [recommend, setRecommended] = useState(true)
  const [leavingComment, setLeavingComment] = useState(true)
  const [headline, setHeadline] = useState()
  const [fullComment, setFullComment] = useState()
  const [anonymous, setAnonymous] = useState(false)

  const {handleNotification} = useContext(ShoppingContext)

  const handleStarClick = (value) => {
    setRating(value)
  }

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <StarIcon
            key={i}
            onClick={() => handleStarClick(i)}
            sx={{fontSize: 30}}
            className='cursor-pointer text-primary hover:scale-110'
          />
        ) : (
          <StarOutlineIcon
            key={i}
            onClick={() => handleStarClick(i)}
            sx={{fontSize: 30}}
            className='cursor-pointer text-primary hover:scale-110'
          />
        )
      );
    }
    return stars;
  };
  
  const handleHeadlineChange = (e) => {
    setHeadline(e.target.value)
  }

  const handleCommentChange = (e) => {
    setFullComment(e.target.value)
  }

  const handleReviewSubmitClicked = async () => {
    const response = await fetchCreateReview(product.slug, rating, recommend, leavingComment, headline, fullComment, anonymous)

    if (response.status === 201){
      handleNotification('Your review has been successfull submitted for review.')
      setRating(null)
      setRecommended(false)
      setLeavingComment(false)
      setHeadline(null)
      setFullComment(null)
      setAnonymous(false)
      setLeaveReviewOpen(false)
    } else {
      handleNotification('There was an error when submitting your review.')
    }
  }

  return (
    <div className="flex flex-col w-full justify-center items-center mt-10">
        <h3 className="text-[26px] font-bold underline mb-4">
            Review for {product.name}
        </h3>
        <div className='flex flex-row w-full justify-center'>
          <div className='w-1/3'>
              <img
                src={product.main_image.image}
                className='aspect-square'
              />
          </div>
          <div className='w-2/3 px-6 text-[24px]'>
            <div className='inline-flex flex-col'>
              <div className='flex flex-col'>
                <h4>Rating</h4>
                <div>{renderStars()}</div>
              </div>
              <div className='flex flex-col my-2'>
                <h4>Would you recommend this item?</h4>
                <div className='flex flex-row space-x-4 items-center'>
                  <div 
                    className='flex items-center text-[16px] cursor-pointer'
                    onClick={()=> setRecommended(true)}
                  >
                      {recommend ? 
                      <RadioButtonCheckedIcon className='mr-1 text-primary'/> :
                      <RadioButtonUncheckedIcon className='mr-1 text-primary'/>}
                      Yes
                    </div>
                    <div 
                      className='flex items-center text-[16px] cursor-pointer'
                      onClick={()=> setRecommended(false)}
                    > 
                      {!recommend ? 
                      <RadioButtonCheckedIcon className='mr-1 text-primary'/> :
                      <RadioButtonUncheckedIcon className='mr-1 text-primary'/>}
                      No
                  </div>
                </div>
              </div>
              <div className='flex flex-col my-2'>
                <h4>Leave Comment</h4>
                <div className='flex flex-row  space-x-4 items-center cursor-pointer'>
                  <div 
                    className='flex items-center text-[16px]'
                    onClick={()=> setLeavingComment(true)}
                  >
                    {leavingComment ? 
                    <RadioButtonCheckedIcon className='mr-1 text-primary'/> :
                    <RadioButtonUncheckedIcon className='mr-1 text-primary'/>}
                    Yes
                  </div>
                  <div 
                    className='flex items-center text-[16px] cursor-pointer'
                    onClick={()=> setLeavingComment(false)}
                  > 
                    {!leavingComment ? 
                    <RadioButtonCheckedIcon className='mr-1 text-primary'/> :
                    <RadioButtonUncheckedIcon className='mr-1 text-primary'/>}
                    No
                  </div>
                </div>
              </div>
            </div>
            {leavingComment && 
            <>
              <div>
                <h4>
                  Review Headline
                </h4>
                <input
                  className='border w-full p-2 rounded-md border-primary outline-primary text-[16px]'
                  placeholder='Leave a headline or summary of your review.'
                  value={headline}
                  onChange={handleHeadlineChange}
                />
              </div>
                <div>
                <h4>
                  Full Review
                </h4>
                <textarea
                  className='border w-full min-h-[160px] p-2 rounded-md border-primary outline-primary text-[16px]'
                  placeholder='What did you like or dislike about this product? How did you use this and how well did it work?'
                  value={fullComment}
                  onChange={handleCommentChange}
                />
              </div>
              <div className='flex flex-col mb-6'>
                <h4 
                  className='flex flex-row items-center cursor-pointer'
                  onClick={()=>setAnonymous(!anonymous)}
                >
                  {anonymous ? 
                  <CheckBoxIcon className='text-primary hover:scale-110 '/> : <CheckBoxOutlineBlankIcon className='text-primary hover:scale-110'/>}
                  <span className='ml-2 text-[16px]'>Review Anonymously</span> 
                </h4>
              </div>
            </>
            }
          </div>
        </div>
        <div className=''>
          <BlueButton
            content="Submit Review"
            className='w-[180px]'
            onClick={handleReviewSubmitClicked}
          />
        </div>
    </div>
  )
}

export default LeaveReview