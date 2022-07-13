import teni from '../assets/songsKISH/korol-i-shut-bluzhdajut-teni.mp3'
import durak from '../assets/songsKISH/korol-i-shut-durak-i-molnija.mp3'
import vampor from '../assets/songsKISH/korol-i-shut-ispoved-vampira.mp3'
import les from '../assets/songsKISH/korol-i-shut-khozjain-lesa.mp3'
import lesnik from '../assets/songsKISH/korol-i-shut-lesnik.mp3'
import anarkhist from '../assets/songsKISH/korol-i-shut-mertvyjj-anarkhist.mp3'
import nevesta from '../assets/songsKISH/korol-i-shut-nevesta-palacha.mp3'
import skala from '../assets/songsKISH/korol-i-shut-prygnu-so-skaly.mp3'
import severni from '../assets/songsKISH/korol-i-shut-severnyjj-flot.mp3'
import parij from '../assets/songsKISH/korol-i-shut-v-parizh-domojj.mp3'
import valet from '../assets/songsKISH/korol-i-shut-valet-i-dama.mp3'



const SET_CURRENT_SONG = 'AUDIO/SET_CURRENT_SONG';
const TOGGLE_RANDOM = 'AUDIO/TOGGLE_RANDOM';
const TOGGLE_REPEAT = 'AUDIO/TOGGLE_OPTIONS';
const TOGGLE_PLAYING = 'AUDIO/TOGGLE_PLAYING';
const SET_SONGS_ARRAY = 'AUDIO/SET_SONGS_ARRAY';

let initialState = {
    currentSong: 10,
    repeat: false,
    random: false,
    playing: false,
    audio: null,

    song_list : [
        {
            title: 'Блуждают тени',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl: teni
                },
        {
            title: 'Дурак и молния',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:durak },
        {
            title: 'Исповедь вампира',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:vampor},
        {
            title: 'Хозяин леса',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:les},
        {
            title: 'Лесник',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:lesnik},
        {
            title: 'Мертвый анархист',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:anarkhist},
        {
            title: 'Невеста палача',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:nevesta},
        {
            title: 'Прыгну со скалы',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:skala},
        {
            title: 'Северный флот',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:severni},
        {
            title: 'В Папиж домой',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:parij},
        {
            title: 'Валет и Дама',
            artistName: 'Король и Шут',
            albumTitle: "Прекрасный альбом, очень люблю",
            fileUrl:valet},
    ],


}


const audioReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SONGS_ARRAY:
            return {
                ...state,
                song_list: action.data,
            }
        case SET_CURRENT_SONG:
            return {
                ...state,
                currentSong: action.data,
                playing: true,
            }
        case TOGGLE_RANDOM:
            return {
                ...state,
                random: action.data,
            }
        case TOGGLE_REPEAT:
            console.log(action.data)
            return {
                ...state,
                repeat: action.data,
            }
        case TOGGLE_PLAYING:
            return {
                ...state,
                playing: action.data,
            }
        default:
            return state
    }
}


export const prevSongThunkCreater = (currentSong, songs) => {
    return async (dispatch) => {
            await dispatch(actions.SetCurrent(currentSong === 0? songs.length - 1 : currentSong - 1))
        }
    }


export const nextSongThunkCreater = (currentSong, songs, random=false) => {
    return (dispatch) => {
        dispatch(actions.togglePlaying(true))
        if (random) {
            return dispatch({
                type: SET_CURRENT_SONG,
                data: ~~(Math.random() * songs.length),
            })
        } else {
            dispatch(actions.SetCurrent(currentSong === songs.length - 1 ? 0 : currentSong + 1))
        }
    }
}


export const handleEndThunkCreater = (random, repeat, currentSong, song_list) => {
    return async (dispatch) => {
        if (random && !repeat) {
            return await dispatch({
                type: SET_CURRENT_SONG,
                data: ~~(Math.random() * song_list.length),
            })
        } else {
            if (repeat) {
                await  dispatch(nextSongThunkCreater(currentSong, song_list))
            } else
                console.log(2)
                return await  dispatch(nextSongThunkCreater(currentSong, song_list))
            }
        }
    }





export const actions = {
    songsSet: (songArr) => ({
        type: SET_SONGS_ARRAY, data: songArr,
    }),
    togglePlaying: (playing) => ({
        type: TOGGLE_PLAYING, data: !playing
    }),
    SetCurrent: (id) => ({
        type: SET_CURRENT_SONG, data: id
    }),
    toggleRepeat: (repeat) => ({
        type: TOGGLE_REPEAT, data: !repeat
    }),
    toggleRandom: (random) => ({
        type: TOGGLE_RANDOM, data: !random
    }),

}


export default audioReducer;