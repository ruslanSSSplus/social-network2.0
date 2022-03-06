import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import classes from './Login.module.css'
import {AppStateType} from "../../redux/reduxStore";
import {LoginFormAuth} from "./LoginFormAuth";







export const Login: React.FC= (props) => {
    const captchaUrl = useSelector((state: AppStateType )=> state.auth.captchaUrl)
    const isError = useSelector((state: AppStateType )=> state.auth.isError)
    const isAuth = useSelector((state: AppStateType )=> state.auth.isAuth)



    if(isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div className={classes.All}>
        <h3> Login </h3>
        <LoginFormAuth isError={isError} captchaUrl={captchaUrl} />
    </div>
}



