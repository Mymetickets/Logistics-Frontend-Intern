import {defineStore} from "pinia"
import { RepositoryFactory} from "../repositories/api/RepositoryFactory"


const authRepo = RepositoryFactory.get('authentication')

export const useAuthenticationStore = defineStore('authentication',  {

    state: ()=> ({
        authenticatedUsers: []
    }),

    actions: {  
        getRegisteredUsers() {
            const resp = authRepo.getRegisteredUser();
            this.authenticatedUsers = resp;
        },

        registerUser(payload) {
            const resp = authRepo.registerUser();
            this.authenticatedUsers.push(payload);
           
        },

        clearAuthenticatedUsers() {
            this.authenticatedUsers = [];
        },

        isAuthenticated(user) {
            return this.authenticatedUsers.some(authUser => authUser.email === user.email && authUser.password === user.password);
        }
    }

})