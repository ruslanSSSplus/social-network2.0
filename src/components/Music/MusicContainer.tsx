import React from 'react';
import {addSongActionCreator, songOnChangeActionCreator} from "../../redux/musicReducer";
import Music from "./Music";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";





let mapStateToProps = (state: AppStateType) => {
    return {
        songs: state.musics.songs,
        newsongtext: state.musics.newsongtext
    }
}



let MusicContainer = connect(mapStateToProps, {songOnChangeActionCreator, addSongActionCreator})(Music)


export default MusicContainer;