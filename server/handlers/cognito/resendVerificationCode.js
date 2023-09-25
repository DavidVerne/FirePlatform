// calls cognito ResendConfirmationCode API

const AWS = require('aws-sdk');

exports.handler = async (event) => {

  // Initialize the Cognito IdentityServiceProvider
  const cognitoISP = new AWS.CognitoIdentityServiceProvider();

  const userPoolId = process.env.user_pool_id; // Retrieve User Pool ID from environment variables
  const clientId = process.env.client_id; // Retrieve Client ID from environment variables

  // Get user details from the Lambda event
  const userInput = JSON.parse(event.body);

  // Define parameters for the ResendConfirmationCode API
  const params = {
    ClientId: clientId,
    Username: userInput.username,
  };

  // Call the ResendConfirmationCode API
  try {
    const result = await cognitoISP.resendConfirmationCode(params).promise();

    // Check if the confirmation code resend was successful
    if (result.$response && result.$response.httpResponse.statusCode === 200) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Confirmation code resent successfully.' }),
      };
    } else {
      // Handle any other response from the API if needed
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to resend confirmation code.' }),
      };
    }
  } catch (error) {
    // Handle errors, e.g., user not found or other issues
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to resend confirmation code.' }),
    };
  }
};
