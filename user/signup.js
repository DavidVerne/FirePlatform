const AWS = require('aws-sdk');
const { sendResponse, validateInput } = require('../helper');

const cognito = new AWS.CognitoIdentityServiceProvider();

module.exports.handler = async (event) => {
    try {

        // checking if email & password fields arent empty
        const isValid = validateInput(event.body)
        if (!isValid)
            return sendResponse(400, { message: 'Invalid input' })

            // email and password fields have values, so we can create the user in cognito user pool
            const { email, password } = JSON.parse(event.body)
            const { user_pool_id } = process.env
            const params = {
                UserPoolId: user_pool_id,
                Username: email,
                UserAttributes: [
                    {
                        Name: 'email',
                        Value: email
                    },
                    {
                        Name: 'email_verified',
                        Value: 'true'
                    }],
                    MessageAction: 'SUPPRESS'
            }
            // call cognito api to create user
            const response = await cognito.adminCreateUser(params).promise();

            // set password parameters
            if (response.User) {
                const paramsForSetPass = {
                    Password: password,
                    UserPoolId: user_pool_id,
                    Username: email,
                    Permanent: true
                };
                // call cognito api to set password for newly created user
                await cognito.adminSetUserPassword(paramsForSetPass).promise()
            }
            return sendResponse(200, { message: 'User registration successful' })
        }
        catch (error) {
            const message = error.message ? error.message : 'Internal server error'
            return sendResponse(500, { message })
        }
}