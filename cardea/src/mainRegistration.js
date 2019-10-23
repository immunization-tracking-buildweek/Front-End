// general imports 
import React from "react"
import { Link } from "react-router-dom"

//imports 


// component
export const MainRegistration = () => {
    // console.log(props)

    return (
        <div className="main-register-container">
            <div>
                <h1>Welcome to Cardea!</h1>
            </div>
            <div className="registration-buttons">
                <Link to="/patient-register" className="link-button patient">Register as a patient</Link>
                <Link to="/medical-professional-register" className="link-button med">Register as a medical professional</Link>
            </div>
        </div>

    )
}

//export 
export default MainRegistration