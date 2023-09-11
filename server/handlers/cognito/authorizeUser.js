// calls ConfirmSignUp to confirm user in Cognito

const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const { username, verificationCode } = event; // Assuming you pass the username and confirmationCode as input

  const cognito = new AWS.CognitoIdentityServiceProvider();

  const params = {
    ClientId: process.env.client_id, // Retrieve Client ID from environment variables
    Username: username,
    ConfirmationCode: verificationCode,
  };

  try {
    await cognito.confirmSignUp(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User authorized successfully' }),
    };
  } catch (error) {
    console.error('Error authorizing user:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error authorizing user' }),
    };
  }
};
