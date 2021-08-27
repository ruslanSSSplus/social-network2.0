import React, {useEffect} from "react";
import {connect} from "react-redux";

import {
    addUserAC,
    getUsersThunk,
    unfollowThunk,
} from "../../../redux/friendsReducer";
import All from "./All";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";



const AllContainerHoook=(props)=> {





    useEffect( ()=>{
        props.getUsersThunk(props.isFriend)
    }, [])


        return <All
                users={props.users}
                addfriend={props.addUserAC}
                allFriendsAC={props.allFriendsAC}
                friends={props.friends}
                unfollowThunk={props.unfollowThunk}
            />
}
let mapStateToProps =(state) => {

    return {
        users: state.friends.users,
        friends: state.friends.friendDate,
        isFriend: state.friends.isFriend,
    }
}






export default compose(
    connect(mapStateToProps, {
    unfollowThunk,
    addUserAC,
    getUsersThunk
}),    withAuthRedirect,
)(AllContainerHoook)

