
import { BlueButton, WhiteButton } from '../utils/buttons';
import { useNavigate } from 'react-router-dom';
import { fetchLoginUser, fetchUserInformation,  handleLogout} from '../../api/fetchUser';
import { useContext } from 'react';
import { ShoppingContext, AuthContext } from '../../context';
import { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import ErrorBoundry from '../utils/ErrorBoundry';

const LoggedInComp = ({userInfo}) => {
    const {handleNotification} = useContext(ShoppingContext)
    const navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0)
    },[navigate])
    
    const handleOrdersClicked = () => {
        navigate('/find-order')
        handleNotification("You don't appear to have any orders, try searching for an order you may have made before you created your account.")
    }

    const handleFavoritesClicked = () => {
        navigate('/cart')
    }

    const handleAccountClicked = () => {
        navigate('/account-information')
    }

    return(
        <ErrorBoundry fallback="Oops, Sorry! We appear to be missing something.">
        <div className='bg-white flex flex-row justify-between p-3 shadow-md rounded-md w-full'>
            <div className={`${open ?  '' : 'hidden'} w-full text-tertiary`}>
                <h3 className='pb-1 font-bold'>
                    My Account
                </h3>
                <ul className='px-4'>
                    <li 
                        className='hover:underline cursor-pointer'
                        onClick={handleAccountClicked}
                        > Account Details </li>
                    <li 
                        className='hover:underline cursor-pointer'
                        onClick={handleOrdersClicked}
                        > Orders </li>
                    <li
                        className='hover:underline cursor-pointer'
                        onClick={handleFavoritesClicked}
                        > Favorites </li>

                </ul>
                <div className='border border-primary m-2'/>
                <div className='flex flex-row justify-between'>
                    <div>
                        Welcome Back, {userInfo.first_name}
                    </div>
                    <div 
                        className='hover:scale-110'
                        onClick={handleLogout}
                        >
                        <LogoutIcon/>
                    </div>
                </div>
            </div>
        </div>
        </ErrorBoundry>
    )
}

const UnauthedComp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()    

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = async () => {
        try {
                const response = await fetchLoginUser(email, password)
                console.log(response.status)
            if (response.ok){
                navigate('/')
                window.location.reload()
            } else {
                navigate('/sign-up')
                setErrorMessages(['Invalid credentials. Please check your email and password and try again.'])
            }
         } catch (error) { 
                throw error
         }
    }

    const handleSignUp = () => {
        navigate('/sign-up')
    }

    const handleForgotPasswordClicked = () => {
        navigate('/reset-password')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        document.getElementById('signInButtonNav').click()
    }

    return (
        <div className='bg-white space-y-1 flex flex-col justify-center items-center w-full p-3 rounded-md shadow-md'>
            <h3 className='w-full font-bold hover:underline'>
                Sign-In or Register
            </h3>
            <form className='flex flex-col gap-1 w-full' onSubmit={handleSubmit} id='signInButtonNav'>
                <input 
                    className='w-full border border-primary rounded-md pl-2 outline-primary p-1'
                    placeholder='Email or Phone Number'
                    value={email}
                    onChange={handleEmailChange}
                />
                <input 
                    className='w-full border border-primary rounded-md pl-2 p-1 outline-primary'
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className='flex w-full justify-around space-x-1'>
                    <div className='w-1/2'>
                        <BlueButton
                            content='Sign-In'
                            onClick={handleLogin}
                            id='signInButtonNav'
                        />
                    </div>
                    <div className='w-1/2'>
                        <WhiteButton
                            content='Register'
                            onClick={handleSignUp}
                        />
                    </div>
                </div>
            </form>
            <a onClick={handleForgotPasswordClicked} className='text-[12px] underline'> Forgot Password </a>
        </div>
    )
}


const AccountDropdown = ({open}) => {
    const {login, logout, isLoggedIn} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState()

    useEffect(() =>{
        const fetchUser = async () => {
            const response = await fetchUserInformation()
            if (response.ok){
                const resp = await response.json()
                login()
                setUserInfo(resp)
                return 
            } 
            logout()
            setUserInfo(null)
        }
        fetchUser()
    },[])

    return (
        <div className={`${open ?  '' : 'hidden'} absolute top-[90px] sm:top-[76px] right-3 z-10 w-[280px] text-tertiary`}>
            {isLoggedIn ? 
                <LoggedInComp userInfo={userInfo}/> 
                : 
                <UnauthedComp />
            }
        </div>
    )
}

export default AccountDropdown