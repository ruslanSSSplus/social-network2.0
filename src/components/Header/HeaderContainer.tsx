import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthThunk, logOutThunk} from "../../redux/authReducer";
import {AppStateType} from "../../redux/reduxStore";



type MapStatePropsType = {
    isAuth: boolean
    login: string | null
    userAva: string | null,
}

type MapDispatchPropsType = {
    getAuthThunk: () => void
    logOutThunk: () => void
}

type OwnPropsType = {
}
type PropsType = MapStatePropsType  & MapDispatchPropsType  & OwnPropsType

class HeaderContainer extends React.Component<PropsType> {



    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state: AppStateType) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userAva: state.auth.userAva
    })




export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {
    getAuthThunk, logOutThunk
})(HeaderContainer);