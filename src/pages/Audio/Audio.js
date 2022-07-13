import React from 'react';
import Header from "./components/header/Header";
import Playlist from "./components/playlist/Playlist";
import Actions from "./components/playlist/Actions";
import Controls from "./components/Controls";
import classes from "./audio.module.css";



const Audio = () => {


    return <div  className={classes.main}>
        <div className={classes.top}>

            <Header />
            <Actions />
            <Playlist />
        </div>
        <Controls />
    </div>
        }

export default Audio;