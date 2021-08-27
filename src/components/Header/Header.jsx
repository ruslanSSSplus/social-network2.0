import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";




const Header = (props) => {

  return <header className={classes.header} >
    <img className={classes.logo} src="http://faytan.ru/wp-content/uploads/2014/07/cut-background-photoshop-9.png" />
    <img className={classes.track} src="https://sun9-32.userapi.com/impg/qg5AFer2dhOhVVyyy4pIpnAVc7GbesiNeYMbNw/rLelgKxHa-A.jpg?size=355x30&quality=96&sign=aa0eceeeaf43cfd5c9144a979d3ff045&type=album" />


      <span className={classes.loginBlock}>
       {props.isAuth ? <span>
           <img src={props.userAva} className={classes.userAvatar}/>
           <NavLink to="/profile">{props.login}</NavLink>
       <button onClick={props.logOutThunk}> logIot</button></span> : <NavLink to={'/login'}>Sign in</NavLink>}
   </span>

  </header>
}

export default Header;