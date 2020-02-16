import React from 'react';
import CreateAccount from './CreateAccount';

function Login() {
    return (
        <div>
        <h3>This is login component: user can login or create new account (CreateAccount.js)</h3>
        <CreateAccount />
        </div>
    );
}

export default Login;