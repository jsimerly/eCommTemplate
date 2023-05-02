import { useContext, useState } from "react"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { BlueButton } from "../../utils";
import { fetchCreateUser } from "../../../api/fetchUser";
import AccountValidator from "./validation";
import { convertDateFormat_MMDDYYY_to_YYYYMMDD } from "./validation";
import ErrorMessages from "../../utils/ErrorMessages";
import { DateOfBirthInput, PasswordInput, PhoneNumberInput } from "./Inputs";
import { useNavigate } from 'react-router-dom';

import { ShoppingContext } from '../../../context';
import { createAccount } from "../../../../constants/pages/account_constants";

const CreateAccount = () => {
    const navigate = useNavigate()
    const {handleNotification} = useContext(ShoppingContext)
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirthError, setDateOfBirthError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const [recieveEmails, setRecieveEmails] = useState(true)

    const [errorMessages, setErrorMessages] = useState([])
    
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleCheckClick = () => setRecieveEmails((recieveEmails) => !recieveEmails)
    
    let accountValidator = new AccountValidator()

    const handleCreateAccount = async () => {
        accountValidator.resetErrors()

        accountValidator.validateFirstName(firstName, setFirstNameError)
        accountValidator.validateLastName(lastName, setLastNameError)
        accountValidator.validateEmail(email, setEmailError)
        accountValidator.validatePassword(password, setPasswordError)
        accountValidator.validateDateOfBirth(dateOfBirth, setDateOfBirthError)
        accountValidator.validatePhoneNumber(phoneNumber, setPhoneNumberError)

        console.log(accountValidator.errors)

        setErrorMessages(accountValidator.errors)

        if (accountValidator.errors.length > 0){
            return
        }

        try {
            const userData = {
              email,
              password,
              firstName,
              lastName,
              dateOfBirth: convertDateFormat_MMDDYYY_to_YYYYMMDD(dateOfBirth),
              phoneNumber,
              recieveEmails
            };

            const response = await fetchCreateUser(userData)

            if (response.ok){
                navigate('/')
                handleNotification('Your account has been created, Welcome to Blue Elf. Please Remeber to verify your email address.')
                return
            } else if (response.status === 400){
                const resp = await response.json()
                setErrorMessages(resp.email)
            }


        } catch (error) {
            throw error
        }
    }

    return(
        <div className="p-3 sm:w-3/4 flex flex-col justify-center items-center">
            {createAccount.header}
            <div className="flex flex-col justify-center items-center sm:w-2/3 gap-4 py-4">
                <div className="flex flex-row justify-between w-full gap-2">
                    <input
                        className={`w-1/2 border border-primary rounded-md pl-2 outline-primary p-2 ${firstNameError? 'border-errorRed' : null}`}
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                    <input 
                        className={`w-1/2 border border-primary rounded-md pl-2 outline-primary p-2 ${lastNameError ? 'border-errorRed' : null}`}
                        placeholder='Last Name'
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div className="flex flex-col w-full gap-4">
                    <input 
                        className={`border border-primary rounded-md pl-2 outline-primary p-2 w-full ${emailError ? 'border-errorRed' : null}`}
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <div className="relative">
                        <PasswordInput
                            value={password}
                            onChange={handlePasswordChange}
                            error={passwordError}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full gap-2">
                    <div className="w-1/2">
                        <DateOfBirthInput
                            value={dateOfBirth}
                            onChange={handleDateOfBirthChange}
                            error={dateOfBirthError}
                        />
                    </div>
                    <div className="w-1/2">
                        <PhoneNumberInput 
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            error={phoneNumberError}
                        />
                    </div>
                </div>
                <ErrorMessages errorMessages={errorMessages}/>
                <div className="w-full flex flex-row items-center">
                    {recieveEmails ? 
                    <CheckBoxIcon 
                        className="text-primary hover:scale-110 cursor-pointer"
                        onClick={handleCheckClick}
                    /> 
                    : 
                    <CheckBoxOutlineBlankIcon 
                        className="text-primary hover:scale-110 cursor-pointer"
                        onClick={handleCheckClick}
                    />}
                    {createAccount.marketingCheck}
                </div>
                <BlueButton
                    content='Create Account'
                    onClick={handleCreateAccount}
                />
                <div className="text-[12px]">
                    By creating your account, you agree to our <a href='/terms-and-conditions' className="underline">Terms and Conditions</a> and our <a href='/privacy' className="underline">Privacy Policy</a>.
                </div>
            </div>
        </div>
    )
}

export default CreateAccount