import React, {useState, useEffect} from 'react';


const AddImmunization = () => {
    //props?
    const [newImmunization, setNewImmunization] = useState({ MedProfName: "", MedProfLastName: "", CurrentDate: ""})

    const ImmunizationChange = e => {
        setNewImmunization({})
    }


    const ImmunizationSubmit = e => {
        e.preventDefault();

        setNewImmunization({firstName: "", lastName: "", birthDate: ""});
    }

    //as of now the user will not know what the patient id is (we will need to talk to karen)
    return (
        <div>
            <h1>AddImmunization</h1>
            <form onSubmit={ImmunizationSubmit}>
                <label>
                    First Name:
                    <input
                    type="text"
                    name="firstName"
                    placeholder= "First Name"
                    value={newImmunization.MedProfName}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                    type="text"
                    name="lastName"
                    placeholder= "Last Name"
                    value={newImmunization.MedProfLastName}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    Patient ID:
                    <input
                    type="text"
                    name="patientID"
                    placeholder= "Patient ID"
                    value={newImmunization.patientId}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    Vaccine Name:
                    <input
                    type="text"
                    name="immunizationName"
                    placeholder= "Vaccine Name"
                    value={newImmunization.vaccineName}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    Vaccine Date:
                    <input
                    type="text"
                    name="immunizationDate"
                    placeholder= "mm/dd/yyyy"
                    value={newImmunization.vaccineDate}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    Location Vaccinated:
                    <input
                    type="text"
                    name="immunizationLocation"
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

export default AddImmunization