import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// imports
import { getUserInfo, addNewPatient } from "../../actions";
import PatientCard from "./PatientCard";
import Navbar from "../NavAndFooterComps/Navbar"
import axiosWithAuth from "../../utils/axiosWithAuth"


// component
export const PatientDashboard = props => {
  //console.log(props)
  setTimeout(() => {
    console.log("Timeout Props", props);
  }, 1000);

  const [userInfo, setUserInfo] = useState([]);
  const [navbarInfo, setNavbarInfo] = useState({});

  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  // useEffect to render all the information in a dashboard
  // useState for inputs/forms
  useEffect(() => {
    props.getUserInfo(user_id);
    setUserInfo(props.getUserInfo);
    // setUserInfo(...payload)
    axiosWithAuth()
      .get(`/user/${user_id}`)
      .then(res => {
        console.log(res.data)
        setNavbarInfo(res.data)
      })
      .catch(err => {
        console.log(`This is the error form patientDash`, err)
      })
      console.log(userInfo, navbarInfo)
  }, []);

  console.log(props.getUserInfo);
  console.log(navbarInfo);
  console.log(userInfo);
  // if (props.getUserInfo) {
  //   return <h2>Loading patients...</h2>;
  // }

  console.log(props.patientSideInfo);
  const patientSideData = props.patientSideInfo;
  console.log(patientSideData);
  console.log(typeof patientSideData);
  setTimeout(() => console.log(typeof userInfo), 1000)
  setTimeout(() => console.log(navbarInfo), 1000)


  return (
    <div>
      <div className="header">
        {navbarInfo.length && <Navbar info={navbarInfo}/>}
        <h1>The PatientDashboard header goes here.</h1>
        <button onClick={(e) =>{
          e.preventDefault();
          props.history.push("/add-patient")
        }} >Add patient</button>
      </div>
      <div className="body">
        <h2>The PatientDashboard body goes here.</h2>
        <h3>Patient card here</h3>
        {navbarInfo.length && navbarInfo.map(item => (
          <PatientCard
            firstName={item.firstName}
            lastName={item.lastName}
            isChild={item.isChild}
            age={item.age}
            gender={item.gender}
            weight={item.weight}
            height={item.height}
            patientEmail={item.patientEmail}
            patientPhone={item.patientPhone}
          />
        ))}


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



