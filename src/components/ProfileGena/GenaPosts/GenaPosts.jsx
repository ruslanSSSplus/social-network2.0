import React from 'react';
import classes from './GenaPosts.module.css'



const GenaPosts = (props) => {



  return <div className={classes.MyPostsAll}>
    <h3> My posts </h3>
    
    <div className={classes.CreateNewPost} >
      Create New Post
    </div>
    <div>
      <div>
                <textarea className={classes.text} />
      </div>
      <div>
        <button className={classes.button} >Send</button>
      </div>
    </div>

  </div>

}

export default GenaPosts;