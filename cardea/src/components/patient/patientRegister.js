import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { authUsersRegister } from "../../actions"
import { connect } from "react-redux"
// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";

const PatientRegister = props =>{
    console.log(props)
    const [patientRegister, setPatientRegister] = useState({
        userEmail: "",
        userPassword: "",
        userName: ""
    });

    const handleChange = e => {
        setPatientRegister({
            ...patientRegister,
            [e.target.name]: e.target.value
        })
    }

    const register = e => {
        e.preventDefault();
        authUsersRegister();
    }


    return (
        <div>
            <form onSubmit={register}>
                <input
                    type='text'
                    name='email'
                    value={props.email}
                    onChange={handleChange}
                    placeholder='User Email'
                    label='email'
                />

                <input
                    type='text'
                    name='username'
                    value={props.username}
                    onChange={handleChange}
                    placeholder='Username'
                    label='username'
                />

                <input
                    type='text'
                    name='password'
                    value={props.password}
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
    { PatientRegister }
)(PatientRegister);
