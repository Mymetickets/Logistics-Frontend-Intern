import axios from 'axios';
import {
  transportationCategories,
  transportModes,
} from '../../utils/dummy-data';

export const TransportationRepository = {
  getTransportationCategories() {
    //Api endpoint
    return transportationCategories;
  },
  addTransportationCategory(payload) {
    //Api Endpoint
  },

  //transprotation Modes
  getTransportationMode() {
    //Api endpoint
    return transportModes;
  },
  addTransportationMode(payload) {
    //Api Endpoint
  },
};
