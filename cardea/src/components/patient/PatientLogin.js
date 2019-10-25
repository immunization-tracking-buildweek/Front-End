import React, { useState } from "react";
import { authUsersLogin } from "../../actions";
import { connect } from "react-redux";

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
    backgroundImage: 'url(https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
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
    backgroundColor: "#90BFF6",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#90BFF6",
      "&:hover": {
        backgroundColor: "#222A41",
      }
  },
  text: {
    color: "#90BFF6"
  }
}));

// patient login
const PatientLogin = props => {
  const classes = useStyles();
  const [patientLogin, setPatientLogin] = useState({
    userEmail: "",
    userPassword: ""
  });

  const handleChange = e => {
    setPatientLogin({
      ...patientLogin,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    console.log(patientLogin);
    e.preventDefault();
    props.authUsersLogin(patientLogin, props);
    console.log(patientLogin);
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
            New Patient Registration
          </Typography>
          <form className={classes.form} noValidate onSubmit={login}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="userEmail"
              autoComplete="email"
              autoFocus
              value={props.userEmail}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="userPassword"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={props.userPassword}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" className={classes.text}/>}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" className={classes.text}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/patient-login" variant="body2" className={classes.text}>
                  {"Have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>

    <div>
      <form onSubmit={login}>
        <input
          type="text"
          name="userEmail"
          value={props.userEmail}
          onChange={handleChange}
          placeholder="User Email"
          label="email"
        />
        <input
          type="text"
          name="userPassword"
          value={props.userPassword}
          onChange={handleChange}
          placeholder="User password"
          label="password"
        />
        <button>Login</button>
      </form>
    </div>

    </Grid>
  );
};

// mapStateToProps
const mapStateToProps = state => {
  return {
    patientInfo: state.patientLogin,
    isLoading: state.isLoading,
    error: state.error
  };
};

//export
export default connect(
  mapStateToProps,
  { authUsersLogin }
)(PatientLogin);
