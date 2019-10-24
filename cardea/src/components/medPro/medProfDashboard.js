import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

// imports
import { medGetUserInfo } from "../../actions";
import MedProfPatientCard from "./MedProfPatientCard";

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
  // setState

  //are we going to want diff classNames in medProfDashboard return divs than patientDashboard
  return (
    <div>
      <div className="header">
        <h1>The medProfDashboard header goes here.</h1>
      </div>
      <div className="body">
        <h2>The medProfDashboard body goes here.</h2>
        <h3>Patient card here</h3>

        {/* {patientInfo.map(item => ( */}
        {patientData.map(item => (
          <MedProfPatientCard
            key={item.id}
            medicFirstName={item.medicFirstName}
            medicLastName={item.medicLastName}
            position={item.position}
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
            permission={item.permission}
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
