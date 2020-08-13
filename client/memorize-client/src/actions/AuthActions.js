import React from 'react';
import axios from 'axios';
import { AuthContext } from "../App";
import { Redirect } from "react-router-dom";

export function loginUserSuccess(username, jwtToken, refreshToken) {
    // localStorage.setItem('token', refreshToken);
    return {
        type: 'USER_LOGIN_SUCCESS',
        payload: {
            token: jwtToken,
            username: username
        }
    }
}

export function loginUserFailure(error) {
    localStorage.removeItem('token');
    return {
        type: 'USER_LOGIN_FAILURE'
    }
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: 'USER_LOGOUT'
    }
}

export function logoutAndRedirect() {
    return (dispatch, state) => {
        dispatch(logout());
        Redirect('/login')
    }
}
