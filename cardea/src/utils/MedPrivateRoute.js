import React from 'react'
import { Route, Redirect } from "react-router-dom"

const MedPrivateRoute = ({ component: Component, ...rest }) => {
    return(
        <Route 
            {...rest}
            render={props => 
                localStorage.getItem("med_token") ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/medical-professional-login" />
                )
            }
        />
    )
}

export default MedPrivateRoute;