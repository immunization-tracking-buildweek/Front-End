import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuthMed from "../../utils/axiosWithAuthMed"

//ask Karen about patient ID in return
const MedProfPatientCard = props => {
  console.log("This is the MedProfPatientCard", props);
  const [patientImmunization, setPatientImmunization] = useState([])

  useEffect(() => {
    axiosWithAuthMed()
      .get(`/record/${props.patientId}`)
      .then(res => {
        console.log(res.data)
        setPatientImmunization(res.data)
      })
      .catch(err => {
        console.log(`This is the get immunization error`, err)
      })
  }, [])

  
  return (
    <div>
        <h2>
          Patient Name: {props.firstName}
          {props.lastName} 
        </h2>
        <h2>Patient id: {props.patientId}</h2>
        <h2>
          Patient Age: {props.age} Patient Gender: {props.gender} Patient
          Weight: {props.weight} Patient Height: {props.height}
        </h2>
        <h1>Patient Contact Info:</h1>
        <h3>
          {props.patientEmail} {props.patientPhone}
        </h3>
        {patientImmunization.length && patientImmunization.map(immunization => {
          return (
            <div>
              <h2>Vaccine Name: {immunization.vaccineName}</h2>
              <h2>Date administered: {immunization.vaccineDate}</h2>
              <h2>Location: {immunization.vaccineLocation}</h2>
              <h2>Administered: {immunization.isCompleted ? "yes" : "no"}</h2>
            </div>
          )
        })}
        <Link to={`/add-immunization`}>Add immunization</Link>
    </div>
  );
};

export default MedProfPatientCard;
