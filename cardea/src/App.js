// general imports
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


// import components
import PrivateRoute from "./utils/PrivateRoute"
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
        <Link to = {"/patient-login"} className="link-header">Patient Login</Link> 
        <Link to = {"/medical-professional-login"} className="link-header">Medical Professional Login</Link> 
        <MainRegistration />
        <Switch>
          <PrivateRoute 
            exact path="/patient-dashboard"
            component={PatientDashboard}
          />
          <Route 
            exact path ="/medical-professional-login" 
            render={props => <MedProfLogin {...props} />} 
          />
          <Route 
            exact path="/patient-login" 
            render={ props => <PatientLogin {...props} />} 
          />
          <Route 
            exact path="/patient-register"
            render={ props => <PatientRegister {...props} />}
          />
          <Route 
            exact path="/medical-professional-register"
            render={() => <MedProfRegister />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



// adding this comment