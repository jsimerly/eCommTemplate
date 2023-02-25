import AddIcon from '@mui/icons-material/Add';

const OrderSummary = () => {
  return (
    <div className='w-full flex flex-col px-6 py-3'>
        <div>
            <h3 className='font-bold'>Where and When</h3>
            <div className='flex flex-row space-x-1'>
                <div className='border border-primary p-2 rounded-md w-1/2'>Location Selector</div>
                <div className='border border-primary p-2 rounded-md w-1/2'>Date Selector</div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-col items-start'>
                <h3 className='font-bold'> Promos</h3>
                <div>
                    Active Display Promos
                </div>
                <div className='flex flex-row w-1/2'>
                    <input 
                        className='border border-primary p-2 rounded-md outline-primary flex'
                        placeholder='PROMO CODE'
                    />
                    <div className='p-2 bg-primary rounded-md ml-1 cursor-pointer group'>
                        <AddIcon
                            className='group-hover:scale-125 text-white'
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-6'>
            <div className='flex flex-row justify-between'>
                <h3 className=''>Subtotal ({3} items)</h3>
                <div>
                    <p> $125.55</p>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-row justify-between'>
                <h3 className=''>Insurance</h3>
                <div>
                    <p> $12.35</p>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-row justify-between'>
                <h3 className=''>Sales Tax</h3>
                <div>
                    <p> $17.03</p>
                </div>
            </div>
        </div>
        <div className='mt-2'>
            <div className='flex flex-row justify-between'>
                <h3 className='font-bold'>Total Cost</h3>
                <div className='font-bold'>
                    <p> $154.93</p>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center items-center mt-4'>
                <button className='p-2 bg-primary text-white rounded-md w-full text-[24px]'>
                    Checkout
                </button>
        </div>
        <div>
        Payments we accept icons*
        </div>
        <div className='w-full flex justify-center items-center hover:underline cursor-pointer'>
            Continue Shopping
        </div>   
    </div>
  )
}

export default OrderSummary