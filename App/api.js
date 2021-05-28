function callApi(endpoint, token, isJava) {
    
    const headers = new Headers();
    const bearer = `Bearer ${token}`;
  
    headers.append("Authorization", bearer);
  
    const options = {
        method: "GET",
        headers: headers
      };
  
    logMessage('Calling web API...');
    
    fetch(endpoint, options)
      .then(response => response.json())
      .then(response => {

        if (response && isJava) {
          logMessage('Web API responded: ' + JSON.stringify(response.principal.claims, null, 2));
        } else {
            logMessage('Web API responded: ' + JSON.stringify(response));
        }
        
        return response;
      }).catch(error => {
        console.error(error);
      });
  }