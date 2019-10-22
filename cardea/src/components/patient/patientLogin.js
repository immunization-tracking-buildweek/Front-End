import React, { useState } from "react";
import { authUsersLogin } from "../../actions"
import { connect } from "react-redux"
// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";

const PatientLogin = props => {
    console.log(props)
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
        console.log(props)
        e.preventDefault();
        props.authUsersLogin(patientLogin, props.history)
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='email'
                    value={props.userEmail}
                    onChange={handleChange}
                    placeholder='User Email'
                    label='email'
                />

                <input
                    type='text'
                    name='password'
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

export default PatientLogin;
