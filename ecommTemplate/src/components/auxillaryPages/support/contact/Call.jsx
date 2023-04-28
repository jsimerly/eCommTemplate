import React from 'react'

const Call = () => {
  return (
    <div className='text-tertiary pb-10'>
        <h1 className='text-[40px] text-center font-bold'> Call: </h1>
        <h2 className='text-[40px]'> 1-800-555-3424 </h2>
        <div>
        <div className="flex flex-col justify-center items-center mt-6">
                <h3 className="font-bold text-[18px] ">Hours</h3>
                <p className="underline">Monday - Friday</p>
                <p>7:00 AM - 6:00 PM EST</p>
                <p className="underline">Saturday - Sunday</p>
                <p>9:00 AM - 4:00 PM EST</p>
            </div>
        </div>
    </div>
  )
}
export default Call