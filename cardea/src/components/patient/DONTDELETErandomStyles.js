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
                <div className="form">
                    <input
                        type='text'
                        name='userEmail'
                        value={props.userEmail}
                        onChange={handleChange} 
                        label='user email'
                        required
                    />
                    <label for='email' className="label-name">
                        <span className="content-name">User Email</span>
                    </label>
                </div>
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
        patientInfo: state.patientLogin,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { authUsersLogin }
)(PatientLogin);
