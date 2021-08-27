import React from 'react';
import classes from './EachNew.module.css'



const EachNew = (props) => {
    return (
        < div>

            <div className={classes.news}>

                <div className={classes.newsName}>

                <img src={props.avatar} className={classes.ava} />
                    <span className={classes.mes}>
                        <span className={classes.user}  > {props.user}   </span>
                        <span className={classes.time}> {props.time}  </span>
                    </span>
                </div>

                <div className={classes.content}>
                        {props.post}
                    </div>

                <img src={props.picture} className={classes.picture}/>

            </div>

        </div>
    )
}

export default EachNew;