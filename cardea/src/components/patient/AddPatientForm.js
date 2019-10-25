import React, { useState, useEffect } from "react";
import { addNewPatient } from "../../actions";
import { connect } from "react-redux"

// material-ui
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// copyright function
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://elegant-mirzakhani-cc42c3.netlify.com/">
        Cardea App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// useStyles
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1484665754804-74b091211472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  textField: {
    display: "flex",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#90BFF6",
      "&:hover": {
        backgroundColor: "#222A41",
      },
    color: "#fff"
  },
  text: {
    color: "#90BFF6"
  }
}));

const AddPatientForm = ( props ) => {
  // useStyles
  const classes = useStyles();

  const user_id = localStorage.getItem("user_id");
  console.log(user_id);

  const [newPatient, setNewPatient] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    weight: "",
    height: "",
    patientEmail: "",
    patientPhone: "",
    isChild: false,
    userId: user_id
  });

  

  const PatientChange = e => {
    setNewPatient({
      ...newPatient,
      [e.target.name]: e.target.value
    });
  };

  const PatientSubmit = e => {
    e.preventDefault();

    props.addNewPatient(newPatient);
    props.history.push("/patient-dashboard")
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Patient
          </Typography>
          <form className={classes.form} noValidate onSubmit={PatientSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={newPatient.firstName}
              onChange={PatientChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
              autoComplete="current-password"
              value={newPatient.lastName}
              onChange={PatientChange} 
            />
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.textField}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="Age"
                id="lastName"
                autoComplete="current-password"
                value={newPatient.lastName}
                onChange={PatientChange} 
                spacing={6}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="gender"
                label="Gender"
                id="gender"
                autoComplete="gender"
                value={newPatient.gender}
                onChange={PatientChange}
                spacing={6}
              />
            </Grid>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="patientEmail"
              label="Patient Email"
              id="patientEmail"
              autoComplete="patientEmail"
              value={newPatient.patientEmail}
              onChange={PatientChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="patientPhone"
              label="Phone Number"
              id="patientPhone"
              autoComplete="patientPhone"
              value={newPatient.patientPhone}
              onChange={PatientChange}
            />
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.textField}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="weight"
                label="Weight"
                id="weight"
                autoComplete="weight"
                value={newPatient.weight}
                onChange={PatientChange}
                spacing={6}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="height"
                label="Height"
                id="height"
                autoComplete="height"
                value={newPatient.height}
                onChange={PatientChange}
                spacing={6}
              />
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" className={classes.text}/>}
              label="Check if the patient under 18 years old."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Add patient
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>


    <div>
      <h1>AddPatientForm</h1>
      <form onSubmit={PatientSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={newPatient.firstName}
            onChange={PatientChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={newPatient.lastName}
            onChange={PatientChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={newPatient.age}
            onChange={(e) => {
              setNewPatient({
                ...newPatient,
                [e.target.name]: parseInt(e.target.value)
              });
            }}
          />
        </label>
        <label>
          Gender:
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={newPatient.gender}
            onChange={PatientChange}
          />
        </label>
        <label>
          Weight:
          <input
            type="text"
            name="weight"
            placeholder="Weight"
            value={newPatient.weight}
            onChange={PatientChange}
          />
        </label>
        <label>
          Height:
          <input
            type="text"
            name="height"
            placeholder="Height"
            value={newPatient.height}
            onChange={PatientChange}
          />
        </label>
        <label>
          Patient Email:
          <input
            type="text"
            name="patientEmail"
            placeholder="Patient Email"
            value={newPatient.patientEmail}
            onChange={PatientChange}
          />
        </label>
        <label>
          Patient Phone:
          <input
            type="text"
            name="patientPhone"
            placeholder="Patient Phone"
            value={newPatient.patientPhone}
            onChange={PatientChange}
          />
        </label>
        <label>
          Is the patient a minor? Check yes
          <input
            type="checkbox"
            name="isChild"
            value={newPatient.isChild}
            onChange={(e) => {
              setNewPatient({
                ...newPatient,
                [e.target.name]: !newPatient.isChild
              });
            }}
          />
        </label>
        <button>Add Patient</button>
      </form>
    </div>

    </Grid>
  );
};

const mapStateToProps = state => {
  return{
    patientInfo: state.patientInfo,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect (
  mapStateToProps,
  { addNewPatient }
)(AddPatientForm);