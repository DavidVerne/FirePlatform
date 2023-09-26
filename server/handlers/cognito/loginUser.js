const AWS = require('aws-sdk');

exports.handler = async (event) => {
  const userInput = JSON.parse(event.body);

  // Initialize the CognitoIdentityServiceProvider
  const cognito = new AWS.CognitoIdentityServiceProvider();

  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH', // Authentication flow
    ClientId: process.env.client_id,
    AuthParameters: {
      USERNAME: userInput.username,
      PASSWORD: userInput.password,
    },
  };

  try {
    // Initiate authentication
    const authResult = await cognito.initiateAuth(params).promise();

    // Authentication succeeded, return tokens
    const authResponse = {
      statusCode: 200,
      body: JSON.stringify({
        accessToken: authResult.AuthenticationResult.AccessToken,
        idToken: authResult.AuthenticationResult.IdToken,
        refreshToken: authResult.AuthenticationResult.RefreshToken,
      }),
    };

    return authResponse;
  } catch (error) {
    console.error('Error:', error);

    let statusCode = 500;
    let errorMessage = 'Internal Server Error';

    if (error.code === 'NotAuthorizedException') {
      statusCode = 401;
      errorMessage = 'Authentication failed';
    } else if (error.code === 'UserNotFoundException') {
      statusCode = 404;
      errorMessage = 'User not found';
    }

    return {
      statusCode,
      body: JSON.stringify({
        error: errorMessage,
      }),
    };
  }
};
