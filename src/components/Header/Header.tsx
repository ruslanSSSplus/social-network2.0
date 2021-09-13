import React, {useEffect} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {logOutThunk} from "../../redux/authReducer";
import {Button} from "antd";
import {getOwnerAva, getProfileThunk} from "../../redux/profileReducer";




export const HeaderComponent: React.FC = (props) => {

  const isAuth = useSelector((state: AppStateType)=> state.auth.isAuth)
  const login = useSelector((state: AppStateType)=> state.auth.login)
 const avatar = useSelector((state: AppStateType) => state.profile.photo)
    const profile = useSelector((state: AppStateType) => state.profile.profile)
  const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getOwnerAva(18579))
    }, [profile])

  return <header className={classes.header} >


      <span className={classes.loginBlock}>
       {isAuth? <span>
           <NavLink to="/profile" className={classes.signIn}>{login}</NavLink>
       <Button className={classes.button1} onClick={() => dispatch(logOutThunk())}> logIot</Button>

          <img alt={'ava'} src={avatar===null ? 'hhh' : avatar} className={classes.userAvatar}/> </span> : <NavLink className={classes.signIn} to={'/login'}>Sign in</NavLink>}

   </span>
  </header>
}
