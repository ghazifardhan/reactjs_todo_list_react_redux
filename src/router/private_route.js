import React from 'react';
import {
  Route,
  Redirect
} from "react-router-dom";

export default function PrivateRoute({ children, authed, exact, ...rest })
{
  
  return (
    <Route
      {...rest}
      exact={exact}
      render={props => 
        localStorage.getItem("username")
          ? (children)
          : (<Redirect to={{ pathname: "/login", state: { from: props.location }}} />)
      }
    />
  );
}