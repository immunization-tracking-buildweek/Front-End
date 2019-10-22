// general imports 
import React from "react"
import { Link } from "react-router-dom"

//imports 


// component
export const MainRegistration = () => {
    // console.log(props)

    return (
        <div>
            <h1>Welcome to Cardea!</h1>
            <Link to="/patient-register" className="link-button">Register as a patient</Link>
            <Link to="/medical-professional-register" className="link-button">Register as a medical professional</Link>
        </div>

    )
}

//export 
export default MainRegistration