import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";


const AddMedicalProf = props => {
  const [medProfs, setMedProfs] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
      .get("/auth/allmed")
      .then(res => {
        setMedProfs(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);

  const patient_id = localStorage.getItem("user_id");

  const addMedProf = (e, med_id) => {
    e.preventDefault();
    const body = {
      permission: true,
      patientId: patient_id,
      medproId: med_id
    };
    axiosWithAuth()
      .post("/perm/add", body)
      .then(res => window.location.reload())
      .catch(err => console.log(err));
  };
  
  return (
    <>
      <h1>ADD MED PROF</h1>
      {medProfs.length &&
        medProfs.map(prof => {
          return (
            <>
              <h2>
                Name: {prof.medicFirstName} {prof.medicLastName}
              </h2>
              <h2>
                Company: {prof.company} Position: {prof.position}
              </h2>
              <h2>Email: {prof.medicEmail}</h2>
              <button onClick={e => {
                  addMedProf(e, prof.id);
                  props.history.push("/medical-professional-dashboard")
                }}>
                Add {prof.medicFirstName} {prof.medicLastName}
              </button>
            </>
          );
        })}
    </>
  );
};

export default AddMedicalProf;