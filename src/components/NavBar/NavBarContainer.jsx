import React from 'react';
import Best from "./Best";
import {connect} from "react-redux";
import NavBar from "./NavBar";




let mapStateToProps =(state) => {
  return {
    bestfriends: state.sideBar.bestfriends.map(el =>  <Best key={el.id} name = {el.name} surname= {el.surname} avatar={el.avatar}/>)
  }
}
let mapDispatchToProps =(dispatch) => {
  return {

    }

}

let NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)

export default NavBarContainer;