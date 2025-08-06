import  { registeredUser } from "../../utils/dummy-register-data"

export const AuthenticationRepository = {
    getRegisteredUser(){
        //API endpoint 
        return registeredUser;
    },

    registerUser(payload) {
        //API
    }

}


