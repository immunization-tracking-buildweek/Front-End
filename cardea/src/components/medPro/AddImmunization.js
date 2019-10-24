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
                    MedProf FirstName:
                    <input
                    type="text"
                    name="medProfFirstName"
                    placeholder= "First Name"
                    value={newImmunization.medicFirstName}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    MedProf LastName:
                    <input
                    type="text"
                    name="medProfLastName"
                    placeholder= "Last Name"
                    value={newImmunization.medicLastName}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    MedProf Position:
                    <input
                    type="text"
                    name="medProfPosition"
                    placeholder= "Position"
                    value={newImmunization.position}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    MedProf ID:
                    <input
                    type="text"
                    name="medProfID"
                    placeholder= "Med Prof ID"
                    value={newImmunization.medproId}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    MedProf Company:
                    <input
                    type="text"
                    name="medProfCompany"
                    placeholder= "Company/Hospital Name"
                    value={newImmunization.company}
                    onChange={ImmunizationChange}
                    />
                </label>
                <label>
                    MedProf Email:
                    <input
                    type="text"
                    name="medProfEmail"
                    placeholder= "Med Prof Email"
                    value={newImmunization.medicEmail}
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

export default AddImmunization;