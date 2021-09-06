import React from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {logOutThunk} from "../../redux/authReducer";
import {Button} from "antd";




export const HeaderComponent: React.FC = (props) => {

  const isAuth = useSelector((state: AppStateType)=> state.auth.isAuth)
  const login = useSelector((state: AppStateType)=> state.auth.login)
  const userAva = useSelector((state: AppStateType)=> state.auth.userAva)
  const dispatch = useDispatch()


  return <header className={classes.header} >


      <span className={classes.loginBlock}>
       {isAuth? <span>
           <NavLink to="/profile" className={classes.signIn}>{login}</NavLink>
       <Button className={classes.button1} onClick={() => dispatch(logOutThunk())}> logIot</Button></span> : <NavLink className={classes.signIn} to={'/login'}>Sign in</NavLink>}
          <img alt={'ava'} src={userAva as string} className={classes.userAvatar}/>
   </span>
  </header>
}
