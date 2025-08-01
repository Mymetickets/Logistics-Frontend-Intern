import { defineStore } from "pinia"
import {RepositoryFactory} from "../repositories/api/RepositoryFactory"

const transportRepo = RepositoryFactory.get('transportation');
export const useTransportationStore = defineStore('transportation', {
    state: ()=>({
        transportationCategories: []
    }),
    actions: {
        getTransportationCategories(){
            const resp = transportRepo.getTransportationCategories();
            this.transportationCategories = resp;
        },
        addTransportationCategory(payload){
            const resp = transportRepo.addTransportationCategory();
            this.transportationCategories.push(payload);
        }
    }
});