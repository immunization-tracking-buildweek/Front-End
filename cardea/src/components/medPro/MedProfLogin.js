import React, { useState } from "react";
import { authMedLogin } from "../../actions"
import { connect } from "react-redux"
// import {withFormik, Form, Field} from "formik";
// import * as Yup from "yup";

const MedProfLogin =( props ) =>{
    const [medProfLogin, setMedProfLogin] = useState({
        "medicEmail": "",
        "medicPassword": ""
    });

    const handleChange = e => {
        setMedProfLogin({
            ...medProfLogin,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        console.log(medProfLogin);
        e.preventDefault();
        props.authMedLogin(medProfLogin, props);
    }


    return (
        <div>
            <form onSubmit={login}>
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
                <button>Login</button>
            </form>
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        medInfo: state.medProfLogin,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    { authMedLogin }
)(MedProfLogin);