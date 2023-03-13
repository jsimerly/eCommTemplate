import { useState } from "react"


export const SwitchComp = ({className, compDict, defComp }) => {
    const [view, setView] = useState(defComp)

    const classProps = (selected) => {
        if (selected==true){
            return 'underline font-semibold text-primary'
        }
        return ''
    }

    const HeaderButton = ({type}) => (
        <button
            className={`${classProps(view===type)} hover:underline`}
            onClick={()=> setView(type)}
        >
            {type}
        </button>
    )

    return (
        <div className={`${className} flex justify-center items-center text-tertiary w-full h-full bg-white rounded-md border border-primary `}>
            <div className='w-full h-full flex flex-col justify-center items-center '>
                <div className="flex flex-row justify-center p-2 items-center space-x-12 text-[18px] w-full">
                    {Object.keys(compDict).map((key, index) => (
                        <div className="justify-center flex" key={'switch_comp_obj_' + index}>
                            <HeaderButton
                                type={key}
                            />
                        </div>
                    ))}
                </div>
                <div className="w-3/4 border border-primary mb-2"/>
                <div className="flex justify-center items-center h-full w-full">
                    {compDict[view]}
                </div>
            </div>
        </div>
    )
}

