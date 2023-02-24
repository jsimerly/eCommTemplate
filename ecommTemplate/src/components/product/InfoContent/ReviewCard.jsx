import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ReviewCard = ({review}) => {
    console.log(review)
  return (
    <div className='w-full border border-tertiary rounded-md p-2 my-2'>
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col px-6 justify-center">
                <h3 className="text-[24px] font-semibold">
                    {review.title}
                </h3>
                <p className='text-[18px]'>
                    {review.userName} 
                    {review.verifiedPurchaser ? 
                    <span className='ml-4 font-semibold text-[14px] text-primary'>Verified Purchaser</span> : ""}
                </p>
            </div>
            <div className="flex flex-col px-6 justify-center">
                <div className="flex flex-row justify-center text-primary p-2">
                    <StarIcon/>
                    <StarIcon/>
                    <StarIcon/>
                    <StarHalfIcon/>
                    <StarOutlineIcon/>
                </div>
                <div className='text-[18px] flex items-center justify-center'>
                    {review.recommonded ? 
                    <CheckCircleIcon className='text-primary mr-3 scale-125'/> 
                    : 
                    <CancelIcon className='mr-3 scale-125'/>
                    }
                    <span>Would Recommend</span>
                </div>
            </div>
        </div>
        <div className='px-4 py-2'>
            {review.context}
        </div>
        <div className='px-4 text-[14px]'>
            <a className='underline cursor-pointer'> Report Review </a>
        </div>
    </div>
  )
}

export default ReviewCard