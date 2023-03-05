import { BlueButton } from "../../utils"


const SignIn = () => {

    return(
        <div className="w-3/4 h-full flex flex-col justify-center items-center">
            <h2 className="font-bold text-[30px] text-primary">Keep the Magic Going...</h2>
            <h3>Sign up and you’ll be able to manage your account, track orders, save products and get access to special deals. </h3>
            <div className="flex flex-col justify-center items-center w-2/3 gap-4 py-4">
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
                <BlueButton
                    content='Sign-In'
                />
                <div>
                    <p className="underline">I've Forgotten My Password</p>
                </div>

            </div>
        </div>
    )
}

export default SignIn