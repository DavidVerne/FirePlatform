import React from 'react';
import AccountContext from '../context/AccountContext';
import userPool from './userPool';

const AccountState = (props) => {
    // user registration

    const signUp = async (email, name, password) => {
        return await new Promise((resolve, reject) => {
            var attributeList = [];

            var userName = {
                Name: 'email',
                Value: email
            }

            attributeList.push(userName);

            userPool.signUp(email, password, attributeList, null, (err, data) => {
                if (err) {
                    console.log('Failed to register', err.message);
                } else {
                    console.log('Account created successfully', data);
                    resolve();
                }
            })
        })
    }

    return (
        <AccountContext.Provider>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState;