import { SERVER_ADDRESS } from "./serverConstants";
import { fetchWrapper, getCookie } from "./cookies";

export async function fetchCreateUser(userData){
    
    const data={
        email : userData.email,
        password: userData.password,
        first_name : userData.firstName,
        last_name : userData.lastName,
        date_of_birth : userData.dateOfBirth,
        phone_number: userData.phoneNumber,
        prefernce_recieve_emails : userData.recieveEmails
    }

    try {
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/account/create-user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN' : getCookie('csrftoken'),
            },
            body: JSON.stringify(data),
        });

        const resp = await response.json()
        return resp

    } catch (error) {
        throw error
    }
}

export async function fetchLoginUser(email, password){
    const userData ={
        email : email,
        password: password,
    }

    try {
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/account/token/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN' : getCookie('csrftoken'),
            },
            body: JSON.stringify(userData),
        })
        
        const resp = await response.json()
        return resp
    } catch (error) {
        throw (error)
    }
}
