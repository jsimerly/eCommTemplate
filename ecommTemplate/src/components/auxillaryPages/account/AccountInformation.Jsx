import EditIcon from '@mui/icons-material/Edit';
import { BlueButton } from "../../utils";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import SaveIcon from '@mui/icons-material/Save';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState, useContext } from "react";
import { fetchResetPassword, fetchUserInformation, updateUserInformation } from '../../../api/fetchUser';
import { convertDateFormat_MMDDYYY_to_YYYYMMDD, convertDateFormat_YYYYMMYDD_to_MDDYY } from './validation';
import AccountValidator from './validation';
import ErrorMessages from '../../utils/ErrorMessages';
import { PhoneNumberInput, DateOfBirthInput, PasswordInput } from './Inputs';
import { ShoppingContext } from '../../../context';
import { useNavigate } from 'react-router-dom';

const AccountInformation = () => {
  const navigate = useNavigate()
  
  const updateAccountValidator = new AccountValidator()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [openNames, setOpenNames] = useState(false)
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [errorMessages_name, setErrorMessages_name] = useState([])


  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [newPassword_1, setNewPassword_1 ] = useState('')
  const [newPassword_2, setNewPassword_2] = useState('')
  const [passwordOpen, setPasswordOpen] = useState('')
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorMessages_account, setErrorMessages_account] = useState([])

  const [dob, setDob] = useState('')
  const [dln, setDln] = useState('')
  const [dateOfBirthError, setDateOfBirthError] = useState(false);
  const [driversLicenseError, setDriverLicenseError] = useState(false);
  const [errorMessages_personal, setErrorMessages_personal] = useState([])

  const [newsletter, setNewsletter] = useState(false)
  const [marketing, setMarketing] = useState(false)

  const {handleNotification} = useContext(ShoppingContext)

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await fetchUserInformation()
      if (response.status === 401){
        navigate('/sign-up')
      }

      const data = await response.json();
        
      if (data.first_name) {setFirstName(data.first_name)}
      if (data.last_name) {setLastName(data.last_name)}

      if (data.email) {setEmail(data.email)}
      if (data.phone_number) {setPhone(data.phone_number)}
  
      if (data.date_of_birth) {
        const dateOfBirth = convertDateFormat_YYYYMMYDD_to_MDDYY(data.date_of_birth)
        setDob(dateOfBirth)
      }
      if (data.drivers_license_id) {setDln(data.drivers_license_id)}

      if(data.prefernce_newsletter){setNewsletter(data.prefernce_newsletter)}
      if (data.prefernce_recieve_emails){setMarketing(data.prefernce_recieve_emails)}

      return data
    }
  
    fetchInfo();
  }, []);

  const handleOpenNamesClick = () => setOpenNames((openNames) => !openNames)

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhone(e.target.value);
  const handlePasswordOpenClick = ()=> setPasswordOpen((passwordOpen) => !passwordOpen)
  const handlePassword_1_Change = (e) => setNewPassword_1(e.target.value)
  const handlePassword_2_Change = (e) => setNewPassword_2(e.target.value)

  const handleDobChange = (e) => setDob(e.target.value);
  const handleDlnChange = (e) => setDln(e.target.value);

  const handleMarketingClick = () => setMarketing((marketing) => !marketing)
  const handleNewsletterClick = () => setNewsletter((newsletter) => !newsletter)

  const handleNameSaveClick = async () => {
    updateAccountValidator.resetErrors()

    updateAccountValidator.validateFirstName(firstName, setFirstNameError)
    updateAccountValidator.validateLastName(lastName, setLastNameError)

    setErrorMessages_name(updateAccountValidator.errors)

    const response = await updateUserInformation({
      first_name : firstName,
      last_name : lastName,      
    },
    'name')

    if (response.ok){
      const data = await response.json()
      setFirstName(data.first_name)
      setLastName(data.last_name)
      setOpenNames(false)
      handleNotification('Your name has been updated.')
    } else {
      // notification there was an error
    }
  }

  const handleAccountUpdateClick = async () => {
    updateAccountValidator.resetErrors()

    updateAccountValidator.validateEmail(email, setEmailError)
    updateAccountValidator.validatePhoneNumber(phone, setPhoneError)
    updateAccountValidator.verifyPasswordsMatch(newPassword_1, newPassword_2)
    updateAccountValidator.validatePassword(newPassword_1, setPasswordError)

    setErrorMessages_account(updateAccountValidator.errors)
    if (updateAccountValidator.errors.length > 0){
      return
    }

    const response = await updateUserInformation({
      email : email,
      phone_number : phone,
      password : newPassword_1, 
    },
    'account')

    if (response.ok){
      const data = await response.json()
      setEmail(data.email)
      setPhone(data.phone_number)
      handleNotification('Your account information has been updated.')
    } else {
      // notification there was an error
    }
  }

  const handlePersonalUpdateClick = async () => {
    updateAccountValidator.resetErrors()

    updateAccountValidator.validateDateOfBirth(dob, setDateOfBirthError)
    // updateAccountValidator.validateDriverLicense(dln, setDriverLicenseError)
    // can update above once we account for the state, different id's per state

    setErrorMessages_personal(updateAccountValidator.errors)
    if (updateAccountValidator.errors.length > 0){
      return
    }

    const response = await updateUserInformation({
      date_of_birth : convertDateFormat_MMDDYYY_to_YYYYMMDD(dob),
      drivers_license_id : dln,      
    },
    'personal')

    if (response.ok){
      const data = await response.json()

      setDob(convertDateFormat_YYYYMMYDD_to_MDDYY(data.date_of_birth))
      setDln(data.drivers_license_id)
      handleNotification('Your personal information has been updated.')
    } else {
      // notification there was an error
    }
  }

  const handlePreferencesUpdateClick = async () => {
    const response = await updateUserInformation({
      prefernce_recieve_emails : marketing,
      prefernce_newsletter : newsletter,      
    },
    'preferences')
    
    if (response.ok){
      const data = await response.json()
      setMarketing(data.prefernce_recieve_emails)
      setNewsletter(data.prefernce_newsletter)
      handleNotification('Your preferences have been updated.')
    } else {
      // notification there was an error
    }
  }

  const handleForgotPassword = async () => {
    const response = await fetchResetPassword(email)
    if (response.ok){
      handleNotification(`An email has been sent to ${email}. From there you will be able to reset your password.`)
    }
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
                          className={`p-2 rounded-md border border-tertiary bg-tertiaryTone-100 outline-tertiary ${firstNameError? 'border-errorRed' : null}`}
                          placeholder='First Name'
                          value={firstName}
                          onChange={handleFirstNameChange}
                        />
                        <input
                          className={`p-2 rounded-md border border-tertiary bg-tertiaryTone-100 outline-tertiary ml-2 ${lastNameError? 'border-errorRed' : null}`}
                          placeholder='Last Name'
                          value={lastName}
                          onChange={handleLastNameChange}
                        />
                      <div 
                        className='ml-2 cursor-pointer hover:scale-110'
                        onClick={handleNameSaveClick}
                      >
                        <SaveIcon sx={{fontSize:20}}/>
                      </div>
                    </div>
                    : 
                    <>
                      <h3 className="text-[30px] font-bold">
                        {firstName} {lastName}
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
                <ErrorMessages errorMessages={errorMessages_name}/>
              </div>

              <div className="px-6 w-full border border-tertiary rounded-md my-2 p-2">
                <h2 className="font-bold">Account Information</h2>
                <div className="ml-4 pt-4">
                  <h3 >Email Address</h3>
                  <div className="relative w-1/2">
                    <input
                      className={`p-2 rounded-md border border-primary w-full text-tertiary outline-primary ${emailError? 'border-errorRed' : null }`}
                      placeholder="Email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="ml-4 py-4">
                  <h3 >Phone Number</h3>
                  <div className="relative w-1/2">
                    <PhoneNumberInput
                      value={phone}
                      onChange={handlePhoneNumberChange}
                      error={phoneError}
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
                      <PasswordInput
                        value={newPassword_1}
                        onChange={handlePassword_1_Change}
                        error={passwordError}
                      />
                    </div>
                  </div>
                  <div className="ml-4 pb-4">
                    <h3 >New Password</h3>
                    <div className="relative w-1/2">
                      <PasswordInput
                          value={newPassword_2}
                          onChange={handlePassword_2_Change}
                          error={passwordError}
                        />
                    </div>
                  </div>
                </div>
                <div className="ml-4 pb-4">
                  <h3 
                    className='hover:underline cursor-pointer font-bold'
                    onClick={handleForgotPassword}
                  >
                    Forgot My Password
                  </h3>
                </div>
              <ErrorMessages errorMessages={errorMessages_account}/>
              <div className="ml-4 w-1/5 mb-2">
                  <BlueButton
                    content='Update'
                    onClick={handleAccountUpdateClick}
                  />
                </div>

          </div>


              <div className="px-6 w-full border border-tertiary rounded-md my-2 p-2">
                <h2 className="font-bold">Personal Information</h2>
                <div className="ml-4 pt-4">
                  <h3 >Date Of Birth</h3>
                  <div className="relative w-1/2">
                    <DateOfBirthInput
                      value={dob}
                      onChange={handleDobChange}
                      error={dateOfBirthError}
                    />
                  </div>
                </div>
                <div className="ml-4 py-4">
                  <h3 >Drivers License ID</h3>
                  <p className="text-[12px]"> We need a Driver License ID to confirm identify for larger purchases.</p>
                  <div className="w-1/2">

                    <input
                      className={`p-2 rounded-md border border-primary w-full text-tertiary outline-primary ${driversLicenseError ? 'border-errorRed' : null}`}
                      placeholder="Driver's License ID"
                      value={dln}
                      onChange={handleDlnChange}
                    />
                  </div>
                  <ErrorMessages errorMessages={errorMessages_personal}/>
                  <div className="w-1/5 mt-4">
                    <BlueButton
                      content='Update'
                      onClick={handlePersonalUpdateClick}
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
                      onClick={handlePreferencesUpdateClick}
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