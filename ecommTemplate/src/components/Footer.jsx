import styles from '../styles'
import { footerInfo, socialMedia } from '../constants'
import {facebook, twitter, instagram, whiteLeaf} from '../assets/images'


const Footer = () => {
  return (
    <section className={`flex justify-center items-center sm:py-6 py-16 px-4 sm:px-10 flex-col ${styles.boxWidth} text-tertiary`}>
        <div className='flex flex-row justify-between items-start w-full pt-10 pb-4'>
            {footerInfo.map((footerColInfo, index) => (
                <div key={index}>
                    <div className='font-semibold'>
                        {footerColInfo.title}
                    </div>
                    <ul>
                        {footerColInfo.links.map((links, index) => (
                            <li className='text-[14px] mt-2' key={index}><a>{links.name}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
            <div className='bg-white rounded-md shadow-md pt-0 p-10 relative bottom-6'>
                <div className='mt-6 font-semibold mb-2'> Subscribe </div>
                <div className='flex flex-row justify-start items-center mb-2'>
                    <input placeholder='Email' className='my-2 rounded-md p-2 pl-4 bg-tertiaryTone-100'/>
                    <div className="ml-1 bg-secondary rounded p-2">
                        <svg 
                        className='min-w-[22px] min-h-[22px]'
                        fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
                <div className='text-[12px] max-w-[250px]'>
                    The Elfy's news letter is only twice monthly and we send special news letter only discounts. We also update you on new products, deals, and expansion cities. 
                </div>

            </div>
        </div>
        <div className='border-t border-tertiary w-full flex justify-between flex-row'>
            <div className='flex justify-start items-center'>
                <img
                    src={whiteLeaf}
                    className='w-[48px] h-[48px] mr-2 cursor-pointer '
                />
                <div className='text-primary font-londrina sm:hidden md:block cursor-pointer'>
                    Blue Elf
                </div>
            </div>
            <div className='font-semibold text-[14px]'>
                <a className='m-3'> Terms </a>
                <a className='m-3'> Privacy </a>
                <a className='m-3'> Cookies </a>
            </div>
            <div className='flex flew-row p-1 text-primary'>
                <img className='m-1 max-w-[40px] max-h-[40px]' src={facebook}/>
                <img className='m-1 max-w-[40px] max-h-[40px]' src={twitter}/>
                <img className='m-1 max-w-[40px] max-h-[40px]' src={instagram}/>
            </div>
        </div>
    </section>
  )
}

export default Footer