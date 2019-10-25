import React, { useState } from "react";
import { authMedRegister } from "../../actions";
import { connect } from "react-redux";
// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";

const MedProfRegister = props => {
  console.log(props);
  const [medProfRegister, setMedProfRegister] = useState({
    medicEmail: "",
    medicPassword: "",
    medicFirstName: "",
    medicLastName: "",
    company: "",
    position: ""
  });

  const handleChange = e => {
    setMedProfRegister({
      ...medProfRegister,
      [e.target.name]: e.target.value
    });
  };

  const register = e => {
    console.log(medProfRegister);
    e.preventDefault();
    props.authMedRegister(medProfRegister);
    props.history.push("/medical-professional-login");
  };

  return (
    <div>
      <form onSubmit={register}>
        <input
          type="text"
          name="medicFirstName"
          value={props.medicFirstName}
          onChange={handleChange}
          placeholder="First name"
          label="First Name"
        />

        <input
          type="text"
          name="medicLastName"
          value={props.medicLastName}
          onChange={handleChange}
          placeholder="Last Name"
          label="Last Name"
        />

        <input
          type="text"
          name="medicEmail"
          value={props.medicEmail}
          onChange={handleChange}
          placeholder="User Email"
          label="email"
        />

        <input
          type="text"
          name="medicPassword"
          value={props.medicPassword}
          onChange={handleChange}
          placeholder="User password"
          label="password"
        />

        <input
          type="text"
          name="company"
          value={props.company}
          onChange={handleChange}
          placeholder="Company"
          label="password"
        />

        <input
          type="text"
          name="position"
          value={props.position}
          onChange={handleChange}
          placeholder="Position"
          label="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    medInfo: state.medInfo,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { authMedRegister }
)(MedProfRegister);
