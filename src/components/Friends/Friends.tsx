import React from 'react';
import classes from './Friends.module.css'
import FriendsControl from "./FriendsControl/FriendsControl";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import AllContainerHook from "./All/AllContainerHook";





const Friends =() => {
    return (<div className={classes.per}>
            {/*<FriendsControl />*/}
            <AllContainerHook />
        </div>
    )
}

export default Friends;