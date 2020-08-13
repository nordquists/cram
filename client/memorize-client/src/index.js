import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {authReducer, initialAuthState} from './reducers/AuthReducer'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/'

export const AuthContext = React.createContext();
const [state, dispatch] = React.useReducer(authReducer, initialAuthState);

// axios.interceptors.request.use(function (config) {
//   const token = store.getState().session.token;
//   config.headers.Authorization =  token;

//   return config;
// });

ReactDOM.render(
  <React.StrictMode>
    <AuthContext.Provider
            value={{ state, dispatch }}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);