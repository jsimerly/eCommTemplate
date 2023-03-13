import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { Stars } from '../../utils';

const ReviewCard = ({review}) => {

  return (
    <div className='w-full border border-tertiary rounded-md p-2 my-2'>
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col px-6 justify-center">
                <h3 className="text-[24px] font-semibold">
                    {review.header}
                </h3>
                <p className='text-[18px]'>
                    {review.user.first_name} {review.user.last_name}.
                    {review.verified_purchaser ? 
                    <span className='ml-4 font-semibold text-[14px] text-primary'>Verified Purchaser</span> : ""}
                </p>
            </div>
            <div className="flex flex-col px-6 justify-center">
                <div className="flex flex-row justify-center text-primary p-2">
                    <Stars rating={review.rating}/>
                </div>
                <div className='text-[18px] flex items-center justify-center'>
                    {review.recommended ? 
                    <CheckCircleIcon className='text-primary mr-3 scale-125'/>
                    : 
                    <CancelIcon className='mr-3 scale-125'/>
                    }
                    {review.recommended ? 'Would Recommend' : "Wouldn't Recommend"}
                </div>
            </div>
        </div>
        <div className='px-4 py-2'>
            {review.body}
        </div>
        <div className='px-4 text-[14px]'>
            <a className='underline cursor-pointer'> Report Review </a>
        </div>
    </div>
  )
}

export default ReviewCard