import styles from '../styles'
import { footerInfo, footerSocialIcons } from './footer_constants'
import { BlueButton } from './utils'
import { main_white } from '/src/assets/images/blueElf'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { fetchMarketingEmailSub } from '../api/fetchUser';
import { useContext } from 'react';
import { ShoppingContext } from '../context';



const Footer = () => {
    const {handleNotification} = useContext(ShoppingContext)
    const [email, setEmail] = useState()
    const [emailError, setEmailError] = useState()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleEmailSubmitted = async () => {
        const response = await fetchMarketingEmailSub(email)
        if (response.status === 201){
            handleNotification('Thank you for subscribing to our emailing list!')
            setEmailError(null)
        } else {
            const resp = await response.json()
            setEmailError(resp.email)
        }
    }

  return (
    <div className='flex justify-center w-full bg-primary mt-6'>
    <div className={`${styles.boxWidth}`}>
    <section className={`flex justify-center items-center sm:py-6 py-16 px-4 sm:px-10 flex-col text-white w-full`}>
        <div className='flex flex-wrap text-center sm:text-start sm:flex flex-row  justify-around sm:justify-between items-start w-full sm:py-10' >
            {footerInfo.map((footerColInfo, index) => (
                <div key={index} className='pr-6 pt-6 sm:p-0'>
                    <div className='text-[20px] font-semibold'>
                        {footerColInfo.title}
                    </div>
                    <ul>
                        {footerColInfo.links.map((link, index) => (
                            <li className='text-[16px] mt-2 hover:underline cursor-pointer' key={index}><a href={link.link}>{link.name}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
            <div className='bg-white rounded-md pt-0 p-10 sm:relative sm:bottom-6  text-tertiary mt-6 sm:mt-0 shadow-md'>
                <div className='mt-6 font-semibold mb-2'> Stay Connected </div>
                <div className='flex flex-row justify-start items-center mb-2'>
                    <input 
                        value={email || ''}
                        onChange={handleEmailChange}
                        placeholder='Email' 
                        className='my-2 rounded-l p-2 pl-4 bg-tertiaryTone-100 outline-none'
                    />
                    <BlueButton
                        className='!rounded-l-none group'
                        onClick={handleEmailSubmitted}
                        content={<ArrowForwardIcon className='group-hover:scale-110'/>}
                    />
                </div>
                {emailError && 
                    <div className='text-errorRed pb-2'>
                        {emailError}
                    </div>
                }
                <div className='text-tertiary text-[12px] max-w-[250px]'>
                    The Blue Elf newsletter is only twice monthly and we send special news letter only discounts. We also update you on new products, deals, and expansion cities. 
                </div>
            </div>
        </div>
        <div className='mt-12 mb-12 sm:mb-0 sm:mt-0 p-2 border-t border-white w-full flex sm:justify-between sm:flex-row flex-col justify-center items-center sm:flex-nowrap'>
            <div className='flex justify-start items-center order-4 sm:order-1'>
                <img
                    src={main_white}
                    className='w-[48px] h-[48px] mr-2 cursor-pointer'
                />
                <div className='text-primary font-londrina cursor-pointer hidden sm:block'>
                    Blue Elf
                </div>
            </div>
            <div className='font-semibold text-[14px] flex sm:flex-row flex-col order-3 sm:order-2'>
                <a href='/terms-and-conditions' className='m-3 cursor-pointer'> Terms </a>
                <a href='/privacy' className='m-3 cursor-pointer'> Privacy </a>
                <a href='/cookies' className='m-3 cursor-pointer'> Cookies </a>
            </div>
            <div className='flex flew-row p-1 text-white order-2 sm:order-3'>
                {footerSocialIcons.map((iconInfo, index) => (
                    <BlueButton
                        key={'socialButton_'+index}
                        content={iconInfo.icon}
                        className='hover:scale-110'
                    />
                ))}

            </div>
        </div>
    </section>
        </div>
    </div>
  )
}

export default Footer