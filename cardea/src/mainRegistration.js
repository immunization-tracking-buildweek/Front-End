// general imports 
import React from "react"
import { Link } from "react-router-dom"

//imports 


// component
export const MainRegistration = () => {
    // console.log(props)

    return (
        <div className="main-register-container">
            <h1>Welcome to Cardea!</h1>
            <div>
                <Link to="/patient-register" className="link-button">Register as a patient</Link>
            </div>
            <div>
                <Link to="/medical-professional-register" className="link-button">Register as a medical professional</Link>
            </div>
        </div>

    )
}

//export 
export default MainRegistration