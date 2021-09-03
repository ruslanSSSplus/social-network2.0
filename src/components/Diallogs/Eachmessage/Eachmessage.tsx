import React from 'react';
import classes from './Eachmessage.module.css'

type PropsType = {
    key: number
    message: string
}


const Eachmessage: React.FC<PropsType> = (props) => {
    return (
        < div>

            <div className={classes.massages}>
                <div className={classes.massage}> {props.message}  </div>
            </div>

        </div>
    )
}

export default Eachmessage;