import {useNavigate} from 'react-router-dom'


const HelpCard = ({title, icon, desc, link}) => {
    const navigate = useNavigate()

    return (
    <div 
        className="border w-full p-4 rounded-md bg-white border-primary cursor-pointer group"
        onClick={()=> navigate(link)}
    >
        <div className="flex flex-row">
            <div className="w-full text-[18px] font-semibold group-hover:underline">
                {title}
            </div>
            <div>
                {icon}
            </div>
        </div>
        <div className="text-[14px] mt-2">
            {desc}
        </div>
    </div>
    )
}

export default HelpCard