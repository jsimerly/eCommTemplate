import { SwitchComp } from "../../utils"
import CreateAccount from "./CreateAccount"
import SignIn from "./SignIn"


const accountDict = {
    'Create Account' : <CreateAccount/>,
    'Sign-In': <SignIn/>,
}


const SignUp = () => {
  return (
    <div className='flex justify-center items-center text-tertiary'>
        <div className='max-w-[1280px] w-full flex flex-col justify-centeritems-center min-h-[650px]'>
            <div className='w-full flex justify-center items-center'>
                <h1 className='text-[50px] p-6'>Create Account or Sign-In</h1>
            </div>
            <SwitchComp
                compDict={accountDict}
                defComp='Create Account'
            />
        </div>
    </div>
  )
}

export default SignUp