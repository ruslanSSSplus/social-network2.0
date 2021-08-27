import React from 'react';
import classes from './Post.module.css'



const Post = (props) => {

    let deletePost = ()=>{
        props.deletePost(props.id)
    }

  return < div>

    <div className={classes.news}>

      <div className={classes.newsName}>

        <img src={props.avatar} className={classes.ava} />
        <span className={classes.mes}>
                        <span className={classes.user}  > {props.user}   </span>
                        <span className={classes.time}> {props.time}  </span>
                    </span>
      </div>

      <div className={classes.content}>
        {props.new}
      </div>
    <div>
      <img src={props.picture} className={classes.picture}/>
        <button onClick={deletePost}> delete post </button>
    </div>
    </div>

  </div>

}

export default Post;