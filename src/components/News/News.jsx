import React from 'react';
import classes from './News.module.css'
import AddPostFormik from "../AddPostForm/AddPostForm";



const News =(props) => {

    let newsElements = props.newsElements

    return (
        < div className={classes.content}>
           <div>
               <div>
                   <AddPostFormik addPostActionCreator={props.addPostActionCreator}/>
               </div>
           </div>
            {newsElements}
        </div>
    )
}

export default News;