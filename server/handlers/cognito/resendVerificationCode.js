// calls cognito ResendConfirmationCode API

const AWS = require('aws-sdk');

exports.handler = async (event) => {

  const cognitoISP = new AWS.CognitoIdentityServiceProvider();

  const clientId = process.env.client_id; 

  const userInput = JSON.parse(event.body);

  const params = {
    ClientId: clientId,
    Username: userInput.username,
  };

  try {
    const result = await cognitoISP.resendConfirmationCode(params).promise();

    if (result.$response && result.$response.httpResponse.statusCode === 200) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Confirmation code resent successfully.' }),
      };
    } else {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to resend confirmation code.' }),
      };
    }
  } catch (error) {
    console.error('Error:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to resend confirmation code.' }),
    };
  }
};
