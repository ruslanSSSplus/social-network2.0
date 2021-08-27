import React from 'react';
import classes from './Music.module.css'



const Music =(props) => {

    let songs = props.songs




    let songOnChange = (e) => {
        let text = e.target.value;
        props.songOnChangeActionCreator(text)
    }
    let addSong = () => {
        props.addSongActionCreator();
    }


    return (
        < div className={classes.content}>
            <textarea value={props.newsongtext}
                      onChange={songOnChange}/>

        <button className={classes.button} onClick={addSong}>Add Song</button>
            <div className={classes.song}>
                {songs}
            </div>
        </div>
    )
}

export default Music;