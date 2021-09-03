import React from 'react';
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Best from "./Best";
import {bestfriendsType} from "../../redux/sideBarReducer";


type PropsType = {
  bestfriends: Array<bestfriendsType>
}


const NavBar: React.FC<PropsType>  = (props) => {

   let bestfriends = props.bestfriends.map(el =>  <Best key={el.id} name = {el.name} surname= {el.surname} avatar={el.avatar}/>)

  return <nav className={classes.nav}>

    <div className = {classes.item}>
      <NavLink to = "/profile" activeClassName={classes.activeLink}>My page</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink  to = '/news' activeClassName={classes.activeLink}>News</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/diallogs' activeClassName={classes.activeLink}>Messages</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/friends' activeClassName={classes.activeLink}> Friends</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/users' activeClassName={classes.activeLink}> Пользователи</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/music' activeClassName={classes.activeLink}>Music</NavLink>
    </div>
    <div className={classes.BestFriends}>
      Best Friends
    </div>
    <span> {bestfriends} </span>
  </nav>
}

export default NavBar;