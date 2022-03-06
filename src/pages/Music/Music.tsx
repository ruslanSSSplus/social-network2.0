import React, {ChangeEvent} from 'react';
import classes from './Music.module.css'
import EachSong from "./EachSong/EachSong";
import {SongsType} from "../../redux/musicReducer";


export type MapStateToPropsType = {
    songs: Array<SongsType>
    newsongtext: string

}
export type MapDispatchToPropsType = {
    songOnChangeActionCreator: (text: string) => void
    addSongActionCreator: () => void
}
type PropsType = MapDispatchToPropsType & MapStateToPropsType


const Music: React.FC<PropsType>  =(props) => {

    let songs = props.songs.map(el => <EachSong nameSong={el.nameSong} key={el.id}/>)




    let songOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.songOnChangeActionCreator(e.currentTarget.value)
    }
    let addSong = () => {
        props.addSongActionCreator();
    }


    return (
        < div className={classes.content}>
            <input value={props.newsongtext}
                      onChange={songOnChange}/>

        <button className={classes.button} onClick={addSong}>Add Song</button>
            <div className={classes.song}>
                {songs}
            </div>
        </div>
    )
}

export default Music;