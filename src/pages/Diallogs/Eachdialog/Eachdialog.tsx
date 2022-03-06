import React from 'react';
import classes from './Eachdialog.module.css'
import {NavLink} from "react-router-dom";

type PropsType = {
    key: number
    id: number
    name: string
}

const Eachdialog: React.FC<PropsType> = (props) => {

    let path = "/diallogs/" + props.id;
    return (
        < div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path} activeClassName={classes.activeLink}> {props.name}</NavLink>
        </div>


    )
}

export default Eachdialog;