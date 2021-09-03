import React from 'react';
import MyPosts, {MapStatePropsType} from "./MyPosts";
import {connect} from "react-redux";

import {AppStateType} from "../../../redux/reduxStore";
import {actions} from "../../../redux/profileReducer";





let mapStateToProps =(state: AppStateType) => {
    return {
        posts: state.profile.posts
    } as MapStatePropsType
}
// let mapDispatchToProps: ThunkType =(dispatch) => {
//     return {
//         addPostActionCreator: (newText: string, pic: string) => {
//             dispatch(addPostActionCreator(newText, pic))
//         },
//         deletePost: (id: number) =>{
//             dispatch(deletePost(id))
//         }
//     }
// }




 let MyPostsContainer = connect(mapStateToProps, {...actions } )(MyPosts);



export default MyPostsContainer;