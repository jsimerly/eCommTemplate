import { SERVER_ADDRESS } from "./serverConstants";
import { deleteCookie, fetchWrapper, getCookie, setCookie } from "./cookies";

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

        return response

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
        setCookie('access_token', resp.access, 60);
        setCookie('refresh_token', resp.refresh, 60 * 24 * 30);

        console.log(resp)

        return response

    } catch (error) {
        throw (error)
    }
}

export async function fetchUserInformation(){
    try {
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/account/user-information/`)

        return response

    } catch (error) {
        throw error
    }
}

export function handleLogout(){
    deleteCookie('access_token');
    deleteCookie('refresh_token')

    window.location.reload()
}

export async function updateUserInformation(userData, type){

    try {
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/account/update-user/${type}/`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN' : getCookie('csrftoken'),
            },
            body: JSON.stringify(userData),
        })
        return response
        
    } catch (error) {
        throw error
    }
}

export async function fetchResetPassword(email){
    try {
        const response = await fetchWrapper(`${SERVER_ADDRESS}/api/account/reset-password/`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFTOKEN' : getCookie('csrftoken'),
            },
            body: JSON.stringify({email: email}),
        })
        return response
        
    } catch (error) {
        throw error
    }
}