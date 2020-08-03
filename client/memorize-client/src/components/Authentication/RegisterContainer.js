import React from 'react'
import { Register } from './Register';

export const RegisterContainer = (props) => {

    let onBack =  (e) => {
        props.history.goBack();
    }

    return (
        <Register
            onBack={onBack}
        />
    )
}
