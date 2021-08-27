import React from 'react';
import classes from './MyPosts.module.css'
import AddPostFormik from "../../AddPostForm/AddPostForm";
import Post from "./Post/Post";


const MyPosts = (props)=> {
    let postDate = props.posts.map(el => <Post key={el.id} id={el.id} new={el.post} time={el.time} avatar={el.avatar} user={el.user} picture={el.picture} deletePost={props.deletePost}/>)


    return <div className={classes.MyPostsAll}>

        <h1> My posts </h1>

        <div className={classes.CreateNewPost}>
            <h2>Create New Post </h2>
        </div>
        <AddPostFormik addPostActionCreator={props.addPostActionCreator}/>
        <div className={classes.posts}>
            {postDate}
        </div>
    </div>

}




export default MyPosts;