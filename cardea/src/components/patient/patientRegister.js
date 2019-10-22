import React, { useState } from "react";
import { authUsersRegister } from "../../actions"
import { connect } from "react-redux"
// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";

const PatientRegister = props =>{
    console.log(props)
    const [patientRegister, setPatientRegister] = useState({
        "userEmail": "",
        "userPassword": "",
        "userName": ""
    });

    const handleChange = e => {
        setPatientRegister({
            ...patientRegister,
            [e.target.name]: e.target.value
        })
    }

    const register = e => {
        console.log(patientRegister);
        e.preventDefault();
        props.authUsersRegister(patientRegister);
        props.history.push("/patient-login");
    }

    return (
        <div>
            <form onSubmit={register}>
                <input
                    type='text'
                    name='userEmail'
                    value={props.userEmail}
                    onChange={handleChange}
                    placeholder='User Email'
                    label='email'
                />

                <input
                    type='text'
                    name='userName'
                    value={props.userName}
                    onChange={handleChange}
                    placeholder='Username'
                    label='username'
                />

                <input
                    type='text'
                    name='userPassword'
                    value={props.userPassword}
                    onChange={handleChange}
                    placeholder='User password'
                    label='password'
                />
                <button>Register</button>
            </form>
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        patientInfo: state.patientInfo,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { authUsersRegister }
)(PatientRegister);
