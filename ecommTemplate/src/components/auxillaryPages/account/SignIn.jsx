import { BlueButton } from "../../utils"
import { fetchLoginUser } from "../../../api/fetchUser"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ErrorMessages from "../../utils/ErrorMessages"


const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessages, setErrorMessages] = useState([])

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById('signInButton').click()
    }

    const handleSignIn = async () => {
        try {
           const response = await fetchLoginUser(email, password)
           console.log(response.status)
           if (response.ok){
            navigate('/')
            window.location.reload()
           } else {
            setErrorMessages(['Invalid credentials. Please check your email and password and try again.'])
           }
        } catch (error) { 
            throw error
        }
    }

    return(
        <div className="w-3/4 h-full flex flex-col justify-center items-center">
            <h2 className="font-bold text-[30px] text-primary">Keep the Magic Going...</h2>
            <h3>Sign up and you’ll be able to manage your account, track orders, save products and get access to special deals. </h3>
            <form 
                className="flex flex-col justify-center items-center w-2/3 gap-4 py-4"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col w-full gap-4">
                    <input 
                        className="border border-primary rounded-md pl-2 outline-primary p-2 w-full"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        className="border border-primary rounded-md pl-2 outline-primary p-2 w-full"
                        placeholder="Password" 
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <ErrorMessages
                    errorMessages={errorMessages}
                />
                <BlueButton
                    id='signInButton'
                    content='Sign-In'
                    onClick={handleSignIn}
                />
                <div>
                    <p className="underline">I've Forgotten My Password</p>
                </div>

            </form>
        </div>
    )
}

export default SignIn