import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// imports
import { getUserInfo } from "../../actions";
import PatientCard from "./PatientCard";


// component
export const PatientDashboard = props => {
  //console.log(props)
  const [userInfo, setUserInfo] = useState();

  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  // useEffect to render all the information in a dashboard
  // useState for inputs/forms
  useEffect(() => {
    props.getUserInfo(user_id);
    setUserInfo(props.getUserInfo);
    // setUserInfo(...payload)
  }, []);

  // if (props.getUserInfo) {
  //   return <h2>Loading patients...</h2>;
  // }

  return (
    <div>
      <div className="header">
        <h1>The PatientDashboard header goes here.</h1>
      </div>
      <div className="body">
        <h2>The PatientDashboard body goes here.</h2>
        <h3>Patient card here</h3>
        <h3>Add a patient below</h3>
        <Link to={"/add-patient"}>Add a patient</Link>
      </div>
      <div className="footer">
        <h2>The PatientDashboard footer goes here.</h2>
      </div>
    </div>
  );
};

// mapStateToProps
const mapStateToProps = state => {
  return {
    patientSideInfo: state.patientSideInfo,
    isLoading: state.isLoading,
    error: state.error
  };
};

//export
export default connect(
  mapStateToProps,
  { getUserInfo }
)(PatientDashboard);

// {props.error && <p>{props.error}</p>}
//         {userInfo.map(item => (
//           <PatientCard
//             key={item.id}
//             firstName={item.firstName}
//             lastName={item.lastName}
//             isChild={item.isChild}
//             age={item.age}
//             gender={item.gender}
//             weight={item.weight}
//             height={item.height}
//             patientEmail={item.patientEmail}
//             patientPhone={item.patientPhone}
//           />
//         ))}
