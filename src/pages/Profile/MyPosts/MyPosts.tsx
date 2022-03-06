import React, {ChangeEvent} from 'react';
import classes from './MyPosts.module.css'
import AddPostFormik from "../../../components/AddPostForm/AddPostForm";
import Post from "./Post/Post";
import {PostsType} from "../../../Types/Types";
import {
    savePhoto,
} from "../../../redux/profileReducer";



export type MapStatePropsType = {
    posts: Array<PostsType>
}
type MapDispatchPropsType = {
    addPostActionCreator: (newText: string, pic: string) => void
    deletePost: ( id: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType
const MyPosts: React.FC<PropsType> = (props)=> {




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