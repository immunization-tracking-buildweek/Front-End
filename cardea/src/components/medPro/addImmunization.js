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
                    DOI:
                    <input
                    type="text"
                    name="immunizationDate"
                    placeholder= "mm/dd/yyyy"
                    value={newImmunization.CurrentDate}
                    onChange={ImmunizationChange}
                    />
                </label>
                <button>Add Immunization</button>
            </form>
        </div>
    )
}
