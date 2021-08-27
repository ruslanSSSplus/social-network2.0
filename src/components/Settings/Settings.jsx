import React from 'react';
import classes from './Settings.module.css'



const Settings = () => {
  return <div className={classes.set}>
    <div className={classes.item}>
      <a>Help</a>
    </div>
    <div className={classes.item}>
      <a>Gena</a>
    </div>
    <div className={classes.item}>
      <a>Daun</a>
    </div>
    <div className={classes.item}>
      <a>1488</a>
    </div>
    <div className={classes.item}>
      <a>Settings</a>
    </div>
  </div>
}

export default Settings;