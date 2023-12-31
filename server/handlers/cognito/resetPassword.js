const AWS = require('aws-sdk');

exports.handler = async (event, context) => {
    const userInput = JSON.parse(event.body);

    const cognito = new AWS.CognitoIdentityServiceProvider();
    const clientId = process.env.client_id;
    const userPoolId = process.env.userPoolId;

    const params = {
        ClientId: clientId,
        Username: userInput.username,
        Password: userInput.password,
        ConfirmationCode: userInput.verificationCode,
    };

    try {
        await cognito.confirmForgotPassword(params).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Password reset successfully' }),
        };
    } catch (error) {
        console.error('Error resetting password:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error resetting password' }),
        };
    };
}