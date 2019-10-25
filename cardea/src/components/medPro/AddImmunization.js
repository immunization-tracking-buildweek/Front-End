import React, {useState, useEffect} from 'react';
import {connect} from "react-redux"
import axiosWithAuthMed from "../../utils/axiosWithAuthMed"

const AddImmunization = props => {
    //props?
    const [newImmunization, setNewImmunization] = useState({ 
        vaccineName: "",
        vaccineDate: "",
        vaccineLocation: "",
        patientId: 0,
        isCompleted: false
    })

    const ImmunizationChange = e => {
        setNewImmunization({
            ...newImmunization,
            [e.target.name]: e.target.value
        })
    }


    const ImmunizationSubmit = (e) => {
        e.preventDefault();
        
        axiosWithAuthMed()
            .post(`/record/addImmunization`, newImmunization)
            .then(res => {  
                console.log(`immunization form`, res.data)
              })
            .catch(err => {
            console.log(
                `This is the failure console.log in index.js - add_Immunization`,
                err
            )})
            props.history.push("/medical-professional-dashboard") 
        }


    console.log(props.medProfSideInfo);
    //as of now the user will not know what the patient id is (we will need to talk to karen)
    return (
        <div>
            <h1>AddImmunization</h1>
            <form onSubmit={ImmunizationSubmit}>
                <label>
                    Administered
                    <input  
                        type="checkbox"
                        name="isCompleted"
                        value={newImmunization.isCompleted}
                        onChange={(e) => {
                            setNewImmunization({
                                ...newImmunization,
                                [e.target.name]: !newImmunization.isCompleted
                            })}}
                    />
                </label>
                <label>
                    Patient ID:
                    <input
                    type="number"
                    name="patientId"
                    placeholder= "Patient ID"
                    value={newImmunization.patientId}
                    onChange={(e) => {
                        setNewImmunization({
                            ...newImmunization,
                            [e.target.name]: parseInt(e.target.value)
                        })
                    }}
                    />
                </label>
                <label>
                    Vaccine Name:
                    <input
                    type="text"
                    name="vaccineName"
                    placeholder= "Vaccine Name"
                    value={newImmunization.vaccineName}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    Vaccine Date:
                    <input
                    type="text"
                    name="vaccineDate"
                    placeholder= "mm/dd/yyyy"
                    value={newImmunization.vaccineDate}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    Location Vaccinated:
                    <input
                    type="text"
                    name="vaccineLocation"
                    placeholder= "Hospital Name/Location"
                    value={newImmunization.vaccineLocation}
                    onChange={ImmunizationChange}
                    />
                </label>
                <button>Add Immunization</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        medProfSideInfo: state.medProfSideInfo
    }
}
export default connect(
    mapStateToProps,
)(AddImmunization)