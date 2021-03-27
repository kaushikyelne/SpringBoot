import axios from 'axios'

const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserService {

    getUsers(){
    //     console.log("*******",axios.get(USERS_REST_API_URL))
    //     console.log("this is from fetch",fetch(USERS_REST_API_URL)
    //     .then(response => response.json())
    //     .then())
    //     return(fetch(USERS_REST_API_URL).then(response => response.json())
    //     .then(data => data.json()))
    
        console.log(axios.get(USERS_REST_API_URL))
        return axios.get(USERS_REST_API_URL)
        
        
    }
}

export default new UserService();