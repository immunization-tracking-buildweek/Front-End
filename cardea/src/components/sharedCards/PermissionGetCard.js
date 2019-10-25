import React from "react";

//ask Karen about patient ID in return
//will i need to put props.permission anywhere??
//in my checkbox inside of form should my value be props.permission?
//i need to manipulate my input value in my checkbox form in state
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
                <h1>Permission Status:</h1>
                <h2>{props.permission}</h2>

                <form action="#">
                    <input type="checkbox" name="permissionCheck" value="false">Give Permission</input>
                </form>
            </div>

            <div>
            <h1>MedProf Info:</h1>
            <h2>Name: {props.medicFirstName} {props.medicLastName}</h2>
            <h2>MedProf ID: {props.medproId}</h2>
            <h2>MedProf Company/Position: {props.company}/{props.position}</h2>
            <h3>MedProf Email: {props.medicEmail}</h3>
            </div>
        </div>
    )
}
export default PermissionGetCard;