import React from 'react';
import classes from './Eachmessage.module.css'



const Eachmessage = (props) => {
    return (
        < div>

            <div className={classes.massages}>
                <div className={classes.massage}> {props.message}  </div>
            </div>

        </div>
    )
}

export default Eachmessage;