



    // export function signinApi(username, password) {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers : { 'Content-Type': 'application/json' ,'Accept': 'application/json'},
    //         //body: JSON.stringify({ username, password })
    //     };
    //        return fetch(`${REACT_APP_HOST_URL}/login?userName=lnarayana@italentdigital.com&password=USF3MmUzcjQ=`)
    //        .then(response => response.json())
    //        .then(
    //          data =>{
    //          console.log('text ' + data.response.id)
    //          return data;}
    //        )
    // }


// let requestHandler = new RequestHandler();

// export default requestHandler;

import {getData} from '../utils/requesthandler'

const {REACT_APP_HOST_URL} = process.env;

export function signinApi(username,password){
    return new Promise((resolve,reject)=>{
        getData({url:`${REACT_APP_HOST_URL}/login?userName=${username}&password=${password}`})
        .then((response)=>{
          resolve(handleResponse(response));
        })
        .catch((error)=>{
          reject(error);
        })
      })
  }



export function signout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    console.log(response);
        const data = response;
        console.log("data " + data);

            if (response.status === true ) {
               return response;
            } else{
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            
        

        return data;
}