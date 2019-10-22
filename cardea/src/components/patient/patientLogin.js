import React, { useState } from "react";
import { authUsersLogin } from "../../actions"
import { connect } from "react-redux"
// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";

const PatientLogin = ( props ) => {
    const [patientLogin, setPatientLogin] = useState({
        "userEmail": "",
        "userPassword": ""
    });

    const handleChange = e => {
        setPatientLogin({
            ...patientLogin,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        console.log(patientLogin);
        e.preventDefault();
        props.authUsersLogin(patientLogin, props);
    }

    return (
        <div>
            <form onSubmit={login}>
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
                    name='userPassword'
                    value={props.userPassword}
                    onChange={handleChange}
                    placeholder='User password'
                    label='password'
                />
                <button>Login</button>
            </form>
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        // version 1
        // patientInfo: state.patientInfo,
        // isLoading: state.isLoading,
        // error: state.error

        // version 2
        patientInfo: state.patientLogin,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { authUsersLogin }
)(PatientLogin);
