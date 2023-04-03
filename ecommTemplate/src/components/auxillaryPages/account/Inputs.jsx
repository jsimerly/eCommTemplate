import MaskedInput from "react-text-mask";

export const PhoneNumberInput = ({phoneNumber, handlePhoneNumberChange, error}) => (
    <MaskedInput
    mask={[/\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
    guide={false}
    value={phoneNumber}
    onChange={handlePhoneNumberChange}
    className={`w-full border border-primary rounded-md pl-2 outline-primary p-2 ${error? 'border-errorRed' : null}`}
    placeholder="Phone Number"
    type="text"
/>
)

export const DateOfBirthInput = ({dateOfBirth, handleDateOfBirthChange, error}) =>(
    <MaskedInput
        mask={[/\d/, /\d/, "-", /\d/, /\d/,  "-", /\d/, /\d/, /\d/, /\d/,]}
        guide={false}
        value={dateOfBirth}
        onChange={handleDateOfBirthChange}
        className={`w-full border border-primary rounded-md pl-2 outline-primary p-2 ${error ? 'border-errorRed' : null}`}
        placeholder="Date of Birth"
        type="text"
    />
)
