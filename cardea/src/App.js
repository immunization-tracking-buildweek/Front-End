// general imports
import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


// import components
import MainRegistration from "./mainRegistration"
import PrivateRoute from "./utils/PrivateRoute"
import PatientLogin from "./components/patient/patientLogin"

function App() {
  return (
    <Router> 
      <div className="App">
        <MainRegistration />
        <Switch>
          <PrivateRoute path="/protected" component={PatientLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



// adding this comment