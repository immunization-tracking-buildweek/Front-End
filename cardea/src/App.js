// general imports
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


// import components
import MainRegistration from "./mainRegistration"
import PatientLogin from "./components/patient/PatientLogin"
import MedProfLogin from "./components/medPro/MedProfLogin"
import PatientRegister from "./components/patient/PatientRegister"
import MedProfRegister from "./components/medPro/MedProfRegister"
import PatientDashboard from "./components/patient/patientDashboard"

function App() {

  return (
    <Router> 
      <div className="App">
        <Link to = {`/patient-login`} />
        <Link to = {`/medical-professional-login`} />
        <MainRegistration />
        <Route 
          path ="/medical-professional-login" 
          render={props => <MedProfLogin {...props} />} 
        />
        <Route 
          path="/patient-login" 
          render={ props => <PatientLogin {...props} />} 
        />
        <Route 
          path="/patient-register"
          render={ props => <PatientRegister {...props} />}
        />
        <Route 
          path="/medical-professional-register"
          render={() => <MedProfRegister />}
        />
        <Route 
          path="/patient-dashboard"
          render={() => <PatientDashboard />}
        />
      </div>
    </Router>
  );
}

export default App;



// adding this comment