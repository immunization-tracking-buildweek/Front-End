import axios from "axios"

const axiosWithAuth = () => {
    const token = localStorage.getItem('user_token' || 'med_token');
    // return an instance of axios
    return axios.create({
        baseURL: "https://immunizationtracker-bw.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth