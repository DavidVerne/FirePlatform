import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
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
  Stack
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AWS from 'aws-sdk';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAccessToken } from '../../../../store/actions';
import { connect } from 'react-redux';

const AuthLogin = ({ ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // take user to authorize page
  const navigate = useNavigate();

  // Redux
  const dispatch = useDispatch();

  const handleCognitoLogin = async (e) => {
    e.preventDefault();
    try {
      const lambda = new AWS.Lambda();

      const payload = {
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      };
  
      const params = {
        FunctionName: 'loginUser',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(payload),
      };
  
      const response = await lambda.invoke(params).promise();

      const responseBody = JSON.parse(response.Payload);

      const accessToken = responseBody.accessToken;

      // store email in redux
      dispatch(setAccessToken(accessToken));
  
      if (responseBody.success) {
        console.error('User registration successful:', responseBody.success);
        navigate('/');
      } else {
        console.error('User registration failed:', responseBody.error);
        setSuccessMessage('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const lambda = new AWS.Lambda();

      const payload = {
        username: formData.email,
      };
  
      const params = {
        FunctionName: 'forgotPassword',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(payload),
      };
  
      const response = await lambda.invoke(params).promise();

      const responseBody = JSON.parse(response.Payload);
  
      if (responseBody.success) {
        console.error('Forgot password successful:', responseBody.success);
        navigate('/resetpassword');
      } else {
        console.error('User registration failed:', responseBody.error);
        setSuccessMessage('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex'
            }}
          >
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
            <Divider sx={{ flexGrow: 1 }} orientation="horizontal" />
          </Box>
        </Grid>
        <Grid item xs={12} container alignItems="center" justifyContent="center">
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleCognitoLogin} {...others}>
            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-login">Email Address / Username</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-login"
                type="email"
                name="email"
                value={formData.email}
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e); 
                  handleInputChange(e);
                }}
                label="Email Address / Username"
                inputProps={{}}
                required
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text-email-login">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                name="password"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e); 
                  handleInputChange(e);
                }}
                required
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
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-login">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
              <FormControlLabel
                control={
                  <Checkbox checked={checked} onChange={(event) => setChecked(event.target.checked)} name="checked" color="primary" />
                }
                label="Remember me"
              />
              <Button 
                onClick={handleForgotPassword}
                type="submit"
                color="secondary" 
                // component={Link} 
                // to='/resetpassword/' 
                variant="subtitle1" sx={{
                  textDecoration: 'none',
                  backgroundColor: 'transparent',
                  '&:hover': {
                    textDecoration: 'underline',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                Forgot Password?
              </Button>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button 
                  disableElevation 
                  disabled={values.email === '' || values.password === ''}
                  fullWidth 
                  size="large" 
                  type="submit" 
                  variant="contained" 
                  color="secondary">
                  Sign in
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

export default connect(null, { setAccessToken })(AuthLogin);
