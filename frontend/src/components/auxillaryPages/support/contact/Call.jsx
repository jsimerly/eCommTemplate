import { company } from "../../../../../constants/company_constants"

const Call = () => {
  return (
    <div className='text-neutralDark pb-10'>
        <h1 className='text-[40px] text-center font-bold'> Call: </h1>
        <h2 className='text-[40px]'> {company.support_phone_number} </h2>
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