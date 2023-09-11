// User enters confirmation code from email
// Invokes authorizeUserInCognito lamdba
// Lambda passes code to Cognito


// ALSO

// If response from Congito is 'success'
// Then show success message with login button to user
// login button takes user to login page
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
import './AuthAuthorize.scss';

// ===========================|| AUTHORIZE ||=========================== //

const AuthRegister = ({ ...others }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  // AWS Cognito Variables
  const [formData, setFormData] = useState({
    username: 'email',
    verificationCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Signup user in Cognito
  const handleAuthorization = async (e) => {
    e.preventDefault();
  
    // Construct the input parameters for your Lambda function
    const lambda = new AWS.Lambda();
    const lambdaFunctionName = 'authorizeUser'; // Replace with your Lambda function's name
    const params = {
      FunctionName: lambdaFunctionName,
      InvocationType: 'RequestResponse', // Or 'Event' for asynchronous invocation
      Payload: JSON.stringify({  // Your input data
        username: formData.username,      // Replace with the username
        verificationCode: formData.verificationCode // Replace with the confirmation code
      }),
    };
  
    try {
      // Invoke the Lambda function
      const response = await lambda.invoke(params).promise();
      
      // Handle the Lambda function response here
      const responseBody = JSON.parse(response.Payload);
      console.log('Lambda response:', responseBody);
  
      // Additional handling based on the Lambda response...
  
    } catch (error) {
      console.error('Error invoking Lambda:', error);
      // Handle errors here...
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
                <InputLabel htmlFor="outlined-adornment-verificationCode-register"></InputLabel>
                <OutlinedInput
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
    </>
  );
};

export default AuthRegister;
