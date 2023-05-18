import { useState } from "react"
export const SwitchComp = ({className, compDict, defComp,}) => {
    const [view, setView] = useState(defComp)

    const classProps = (selected) => {
        if (selected==true){
            return 'sm:underline font-semibold text-white bg-primary sm:bg-white sm:text-primary'
        }
        return ''
    }

    const HeaderButton = ({type, index}) => (
        <button 
            className={`justify-center flex py-2 px-1 sm:py-0 border border-primary rounded-md sm:border-none ${classProps(view===type)} min-w-[160px] sm:min-w-0 sm:flex-none flex-1`} 
            key={'switch_comp_obj_' + index}
            onClick={()=> setView(type)}
        >
            <div
                className={`hover:underline`}
                
            >
                {type}
            </div>
        </button>
    )

    return (
    <div className={`${className} flex justify-center text-neutralDark w-full h-full bg-white sm:rounded-md sm:border-primary`}>
        <div className='w-full h-full flex flex-col justify-center items-center '>
            <div className="flex flex-row flex-1 flex-wrap gap-2 justify-center items-center sm:space-x-12 sm:text-[18px] w-full p-2">
                {Object.keys(compDict).map((key, index) => (
                    <HeaderButton
                        type={key}
                        key={index}
                        index={index}
                    />
                ))}
            </div>
            <div className="w-3/4 sm:border border-primary mb-2"/>
            <div className="flex justify-center items-center h-full w-full">
                {compDict[view]}
            </div>
        </div>
    </div>
    )
}

