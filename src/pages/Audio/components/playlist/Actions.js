import React from 'react'
import classes from "../../audio.module.css";
import {HeartOutlined, DownOutlined, SaveOutlined}  from  '@ant-design/icons';


const fav = () => {
  console.log('I like this one')
}

function Actions() {
  return (
    <div className={classes.actions}>
      <img src="https://cdns-images.dzcdn.net/images/cover/80909d7a402560e429eb12746b932270/264x264.jpg" />
      <div className={classes.album_meta}>
        <span className={classes.alb_label}>Плейлист</span>
        <h2 className={classes.alb}>Мой плейлист Короля и Шута</h2>
      </div>
      <div className={classes.action_btns}>
        <button onClick={() => fav()} className={classes.actions_button}>
            <HeartOutlined className={classes.bttn}/>
        </button>
        <button onClick={() => fav()}  className={classes.actions_button}>
            <DownOutlined className={classes.bttn}/>
        </button>
        <button onClick={() => fav()} className={classes.actions_button}>
            <SaveOutlined className={classes.bttn} />
        </button>
      </div>
    </div>
  )
}

export default Actions
