import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Redirect } from 'react-router-dom';


export const LoginComponent = () => {
    const { isAuthenticated, loginWithRedirect} = useAuth0();

  if (!isAuthenticated) {
      return loginWithRedirect();
  }
  return <Redirect to="/"/>
}
