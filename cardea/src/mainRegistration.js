// general imports
import React from "react";

//imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    height: "300px",
    width: "300px",
    backgroundColor: "#90BFF6",
    "&:hover": {
      backgroundColor: "#222A41"
    },
    color: "#fff",
    fontSize: "35px",
    fontWeight: "bold"
  },
  buttonMed: {
    margin: theme.spacing(1),
    height: "300px",
    width: "300px",
    backgroundColor: "#3269C4",
      "&:hover": {
        backgroundColor: "#222A41"
      },
    color: "#fff",
    fontSize: "30px",
    fontWeight: "bold"
  },
  input: {
    display: 'none',
  },
}));


// component
export const MainRegistration = (props) => {
  // console.log(props)
  const classes = useStyles();

  return (
    <div className="main-register-container">
      <div>
        <h1>Welcome to Cardea!</h1>
      </div>
      <div className="registration-buttons">
      <Button 
        variant="contained" 
        className={classes.button}
        onClick={() => {
          props.history.push("/patient-register")
        }}
      >
        Register as a patient
      </Button>
      <Button 
        variant="contained" 
        className={classes.buttonMed}
        onClick={() => {
          props.history.push("/medical-professional-register" )
        }}
      >
        Register as a medical professional
      </Button>
      </div>
    </div>
  );
};

//export
export default MainRegistration;
