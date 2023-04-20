import { not_found_img } from "../../assets/images/blueElf"

const Empty = ({className, message}) => {
  const defaultMessage = 'Oh dear, it seems that there is nothing here!';
  const displayMessage = message || defaultMessage;
  return (
    <div className={`flex justify-center w-full ${className}`}>
        <div className={`flex flex-row justify-center items-center max-w-[400px] p-2`}>
            <div className="w-3/5 opacity-60">
                <img src={not_found_img} className="object-scale-down"/>    
            </div>

            <p className="text-tertiary text-center text-[18px] font-bold opacity-70 mt-2 w-full ml-6 ">{displayMessage}</p>
            
        </div>
    </div>
  )
}

export default Empty