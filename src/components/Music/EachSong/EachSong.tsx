import React from 'react';
import classes from './EachSong.module.css'


type PropsType = {
  nameSong: string
  key: number
}

const EachSong: React.FC<PropsType> = (props) => {

  return <div>


    <div className={classes.item}>
      <span className={classes.mes}> {props.nameSong}  </span>
    </div>


  </div>

}

export default EachSong;