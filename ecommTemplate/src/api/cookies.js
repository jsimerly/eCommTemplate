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

export async function fetchWrapper(url, options){
    // const deviceCookie = getCookie('device');
    const headers = options && options.headers ? options.headers : {}

    // if (deviceCookie){
    //     headers['Cookie'] = `device=${deviceCookie}`
    // }

    const requestOptions = {
        ...options,
        headers: headers,
        credentials: 'include'
    }
    const response = await fetch(url, requestOptions);
    return response
}
  
  
  
  
  