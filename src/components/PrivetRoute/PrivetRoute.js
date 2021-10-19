import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const PrivetRoute = ({children, ...rest}) => {
    const {user, isLoading} = useAuth();
    if(isLoading){
      <h1>Waiting  for a minits</h1>
    }
    return (
        <Route
        {...rest}
        render={({location})=>user.email? children : <Redirect
        to={{
            pathname: "/login",
            state: { from: location }
          }}
        ></Redirect>}
        >
            
        </Route>
    );
};

export default PrivetRoute;