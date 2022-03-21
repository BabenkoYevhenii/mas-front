import axios from 'axios';
import mainConfig from "../configs/main";

export default {
    getAllEmployees: () => axios.get(`${mainConfig.apiHost}/employee/`).then(res => res.data),
    getEmployeesByTripId: (tripId) => axios.get(`${mainConfig.apiHost}/employee/trip/${tripId}`).then(res => res.data),
}
