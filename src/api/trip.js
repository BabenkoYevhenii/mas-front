import axios from 'axios';
import mainConfig from "../configs/main";

export default {
    getTrip: (tripId) => axios.get(`${mainConfig.apiHost}/trips/${tripId}`).then(res => res.data),
    getTripsByEmployeeId: (employeeId) => axios.get(`${mainConfig.apiHost}/trips/employee/${employeeId}`).then(res => res.data),
    getAllTrips: () => axios.get(`${mainConfig.apiHost}/trips`).then(res => res.data),
}
