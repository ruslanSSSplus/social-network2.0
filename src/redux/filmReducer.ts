import {InferActionsTypes} from "./reduxStore";
import {filmAPI} from "../api/film-api";
const SET_CURRENT_PAGE = 'FILMS/SET_CURRENT_PAGE'
const ADD_FILM = 'FILMS/ADD_FILM';
const IS_LOADING = 'FILMS/IS_LOADING'
const DELETE_FILM = 'FILMS/DELETE_FILM'

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
                return {...state, films: [action.films]}
        case IS_LOADING:
            return {...state, isLoading: action.is}

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.p}
        }
        case DELETE_FILM: {
            debugger

            return {...state, films: state.films.filter((item: FilmType) => item.id !== action.idToRemove)}

        }
        default:
            return state;
    }


}

export const getFilmsThunkCreater = (pageNumber: number) => {
    return async (dispatch: any) => {
        dispatch(actions.setCurrentPage(pageNumber))
        let response = await filmAPI.getFilms(pageNumber)
        await dispatch(actions.allFilms(response))
        await dispatch(actions.isLoading(false))
        }
    }


export const actions = {
    allFilms: (films: Array<FilmType>)  => ({
        type: ADD_FILM,
        films,
    } as const),
    isLoading: (is: boolean)  => ({
        type: IS_LOADING,
        is,
    } as const),
    setCurrentPage: (p: number) => ({
        type: SET_CURRENT_PAGE,
        p,
    } as const),
    deleteFilm: (idToRemove: number) => ({
        type: DELETE_FILM,
        idToRemove
    }as const),
}


export default filmReducer;