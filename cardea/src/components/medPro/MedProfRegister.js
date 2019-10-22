import React, { useState, useEffect } from "react";
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

// const mapStateToProps = state => {
//     return {

//     }
// }


export default MedProfRegister;