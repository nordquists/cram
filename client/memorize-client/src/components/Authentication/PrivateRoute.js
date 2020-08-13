import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../index";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { state: authState } = React.useContext(AuthContext);


    return (
        <Route {...rest} render={(props) => (
            authState.isAuthenticated === true
              ? <Component {...props} />
              : <Redirect to='/login' />
          )} />
    );
}