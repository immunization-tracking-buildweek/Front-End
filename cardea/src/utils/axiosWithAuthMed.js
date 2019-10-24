import axios from "axios"

const axiosWithAuthMed = () => {
    const token = localStorage.getItem('med_token');
    // return an instance of axios
    return axios.create({
        baseURL: "https://immunizationtracker-bw.herokuapp.com/api",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuthMed