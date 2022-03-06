import React from 'react';

import {actions } from "../../redux/dialogReducer";
import Diallogs, {MapDispatchPropsType, MapStatePropsType} from "./Diallogs";
import {connect} from "react-redux";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";




let mapStateToProps =(state: AppStateType) => {
    return {
        messages: state.dialogs.messages,
        dialogs: state.dialogs.dialogs
    }
}




export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addMessageActionCreator: actions.addMessageActionCreator}),
    withAuthRedirect
)(Diallogs);