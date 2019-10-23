import React from "react";


const PatientCard = props =>{
    console.log("This is the patient card", props)
    return(
        <div>
            <h1>
            {props.firstName} {props.lastName} {props.isChild}
            </h1>
            <h2>{props.age} {props.gender} {props.weight} {props.height}
            </h2>
            <h3>{props.patientEmail} {props.patientPhone}</h3>
            <button>Add info button?</button>
            <button>Add Permission Button?</button>
        </div>
    )
}
export default PatientCard;