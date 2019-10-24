import React, {useState, useEffect} from 'react';


//add props in tomorrow?? (below in permissionForm)
const PermissionForm = () => {
    
    const [newConsent, setNewConsent] = useState({})

    const handleChange = e => {
        setNewConsent({...newConsent, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setNewConsent({}) //what in here?
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    medProf Id:
                    <input 
                        type='text'
                        name='patient'
                        value={newConsent.patient}
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default PermissionForm;