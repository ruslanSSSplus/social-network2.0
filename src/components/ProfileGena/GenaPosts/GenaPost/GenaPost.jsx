import React from 'react';
import classes from './GenaPost.module.css'

const GenaPost = (props) => {

  return <div>


    <div className={classes.item}>
      <img src={props.avatar} />
      <span className={classes.nick} > {props.NickName} </span>
      <span className={classes.mes}> {props.message}  </span>
    </div>


  </div>

}

export default GenaPost;