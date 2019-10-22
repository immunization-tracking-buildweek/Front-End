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
                    DOB:
                    <input
                    type="text"
                    name="birthDate"
                    placeholder= "mm/dd/yyyy"
                    value={newPatient.birthDate}
                    onChange={PatientChange}
                    />
                </label>
                <button>Add Patient</button>
            </form>
        </div>
    )
}

   

