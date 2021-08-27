import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthThunk, logOutThunk, setAuthUserData, setUserAvatar} from "../../redux/authReducer";






class HeaderContainer extends React.Component{



    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userAva: state.auth.userAva
    })




export default connect(mapStateToProps, {
    getAuthThunk, logOutThunk
})(HeaderContainer);