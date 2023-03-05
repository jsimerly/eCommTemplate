import { useState } from "react"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { BlueButton } from "../../utils";


const CreateAccount = () => {
    const [updateCheck, setUpdateCheck] = useState(false)

    const handleCheckClick = () =>{
        setUpdateCheck((updateCheck) => !updateCheck)
    }

    return(
        <div className="w-3/4 flex flex-col justify-center items-center">
            <h2 className="font-bold text-[30px] text-primary">Experience the Magic of Blue Elf!</h2>
            <h3>Sign up and you’ll be able to manage your account, track orders, save products and get access to special deals. </h3>
            <div className="flex flex-col justify-center items-center w-2/3 gap-4 py-4">
                <div className="flex flex-row justify-between w-full gap-2">
                    <input
                        className="w-1/2 border border-primary rounded-md pl-2 outline-primary p-2"
                        placeholder="First Name"
                    />
                    <input 
                        className="w-1/2 border border-primary rounded-md pl-2 outline-primary p-2"
                        placeholder='Last Name'
                    />
                </div>
                <div className="flex flex-col w-full gap-4">
                    <input 
                        className="border border-primary rounded-md pl-2 outline-primary p-2 w-full"
                        placeholder="Email Address"
                    />
                    <input
                        className="border border-primary rounded-md pl-2 outline-primary p-2 w-full"
                        placeholder="Password" 
                        type='password'
                    />
                </div>
                <div className="flex flex-row justify-between w-full gap-2">
                    <input 
                        className="w-1/2 border border-primary rounded-md pl-2 outline-primary p-2"
                        placeholder="Date of Birth"
                    />
                    <input 
                        className="w-1/2 border border-primary rounded-md pl-2 outline-primary p-2"
                        placeholder="Phone Number" 
                        type='tel'
                    />
                </div>
                <div className="w-full flex flex-row items-center">
                    {updateCheck ? 
                    <CheckBoxIcon 
                        className="text-primary hover:scale-110 cursor-pointer"
                        onClick={handleCheckClick}
                    /> 
                    : 
                    <CheckBoxOutlineBlankIcon 
                        className="text-primary hover:scale-110 cursor-pointer"
                        onClick={handleCheckClick}
                    />}
                    <p className="text-[12px] ml-2">I wish to receive latest news and exclusive discounts by receiving Blue Elf marketing emails.</p>
                </div>
                <BlueButton
                    content='Create Account'
                />
                <div className="text-[12px]">
                    By creating your account, you agree to our <a href='/terms-and-conditions' className="underline">Terms and Conditions</a> and our <a href='/privacy' className="underline">Privacy Policy</a>.
                </div>
            </div>
        </div>
    )
}

export default CreateAccount