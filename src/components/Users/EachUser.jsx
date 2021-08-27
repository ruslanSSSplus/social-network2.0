import React from "react";
import classes from "./users.module.css";
import photoAva from "../../assets/images/DZIAss-5O_I.jpg";
import {NavLink} from "react-router-dom";





let EachUser = (props) => {
    let user= props.user
    return <div key={user.id} className={classes.newUsers}>
                <div className={classes.userInfo}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : photoAva} className={classes.userPhoto}/>
                    </NavLink>
                    <span className={classes.userInfoShort}>
                <div className={classes.fullname}>
                    {user.name}
                </div>
                <div className={classes.status}>
                    {user.status != null ? user.status : 'я тут'}
                </div>
                 <div className={classes.country}>
                    Russia
                 </div>
                <div className={classes.city}>
                    Moscow
                </div>
            </span>
                </div>
                <div>
                    {user.followed ? <button onClick={() => { props.unfollowThunk(user.id) }} className={classes.buttons}> Удалить из друзей </button> :
                        <button className={classes.buttons} onClick={() => { props.followThunk(user.id, user.photos.small, user.name)}}> Добавить в друзья </button>}
                </div>

            </div>
}

export default EachUser