import { easy } from '../../../constants/pages/landingCopy_constant'
import HelpCard from '../auxillaryPages/support/HelpCard'
import ErrorBoundry from '../utils/ErrorBoundry'

const Change = () => {

  return (
    <>
        <h1 className="text-center text-[36px] text-tertiary mb-2">
          {easy.header}
        </h1>
        <div className="flex flex-col p-2 space-y-3 sm:space-y-0 sm:flex-row w-full justify-between text-tertiary sm:space-x-3">
            {easy.cards.map((info, index) => (
                <HelpCard
                title={info.title}
                desc={info.desc}
                icon={info.icon}
                key={index}
                link={info.link}
                />
                ))}
        </div>
        <div className="flex justify-center mt-6">
           <a href='/help' className='hover:underline hover:cursor-pointer text-tertiary'> View Help Page </a>
        </div>
    </>
  )
}

export default Change