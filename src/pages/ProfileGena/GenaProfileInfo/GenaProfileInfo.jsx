import React from 'react';

import classes from './GenaProfileInfo.module.css'

const GenaProfileInfo = () => {
    return <div>
        <div className={classes.wallpaper}>
            <img
                src="https://sun9-78.userapi.com/impg/NrSWcMzkCka2yzSn3A9lmLm2c6Jg5QGPOKYM_A/aZTfjfpwHRo.jpg?size=1600x648&quality=96&sign=2e39caafd67c569a65eca8d1d40f223a&type=album"/>
        </div>
      <div className={classes.description}>
        <div className={classes.avatar}>
            <img src="https://sun9-74.userapi.com/impg/K_kf_03-X8lP2uixO9tzjxIjrNyUztz0yAMcdw/cBvjDD8FRDs.jpg?size=640x640&quality=96&sign=cc6043c92263a14c75dc8e5517f59cf8&type=album"/>
        </div>
      </div>
    </div>
}

export default GenaProfileInfo;