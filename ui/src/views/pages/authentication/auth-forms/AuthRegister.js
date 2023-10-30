import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
  useMediaQuery
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUsername } from '../../../../store/actions';
import { useDispatch } from 'react-redux';

// ===========================|| REGISTER ||=========================== //
// Set the AWS region
console.log(`AWS Region: ${AWS.config.region}`);

const AuthRegister = ({ ...others }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);
  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  // success message from lambda
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const showPasswordStrength = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    showPasswordStrength('123456');
  }, []);

  // AWS Cognito Variables
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (name === 'password')
    showPasswordStrength(value);
  };

  // take user to authorize page
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();

  // Signup user in Cognito
  const handleCognitoSignUp = async (e) => {
        e.preventDefault();

        // store email in redux
        dispatch(setUsername(formData.email));

        try {
          const lambda = new AWS.Lambda();
    
          const payload = {
            body: JSON.stringify({
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              password: formData.password,
            }),
          };
      
          const params = {
            FunctionName: 'registerUser',
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify(payload),
          };
      
          const response = await lambda.invoke(params).promise();

          const responseBody = JSON.parse(response.Payload);
      
          if (responseBody.success) {
            console.error('User registration successful:', responseBody.success);
            navigate('/authorize');
          } else {
            console.error('User registration failed:', responseBody.error);
            setSuccessMessage('Signup failed. Please try again.');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
             <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
             <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
         </Grid>
         <Grid item xs={12} container alignItems="center" justifyContent="center">
       </Grid>
       </Grid>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('First Name is required'),
          lastName: Yup.string().required('Last Name is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleCognitoSignUp} {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={Boolean(touched.firstName && errors.firstName)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-firstName-register">First Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-firstName-register"
                type="text"
                value={values.firstName}
                name="firstName"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e); 
                  handleInputChange(e);
                }}
                inputProps={{}}
              />
              {touched.firstName && errors.firstName && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.firstName}
                </FormHelperText>
              )}
            </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={Boolean(touched.lastName && errors.lastName)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-firstName-register">Last Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-lastName-register"
                type="text"
                value={values.lastName}
                name="lastName"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e); 
                  handleInputChange(e);
                }}
                inputProps={{}}
              />
              {touched.lastName && errors.lastName && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.lastName}
                </FormHelperText>
              )}
            </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">Email Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e); 
                  handleInputChange(e);
                }}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                label="Password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e); 
                  handleInputChange(e);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                  }
                  label={
                    <Typography variant="subtitle1">
                      Agree with &nbsp;
                      <Typography variant="subtitle1" component={Link} to="#">
                        Terms & Condition.
                      </Typography>
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}
            <Box sx={{ mt: 2 }}>
              <AnimateButton>
              <Button
                disableElevation
                disabled={values.firstName === '' || values.lastName === '' || values.email === '' || values.password === ''}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
              >
                  Sign up
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
    </>
  );
};

export default connect(null, { setUsername })(AuthRegister);