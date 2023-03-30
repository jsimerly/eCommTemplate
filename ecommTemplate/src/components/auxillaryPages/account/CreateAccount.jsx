import { useState } from "react"
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MaskedInput from "react-text-mask";
import { BlueButton } from "../../utils";
import { fetchCreateUser } from "../../../api/fetchUser";

const isValidDate = (dateString) => {
    const datePattern = /^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
  
    if (!datePattern.test(dateString)) {
      return false;
    }
  
    const dateParts = dateString.split("-");
    const month = parseInt(dateParts[0], 10);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
  
    if (month < 1 || month > 12) {
      return false;
    }
  
    const maxDaysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > maxDaysInMonth) {
      return false;
    }
  
    return true;
  };

  const isOver18 = (dateString) => {
    const dateParts = dateString.split("-");
    const month = parseInt(dateParts[0], 10);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
    const userDateOfBirth = new Date(year, month - 1, day);
  
    const currentDate = new Date();
    const date18YearsAgo = new Date(currentDate.setFullYear(currentDate.getFullYear() - 18));
  
    return userDateOfBirth <= date18YearsAgo;
  };

  const isValidEmail = (emailString) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailString);
  }

  const convertDateFormat = (dateString) => {
    const dateParts = dateString.split("-");
    const month = parseInt(dateParts[0], 10);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
  
    const newDate = new Date(year, month - 1, day);
  
    const formattedDate = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`;
  
    return formattedDate;
  };


const CreateAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [recieveEmails, setRecieveEmails] = useState(true)

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [dateOfBirthError, setDateOfBirthError] = useState(false);
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const [showPassword, setShowPassword] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
      };

    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
    const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
    const handleCheckClick = () => setRecieveEmails((recieveEmails) => !recieveEmails)

    const [errorMessages, setErrorMessages] = useState([])

    const handleCreateAccount = async () => {
        let errors = []

        if(!firstName){
            errors.push('Please fill in the First Name field.')
            setFirstNameError(true)
        } else {
            setFirstNameError(false)
        }

        if(!lastName){
            errors.push('Please fill in the Last Name field.')
            setLastNameError(true)
        } else {
            setLastNameError(false)
        }


        if(!email){
            errors.push('Please fill in the Email field.')
            setEmailError(true)
        } else if (!isValidEmail(email)){
            errors.push('Please enter a valid email address.')
            setEmailError(true)
        } else {
            setEmailError(false)
        }

        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
        if(!password){
            errors.push('Please fill in the Password field.')
            setPasswordError(true)
        } else if (!passwordPattern.test(password)) {
            errors.push(
              "Password must contain at least 1 uppercase letter and 1 special character."
            );
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }

        if(!dateOfBirth){
            errors.push('Please fill in the Date of Birth field.')
            setDateOfBirthError(true)
        } else if (!isValidDate(dateOfBirth)){
            errors.push('Invalid date format, please enter your date of birth in MM-DD-YYYY format.')
            setDateOfBirthError(true)
        } else if (!isOver18(dateOfBirth)) {
            errors.push('You must be at least 18 years old to create and account and order from Blue Elf. This will be verified upon delivery or pick up.');
            setDateOfBirthError(true)
        } else {
            setDateOfBirthError(false)
        }

        const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
        if(!phoneNumber){
            errors.push('Please fill in the Phone Number field.')
            setPhoneNumberError(true)
        } else if (!phoneNumberPattern.test(phoneNumber)) {
            errors.push('Invalid phone number, please enter it in 555-555-5555 format.')
            setPhoneNumberError(true)
        } else {
            setPhoneNumberError(false)
        }
        setErrorMessages(errors)

        if (errors.length > 0){
            return
        }

        try {
            const userData = {
              email,
              password,
              firstName,
              lastName,
              dateOfBirth: convertDateFormat(dateOfBirth),
              phoneNumber,
              recieveEmails
            };

            const response = await fetchCreateUser(userData)

            if (response.email && response.email.length > 0){
                setEmailError(response.password)
                setErrorMessages(response.email)
            }
        } catch (error) {
            throw error
        }
    }

    return(
        <div className="w-3/4 flex flex-col justify-center items-center">
            <h2 className="font-bold text-[30px] text-primary">Experience the Magic of Blue Elf!</h2>
            <h3>Sign up and you’ll be able to manage your account, track orders, save products and get access to special deals. </h3>
            <div className="flex flex-col justify-center items-center w-2/3 gap-4 py-4">
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
                        <input
                            className={`border border-primary rounded-md pl-2 outline-primary p-2 w-full ${passwordError ? 'border-errorRed' : null}`}
                            placeholder="Password" 
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <button 
                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                            onClick={togglePasswordVisibility}
                        >
                            <div>
                            {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </div>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-between w-full gap-2">
                    <MaskedInput
                        mask={[/\d/, /\d/, "-", /\d/, /\d/,  "-", /\d/, /\d/, /\d/, /\d/,]}
                        guide={false}
                        value={dateOfBirth}
                        onChange={handleDateOfBirthChange}
                        className={`w-1/2 border border-primary rounded-md pl-2 outline-primary p-2 ${dateOfBirthError ? 'border-errorRed' : null}`}
                        placeholder="Date of Birth"
                        type="text"
                    />
                    <MaskedInput
                    mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                    guide={false}
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className={`w-1/2 border border-primary rounded-md pl-2 outline-primary p-2 ${phoneNumberError? 'border-errorRed' : null}`}
                    placeholder="Phone Number"
                    type="text"
                    />
                </div>
                {errorMessages.length > 0 && (
                    <div className="text-errorRed text-[14px] text-center">
                        <ul className="list-disc list-inside">
                        {errorMessages.map((error, i) => (
                            <li key={i}>{error.charAt(0).toUpperCase() + error.slice(1)}</li>
                        ))}
                        </ul>
                    </div>
                )}
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
                    <p className="text-[12px] ml-2">I wish to receive latest news and exclusive discounts by receiving Blue Elf marketing emails.</p>
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