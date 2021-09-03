import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/reduxStore";


let mapStateToPropsForRedirect = (state: AppStateType) =>({
    isAuth: state.auth.isAuth
})

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}

export const withAuthRedirect = (Component: React.ComponentType) => {
    class RedirectComponent extends React.Component<mapStateToPropsForRedirectType> {
        render () {
            if(!this.props.isAuth) return <Redirect to='/login'/>

            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}