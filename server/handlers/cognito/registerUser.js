const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
  const userInput = JSON.parse(event.body);
  const cognito = new AWS.CognitoIdentityServiceProvider();
  const userPoolId = process.env.user_pool_id;
  const clientId = process.env.client_id;

  const params = {
    ClientId: clientId,
    Password: userInput.password,
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
    ],
  };

  try {

    const response = await cognito.signUp(params).promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'User signed up successfully', user: response }),
    };
  } catch (error) {
    console.error('Error signing up user:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'User sign-up failed' }),
    };
  }
};

