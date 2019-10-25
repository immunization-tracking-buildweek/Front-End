import React from "react";
import { Link } from "react-router-dom";

//ask Karen about patient ID in return
const MedProfPatientCard = props => {
  console.log("This is the MedProfPatientCard", props);
  return (
    <div>
        <h2>
          Patient Name: {props.firstName}
          {props.lastName} 
        </h2>
        <h2>
          Patient Age: {props.age} Patient Gender: {props.gender} Patient
          Weight: {props.weight} Patient Height: {props.height}
        </h2>
        <h1>Patient Contact Info:</h1>
        <h3>
          {props.patientEmail} {props.patientPhone}
        </h3>
        <h3>{props.permission}</h3>
        <Link to={`/add-immunization`}>Add immunization</Link>
    </div>
  );
};

export default MedProfPatientCard;
