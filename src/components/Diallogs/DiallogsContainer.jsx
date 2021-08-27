import React from 'react';
import Eachdialog from "./Eachdialog/Eachdialog";
import Eachmessage from "./Eachmessage/Eachmessage";
import {addMessageActionCreator} from "../../redux/dialogReducer";
import Diallogs from "./Diallogs";
import {connect} from "react-redux";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";





let mapStateToProps =(state) => {
    return {
        messages: state.dialogs.messages.map(el => <Eachmessage key={el.id} message={el.message}/>),
        dialogs: state.dialogs.dialogs.map(el => <Eachdialog key={el.id} id={el.id} name={el.name}/>),
    }
}
let mapDispatchToProps =(dispatch) => {
     return {

        addMessageActionCreator: (message) => {
         dispatch(addMessageActionCreator(message));
      }
   }
 }



export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Diallogs);