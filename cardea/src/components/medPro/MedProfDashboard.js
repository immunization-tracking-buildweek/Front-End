import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axiosWithAuthMed from "../../utils/axiosWithAuthMed"
// imports
import { medGetUserInfo } from "../../actions";
import MedProfPatientCard from "./MedProfPatientCard";
import Navbar from "../NavAndFooterComps/Navbar"

// component
export const MedProfDashboard = props => {
  setTimeout(() => {
    console.log("Timeout Props", props);
  }, 1000);

  //console.log(props)
  // version 1
  console.log(props);
  const [patientInfo, setPatientInfo] = useState([]);
  console.log(patientInfo);
  const [medProfInfo, setMedProfInfo] = useState({});

  // version 2 --> DATA NOT HERE
  // const [ patientInfo, setPatientInfo ] = useState( medGetUserInfo )
  // console.log(patientInfo)

  const med_id = localStorage.getItem("med_id");
  console.log(med_id);

  useEffect(() => {
    // version 1
    props.medGetUserInfo(med_id);
    setPatientInfo(props.medProfSideInfo);
    console.log("useEffect props medProfDash", props);
    console.log("Props.medProfSideInfo", props.medProfSideInfo);
    console.log("useEffect props medProfDash", patientInfo);
    axiosWithAuthMed()
        .get(`/auth/med/${med_id}`)
        .then(res => {
            setMedProfInfo(res.data);
        })
        .catch(err => {
            console.log(`This is the error from medProfDash`, err)
        })

    // version 2
    // console.log(props.medGetUserInfo(med_id)) --> DATA NOT HERE

    // version 3
    // console.log(props.medGetUserInfo) --> DATA NOT HERE

    // version 4
    // setPatientInfo(...action.payload)

    //version 5 --> DATA NOT HERE
    // setPatientInfo(...props.medGetUserInfo(med_id))
    // console.log(setPatientInfo)
  }, []);

  // if (props.medGetUserInfo) {
  //   return <h2>Loading patients...</h2>;
  // }

  // has the data
  console.log(props.medProfSideInfo);
  // set to a const
  const patientData = props.medProfSideInfo;
  console.log(patientData);
  console.log(typeof patientData);
  setTimeout(() => console.log(typeof patientInfo), 1000)
  // setState

  //are we going to want diff classNames in medProfDashboard return divs than patientDashboard
  return (
    <div>
      <div className="header">
          {medProfInfo.length && <Navbar info={medProfInfo}  />}
        <h1>Welcome to your dashboard.</h1>
      </div>
      <div className="body">
        {patientData.map(item => (
          <MedProfPatientCard
            patientId={item.patientId}
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
      </div>
      <div className="footer">
        <h2>The medProfDashboard footer goes here.</h2>
      </div>
    </div>
  );
};

// mapStateToProps
const mapStateToProps = state => {
  return {
    medProfSideInfo: state.medProfSideInfo,
    isLoading: state.isLoading,
    error: state.error
  };
};

//export
export default connect(
  mapStateToProps,
  { medGetUserInfo }
)(MedProfDashboard);