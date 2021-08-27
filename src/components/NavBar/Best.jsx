import React from 'react';
import classes from './Best.module.css'



const Best = (props) => {
    return <div>


        <div className={classes.item}>
            <img src={props.avatar} />
            <span className={classes.name} > {props.name} {props.surname}</span>

        </div>


    </div>

}

export default Best;