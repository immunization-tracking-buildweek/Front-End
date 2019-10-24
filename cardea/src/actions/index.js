// general imports 
import axiosWithAuth from "../utils/axiosWithAuth"
import axiosWithAuthMed from "../utils/axiosWithAuthMed"

// 1. REGISTRATION AND LOGIN 
// 1.1 PATIENTS REGISTER
// action types for user register
export const USER_REGISTER_START = "USER_REGISTER_START"
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS"
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE"

export const authUsersRegister = ( patientRegister, props ) => dispatch => {
    console.log(patientRegister)
    console.log(props)
    dispatch({ type: USER_REGISTER_START })

    axiosWithAuth()
        .post(`/auth/user-register`, patientRegister )
        .then(res => {
            console.log(`This is the success console.log in index.js - user_register`, res);
            dispatch({ type: USER_REGISTER_SUCCESS });
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - user_register`, err);
            dispatch({ type: USER_REGISTER_FAILURE, payload: err.response });
        })
}

// 1.2 PATIENTS LOGIN
// action types for user login
export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"

export const authUsersLogin = ( patientLogin, props ) => dispatch => {
    dispatch({ type: USER_LOGIN_START })

    axiosWithAuth()
        .post(`/auth/user-login`, patientLogin )
        .then(res => {
            console.log(`This is the login console.log in index.js - user_login`, res);
            dispatch({  type: USER_LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem('user_token', res.data.token )
            localStorage.setItem('user_id', res.data.id )
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - user_login`, err);
            dispatch({ type: USER_LOGIN_FAILURE, payload: err.response })
        })
}

// 1.3 MED REGISTER
// action types for med register
export const MED_REGISTER_START = "MEDIC_REGISTER_START"
export const MED_REGISTER_SUCCESS = "MEDIC_REGISTER_SUCCESS"
export const MED_REGISTER_FAILURE = "MEDIC_REGISTER_FAILURE"

export const authMedRegister = ( medProfRegister, props ) => dispatch=> {
    console.log(medProfRegister)
    console.log(props)
    dispatch({ type: MED_REGISTER_START })

    axiosWithAuth()
        .post(`/auth/med-register`, medProfRegister )
        .then(res => {
            console.log(`This is the success console.log in index.js - med_register`, res);
            dispatch({ type: MED_REGISTER_SUCCESS });
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - user_register`, err);
            dispatch({ type: MED_REGISTER_FAILURE, payload: err.response });
        })
}

// 1.4 MED LOGIN
// action types for med login
export const MED_LOGIN_START = "MED_LOGIN_START"
export const MED_LOGIN_SUCCESS = "MED_LOGIN_SUCCESS"
export const MED_LOGIN_FAILURE = "MED_LOGIN_FAILURE"

export const authMedLogin = ( medProfLogin, props ) => dispatch => {
    dispatch({ type: MED_LOGIN_START })

    axiosWithAuth()
        .post(`/auth/med-login`, medProfLogin )
        .then(res => {
            console.log(`This is the initial console.log in index.js - med_login`, res);
            dispatch({  type: MED_LOGIN_SUCCESS, payload: res.data });
            localStorage.setItem('med_token', res.data.medtoken )
            localStorage.setItem('med_id', res.data.id )
            props.history.push("/medical-professional-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - med_login`, err);
            dispatch({ type: MED_LOGIN_FAILURE, payload: err.response })
        })
}





// 2. PATIENT INFO
// 2.1 DISPLAY PATIENT INFO RELATED TO SPECIFIC USER (GET) (USER ACCESS ONLY)
// action types for display patient - patient side ONLY - user_id && user_token
export const GET_USER_INFO_START = "GET_USER_INFO_START"
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS"
export const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE"

export const getUserInfo = ( user_id, props ) => dispatch => {
    console.log(user_id )
    console.log(props)
    dispatch({ type: GET_USER_INFO_START })

    
    axiosWithAuth()
        .get(`/user/${user_id}` )
        .then(res => {
            console.log(`This is the login console.log in index.js - get_user_info`, res);
            dispatch({  type: GET_USER_INFO_SUCCESS, payload: res.data });
            // do we need this? or will it just do it on the initial render after mapping through all the appropriate cards?
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - get_user_info`, err);
            dispatch({ type: GET_USER_INFO_FAILURE, payload: err.response })
        })
}

// 2.2 DISPLAY SINGLE PATIENT INFO (GET) (USER ACCESS ONLY)
// action types for display patient - patient side ONLY - patient_id NOT USER_ID (child)
export const GET_PATIENT_INFO_START = "GET_PATIENT_INFO_START"
export const GET_PATIENT_INFO_SUCCESS = "GET_PATIENT_INFO_SUCCESS"
export const GET_PATIENT_INFO_FAILURE = "GET_PATIENT_INFO_FAILURE"

export const getPatientInfo = ( props ) => dispatch => {
    dispatch({ type: GET_PATIENT_INFO_START })

    axiosWithAuth()
        .get(`/user/patient/:id` )
        .then(res => {
            console.log(`This is the login console.log in index.js - get_patient_info`, res);
            dispatch({  type: GET_PATIENT_INFO_SUCCESS, payload: res.data });
            // do we need this? or will it just do it on the initial render after mapping through all the appropriate cards?
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - get_patient_info`, err);
            dispatch({ type: GET_PATIENT_INFO_FAILURE, payload: err.response })
        })
}

// 2.3 ADD PATIENT FROM USER ACCOUNT (POST) (USER ACCESS ONLY)
// action types for add patient - patient side ONLY - user_id
export const ADD_NEW_PATIENT_START = "ADD_NEW_PATIENT_START"
export const ADD_NEW_PATIENT_SUCCESS = "ADD_NEW_PATIENT_SUCCESS"
export const ADD_NEW_PATIENT_FAILURE = "ADD_NEW_PATIENT_FAILURE"

export const addNewPatient = ( addNewPatientProps, props ) => dispatch => {
    dispatch({ type: ADD_NEW_PATIENT_START })

    // verify the correct id w/ Karen --> do we need an id??
    axiosWithAuth()
        .post(`/user/addpatient/:id`, addNewPatientProps )
        .then(res => {
            console.log(`This is the login console.log in index.js - add_new_patient`, res);
            dispatch({  type: ADD_NEW_PATIENT_SUCCESS, payload: res.data });
            // do we need this? or will it just do it on the initial render after mapping through all the appropriate cards?
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - add_new_patient`, err);
            dispatch({ type: ADD_NEW_PATIENT_FAILURE, payload: err.response })
        })
}

// 2.4 EDIT PATIENT INFO FROM USER ACCOUNT (PUT) (USER ACCESS ONLY)
// action types for edit patient info - patient side ONLY - patient_id (child)
export const EDIT_PATIENT_START = "EDIT_PATIENT_START"
export const EDIT_PATIENT_SUCCESS = "EDIT_PATIENT_SUCCESS"
export const EDIT_PATIENT_FAILURE = "EDIT_PATIENT_FAILURE"

export const editPatient = ( editPatientProps, props ) => dispatch => {
    dispatch({ type: EDIT_PATIENT_START })

    // verify the correct id w/ Karen --> 7??
    axiosWithAuth()
        .put(`/user/patient/:id`, editPatientProps )
        .then(res => {
            console.log(`This is the login console.log in index.js - edit_patient`, res);
            dispatch({  type: EDIT_PATIENT_SUCCESS, payload: res.data });
            // do we need this? 
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - edit_patient`, err);
            dispatch({ type: EDIT_PATIENT_FAILURE, payload: err.response })
        })
}



// BELOW BELOW ADD ID TO PAYLOAD IN DISPATCH


// 2.5 DELETE PATIENT INFO FROM USER ACCOUNT (DELETE) (USER ACCESS ONLY)
// action types for delete patient info - patient side ONLY - patient_id (child)
export const DELETE_PATIENT_START = "DELETE_PATIENT_START"
export const DELETE_PATIENT_SUCCESS = "DELETE_PATIENT_SUCCESS"
export const DELETE_PATIENT_FAILURE = "DELETE_PATIENT_FAILURE"

export const deletePatient = ( props ) => dispatch => {
    dispatch({ type: DELETE_PATIENT_START })

    // verify the correct id w/ Karen
    axiosWithAuth()
        .delete(`/user/patient/:id` )
        .then(res => {
            console.log(`This is the login console.log in index.js - delete_patient`, res);
            dispatch({  type: DELETE_PATIENT_SUCCESS});
            // do we need this? 
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - delete_patient`, err);
            dispatch({ type: DELETE_PATIENT_FAILURE, payload: err.response })
        })
}

// 2.6 GIVE PERMISSION TO MEDICAL PROFESSIONAL TO ACCESS DATA (POST) (USER ACCESS ONLY)
// action types for give permission - patient side ONLY 
export const GIVE_PERMISSION_START = "GIVE_PERMISSION_START"
export const GIVE_PERMISSION_SUCCESS = "GIVE_PERMISSION_SUCCESS"
export const GIVE_PERMISSION_FAILURE = "GIVE_PERMISSION_FAILURE"

export const givePermission = ( givePermissionProps, props ) => dispatch => {
    dispatch({ type: GIVE_PERMISSION_START })

    axiosWithAuth()
        .post(`/perm/add`, givePermissionProps )
        .then(res => {
            console.log(`This is the login console.log in index.js - give_permission`, res);
            dispatch({  type: GIVE_PERMISSION_SUCCESS, payload: res.data });
            // do we need this? 
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - give_permission`, err);
            dispatch({ type: GIVE_PERMISSION_FAILURE, payload: err.response })
        })
}

// 2.7 EDIT PERMISSION GRANTED TO MEDICAL PROFESSIONAL (PUT) (USER ACCESS ONLY)
// action types for edit permission - patient side ONLY - id === permission_id
export const EDIT_PERMISSION_START = "EDIT_PERMISSION_START"
export const EDIT_PERMISSION_SUCCESS = "EDIT_PERMISSION_SUCCESS"
export const EDIT_PERMISSION_FAILURE = "EDIT_PERMISSION_FAILURE"

export const editPermission = ( editPermissionProps, props ) => dispatch => {
    dispatch({ type: EDIT_PERMISSION_START })

    // verify the correct id w/ Karen
    axiosWithAuth()
        .put(`perm/update/:id`, editPermissionProps )
        .then(res => {
            console.log(`This is the login console.log in index.js - edit_permission`, res);
            dispatch({  type: EDIT_PERMISSION_SUCCESS, payload: res.data });
            // do we need this? 
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - edit_permission`, err);
            dispatch({ type: EDIT_PERMISSION_FAILURE, payload: err.response })
        })
}





// ***    BOTH     *** // 
// 3.4 below, also grants both user types access

// 2.8 DISPLAY LIST OF PERMISSIONS BY PATIENT ON USER SIDE(GET) (BOTH USER AND MEDIC HAVE ACCESS)
// action types for display patient - patient side ONLY - id === patient_id
export const GET_PERMISSION_STATUS_START = "GET_PERMISSION_STATUS_START"
export const GET_PERMISSION_STATUS_SUCCESS = "GET_PERMISSION_STATUS_SUCCESS"
export const GET_PERMISSION_STATUS_FAILURE = "GET_PERMISSION_STATUS_FAILURE"

export const getPermissionStatus = ( props ) => dispatch => {
    dispatch({ type: GET_PERMISSION_STATUS_START })

    // verify the correct id w/ Karen
    axiosWithAuth()
        .get(`perm/update/:id` )
        .then(res => {
            console.log(`This is the login console.log in index.js - get_permission_status`, res);
            dispatch({  type: GET_PERMISSION_STATUS_SUCCESS, payload: res.data });
            // do we need this? need a ternary to push to the correct branch 
            // if( id === "patient_id") ? props.history.push("/patient-dashboard") : props.history.push("/medical-professional-dashboard")
            props.history.push("/patient-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - get_permission_status`, err);
            dispatch({ type: GET_PERMISSION_STATUS_FAILURE, payload: err.response })
        })
}





// 3. PATIENT INFO (MEDICAL PROFESSIONAL SIDE)
// 3.1 DISPLAY PATIENT INFO ON MEDICAL PROFESSIONAL (GET) (MEDIC ACCESS ONLY)
// action types for medical prof display patient info - medic access only - id === medic prof id
export const MED_GET_USER_INFO_START = "MED_GET_USER_INFO_START"
export const MED_GET_USER_INFO_SUCCESS = "MED_GET_USER_INFO_SUCCESS"
export const MED_GET_USER_INFO_FAILURE = "MED_GET_USER_INFO_FAILURE"

export const medGetUserInfo = ( med_id, props ) => dispatch => {
    console.log(med_id)
    console.log(props)
    dispatch({ type: MED_GET_USER_INFO_START })

    // verify the correct id w/ Karen
    axiosWithAuthMed()
        .get(`/perm/${med_id}`)
        .then(res => {
            console.log(`This is the login console.log in index.js - med_get_user_info`, res);
            dispatch({  type: MED_GET_USER_INFO_SUCCESS, payload: res.data });
            // do we need this? or will it just do it on the initial render after mapping through all the appropriate cards?
            props.history.push("/medical-professional-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - med_get_user_info`, err);
            dispatch({ type: MED_GET_USER_INFO_FAILURE, payload: err.response })
        })
}

// 3.2 ADD IMMUNIZATION RECORD FOR PATIENT (POST) (MEDIC ACCESS ONLY)
// action types for addImmunizations - medic access only - NO ID
export const ADD_IMMUNIZATION_START = "ADD_IMMUNIZATION_START"
export const ADD_IMMUNIZATION_SUCCESS = "ADD_IMMUNIZATION_SUCCESS"
export const ADD_IMMUNIZATION_FAILURE = "ADD_IMMUNIZATION_FAILURE"

export const addImmunization = ( addImmunizationProps, props ) => dispatch => {
    dispatch({ type: ADD_IMMUNIZATION_START })

    axiosWithAuth()
        .post(`/record/addImmunization`, addImmunizationProps )
        .then(res => {
            console.log(`This is the initial console.log in index.js - add_Immunization`, res);
            dispatch({ type: ADD_IMMUNIZATION_SUCCESS, payload: res.data })
            props.history.push("/medical-professional-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - add_Immunization`, err);
            dispatch({ type: ADD_IMMUNIZATION_FAILURE, payload: err.response })
        })
}



// BELOW BELOW ADD ID TO PAYLOAD IN DISPATCH


// 3.3 DELETE IMMUNIZATION RECORD FOR PATIENT (DELETE) (MEDIC ACCESS ONLY)
// action types for deleteImmunizations - medic access only - id === immunization record
// ASK KAREN ABOUT THE ID --> "record" or vaccineId ("id")
export const DELETE_IMMUNIZATION_START = "DELETE_IMMUNIZATION_START"
export const DELETE_IMMUNIZATION_SUCCESS = "DELETE_IMMUNIZATION_SUCCESS"
export const DELETE_IMMUNIZATION_FAILURE = "DELETE_IMMUNIZATION_FAILURE"

export const deleteImmunization = ( props ) => dispatch => {
    dispatch({ type: DELETE_IMMUNIZATION_START })

    // verify the correct id w/ Karen
    axiosWithAuth()
        .delete(`/record/vaccine/:id` )
        .then(res => {
            console.log(`This is the initial console.log in index.js - delete_immunization`, res);
            dispatch({ type: DELETE_IMMUNIZATION_SUCCESS })
            props.history.push("/medical-professional-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - delete_immunization`, err);
            dispatch({ type: DELETE_IMMUNIZATION_FAILURE, payload: err.response })
        })
}





// ***     BOTH     *** //
// 2.8 above, also gives access to both user types

// 3.4 GET IMMUNIZATION RECORD BY PATIENT ID (GET) (BOTH USER AND MEDIC HAVE ACCESS)
// action types for the immunization records by patient id
export const GET_IMMUNIZATION_INFO_START = "GET_IMMUNIZATION_INFO_START"
export const GET_IMMUNIZATION_INFO_SUCCESS = "GET_IMMUNIZATION_INFO_SUCCESS"
export const GET_IMMUNIZATION_INFO_FAILURE = "GET_IMMUNIZATION_INFO_FAILURE"

export const getImmunizationInfo = ( props ) => dispatch => {
    dispatch({ type: GET_IMMUNIZATION_INFO_START })

    // verify the correct id w/ Karen
    axiosWithAuth()
        .get(`/record/:id`)
        .then(res => {
            console.log(`This is the login console.log in index.js - get_immunization_info`, res);
            dispatch({  type: GET_IMMUNIZATION_INFO_SUCCESS, payload: res.data });
            // do we need this? need a ternary to push to the correct branch 
            // if( id === "patient_id") ? props.history.push("/patient-dashboard") : props.history.push("/medical-professional-dashboard")
            props.history.push("/medical-professional-dashboard");
        })
        .catch(err => {
            console.log(`This is the failure console.log in index.js - get_immunization_info`, err);
            dispatch({ type: GET_IMMUNIZATION_INFO_FAILURE, payload: err.response })
        })
}




// 4. LOGOUT
// action types for logout
export const LOGOUT = "LOGOUT"

export const logout = ( logoutProps, props ) => dispatch => {
    dispatch({ type: LOGOUT })
    localStorage.removeItem( 'user_token' )
    localStorage.removeItem( 'user_id' )
    localStorage.removeItem( 'med_token' )
    localStorage.removeItem( 'med_id' )
}