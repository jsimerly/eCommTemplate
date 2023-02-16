import EditIcon from '@mui/icons-material/Edit';
import LoopIcon from '@mui/icons-material/Loop';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const ChangeCard = ({title, icon, desc}) => (
    <div className="border w-full p-4 rounded-md bg-white border-primary cursor-pointer group">
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

const Change = () => {
  return (
    <div>
        <h1 className="text-center text-[36px] text-tertiary mb-2">
            We <span className="text-primary"> Help </span> Make It Easy
        </h1>
        <div className="flex flex-col p-2 space-y-3 sm:space-y-0 sm:flex-row w-full justify-between text-tertiary sm:space-x-3">
            <ChangeCard 
                title='Update or Cancel an Order' 
                icon={<EditIcon/>}
                desc='Make updates to where, when, and what you ordered'
            />
            <ChangeCard 
                title='Exchange an Item' 
                icon={<LoopIcon/>}
                desc="Change your mind? We'll swap it out"
            />
            <ChangeCard 
                title='Contact Support' 
                icon={<HelpCenterIcon/>}
                desc="Need a hand with anything? We're happy to help"
            />
        </div>
    </div>

  )
}

export default Change