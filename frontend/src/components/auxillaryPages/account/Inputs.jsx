import { useState } from "react";
import MaskedInput from "react-text-mask";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const PhoneNumberInput = ({value, onChange, error}) => (
    <MaskedInput
    mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
    guide={false}
    value={value}
    onChange={onChange}
    className={`w-full border border-primary rounded-md pl-2 outline-primary p-2 ${error? 'border-errorRed' : null}`}
    placeholder="Phone Number"
    type="text"
/>
)

export const DateOfBirthInput = ({value, onChange, error}) =>(
    <MaskedInput
        mask={[/\d/, /\d/, "-", /\d/, /\d/,  "-", /\d/, /\d/, /\d/, /\d/,]}
        guide={false}
        value={value}
        onChange={onChange}
        className={`w-full border border-primary rounded-md pl-2 outline-primary p-2 ${error ? 'border-errorRed' : null}`}
        placeholder="Date of Birth"
        type="text"
    />
)

export const PasswordInput = ({value, onChange, error}) => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => setShowPassword((showPassword) => !showPassword);

    return(
        <div className="relative">
            <input
                className={`border border-primary rounded-md pl-2 outline-primary p-2 w-full ${error ? 'border-errorRed' : null}`}
                placeholder="Password" 
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
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
    )
}
