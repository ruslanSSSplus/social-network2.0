import React from 'react';
import EachSong from "./EachSong/EachSong";
import {addSongActionCreator, songOnChangeActionCreator} from "../../redux/musicReducer";
import Music from "./Music";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        songs: state.musics.songs.map(el => <EachSong nameSong={el.nameSong} key={el.id}/>),
        newsongtext: state.musics.newsongtext
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        songOnChangeActionCreator: (text)=> {
            dispatch(songOnChangeActionCreator(text))
        },
        addSongActionCreator: () => {
            dispatch(addSongActionCreator());
        }
    }
}


let MusicContainer = connect(mapStateToProps, mapDispatchToProps)(Music)


export default MusicContainer;