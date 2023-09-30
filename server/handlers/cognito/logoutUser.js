const AWS = require('aws-sdk');

exports.handler = async (event) => {

    const userInput = JSON.parse(event.body);

    const clientId = process.env.client_id; 

    const cognito = new AWS.CognitoIdentityServiceProvider();

    const params = {
        AccessToken: userInput.accessToken,
    };

    try {
        await cognito.globalSignOut(params).promise();

        // User logout successful
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'User logged out successfully' }),
        };
    } catch (error) {
        console.error('Error logging out user:', error);

        // Handle errors accordingly
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error logging out user' }),
        };
    }
};
