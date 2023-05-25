import SendIcon from '@mui/icons-material/Send';

const ResetPassword = () => {
  window.scrollTo(0,0)
  return (
    <div className="flex w-full justify-center p-3">
      <div className="w-[1280px] h-full flex flex-col justify-center items-center text-neutralDark py-10">
        <h1 className="text-[30px]">
          Reset Your Password
        </h1>
        <div className="flex flex-col justify-center items-center my-6 bg-white rounded-md border border-primary w-full p-6 ">
          <h2 className="mb-4 sm:w-1/2 text-center">
            In order to change your password, we need to verify your identity. Enter the email address associated with your account.
          </h2>
          <div className="sm:w-1/2 flex flex-row">
            <input className="p-2 w-full border border-primary outline-primary rounded-md"/>
            <button className='p-2 ml-2 rounded-md bg-primary text-white'>
              <SendIcon/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword