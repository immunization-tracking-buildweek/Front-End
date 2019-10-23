import React from "react";

//ask Karen about patient ID in return
const MedProfPatientCard = props =>{
    console.log("This is the MedProfPatientCard", props)
    return(
        <div>
            <h1>
            {props.firstName} {props.lastName} {props.isChild}
            </h1>
            <h2>{props.patientId}</h2>
            <h2>{props.age} {props.gender} {props.weight} {props.height}
            </h2>
            <h3>{props.patientEmail} {props.patientPhone}</h3>
            <h3>{props.permission}</h3>
            <button>Add info button?</button>
            <button>Add Permission Button?</button>
        </div>
    )
}
export default MedProfPatientCard;