import React, { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";

const MedProfRegister =props => {
    console.log(props)
    const [medProfRegister, setMedProfRegister] = useState([]);

    const handleChange = e => {
        setMedProfRegister()
    }

    const register = e => {
        e.preventDefault();

        
    }


    return (
        <div>
            <form onSubmit={register}>
                <input
                    type='text'
                    name='medicEmail'
                    value={props.medicEmail}
                    onChange={handleChange}
                    placeholder='User Email'
                    label='email'
                />

                <input
                    type='text'
                    name='medicPassword'
                    value={props.medicPassword}
                    onChange={handleChange}
                    placeholder='User password'
                    label='password'
                />

                <input
                    type='text'
                    name='company'
                    value={props.company}
                    onChange={handleChange}
                    placeholder='Company'
                    label='password'
                />

                <input
                    type='text'
                    name='position'
                    value={props.position}
                    onChange={handleChange}
                    placeholder='Position'
                    label='password'
                />
                <button>Register</button>
            </form>
            
        </div>
    )
};

// const mapStateToProps = state => {
//     return {

//     }
// }


export default MedProfRegister;