import React from "react";
import { Link } from "react-router-dom";

//ask Karen about patient ID in return
const MedProfPatientCard = props => {
  console.log("This is the MedProfPatientCard", props);
  return (
    <div>
      <div>
        <h1>Med Prof Info:</h1>
        <h2>
          Name: {props.medicFirstName} {props.medicLastName}
        </h2>
        <h2>
          MedProfID: {props.medproId} MedProfPosition: {props.position}{" "}
          MedProfEmail: {props.medicEmail}
        </h2>
      </div>

      <div>
        <h1>Patient Info:</h1>
        <h2>
          Patient Id: {props.patientId} Patient Name: {props.firstName}{" "}
          {props.lastName} Minor Status: {props.isChild}
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
        <button>Add info button?</button>
        <button>Add Permission Button?</button>
      </div>

      <Link to={`/add-immunization`}></Link>
    </div>
  );
};

export default MedProfPatientCard;
