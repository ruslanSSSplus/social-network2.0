import React from 'react';
import classes from './Friends.module.css'
import FriendsControl from "./FriendsControl/FriendsControl";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import AllContainerHoook from "./All/AllContainerHoook";





const Friends =() => {
    return (<div className={classes.per}>
            <FriendsControl />
            <AllContainerHoook />
        </div>
    )
}

export default Friends;