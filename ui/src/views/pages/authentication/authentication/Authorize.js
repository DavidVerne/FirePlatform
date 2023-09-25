import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthAuthorize from '../auth-forms/AuthAuthorize';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import {
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';
import AWS from 'aws-sdk';
import { connect } from 'react-redux';
import { BusAlertTwoTone } from '@mui/icons-material';

// ================================|| AUTHORIZE ||================================ //

const Authorize = (username) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  // success message from lambda
  const [successMessage, setSuccessMessage] = useState(null);

  console.log('username: ', username);

  // Resend confirmation code
  const resendAuthorizationCode = async (e) => {
    e.preventDefault();
  
    const lambda = new AWS.Lambda();
    const lambdaFunctionName = 'resendVerificationCode'; 
    const params = {
      FunctionName: lambdaFunctionName,
      InvocationType: 'RequestResponse', 
      Payload: JSON.stringify({  
        username: username
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
        setSuccessMessage('A new verification code has been sent to your email.');
      } else {
        // Handle other cases or display an error message
        setSuccessMessage('Request failed. Please return to the sign up page.');
      }
    } catch (error) {
      console.error('Error invoking Lambda:', error);
    }
  };

  return (
    <AuthWrapper1>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography color={theme.palette.secondary.main} gutterBottom variant={matchDownSM ? 'h3' : 'h2'}>
                            Enter verification code
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthAuthorize />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Button 
                      sx={{
                        textDecoration: 'none',
                        backgroundColor: 'transparent',
                        '&:hover': {
                          textDecoration: 'underline',
                          backgroundColor: 'transparent',
                        },
                      }}
                      id="resend-verification-button"
                      onClick={resendAuthorizationCode}
                      variant="subtitle1" 
                      >
                        Resend verification code
                      </Button>
                      {successMessage && (
                        <div className="success-message">
                          {successMessage}
                        </div>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper1>
  );
};

// export default Authorize;
const mapStateToProps = (state) => ({
  username: state.user.username,
});

export default connect(mapStateToProps)(Authorize);