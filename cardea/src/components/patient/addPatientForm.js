import React, {useState, useEffect} from 'react';


//props right below addPatient and above useState?
const addPatientForm = () => {
    // const{addPatient, editPatient, patientToEdit} = props;
    const [newPatient, setNewPatient] = useState({firstName: "", lastName: "", birthDate: ""})

    // const patientChange = e => {
    //     setNewPatient({...newPatient, [e.target.name]: e.target.value})
    // }


    const patientSubmit = e => {
        e.preventDefault();
        if(patientToEdit){
            editPatient(newPatient)
    } else {
        addPatient({...newPatient, id: () })
    }
    setNewPatient({firstName: "", lastName: "", birthDate: ""});

    useEffect(() => {
        if (patientToEdit) setNewPatient({...patientToEdit})
    }, [patientToEdit])

    return ()
}
}

