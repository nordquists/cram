import React from 'react'
import { Login } from './Login';

export const LoginContainer = (props) => {

    let onBack =  (e) => {
        props.history.goBack();
    }

    return (
        <Login
            onBack={onBack}
            history={props.history}
        />
    )
}
