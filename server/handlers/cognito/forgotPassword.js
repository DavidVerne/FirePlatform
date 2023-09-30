const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const userInput = JSON.parse(event.body);

    const cognito = new AWS.CognitoIdentityServiceProvider();
    const clientId = process.env.client_id;

    const params = {
        ClientId: clientId,
        Username: userInput.username,
    };

    try {
        await cognito.forgotPassword(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Forgot password executed successfully' }),
        };
    } catch (error) {
        console.error('Error requesting password reset:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error requesting password reset' }),
        };
    };
}