import React from 'react';
import classes from './Post.module.css'

type PropsType = {
    key: number
    id: number
    new: string
    time: string
    avatar: string
    user: string
    picture: string
    deletePost: ( id: number) => void
}

const Post: React.FC<PropsType> = (props) => {


    let deletePost = ()=>{
        props.deletePost(props.id)
    }

  return < div>

    <div className={classes.news}>

      <div className={classes.newsName}>

        <img src={props.avatar} className={classes.ava}  alt="Avatar"/>
        <span className={classes.mes}>
                        <span className={classes.user}  > {props.user}   </span>
                        <span className={classes.time}> {props.time}  </span>
                    </span>
      </div>

      <div className={classes.content}>
        {props.new}
      </div>
    <div>
      <img src={props.picture} className={classes.picture}  alt="picture"/>
        <button onClick={deletePost}> delete post </button>
    </div>
    </div>

  </div>

}

export default Post;