import React from 'react';

import {connect} from "react-redux";
import NavBar from "./NavBar";
import {AppStateType} from "../../redux/reduxStore";





let mapStateToProps =(state: AppStateType) => {
  return {
    bestfriends: state.sideBar.bestfriends
  }
}

let NavBarContainer = connect(mapStateToProps, {})(NavBar)

export default NavBarContainer;