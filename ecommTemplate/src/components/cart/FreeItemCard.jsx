import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const FreeItemCard = ({item, updateFreeItem, getInsurance,}) => {
    //updateCartItem need to change to handle freeItems
    const handleInsuredClicked = () => {
        updateFreeItem(item, {insurance_purchased: !item.insurance_purchased})
    }
      
    return (
      <div className="flex border border-tertiary rounded-md mb-1">
        <div className='flex items-center'>
          <img 
            src={item.item.main_image.image} 
            className='h-[100px] w-[100px] sm:h-[160px] sm:w-[160px] rounded-md aspect-square'/>
        </div>
        <div className='p-3 w-full flex flex-col justify-between flex-1'>
          <div className='flex flex-col justify-start'>
            <div className='flex grow-0'>
              <h2 className='text-[20px] sm:text-[30px] leading-none'>{item.item.name}</h2>
            </div>
            <div className='flex flex-row items-center'>
              <div className='flex grow-0 cursor-pointer group'
                onClick={handleInsuredClicked}
              >
                {item.insurance_purchased ? 
                <CheckBoxIcon
                  className='text-primary group-hover:scale-110'
                /> 
                : 
                <CheckBoxOutlineBlankIcon
                  className='text-primary group-hover:scale-110'
                />}
              
              <div className='ml-1 group-hover:underline'>
                 Insure for <span className='font-bold'> ${getInsurance(item).toFixed(2)}</span>
              </div>
              </div>
            </div>
          </div>
          {item.stock < 10 ? 
            <div className='text-errorRed'>
              Only {item.stock} left in stock - order soon.
            </div>
            :
            <div className='text-primary'>
              In Stock
            </div>
          }
          <div className='sm:w-[60px] h-[40px]'>
            Qty: {item.quantity}
          </div>
        </div>
        <div className='flex flex-col justify-end p-2'>
          <div className='flex flex-col leading-none'>
            <span className='font-bold text-[24px]'> Free </span>
          </div>
      </div>
    </div>
    )
  }

export default FreeItemCard