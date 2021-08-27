import React from 'react';
import classes from './EachSong.module.css'



const EachSong = (props) => {

  return <div>


    <div className={classes.item}>
      <span className={classes.mes}> {props.nameSong}  </span>
    </div>


  </div>

}

export default EachSong;