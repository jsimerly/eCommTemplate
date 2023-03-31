
import { BlueButton, WhiteButton } from '../utils/buttons';
import { useNavigate } from 'react-router-dom';
import { fetchLoginUser, fetchUserInformation,  handleLogout} from '../../api/fetchUser';
import { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

const LoggedInComp = ({userInfo}) => (
    <div className='flex flex=row justify-between pt-2'>
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
)

const UnauthedComp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleLogin = async () => {
        await fetchLoginUser(email, password)
        window.location.reload()
    }

    const handleSignUp = () => {
        navigate('/sign-up')
    }

    return (
        <div className='px-2 space-y-1 flex flex-col justify-center items-center'>
            <h3 className='w-full font-bold hover:underline'>
                Sign-In or Register
            </h3>
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
            <div className='flex w-full justify-around space-x-1 pt-1'>
                <div className='w-1/2'>
                    <BlueButton
                        content='Sign-In'
                        onClick={handleLogin}
                    />
                </div>
                <div className='w-1/2'>
                    <WhiteButton
                        content='Register'
                        onClick={handleSignUp}
                    />
                </div>
            </div>
            <span className='text-[12px] underline'> Forgot Password </span>
        </div>
    )
}


const AccountDropdown = ({open}) => {
    const [userInfo, setUserInfo] = useState()

    useEffect(() =>{
        const fetchUser = async () => {
            const response = await fetchUserInformation()
            if (response.ok){
                const resp = await response.json()
                setUserInfo(resp)
                
                return 
            } 
            setUserInfo(null)
        }
        fetchUser()
    },[])

    return (
        <div className={`${open ?  '' : 'hidden'} absolute top-[76px] -left-6 z-10 bg-white shadow-md rounded-md w-[240px] text-tertiary p-4`}>
            <h3 className='p-2 font-bold'>
                My Account
            </h3>
            <ul className='px-4'>
                <li className='hover:underline cursor-pointer'> Account Details </li>
                <li className='hover:underline cursor-pointer'> Orders </li>
                <li className='hover:underline cursor-pointer'> Favorites </li>
                <li className='hover:underline cursor-pointer'> Preferences </li>
            </ul>
            <div className='border border-primary m-2'/>
            {userInfo ? 
                <LoggedInComp userInfo={userInfo}/> 
                : 
                <UnauthedComp />
            }
        </div>
    )
}

export default AccountDropdown