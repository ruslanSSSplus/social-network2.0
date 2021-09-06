import React from 'react';
import classes from './News.module.css'
import AddPostFormik from "../AddPostForm/AddPostForm";


import {PostsType} from "../../Types/Types";


type PropsType = {
    newsElements: Array<PostsType>
    addPostActionCreator: (newText: string, pic: string) => void

}


const News: React.FC<PropsType>  =(props) => {

    let newsElements = props.newsElements

    return (
        < div className={classes.content}>
           <div>

                   <AddPostFormik addPostActionCreator={props.addPostActionCreator}/>

           </div>
            {newsElements}
        </div>
    )
}

export default News;