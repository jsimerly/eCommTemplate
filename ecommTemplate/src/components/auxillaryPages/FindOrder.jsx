import React from 'react'

const UpdateOrderPage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-tertiary p-10'>
      <h1 className='text-[40px] p-3'> Update or Exchange an Order</h1>
      <div className='p-6 bg-white rounded-md w-[500px]'>
        <p>Update order even if you are not registered. Enter the order number and email address or phone number used to place the order.</p>
        <div className='py-3'>
          <h2>Order Number</h2>
          <input 
            className='p-2 border border-primary rounded-md bg-white w-full' placeholder='Order Number (XXX-XXXX-XXX)'
          />
        </div>
        <div>
          <h2>Order Email or Phone Number</h2>
          <input 
            className='p-2 border border-primary rounded-md bg-white w-full' 
            placeholder='Order Email or Phone Number'
          />
        </div>
        <div className='w-full flex justify-center items-center pt-3'>
          <button className='bg-primary rounded-md text-white py-2 px-6'>
            Find Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateOrderPage