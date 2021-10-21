import React, {ChangeEvent} from "react";
import classes from "../TestRoute/mainAndProfilePages.module.css";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {actions} from "../../redux/mainTest";


export const MainPage: React.FC = (props) => {


    const dispatch = useDispatch()
    const {
        newLogintext,
        newPasswordtext,
        isDisabled,
        needRedirect
    } = useSelector((state: AppStateType) => state.maintest)


    let loginOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.loginOnChangeActionCreator(e.currentTarget.value))
        disabledChanger(e.currentTarget.value, newPasswordtext)
    }
    let passwordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(actions.passwordOnChangeActionCreator(e.currentTarget.value))
        disabledChanger(newLogintext, e.currentTarget.value)
    }
    let disabledChanger = (login: string, pass: string) => {
        if (login === 'developer21' && pass === '123456') {
            dispatch(actions.isDisabledAC())
        }
    }


    const login = () => {
        dispatch(actions.needRedirectAC())
    }

    return <div>
        {needRedirect && <Redirect to='/profiletest'/>}
        <div className={classes.input}>
            <input value={newLogintext}
                   onChange={loginOnChange}/>
        </div>
        <div className={classes.input}>
            <input value={newPasswordtext}
                   onChange={passwordOnChange}/>
        </div>
        <button disabled={isDisabled} onClick={login} className={classes.button}> Log in</button>

    </div>
}