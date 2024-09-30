import axios from 'axios';

const API_URL = 'http://localhost:5000';

const registerUser = (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};

const loginUser = (loginData) => {
    return axios.post(`${API_URL}/login`, loginData);
};

const bookAppointment = (appointmentData, token) => {
    return axios.post(`${API_URL}/book-appointment`, appointmentData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const getAppointments = (token) => {
    return axios.get(`${API_URL}/appointments`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

const bedAvaility = () =>{
    return axios.get(`${API_URL}/bed`)
}

export { registerUser, loginUser, bookAppointment, getAppointments,bedAvaility };