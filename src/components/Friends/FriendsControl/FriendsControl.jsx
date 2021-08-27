import React from 'react';
import classes from './FriendsControl.module.css'
import {NavLink} from "react-router-dom";



const FriendsControl = () => {
    return <div className={classes.friend}>
        <div className = {classes.item}>
            <NavLink to = "/friends" activeClassName={classes.activeLink}> Мои друзья</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink  to = '/friends/new' activeClassName={classes.activeLink}>Заявки в друзья</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = '/friends/numbers' activeClassName={classes.activeLink}>Телефонная книга</NavLink>
        </div>
        <div className = {classes.item}>
            <NavLink to = '/users' activeClassName={classes.activeLink}>Полизователи</NavLink>
        </div>

    </div>
}

export default FriendsControl;