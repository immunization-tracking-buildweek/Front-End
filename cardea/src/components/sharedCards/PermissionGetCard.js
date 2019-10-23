import React from "react";

//ask Karen about patient ID in return
const PermissionGetCard = props =>{
    console.log("This is the PermissionGetCard", props)
    return(
        <div>
            <div>
                <h1>Patient Info:</h1>
                <h2>{props.firstName} {props.lastName}</h2>
                <h2>{props.patientId} {props.isChild}</h2>
                <h3>{props.age} {props.gender} {props.weight} {props.height}</h3>
                <h3>{props.patientEmail} {props.patientPhone}</h3>
            </div>

            <div>
            <h1>MedProf Info:</h1>
            <h2>MedProf ID: {props.medproId}</h2>
            <h2>MedProf Position: {props.position}</h2>
            <h3>MedProf Email: {props.medicEmail}</h3>
            </div>
        </div>
    )
}
export default PermissionGetCard;