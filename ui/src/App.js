import './App.css';
import React, { useState } from 'react';
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk/global';
// import 'amazon-cognito-identity-js/dist/aws-cognito-sdk';
// import { CognitoIdentityProviderClient, AddCustomAttributesCommand } from "@aws-sdk/client-cognito-identity-provider";
// import * as AWS from "@aws-sdk/client-cognito-identity-provider";

// import { CognitoIdentityClient } from "@aws-sdk/client-cognito-identity";
// import { fromCognitoIdentityPool } from "@aws-sdk/credential-provider-cognito-identity";

// sdk setup
const poolData = {
  UserPoolId: 'eu-west-2_h47DsZQl6',
  ClientId: '6ctd4u4rvjdtatvjqptcdcs783',
};
const userPool = new CognitoUserPool(poolData);
AWS.config.region = 'eu-west-2';

// authentication functions
const signIn = (username, password) => {

  const authenticationData = {
    Username: username,
    Password: password,
  };

  const authenticationDetails = new AuthenticationDetails(authenticationData);

  const userData = {
    Username: username,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (session) => {
      console.log('Authentication successful: ', session);
    },
    onFailure: (error) => {
      console.log('Authentication failed: ', error);
    }
  });
};

const signOut = () => {
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
    console.log('Signed out');
  }
};

const App = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    signIn(username, password);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default App;
