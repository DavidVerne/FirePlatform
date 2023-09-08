const AWS = require('aws-sdk');
// import AWS from 'aws-sdk';

exports.handler = async (event, context) => {
  // Parse user input from the event (assuming it's in JSON format)
  const userInput = JSON.parse(event.body);

  // AWS Cognito configuration
  const cognito = new AWS.CognitoIdentityServiceProvider();
  const userPoolId = process.env.user_pool_id; // Retrieve User Pool ID from environment variables
  const clientId = process.env.client_id; // Retrieve Client ID from environment variables

  const params = {
    UserPoolId: userPoolId,
    Username: userInput.email,
    Password: userInput.password,
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
    DesiredDeliveryMediums: ['EMAIL'],
    ForceAliasCreation: false,
  };

  try {
    // Create the user in the Cognito User Pool
    const response = await cognito.adminCreateUser(params).promise();

    // User created successfully
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User created successfully', user: response }),
    };
  } catch (error) {
    console.error('Error creating user:', error);

    // Handle errors and return an appropriate response
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'User creation failed' }),
    };
  }
};
