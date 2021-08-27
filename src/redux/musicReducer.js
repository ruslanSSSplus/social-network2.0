const ADD_SONG = 'ADD-SONG';
const UPDATE_NEW_SONG_TEXT = 'UPDATE-NEW-SONG-TEXT';

let initialState = {

        songs: [
            {
                id: 1, nameSong: 'gachimuchi -' +
                    ' А как насчёт ♂?♂'
            },
            {
                id: 2, nameSong: 'GACHIMUCHI -' +
                    ' Чудо (right version)'
            },
            {
                id: 3, nameSong: 'gachimuchi -' +
                    ' ♂️Филипп Киркоров - Это не снег♂'
            },
            {
                id: 4, nameSong: 'gachimuchi -' +
                    ' ♂️Спокойная ночь - Кино♂'
            },
            {
                id: 5, nameSong: 'GachiMuchi -' +
                    ' Я назову планету'
            },
        ],
        newsongtext: "",
    count: 7
    }



const musicReducer = (state = initialState, action) => {


    switch (action.type){
        case ADD_SONG: {
            let newSong = {
                id: state.count,
                nameSong: state.newsongtext,

            };
            return {...state,
                songs: [newSong, ...state.songs],
                newsongtext: '',
                count: state.count+1
            };
        }
        case UPDATE_NEW_SONG_TEXT:
            return  {...state,
                newsongtext: action.newText
            }
        default:
            return state;
    }

}

export const songOnChangeActionCreator = (text) => ({type: "UPDATE-NEW-SONG-TEXT", newText: text})

export const addSongActionCreator = () => ({type: 'ADD-SONG'});

export default musicReducer;