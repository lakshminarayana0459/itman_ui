// class RequestHandler {

    // maximum network hits for each request
    const MAX_NETWORK_HITS = 3;
  
    // export function postData(options={}){
    //   return new Promise((resolve, reject) => {
    //     wrppedFetch = (maxNetworkHits) => {
    //       fetch(options.url, {
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //         body: options.data
    //       })
    //       .then((response) => response.json())
    //       .then((jsonResponse) => {
    //         resolve(jsonResponse);
    //       })
    //       .catch((error) => {
    //         if(error.message == 'Network request failed' && maxNetworkHits > 0){
    //           wrppedFetch(--maxNetworkHits);
    //         }
    //         else{
    //           if(error.message == 'Network request failed'){
    //             // update error message with custom error message
    //             error.message = 'Internet is not available please, check your internet connection';
    //           }
    //           reject(error);
    //         }
    //       })
    //     }
  
    //     wrppedFetch(this.MAX_NETWORK_HITS);
    //   })
    // }
  
   export function  getData(options = {}){
      return new Promise((resolve, reject) => {
  
        // wrppedFetch = (maxNetworkHits) => {
          fetch(options.url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'  
            }
          })
          .then((response) => response.json())
          .then((jsonResponse) => {
            resolve(jsonResponse);
          })
          .catch((error) => {
            if(error.message == 'Network request failed' && MAX_NETWORK_HITS > 0){
             // wrppedFetch(--maxNetworkHits);
            }
            else{
              if(error.message == 'Network request failed'){
                // update error message with custom error message
                error.message = 'Internet is not available please, check your internet connection';
              }
              reject(error);
            }
          })
       // }
  
        // wrppedFetch(this.MAX_NETWORK_HITS);
      })
    }
  
//   }
  
//   let requestHandler = new RequestHandler();
  
//   export default requestHandler
  