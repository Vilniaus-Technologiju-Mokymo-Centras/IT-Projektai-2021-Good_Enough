import React, { useState }from 'react';
import { useHistory } from"react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
//import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Modal from '@material-ui/core/Modal'
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import Login from '../components/Login';
import axios from 'axios';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Good Enough '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function SignIn() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    
  const history = useHistory();

  const handleLogin =(e) => {
    e.preventDefault();
        let userData = new URLSearchParams();
        userData.append("username", email);
        userData.append("password", password);
        axios
          .post(`http://localhost:8080/login`, userData, {
              headers: { "Content-type": "application/x-www-form-urlencoded" },
          })
          .then((resp) => {
              // resp.data turetu grizti jusu userio info, kuria kolkas isvedam i konsole
              //ja reiktu kazkur issaugot (gal pradiai i localstorage?)
              // (siulau i pasiaiskint pvz. apie Context)
              // authContext.setUser(resp.data);
              console.log(`resp.data`, resp.data)
              history.push("/api/projects");
          })
          .catch((err) => { console.log(`error!!!!!!!!`, err);alert('Neteisingas prisijungimo vardas ir/arba slaptažodis') })
      
  }

  // const [open, setOpen] = React.useState(false);

  //   const handleOpen = () => {
  //   setOpen(true);
  // };

  //   const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Prisijungti
        </Typography>
        <ValidatorForm className={classes.form} onSubmit={handleLogin}>
          <TextValidator
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="El. paštas"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={e => setEmail(e.target.value)}
            value={email}
            validators={['required', 'isEmail']}
            errorMessages={['Privalomas laukas', 'Įveskite el. paštą']}               
          />
          <TextValidator
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Slaptažodis"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            validators={['required', 'matchRegexp:[0-9]','matchRegexp:[A-Z]', 'matchRegexp:[$&+,:;=?@#|<>.^*()%!-]']}
            errorMessages={['Privalomas laukas', 'Neteisingas slaptažodis', 'Neteisingas slaptažodis', 'Neteisingas slaptažodis']}        
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Prisijungti
          </Button>
          {/* <Grid container>
            <Grid item>
              <Link onClick={handleOpen} variant="body2">
                {"Neturite paskytos? Užsiregistruokite"}
                </Link>
                <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                            >
                    <Fade in={open}>
                        <Login/>
              </Fade>
                </Modal>
            </Grid>
          </Grid> */}
        </ValidatorForm>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
      </Container>
      </div>
  );
}
