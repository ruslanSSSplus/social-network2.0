import React from 'react';
import classes from './Friend.module.css'
import {NavLink} from "react-router-dom";





const Friend = (props) => {

  let unfollowing = (id) => {
      props.unfollowThunk(id)

  }

  return <div>

    <div className={classes.item}>
      <img src={props.avatar} />
      <NavLink to={props.link}> {props.name} {props.surname} </NavLink>
      <button onClick={() =>{unfollowing(props.id)}} className={classes.dropbtn}>Удалить из друзей</button>
    </div>


  </div>

}

export default Friend;