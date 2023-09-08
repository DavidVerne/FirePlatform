const AWS = require('aws-sdk');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
// import AWS from 'aws-sdk';
// import AmazonCognitoIdentity from 'amazon-cognito-identity-js';

exports.handler = async (event) => {
  // Get the username and password from the login form
  const username = event.email;
  const password = event.password;

  // Configure AWS Cognito
  const poolData = {
    UserPoolId: process.env.user_pool_id,
    ClientId: process.env.client_id
  };
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  // Create a Cognito user object
  const authenticationData = {
    Username: username,
    Password: password
  };
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
  const userData = {
    Username: username,
    Pool: userPool
  };
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  try {
    // Authenticate the user
    await new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (session) => {
          // User authentication succeeded, return user session data
          const authResponse = {
            statusCode: 200,
            body: JSON.stringify({
              accessToken: session.getAccessToken().getJwtToken(),
              idToken: session.getIdToken().getJwtToken(),
              refreshToken: session.getRefreshToken().getToken()
            })
          };
          resolve(authResponse);
        },
        onFailure: (err) => {
          // User authentication failed
          const authResponse = {
            statusCode: 401,
            body: JSON.stringify({
              error: err.message || 'Authentication failed'
            })
          };
          reject(authResponse);
        }
      });
    });

    return authResponse;
  } catch (error) {
    // Handle any other errors that might occur
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal Server Error'
      })
    };
  }
};