import React from 'react'
import { Route, Redirect } from "react-router-dom"

const UserPrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route 
            {...rest}
            render={props => 
                localStorage.getItem("user_token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/patient-login" />
                )
            }
        />
    )
}

export default UserPrivateRoute;