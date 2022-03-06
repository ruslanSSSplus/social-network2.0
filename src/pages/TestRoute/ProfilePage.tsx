import React, {useState} from "react";
import classes from "./mainAndProfilePages.module.css";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";



export const ProfilePage: React.FC= (props) => {

    const login = useSelector((state: AppStateType) => state.maintest.newLogintext)


    return <div className={classes.All}>

        <h1> {login} </h1>

    </div>
}