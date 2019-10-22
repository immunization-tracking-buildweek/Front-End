import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";

const PatientLogin = props => {
    console.log(props)
    const [patientLogin, setPatientLogin] = useState([]);

    const handleChange = e => {
        setPatientLogin()
    }

    const login = e => {
        e.preventDefault();
        
    }

    return (
        <div>
            <form onSubmit={login}>
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

export default PatientLogin;
