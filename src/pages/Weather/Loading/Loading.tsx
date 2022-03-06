import React from "react";
import classes from '../Weather.module.css'


export function Loading () {
    return (<div >
        <span className={classes.loading}>Loading...</span>
    </div>)
}

