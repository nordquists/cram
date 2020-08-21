import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from './Layout';
import { Auth0Provider } from '@auth0/auth0-react';
import axios from 'axios';

const env = process.env.NODE_ENV; // current environment

axios.defaults.baseURL = process.env.baseURL || 'http://localhost:5000/api/'

const redirectUri = env === 'production' 
                          ? 'https://usecram.herokuapp.com/check-login'
                          : 'http://localhost:3000/check-login'

const App = () => {
  return (
    <Auth0Provider
      domain="dev-07ennd-z.us.auth0.com"
      clientId="dWz7AMUPF3mfxACkZw51yI6ht0Z0mdni"
      redirectUri={redirectUri}
      audience={'https://dev-07ennd-z.us.auth0.com/api/v2/'}
      scope="openid"
    >
      <Router>
        <Switch>
          <Layout/>
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
