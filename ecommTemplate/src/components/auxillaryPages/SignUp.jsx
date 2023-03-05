import { useState } from "react"
import CreateAccount from "./CreateAccount"
import SignIn from "./SignIn"


const accountDict = {
    'Create Account' : <CreateAccount/>,
    'Sign-In': <SignIn/>,
}

const classProps = (selected) => {
    if (selected == true){
      return 'underline font-semibold text-primary'
    }
    return ''
  }

const SignUp = () => {
    const [view, setView] = useState('Create Account')

    const HeaderButton = ({type}) => (
        <button
            className={`${classProps(view==type)} hover:underline`}
            onClick={()=> setView(type)}
        >
            {type}
        </button>
    )

  return (
    <div className='flex justify-center items-center text-tertiary'>
        <div className='max-w-[1280px] w-full flex flex-col justify-center items-center'>
            <div className='w-full flex justify-center items-center'>
                <h1 className='text-[50px] p-6'>Create Account or Sign-In</h1>
            </div>

            <div className='w-2/3 bg-white rounded-md border border-primary flex flex-col justify-center items-center'>
                <div className="flex flex-row justify-center p-2 items-center space-x-12 text-[18px] w-full">
                    <div className="w-full justify-end flex">
                        <HeaderButton
                            type='Create Account'
                        />
                    </div>
                    <div className="w-full">
                        <HeaderButton
                            type='Sign-In'
                        />
                    </div>   
                </div>
                <div className="w-3/4 border border-primary mb-2"/>
                <div className="flex justify-center items-center h-[500px]">
                    {accountDict[view]}
                </div>


            </div>
        </div>
    </div>
  )
}

export default SignUp