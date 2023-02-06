
const ChangeCard = ({title, icon, desc}) => (
    <div className="border w-full m-2 p-4 rounded-md bg-white border-primary">
    <div className="flex flex-row">
        <div className="w-full text-[18px] font-semibold">
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
    <div className="flex flex-row w-full justify-between items-center text-tertiary">
        <ChangeCard 
            title='Update or Cancel an Order' 
            icon='icon'
            desc='Make updates to where, when, and what you ordered'
        />
        <ChangeCard 
            title='Exchange an Item' 
            icon='icon'
            desc="Change your mind? We'll swap it out"
        />
        <ChangeCard 
            title='Contact Support' 
            icon='icon'
            desc="Need a hand with anything? We're happy to help*"
        />
    </div>
  )
}

export default Change