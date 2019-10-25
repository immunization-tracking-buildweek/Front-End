import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth"

const PatientCard = props => {
  const [patientImmunizations, setPatientImmunizations] = useState([])
  const patientId = localStorage.getItem("user_id");

  useEffect(() => {
    axiosWithAuth()
      .get(`/record/${patientId}`)
      .then(res => {
        console.log(res.data)
        setPatientImmunizations(res.data)
      })
      .catch(err => {
        console.log(`This is the get immunization error`, err)
      })
  }, [])

  console.log("This is the patient card", props);
  return (
    <div>
      <div>
        <h1>
          {props.firstName} {props.lastName} {props.isChild}
        </h1>
        <h2>
          {props.age} {props.gender} {props.weight} {props.height}
        </h2>
        <h3>
          {props.patientEmail} {props.patientPhone}
        </h3>
        {patientImmunizations.length && patientImmunizations.map(immunization => {
          return (
            <div>
              <h2>Vaccine Name: {immunization.vaccineName}</h2>
              <h2>Date administered: {immunization.vaccineDate}</h2>
              <h2>Location: {immunization.vaccineLocation}</h2>
              <h2>Administered: {immunization.isCompleted ? "yes" : "no"}</h2>
            </div>
          )
        })}
        <button>Add info button?</button>
        <button>Add Permission Button?</button>
      </div>

      <Link to={`/permission`}></Link>
    </div>
  );
};
export default PatientCard;
