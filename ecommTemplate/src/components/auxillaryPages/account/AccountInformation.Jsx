import EditIcon from '@mui/icons-material/Edit';
import { BlueButton } from "../../utils";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SaveIcon from '@mui/icons-material/Save';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { fetchUserInformation } from '../../../api/fetchUser';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getFullYear();
  return `${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}-${year}`;
}

const AccountInformation = () => {
  const navigate = useNavigate()

  const [fisrtName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [openNames, setOpenNames] = useState(false)

  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [newPassword_1, setNewPassword_1 ] = useState('')
  const [newPassword_2, setNewPassword_2] = useState('')
  const [passwordOpen, setPasswordOpen] = useState('')

  const [dob, setDob] = useState('')
  const [dln, setDln] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetchUserInformation()
      const data = await response.json();
        
      if (data.first_name) {setFirstName(data.first_name)}
      if (data.last_name) {setLastName(data.last_name)}

      if (data.email) {setEmail(data.email)}
      if (data.phone_number) {setPhone(data.phone_number)}
  
      if (data.date_of_birth) {
        const dateOfBirth = formatDate(data.date_of_birth)
        setDob(dateOfBirth)
      }
      if (data.drivers_license_id) {setDln(data.drivers_license_id)}
      console.log(data)
      return data
    }
  
    fetchInfo();
  }, []);

  const handleOpenNamesClick = () => setOpenNames((openNames) => !openNames)

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handlePasswordOpenClick = ()=> setPasswordOpen((passwordOpen) => !passwordOpen)
  const handlePassword_1_Change = (e) => setNewPassword_1(e.target.value)
  const handlePassword_2_Change = (e) => setNewPassword_2(e.target.value)

  const handleDobChange = (e) => setDob(e.target.value);
  const handleDlnChange = (e) => setDln(e.target.value);

  const handleMarketingClick = () => setMarketing((marketing) => !marketing)
  const handleNewsletterClick = () => setNewsletter((newsletter) => !newsletter)

  const handleNameSaveClick = () => {

  }

  const handleForgotPassword = () => {

  }

  const handleAccountUpdateClick = () => {

  }

  const handlePersonalUpdateClick = () => {
    
  }

  const handlePreferencesUpdateClick = () => {
    
  }

  return (
    <div className='flex w-full justify-center'>
      <div className='w-[1280px] h-full flex flex-col justify-center items-center text-tertiary'>
        <h1 className='text-[50px] p-6'>
          Your Account
        </h1>
        <div className='w-full bg-white flex flex-row justify-center rounded-md'>
          {/* <div className='w-1/4'>
            This will eventually be a tabs when there are more Account Options
          </div> */}
          <div className='w-3/4 p-6'>
            <h2 className="text-[24px] p-2">
             Manage Your Profile
            </h2>
            <div>
              <div className="bg-tertiaryTone-100 rounded-md p-6 w-full">
                <div className='flex flex-row items-center'>
                  {openNames ? 
                    <div className='flex flex-row w-1/2 items-center mt-1'>
                        <input
                          className='p-2 rounded-md border border-tertiary bg-tertiaryTone-100 outline-tertiary'
                          placeholder='First Name'
                          value={fisrtName}
                          onChange={handleFirstNameChange}
                        />
                        <input
                          className='p-2 ml-2 rounded-md border border-tertiary bg-tertiaryTone-100 outline-tertiary'
                          placeholder='Last Name'
                          value={lastName}
                          onChange={handleLastNameChange}
                        />
                      <div 
                        className='ml-2 cursor-pointer hover:scale-110'
                        onClick={handleOpenNamesClick}
                      >
                        <SaveIcon sx={{fontSize:20}}/>
                      </div>
                    </div>
                    : 
                    <>
                      <h3 className="text-[30px] font-bold">
                        Jacob Simerly
                      </h3> 
                      <div 
                        className='ml-2 cursor-pointer hover:scale-110'
                        onClick={handleOpenNamesClick}
                      >
                        <EditIcon sx={{fontSize:16}}/>
                      </div>
                    </>
                  }

                </div>
                <span>Account Owner</span>
              </div>

              <div className="px-6 w-full border border-tertiary rounded-md my-2 p-2">
                <h2 className="font-bold">Account Information</h2>
                <div className="ml-4 pt-4">
                  <h3 >Email Address</h3>
                  <div className="relative w-1/2">
                    <input
                      className="p-2 rounded-md border border-primary w-full text-tertiary outline-primary"
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="ml-4 py-4">
                  <h3 >Phone Number</h3>
                  <div className="relative w-1/2">
                    <input
                      className="p-2 rounded-md border border-primary w-full text-tertiary outline-primary"
                      placeholder="Phone"
                      value={phone}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </div>
                <div className="ml-4 pb-4">
                  <h3 
                    className='hover:underline cursor-pointer font-bold'
                    onClick={handlePasswordOpenClick}
                  >
                    Update Password
                  </h3>
                </div>
                
                <div className={`${passwordOpen ? null : 'hidden'}`}>
                  <div className="ml-4 pb-4">
                    <h3 >New Password</h3>
                    <div className="relative w-1/2">
                      <input
                        className="p-2 rounded-md border border-primary w-full text-tertiary outline-primary"
                        placeholder="Password"
                        value={newPassword_1}
                        onChange={handlePassword_1_Change}
                      />
                    </div>
                  </div>
                  <div className="ml-4 pb-4">
                    <h3 >New Password</h3>
                    <div className="relative w-1/2">
                      <input
                        className="p-2 rounded-md border border-primary w-full text-tertiary outline-primary"
                        placeholder="Password"
                        value={newPassword_2}
                        onChange={handlePassword_2_Change}
                      />
                    </div>
                  </div>
                </div>
                <div className="ml-4 pb-4">
                  <h3 
                    className='hover:underline cursor-pointer font-bold'
                    onClick={()=> console.log('fetch reset password')}
                  >
                    Forgot My Password
                  </h3>
                </div>
              <div className="ml-4 w-1/5 mb-2">
                  <BlueButton
                    content='Update'
                  />
                </div>

          </div>


              <div className="px-6 w-full border border-tertiary rounded-md my-2 p-2">
                <h2 className="font-bold">Personal Information</h2>
                <div className="ml-4 pt-4">
                  <h3 >Date Of Birth</h3>
                  <div className="relative w-1/2">
                    <input
                      className="p-2 rounded-md border border-primary w-full text-tertiary outline-primary"
                      placeholder="Date of Birth"
                      value={dob}
                      onChange={handleDobChange}
                    />
                  </div>
                </div>
                <div className="ml-4 py-4">
                  <h3 >Drivers License ID</h3>
                  <p className="text-[12px]"> We need a Driver License ID to confirm identify for larger purchases.</p>
                  <div className="relative w-1/2">
                    <input
                      className="p-2 rounded-md border border-primary w-full text-tertiary outline-primary"
                      placeholder="Driver's License ID"
                      value={dln}
                      onChange={handleDlnChange}
                    />
                  </div>
                  <div className="w-1/5 mt-4">
                    <BlueButton
                      content='Update'
                    />
                  </div>
                </div>
              </div>

              <div className="px-6 w-full border border-tertiary rounded-md my-2 p-2">
                <h2 className="font-bold">Preferences</h2>
                <div className="ml-4 py-4">
                  <div className="flex flex-row pb-3">
                    <div className="text-primary cursor-pointer hover:scale-110">
                      {newsletter ? 
                        <CheckBoxIcon 
                          onClick={handleNewsletterClick}
                        />
                        :
                        <CheckBoxOutlineBlankIcon
                          onClick={handleNewsletterClick}
                        />
                      }
                    </div>
                    <p className="pl-2">Recieve Blue Elf's bi-weekly newsletter.</p>
                  </div>
                  <div className="flex flex-row">
                    <div className="text-primary cursor-pointer hover:scale-110">
                        {marketing ? 
                          <CheckBoxIcon 
                            onClick={handleMarketingClick}
                          />
                          :
                          <CheckBoxOutlineBlankIcon
                            onClick={handleMarketingClick}
                          />
                        }
                    </div>
                    <p className="pl-2">Recieve regular marketing and discount emails.</p>
                  </div>
                  <div className="w-1/5 mt-4">
                    <BlueButton
                      content='Update'
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AccountInformation