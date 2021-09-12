import React, {useEffect} from 'react';
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {logOutThunk} from "../../redux/authReducer";
import {Button} from "antd";




export const HeaderComponent: React.FC = (props) => {

  const isAuth = useSelector((state: AppStateType)=> state.auth.isAuth)
  const login = useSelector((state: AppStateType)=> state.auth.login)
  let profile = useSelector((state: AppStateType) => state.profile.profile?.photos.small)
  const dispatch = useDispatch()

    if(profile===undefined) profile = 'https://sun1-93.userapi.com/s/v1/ig2/i3174V5HMNQgKMxXm43MBqaBeqvf9lPbnq34n_NTXqwUY7XMzkok7XT1gZSQjBqJbxhns3gHCZx93ppb6zlqA5wL.jpg?size=200x200&quality=96&crop=53,33,478,478&ava=1'

  return <header className={classes.header} >


      <span className={classes.loginBlock}>
       {isAuth? <span>
           <NavLink to="/profile" className={classes.signIn}>{login}</NavLink>
       <Button className={classes.button1} onClick={() => dispatch(logOutThunk())}> logIot</Button>

          <img alt={'ava'} src={profile===null ? 'hhh' : profile} className={classes.userAvatar}/> </span> : <NavLink className={classes.signIn} to={'/login'}>Sign in</NavLink>}

   </span>
  </header>
}
