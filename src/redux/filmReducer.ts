import {InferActionsTypes} from "./reduxStore";
import {filmAPI} from "../api/film-api";
const SET_CURRENT_PAGE = 'FILMS/SET_CURRENT_PAGE'
const ADD_FILM = 'FILMS/ADD_FILM';
const DELETE_FILM = 'FILMS/DELETE_FILM'
const LIKE_FILM = 'FILMS/LIKE_FILM'
const DISLIKE_FILM = 'FILMS/DISLIKE_FILM'

export type FilmType ={
    background_image: string
    background_image_original: string
    date_uploaded: string
    date_uploaded_unix: number
    description_full: string
    genres: Array<string>
    id: number
    imdb_code: string
    language: string
    large_cover_image: string
    medium_cover_image: string
    mpa_rating: string
    rating: number
    runtime: number
    slug: string
    small_cover_image:string
    state: string
    summary: string
    synopsis: string
    title: string
    title_english: string
    title_long: string
    torrents: any
url: string
year: number
yt_trailer_code: string
    like?: boolean
}


let initialState = {
    films: [] as Array<FilmType> | any,
    isLoading: true,
    currentPage: 1
}

export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>


const filmReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type){
        case ADD_FILM:
            return {...state, films: action.films, isLoading: false}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.p}
        }
        case DELETE_FILM: {
            return {...state, films: state.films.filter((item: FilmType) => item.id !== action.idToRemove)}
        }
        case LIKE_FILM: {
            let stateCopy = {...state}
            stateCopy.films = [...state.films]
            state.films.map((item: FilmType) => {
                if ( item.id === action.id)
                {
                    item.like = true
                    return item
                }return item})
                return stateCopy


        }
        case DISLIKE_FILM: {
            return {...state, films: state.films.filter((item: FilmType) => {
                if ( item.id === action.id){
                    item.like = false
                    return item
                }return item
                })}

        }
        default:
            return state;
    }


}

export const getFilmsThunkCreater = (pageNumber: number) => {
    return async (dispatch: any) => {
        dispatch(actions.setCurrentPage(pageNumber))
        const response = await filmAPI.getFilms(pageNumber)
        const response2 = response.map( (obj: FilmType) => {
            obj.like = false;
            return obj;
        })
        await dispatch(actions.allFilms(response2))
        }
    }



export const actions = {
    allFilms: (films: Array<FilmType>)  => ({
        type: ADD_FILM,
        films,
    } as const),
    setCurrentPage: (p: number) => ({
        type: SET_CURRENT_PAGE,
        p,
    } as const),
    deleteFilm: (idToRemove: number) => ({
        type: DELETE_FILM,
        idToRemove
    }as const),
    likeFilm: (id: number) => ({
        type: LIKE_FILM,
        id
    }as const),
    dislikeFilm: (id: number) => ({
        type: DISLIKE_FILM,
        id
    }as const),
}


export default filmReducer;