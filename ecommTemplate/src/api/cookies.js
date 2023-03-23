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

function fetchWrapper(url, options){
    return fetch(url, options)
        .then(response => {
            const setCookieHeader = response.headers.get('Set-Cookie');
            if (setCookieHeader){
                const cookieValue = setCookieHeader.split(';')[0].split('=')[1];
                document.cookie = `COOKIE=${cookieValue}`
            }
        })
}
  
  
  
  
  