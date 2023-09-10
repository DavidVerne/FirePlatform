const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  // Parse user input from the event (assuming it's in JSON format)
  const userInput = JSON.parse(event.body);

  // AWS Cognito configuration
  const cognito = new AWS.CognitoIdentityServiceProvider();
  const userPoolId = process.env.user_pool_id; // Retrieve User Pool ID from environment variables
  const clientId = process.env.client_id; // Retrieve Client ID from environment variables

  const params = {
    ClientId: clientId,
    Password: userInput.password, // Include the user's chosen password here
    Username: userInput.email,
    UserAttributes: [
      {
        Name: 'given_name',
        Value: userInput.firstName,
      },
      {
        Name: 'family_name',
        Value: userInput.lastName,
      },
      {
        Name: 'email',
        Value: userInput.email,
      },
      // Add other user attributes as needed
    ],
  };

  try {
    // Sign up the user using the SignUp API
    const response = await cognito.signUp(params).promise();

    // User signed up successfully
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User signed up successfully', user: response }),
    };
  } catch (error) {
    console.error('Error signing up user:', error);

    // Handle errors and return an appropriate response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'User sign-up failed' }),
    };
  }
};

