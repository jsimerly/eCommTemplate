import MaskedInput from "react-text-mask";

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
