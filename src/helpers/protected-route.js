import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProtectedRoute({ user, children, ...rest }) {
    console.log('user', user);
    return (
        <Route
            {...rest}
            render={({ location }) => {
                console.log('locationnnnn', location);
                if(user) {
                    return children;
                }

                if(!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: ROUTES.LOGIN,
                                state: { from: location }
                            }}
                        />
                    )
                }

                return null;
            }}
        />
    )
}