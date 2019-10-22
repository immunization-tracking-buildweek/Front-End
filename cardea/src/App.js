// general imports
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


// import components
import MainRegistration from "./mainRegistration"
import PatientLogin from "./components/patient/PatientLogin"
import MedProfLogin from "./components/medPro/MedProfLogin"
import PatientRegister from "./components/patient/PatientRegister"
import MedProfRegister from "./components/medPro/MedProfRegister"

function App() {
  return (
    <Router> 
      <div className="App">
        <MainRegistration />
        <Route 
          path="/medical-professional-login" 
          render={props => <MedProfLogin {...props} />} 
        />
        <Route 
          path="/patient-login" 
          render={ props => <PatientLogin {...props} />} 
        />
        <Route 
          path="/patient-register"
          render={() => <PatientRegister />}
        />
        <Route 
          path="/medical-professional-register"
          render={() => <MedProfRegister />}
        />
      </div>
    </Router>
  );
}

export default App;



// adding this comment