import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function IsUserLoggedIn({ user, loggedInPath, children, ...rest }) {
    console.log('user', loggedInPath);
    return (
        <Route
            {...rest}
            render={({ location }) => {
                if(!user) {
                    return children;
                }

                if(user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    )
                }

                return null;
            }}
        />
    )
}