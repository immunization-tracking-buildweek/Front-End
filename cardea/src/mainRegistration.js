// general imports
import React from "react";

// material-ui
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1571942727525-4654735190e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80)',
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
    backgroundColor: "#3269C4",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#3269C4",
      "&:hover": {
        backgroundColor: "#222A41",
      }
  },
  text: {
    color: "#3269C4"
  },


  button: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#90BFF6",
    width: "100%",
    height: "60px",
    "&:hover": {
      backgroundColor: "#222A41"
    },
    color: "#fff",
    fontWeight: "bold"
  },
  buttonMed: {
    margin: theme.spacing(3, 0, 2),
    width: "100%",
    height: "60px",
    backgroundColor: "#3269C4",
      "&:hover": {
        backgroundColor: "#222A41"
      },
    color: "#fff",
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

    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to Cardea App!
          </Typography>
          
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
        </div>
      </Grid>
    </Grid>

  );
};

//export
export default MainRegistration;
