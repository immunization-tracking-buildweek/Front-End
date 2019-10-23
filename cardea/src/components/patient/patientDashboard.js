import React, { useEffect } from "react";

// imports 
import axiosWithAuth from "../../utils/axiosWithAuth"

// component
export const PatientDashboard = () => {
    //console.log(props)

    useEffect(() => {
        axiosWithAuth()
            .get(`/user/7`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="header">
                <h1>The PatientDashboard header goes here.</h1>
            </div>
            <div className="body">
                <h2>The PatientDashboard body goes here.</h2>
            </div>
            <div className="footer">
                <h2>The PatientDashboard footer goes here.</h2>
            </div>
        </div>
    )
}

//export
export default PatientDashboard