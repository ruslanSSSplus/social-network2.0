const ADD_SONG = 'ADD-SONG';
const UPDATE_NEW_SONG_TEXT = 'UPDATE-NEW-SONG-TEXT';



export type SongsType = {
    id: number
    nameSong: string
}

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
        ] as Array<SongsType>,
        newsongtext: "",
    count: 7
    }

export type initialStateType = typeof initialState

type ActionTypes = SongOnChangeActionCreatorType | AddSongActionCreatorType

const musicReducer = (state = initialState, action: ActionTypes): initialStateType => {


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
type SongOnChangeActionCreatorType = {
    type: typeof UPDATE_NEW_SONG_TEXT,
    newText: string
}
export const songOnChangeActionCreator = (text: string): SongOnChangeActionCreatorType => ({
    type: UPDATE_NEW_SONG_TEXT,
    newText: text
})
type AddSongActionCreatorType = {
    type: typeof ADD_SONG,
}
export const addSongActionCreator = (): AddSongActionCreatorType => ({type: ADD_SONG});

export default musicReducer;