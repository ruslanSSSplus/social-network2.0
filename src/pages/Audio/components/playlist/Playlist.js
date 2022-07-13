import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {actions} from "../../../../redux/audioReducer";
import classes from "../../audio.module.css";
import {CaretRightOutlined, HeartOutlined, SaveOutlined} from "@ant-design/icons";


function Playlist() {
  const { currentSong, song_list } = useSelector((state) => state.audio)
    const dispatch = useDispatch()

  return (
    <div className="playlist no_drag">
      <ul className={classes.loi}>
        {song_list.map((song, i) => (
          <li
              className={currentSong === i ? classes.songContainerSelected : classes.songContainer}
            key={i}
            onClick={() => {
              dispatch(actions.SetCurrent(i))
            }}
          >
            <div className={classes.tmbn_song}>
                <CaretRightOutlined className={classes.tmbn_song1}/>
            </div>
            <div className={classes.songmeta_playlist}>
              <span className={classes.songname}>{song.title}</span>
              <span className={classes.songauthors}>{song.artistName}</span>
            </div>
            <div className={classes.playlist_btns_group}>
              <button className="fav_song playlist_btn">
                  <HeartOutlined className={classes.bttn3}/>
              </button>
              <button className="options_song playlist_btn">
                  <SaveOutlined className={classes.bttn3} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Playlist
