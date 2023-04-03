import CloseIcon from '@mui/icons-material/Close';

const NotificationBar = ({message, showPopup, setNotification}) => {

    return (
        <div className={`popup border fixed border-primary left-1/2 transform -translate-x-1/2  rounded-md shadow-md p-2 pl-6 z-50 bg-white flex justify-between items-center mt-[86px] min-w-[50%] ${showPopup ? null : 'hidden'}`}>
            <p className='text-tertiary'>{message}</p>
            <div 
                className='hover:scale-110 cursor-pointer text-tertiary'
                onClick={()=>setNotification(false)}
            >
                <CloseIcon/>
            </div>
        </div>
      );
}

export default NotificationBar;
