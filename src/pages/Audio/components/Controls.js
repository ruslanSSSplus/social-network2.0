import React, { useState, useEffect, useRef } from 'react'
import {
    StepBackwardOutlined, PauseCircleOutlined,StepForwardOutlined ,CaretRightOutlined,
    SoundOutlined, ReloadOutlined, SwapOutlined
} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {actions, handleEndThunkCreater, nextSongThunkCreater, prevSongThunkCreater} from "../../../redux/audioReducer";
import classes from "../audio.module.css";

function Controls() {

  const dispatch = useDispatch()
  const {currentSong,
    repeat,
    random,
    playing,
    song_list} = useSelector((state) => state.audio)



  const audio = useRef('audio_tag')

  // self State
  const [statevolum, setStateVolum] = useState(0.3)
  const [dur, setDur] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const fmtMSS = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s
  }

  const toggleAudio = () =>
    audio.current.paused ? audio.current.play() : audio.current.pause()

  const handleVolume = (q) => {
    setStateVolum(q)
    audio.current.volume = q
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100
    setCurrentTime(compute)
    audio.current.currentTime = compute
  }

  useEffect(() => {
    audio.current.volume = statevolum
    if (playing) {
      toggleAudio()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSong])

  return (
    <div className={classes.controls}>
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDur(e.target.duration)}
        onEnded={()=> dispatch(handleEndThunkCreater(random, repeat, currentSong, song_list))}
        ref={audio}
        type="audio/mpeg"
        preload="true"
        src={song_list[currentSong].fileUrl}
      />
      <div className={classes.vlme}>
        <span className={classes.volum}>
         <SoundOutlined className={classes.bttn1}/>
        </span>
        <input
          value={Math.round(statevolum * 100)}
          type="range"
          name="volBar"
          id="volBar"
          onChange={(e) => handleVolume(e.target.value / 100)}
        />
      </div>
      <div className={classes.musicControls}>
        <span className={classes.prev} onClick={ ()=>  dispatch(prevSongThunkCreater(currentSong, song_list))}>
        <StepBackwardOutlined className={classes.bttn1}/>
        </span>

        <span
            className={classes.play}
          onClick={() => {
            dispatch(actions.togglePlaying(playing))
            toggleAudio()
          }}
        >
          <span className={!playing ? null : classes.hide}>
          <CaretRightOutlined className={classes.bttn3}/>
          </span>
          <span className={!playing ? classes.hide : null }>
            <PauseCircleOutlined className={classes.bttn3}/>
          </span>
        </span>

        <span className={classes.next} onClick={ ()=>  dispatch(nextSongThunkCreater(currentSong, song_list, random))}>
         <StepForwardOutlined className={classes.bttn1}/>
        </span>
      </div>

      <div className={classes.progressb}>
        <div className={classes.songMeta}>
          <span className={classes.songtitle}>{song_list[currentSong].title}</span>
          <span className={classes.songartistName}>
            {song_list[currentSong].artistName}
          </span>
        </div>
        <input
          onChange={handleProgress}
          value={dur ? (currentTime * 100) / dur : 0}
          type="range"
          name="progresBar"
          id="prgbar"
        />
        <span className={classes.currentT}>{fmtMSS(currentTime)}</span>/
        <span className={classes.totalT}>{fmtMSS(dur)}</span>
      </div>
      <div className={classes.plsoptions}>
        <span
          onClick={()=> dispatch(actions.toggleRandom(random))}
          className={'random ' + (random ? 'active' : '')}
        >
         <SwapOutlined className={random ? classes.bttn2 : classes.bttn1}/>
        </span>
        <span
          onClick={()=> dispatch(actions.toggleRepeat(repeat))}
          className={'repeat ' + (repeat ? 'active' : '')}
        >
         <ReloadOutlined className={repeat ? classes.bttn2 : classes.bttn1 }/>
        </span>
      </div>
    </div>
  )
}

export default Controls
