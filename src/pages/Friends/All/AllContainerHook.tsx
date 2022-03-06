import React, {useEffect} from "react";
import {connect} from "react-redux";

import {actions, FriendDateType, getUsersThunk, unfollowThunk} from "../../../redux/friendsReducer";
import All from "./All";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../../redux/reduxStore";


type MapStatePropsType = {
    friends: Array<FriendDateType>
    isFriend: boolean
}

type MapDispatchPropsType = {
    getUsersThunk: (isFriend: boolean) => void
    unfollowThunk: (Id: number) => void
}

type OwnPropsType = {
    addUserAC: (id: number, avatarPhoto: string, name: string) => void

}

type all = MapStatePropsType & MapDispatchPropsType & OwnPropsType


const AllContainerHook: React.FC<all> =(props)=> {





    useEffect( ()=>{
        props.getUsersThunk(props.isFriend)
    }, [])


        return <All
                addfriend={props.addUserAC}
                friends={props.friends}
                unfollowThunk={props.unfollowThunk}
            />
}
let mapStateToProps =(state: AppStateType) => {

    return {
        friends: state.friends.friendDate,
        isFriend: state.friends.isFriend,
    }
}






export default compose<React.ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {unfollowThunk, getUsersThunk, ...actions}),
   // withAuthRedirect,
)(AllContainerHook)

