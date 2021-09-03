import React from 'react';
import classes from './Best.module.css'
import {bestfriendsType} from "../../redux/sideBarReducer";

type PropsType = {
    key: number
    name: string
    surname: string
    avatar: string
}

const Best: React.FC<PropsType>  = (props) => {
    return <div>


        <div className={classes.item}>
            <img src={props.avatar} />
            <span className={classes.name} > {props.name} {props.surname}</span>

        </div>


    </div>

}

export default Best;