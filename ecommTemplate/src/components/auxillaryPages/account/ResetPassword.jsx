import SendIcon from '@mui/icons-material/Send';


const ResetPassword = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="w-[1280px] h-full flex flex-col justify-center items-center text-tertiary py-16">
        <h1 className="text-[30px]">
          Reset Your Password
        </h1>
        <div className="flex flex-col justify-center items-center my-6 bg-white rounded-md border border-primary w-full p-6 ">
          <h2 className="mb-4 w-1/2 text-center">
            In order to change your password, we need to verify your identity. Enter the email address associated with your account.
          </h2>
          <div className="w-1/2 flex flex-row">
            <input className="w-full border border-primary outline-primary rounded-md"/>
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