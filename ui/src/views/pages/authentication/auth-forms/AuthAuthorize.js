import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  useMediaQuery
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import AWS from 'aws-sdk';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// ===========================|| AUTHORIZE ||=========================== //

const AuthAuthorize = ({ username, ...others }) => {

  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  // success message from lambda
  const [successMessage, setSuccessMessage] = useState(null);

  // AWS Cognito Variables
  const [formData, setFormData] = useState({
    username: username,
    verificationCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Authorize user in Cognito
  const handleAuthorization = async (e) => {
    e.preventDefault();
  
    const lambda = new AWS.Lambda();
    const lambdaFunctionName = 'authorizeUser'; 
    const params = {
      FunctionName: lambdaFunctionName,
      InvocationType: 'RequestResponse', 
      Payload: JSON.stringify({  
        username: formData.username,      
        verificationCode: formData.verificationCode 
      }),
    };
  
    try {
      // Invoke the Lambda function
      const response = await lambda.invoke(params).promise();
      
      // Handle the Lambda function response here
      const responseBody = JSON.parse(response.Payload);
  
      // Additional handling based on the Lambda response...
      if (responseBody.success) {
        // Set the success message
        setSuccessMessage(
          <>
            Authorization successful. You can now{' '}
            <Link to="/login">log in</Link>.
          </>
        );
      } else {
        // Handle other cases or display an error message
        setSuccessMessage('Authorization failed. Please request a new verification code.');
      }
    } catch (error) {
      console.error('Error invoking Lambda:', error);
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
          verificationCode: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          verificationCode: Yup.string().min(6, 'Verification code must be at least 6 characters').max(6).required('Cannot be empty')
        })}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleAuthorization} {...others}>
            <Grid container spacing={matchDownSM ? 0 : 2}>
            <Grid item xs={12} sm={12}>
                <FormControl fullWidth error={Boolean(touched.verificationCode && errors.verificationCode)} sx={{ ...theme.typography.customInput }}>
                <InputLabel htmlFor="outlined-adornment-verificationCode-register">Verification Code</InputLabel>
                <OutlinedInput
                    sx={{
                      fontSize: '20px',
                  }}
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
              </Grid>
            </Grid>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
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
                disabled={values.verificationCode.length !== 6}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                color="secondary"
                >
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

export default connect(mapStateToProps)(AuthAuthorize);