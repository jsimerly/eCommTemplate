import CloseIcon from '@mui/icons-material/Close';

const NotificationBar = ({message, showPopup, setNotification, cta, error}) => {

    return (
        <div className={`popup border fixed ${error ? 'border-errorRed': 'border-primary'}  left-1/2 transform -translate-x-1/2  rounded-md shadow-md p-2 pl-6 z-50 bg-white flex justify-between items-center mt-[86px] min-w-[50%] ${showPopup ? null : 'hidden'}`}>
            <p className='text-tertiary'>{message}</p>
            <div className='flex flex-row items-center justify-center'>
                {cta ? <div className='text-tertiary' onClick={()=>setNotification(false)}>{cta}</div> : null}
                <div 
                    className='ml-2 hover:scale-110 cursor-pointer text-tertiary'
                    onClick={()=>setNotification(false)}
                >
                    <CloseIcon/>
                </div>
            </div>
        </div>
      );
}

export default NotificationBar;
