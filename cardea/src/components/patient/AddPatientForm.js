import React, { useState, useEffect } from "react";
import { addNewPatient } from "../../actions";
import { connect } from "react-redux"

const AddPatientForm = ( props ) => {
  //props?
  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  const [newPatient, setNewPatient] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    weight: "",
    height: "",
    patientEmail: "",
    patientPhone: "",
    isChild: false,
    userId: user_id
  });

  

  const PatientChange = e => {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value
    });
  };

  const PatientSubmit = e => {
    e.preventDefault();

    props.addNewPatient(newPatient);
    props.history.push("/patient-dashboard")
  };

  return (
    <div>
      <h1>AddPatientForm</h1>
      <form onSubmit={PatientSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newPatient.firstName}
            onChange={PatientChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newPatient.lastName}
            onChange={PatientChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newPatient.age}
            onChange={(e) => {
              setNewPatient({
                ...newPatient,
                [e.target.name]: parseInt(e.target.value)
              });
            }}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={newPatient.gender}
            onChange={PatientChange}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            placeholder="Weight"
            value={newPatient.weight}
            onChange={PatientChange}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            placeholder="Height"
            value={newPatient.height}
            onChange={PatientChange}
          />
        </label>
        <label>
          Patient Email:
          <input
            type="text"
            name="patientEmail"
            placeholder="Patient Email"
            value={newPatient.patientEmail}
            onChange={PatientChange}
          />
        </label>
        <label>
          Patient Phone:
          <input
            type="text"
            name="patientPhone"
            placeholder="Patient Phone"
            value={newPatient.patientPhone}
            onChange={PatientChange}
          />
        </label>
        <label>
          Is the patient a minor? Check yes
          <input
            type="checkbox"
            name="isChild"
            value={newPatient.isChild}
            onChange={(e) => {
              setNewPatient({
                ...newPatient,
                [e.target.name]: !newPatient.isChild
              });
            }}
          />
        </label>
        <button>Add Patient</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return{
    patientInfo: state.patientInfo,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect (
  mapStateToProps,
  { addNewPatient }
)(AddPatientForm);