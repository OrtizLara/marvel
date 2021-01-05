import axios from 'axios'

const fetch = ( url, method, body ) => {
    const options = {
        url,
        method,
        headers: requestHeaders( ),
        body: method !== "GET" ? JSON.stringify( body ) : null,
    };

    return axios({...options})
        .then( res => {
            if ( res.status >= 200 && res.status < 300 ) {
                return res.data
            } else {
                return Promise.reject({status: res.status, res})
            }
        });
};

function requestHeaders( ) {
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
}

export default fetch