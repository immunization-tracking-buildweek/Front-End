// combineReducers
import { combineReducers } from "redux"

//import reducers from all reducer files
import { 
    authUserLoginReducer, 
    authUserRegisterReducer, } from "./auth"
import { 
    authMedRegisterReducer, 
    authMedLoginReducer } from "./authMed"
import { 
    getUserInfoReducer, 
    getPatientInfoReducer, 
    addNewPatientReducer, 
    editPatientReducer, 
    deletePatientReducer, 
    givePermissionReducer, 
    editPermissionReducer,  } from "./patientInfoReducer"
import {
    medGetUserInfoReducer, 
    addImmunizationReducer,
    deleteImmunizationReducer } from "./medProfReducer"
import {
    getPermissionStatusReducer,
    getImmunizationInfoReducer } from "./bothUserTypesReducer"


const rootReducer = combineReducers({
    authUserLoginReducer,
    authUserRegisterReducer,
    authMedRegisterReducer, 
    authMedLoginReducer,
    getUserInfoReducer, 
    getPatientInfoReducer, 
    addNewPatientReducer, 
    editPatientReducer, 
    deletePatientReducer, 
    givePermissionReducer, 
    editPermissionReducer, 
    medGetUserInfoReducer, 
    addImmunizationReducer,
    deleteImmunizationReducer,
    getPermissionStatusReducer,
    getImmunizationInfoReducer
})

export default rootReducer