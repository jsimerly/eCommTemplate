
export const isValidDate_MMDDYYYY = (dateString) => {
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

export const isOver18 = (dateString) => {
    const dateParts = dateString.split("-");
    const month = parseInt(dateParts[0], 10);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
    const userDateOfBirth = new Date(year, month - 1, day);
  
    const currentDate = new Date();
    const date18YearsAgo = new Date(currentDate.setFullYear(currentDate.getFullYear() - 18));
  
    return userDateOfBirth <= date18YearsAgo;
};

export const isValidEmail = (emailString) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(emailString);
}


export const validateFirstName = (value, errorSetter) => {
    errorSetter(!value)
    if(!value){
        return('Please fill in the First Name field.')
    }
    return null
}

export const convertDateFormat_MMDDYYY_to_YYYYMMDD = (dateString) => {
    const dateParts = dateString.split("-");
    const month = parseInt(dateParts[0], 10);
    const day = parseInt(dateParts[1], 10);
    const year = parseInt(dateParts[2], 10);
  
    const newDate = new Date(year, month - 1, day);
  
    const formattedDate = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${String(newDate.getDate()).padStart(2, '0')}`;
  
    return formattedDate;
  };

export const convertDateFormat_YYYYMMYDD_to_MDDYY = (dateString) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getUTCDate();
    const year = date.getFullYear();
    return `${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}-${year}`;
  }
export default class AccountValidator {
    constructor() {
      this.errors = [];
    }
  
    #validateField = (fieldName, value, errorSetter) => {
      errorSetter(!value);
      if (!value) {
        this.errors.push(`Please fill in the ${fieldName} field.`);
      }
    };

    #validatePasswordPattern = (password) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
        return passwordPattern.test(password);
    };
  
    validateFirstName = (value, errorSetter) => {
      this.#validateField("First Name", value, errorSetter);
    };
  
    validateLastName = (value, errorSetter) => {
      this.#validateField("Last Name", value, errorSetter);
    };

    validateEmail = (email, errorSetter) => {
        if (!email){
            this.errors.push('Please fill in the Email field.')
            errorSetter(true)
        } else if (!isValidEmail(email)) {
            this.errors.push('Please enter a valid email address.')
            errorSetter(true)
        } else {
            errorSetter(false)
        }
    }

    validatePassword = (password, errorSetter) => {
        if (!password) {
            this.errors.push("Please fill in the Password field.");
            errorSetter(true);
        } else if (!this.#validatePasswordPattern(password)) {
            this.errors.push(
                "Password must contain at least 1 uppercase letter and 1 special character."
            );
            errorSetter(true);
        } else {
            errorSetter(false);
        }
    };

    validateDateOfBirth = (dateOfBirth, errorSetter) => {
        if (!dateOfBirth) {
            errorSetter(true);
            this.errors.push('Please fill in the Date of Birth field.')
        } else if (!isValidDate_MMDDYYYY(dateOfBirth)) {
            errorSetter(true);
            this.errors.push('Invalid date format, please enter your date of birth in MM-DD-YYYY format.')
        } else if (!isOver18(dateOfBirth)) {
            errorSetter(true);
            this.errors.push('You must be at least 18 years old to create an account and order from Blue Elf. This will be verified upon delivery or pick up.')
        } else {
            errorSetter(false);
        }
      }

    validatePhoneNumber = (phoneNumber, errorSetter) => {
        const phoneNumberPattern = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneNumber) {
            this.errors.push('Please fill in the Phone Number field.')
            errorSetter(true)
        } else if (!phoneNumberPattern.test(phoneNumber)) {
            this.errors.push('Invalid phone number, please enter it in 555-555-5555 format.');
            errorSetter(true);
        } else {
            errorSetter(false);
        }
    }

    validateDriverLicense = (driverLicense, errorSetter) => {
        const driverLicensePattern = /^[A-Z]{1,2}\d{2}\s?\d{2}\s?\d{2,4}$/;
        if (!driverLicensePattern.test(driverLicense)) {
            this.errors.push('Invalid driver\'s license, please enter it in the format: AB12 34 56')
            errorSetter(true);
        } else {
            errorSetter(false);
        }
    }



    resetErrors = () => {
        this.errors = []
    }

}


  