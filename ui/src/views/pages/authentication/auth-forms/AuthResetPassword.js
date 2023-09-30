import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import useScriptRef from 'hooks/useScriptRef';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AWS from 'aws-sdk';
import { connect } from 'react-redux';

const AuthResetPassword = ({ username, ...others }) => {
  const theme = useTheme();
  const scriptedRef = useScriptRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [successMessage, setSuccessMessage] = useState(null);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    username: username,
    verificationCode: '',
    password: '',
    confirmPassword: '',
  });

  const [matchedPasswords, setMatchedPasswords] = useState(false); 

  useEffect(() => {
    const { verificationCode, password, confirmPassword } = formData;
    const passwordsMatch = password === confirmPassword && password !== '' && (verificationCode !== '' && verificationCode.length >= 6);
    setMatchedPasswords(passwordsMatch);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCognitoLogin = async (e) => {
    e.preventDefault();
    try {
      const lambda = new AWS.Lambda();

      const payload = {
        verificationCode: formData.verificationCode,
        username: formData.username,
        password: formData.password,
      };
  
      const params = {
        FunctionName: 'resetPassword',
        InvocationType: 'RequestResponse',
        Payload: JSON.stringify(payload),
      };
  
      const response = await lambda.invoke(params).promise();

      const responseBody = JSON.parse(response.Payload);
  
      if (responseBody.success) {
        console.error('User registration successful:', responseBody.success);
        setSuccessMessage('Password successfully changed.');
      } else {
        console.error('User registration failed:', responseBody.error);
        setSuccessMessage('Failed to change password. Please try again.');
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
          password: '',
          confirmPassword: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          verificationCode: Yup.string().min(6, 'Verification code must be at least 6 characters').max(6).required('Cannot be empty'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required')
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
            <FormControl fullWidth error={Boolean(touched.verificationCode && errors.verificationCode)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-verificationCode-register">Verification code</InputLabel>
                <OutlinedInput
                    sx={{
                      fontSize: '20px',
                  }}
                    id="outlined-adornment-verificationCode-register"
                    type="text"
                    value={values.verificationCode}
                    name="verificationCode"
                    onBlur={handleBlur}
                    onChange={(e) => {
                        if (e.target.value.length <= 6) {
                            handleChange(e); 
                            handleInputChange(e);
                          }
                    }}
                    inputProps={{
                        maxLength: 6,
                    }}
                />
                {touched.verificationCode && errors.verificationCode && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                    {errors.verificationCode}
                    </FormHelperText>
                )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
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
                <FormHelperText error id="standard-weight-helper-text-password">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.confirmPassword && errors.confirmPassword)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-confirm-password"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                name="confirmPassword"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e); 
                  handleInputChange(e);
                }}
                required
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle confirm password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                    {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm password"
                inputProps={{}}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <FormHelperText error id="standard-weight-helper-text-confirm-password">
                  {errors.confirmPassword}
                </FormHelperText>
              )}
            </FormControl>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button 
                  disableElevation 
                  disabled={!matchedPasswords}
                  fullWidth 
                  size="large" 
                  type="submit" 
                  variant="contained" 
                  color="secondary">
                  Submit
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

const mapStateToProps = (state) => ({
    username: state.user.username,
  });
  
  export default connect(mapStateToProps)(AuthResetPassword);
