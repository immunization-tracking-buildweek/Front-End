// general imports
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


// import components
import MedPrivateRoute from "./utils/MedPrivateRoute"
import UserPrivateRoute from "./utils/UserPrivateRoute"
import MainRegistration from "./mainRegistration"
import PatientLogin from "./components/patient/PatientLogin"
import MedProfLogin from "./components/medPro/MedProfLogin"
import PatientRegister from "./components/patient/PatientRegister"
import MedProfRegister from "./components/medPro/MedProfRegister"
import PatientDashboard from "./components/patient/patientDashboard"
import MedProfDashboard from './components/medPro/medProfDashboard';

//imports zack added in just now (4:50 pm CST on 10/23)
import AddImmunization from "./components/medPro/addImmunization";
import AddPatientForm from "./components/patient/AddPatientForm";
import PermissionForm from "./components/patient/PermissionForm";



function App() {

  return (
    <Router> 
      <div className="App">
        <Link to = {"/patient-login"} className="link-header">Patient Login</Link> 
        <Link to = {"/medical-professional-login"} className="link-header">Medical Professional Login</Link> 
        <MainRegistration />
        <Switch>
          <UserPrivateRoute 
            exact path="/patient-dashboard"
            component={PatientDashboard}
          />
          <MedPrivateRoute 
            exact path="/medical-professional-dashboard"
            component={MedProfDashboard}
          />
          <Route 
            exact path="/patient-register"
            render={ props => <PatientRegister {...props} />}
          />
          <Route 
            exact path="/patient-login" 
            render={ props => <PatientLogin {...props} />} 
          />
          <Route 
            exact path="/medical-professional-register"
            render={props => <MedProfRegister {...props} />}
          />
          <Route 
            exact path ="/medical-professional-login" 
            render={props => <MedProfLogin {...props} />} 
          />
          <Route 
            exact path ="/permission" 
            render={props => <PermissionForm {...props} />} 
          />
          <Route 
            exact path ="/add-patient" 
            render={props => <AddPatientForm {...props} />} 
          />
          <Route 
            exact path ="/add-immunization" 
            render={props => <AddImmunization {...props} />} 
          />

        </Switch>
      </div>
    </Router>
  );
}

export default App;



// adding this comment