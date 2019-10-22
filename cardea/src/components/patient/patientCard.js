import React from "react";


const PatientCard = props =>{
    console.log("This is the patient card", props)
    return(
        <div>
            <h1>{props.firstName}" "{props.lastName}</h1>
            <p>Immunization history??</p>
            <h3></h3>
            <button>Add info button?</button>
            <button>Add Permission Button?</button>
        </div>
    )
}
export default PatientCard;