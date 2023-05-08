import { SERVER_ADDRESS } from "./serverConstants";

export function getCookie(name){
    let cookieValue = null;
    if (document.cookie && document.cookie !== ''){
      const cookieList = document.cookie.split(';')
      for (let i = 0; i < cookieList.length; i++){
        const cookieItem = cookieList[i].trim()
        if (cookieItem.substring(0, name.length + 1) === (name + '=')){
          cookieValue = decodeURIComponent(cookieItem.substring(name.length + 1))
          break
        }
      }
    }
    return cookieValue
}

export function setCookie(name, value, minutes) {
    let expires = "";
    if (minutes) {
      const date = new Date();
      date.setTime(date.getTime() + minutes * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

export function deleteCookie(name){
  document.cookie = `${name}= ; expires = Thu, 01 Jan 1970 00:00:00 GMT`;
}

async function refreshAccessToken(refreshToken) {
    const response = await fetch(`${SERVER_ADDRESS}/api/account/token/refresh/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN' : getCookie('csrftoken'),
        'Authorization': `Bearer ${refreshToken}`
      },
      body: JSON.stringify({ refresh: refreshToken })
    });

    if (!response.ok) {
      throw new Error('Failed to refresh access token');
    }
  
    const data = await response.json();
    setCookie('access_token', data.access, 60);
    return data.access;
}  

export async function fetchWrapper(url, options){

    const headers = options && options.headers ? options.headers : {}
    const access_token = getCookie('access_token')

    if (access_token){
      headers.Authorization = `Bearer ${access_token}`
    } 
    else {
      const refresh_token = getCookie('refresh_token')
      if (refresh_token){
        const access_resp = await refreshAccessToken(refresh_token)
        if (access_resp){
          headers.Authorization = `Bearer ${access_resp}`
        }
      }
    }

    const requestOptions = {
        ...options,
        headers: headers,
        credentials: 'include'
    }

    const response = await fetch(url, requestOptions);
    return response
}
  
  
  
  
  