import axios from "axios"

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    // return an instance of axios
    return axios.create({
        baseURL: "https://immunizationtracker-bw.herokuapp.com/api/",
        headers: {
            Authorization: token
        }
    })
}