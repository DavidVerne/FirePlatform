import React from 'react';
import AccountContext from '../context/AccountContext';

const AccountState = (props) => {
    /////

    return (
        <AccountContext.Provider>
            {props.children}
        </AccountContext.Provider>
    )
}

export default AccountState;