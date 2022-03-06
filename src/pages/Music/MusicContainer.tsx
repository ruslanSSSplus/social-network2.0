import {addSongActionCreator, songOnChangeActionCreator} from "../../redux/musicReducer";
import Music, {MapDispatchToPropsType, MapStateToPropsType} from "./Music";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";





let mapStateToProps = (state: AppStateType) => {
    return {
        songs: state.musics.songs,
        newsongtext: state.musics.newsongtext
    }
}



let MusicContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {songOnChangeActionCreator, addSongActionCreator})(Music)


export default MusicContainer;