import React from 'react';
import Post from './Post/Post';
import {addPostActionCreator, deletePost} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

import {connect} from "react-redux";

let mapStateToProps =(state) => {
    return {
        posts: state.profile.posts
    }
}
let mapDispatchToProps =(dispatch) => {
    return {
        addPostActionCreator: (newText, pic) => {
            dispatch(addPostActionCreator(newText, pic))
        },
        deletePost: (id) =>{
            dispatch(deletePost(id))
        }
    }
}




 let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);



export default MyPostsContainer;