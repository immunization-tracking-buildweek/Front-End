import React, {useState, useEffect} from 'react';


const AddPatientForm = () => {
    //props?
    const [newPatient, setNewPatient] = useState({ firstName: "", lastName: "", birthDate: ""})

    const PatientChange = e => {
        setNewPatient({})
    }


    const PatientSubmit = e => {
        e.preventDefault();

        setNewPatient({firstName: "", lastName: "", birthDate: ""});
    }

    return (
        <div>
            <h1>AddPatientForm</h1>
            <form onSubmit={PatientSubmit}>
                <label>
                    First Name:
                    <input
                    type="text"
                    name="firstName"
                    placeholder= "First Name"
                    value={newPatient.firstName}
                    onChange={PatientChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                    type="text"
                    name="lastName"
                    placeholder= "Last Name"
                    value={newPatient.lastName}
                    onChange={PatientChange}
                    />
                </label>
                <label>
                    Age:
                    <input
                    type="text"
                    name="age"
                    placeholder= "Age"
                    value={newPatient.age}
                    onChange={PatientChange}
                    />
                </label>
                <label>
                    Gender:
                    <input
                    type="text"
                    name="gender"
                    placeholder= "Gender"
                    value={newPatient.gender}
                    onChange={PatientChange}
                    />
                </label>
                <label>
                    Weight:
                    <input
                    type="text"
                    name="weight"
                    placeholder= "Weight"
                    value={newPatient.weight}
                    onChange={PatientChange}
                    />
                </label>
                <label>
                    Height:
                    <input
                    type="text"
                    name="height"
                    placeholder= "Height"
                    value={newPatient.height}
                    onChange={PatientChange}
                    />
                </label>
                <label>
                    Patient Email:
                    <input
                    type="text"
                    name="patientEmail"
                    placeholder= "Patient Email"
                    value={newPatient.patientEmail}
                    onChange={PatientChange}
                    />
                </label>
                <label>
                    Patient Phone:
                    <input
                    type="text"
                    name="patientPhone"
                    placeholder= "Patient Phone"
                    value={newPatient.patientPhone}
                    onChange={PatientChange}
                    />
                </label>
                
                <button>Add Patient</button>
            </form>
        </div>
    )
}

   

