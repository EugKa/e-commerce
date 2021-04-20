import React, { FunctionComponent } from 'react'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router'
import { AppState } from '../../store'
import { ROUTES_URLS } from '../App/routes'
import {selectCartItems} from '../../store/cart'
import { connect } from 'react-redux'
interface ProtectedRouteProps extends RouteProps {
    cartItems?: any
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({render, cartItems, ...rest}) => {

    return (
        <Route
            {...rest}
            render={(routeCompProps: RouteComponentProps) => 
                cartItems.length !== 0 ? (
                    render!(routeCompProps))
                    : (
                        <Redirect
                            to={{
                                pathname: ROUTES_URLS.HOME,
                                state: { from: routeCompProps.location}
                            }}
                        />
                    )
            }
        />
    )
}

const mapStateToProps = (state:AppState) => ({
    cartItems: selectCartItems(state)
})

const ConnectedRoute = connect(mapStateToProps)(ProtectedRoute)

export { ConnectedRoute as ProtectedRoute}
