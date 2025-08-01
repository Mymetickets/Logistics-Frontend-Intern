import axios from "axios"
import { transportationCategories } from "../../utils/dummy-data"

export const TransportationRepository = {
    getTransportationCategories(){
        //Api endpoint
        return transportationCategories;
    },
    addTransportationCategory(payload){
        //Api Endpoint
    }
}