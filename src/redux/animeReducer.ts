import {InferActionsTypes} from "./reduxStore";
import {animeAPI} from "../api/anime-api";
const ADD_ANIME = 'ANIME/ADD_ANIME';
const ADD_ANIMES = 'ANIME/ADD_ANIMES';
const DELETE_ANIME = 'ANIME/DELETE_ANIME'
const LIKE_ANIME = 'ANIME/LIKE_ANIME'
const DISLIKE_ANIME = 'ANIME/DISLIKE_ANIME'
const NEW_SEARCH = 'ANIME/NEW_SEARCH'
const SET_CURRENT_PAGE = 'ANIME/SET_CURRENT_PAGE'

export type AnimesType ={
    attributes: {
        posterImage: {
            large: string
        } | null,
        description: string,

        popularityRank: number,
        titles: {
            en: string
        }
        episodeCount: number,
        startDate: string,
        status: string
    },
    id: number,
    like: boolean,
    type: string
}



let initialState = {
    animes: [] as Array<AnimesType> | any,
    isLoading: true,
    searchField: '',
    currentPage: 1
}

export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>


const animeReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type){
        case ADD_ANIME:
            return {...state, animes: action.animes, isLoading: false}
        case DELETE_ANIME: {
            return {...state, animes: state.animes.filter((item: AnimesType) => item.id !== action.idToRemove)}
        }
        case LIKE_ANIME: {
            let stateCopy = {...state}
            stateCopy.animes = [...state.animes]
            state.animes.map((item: AnimesType) => {
                if ( item.id === action.id)
                {
                    item.like = true
                    return item
                }return item})
                return stateCopy
        }
        case DISLIKE_ANIME: {
            return {...state, animes: state.animes.filter((item: AnimesType) => {
                if ( item.id === action.id){
                    item.like = false
                    return item
                }return item
                })}

        }
        case ADD_ANIMES:

            return {...state, animes: action.data,}
        case NEW_SEARCH:
            return {...state, searchField: action.text,}
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.p}
        }
        default:
            return state;
    }


}

export const getAnimesThunkCreater = (pageNumber: number, searchField: string) => {
    return async (dispatch: any) => {
        dispatch(actions.setCurrentPage(pageNumber))
        const response = await animeAPI.getAnimes(pageNumber, searchField)
        await dispatch(actions.allAnimes(response))
        }
    }


export const actions = {
    allAnimes: (animes: Array<AnimesType>)  => ({
        type: ADD_ANIME,
        animes,
    } as const),

    deleteAnime: (idToRemove: number) => ({
        type: DELETE_ANIME,
        idToRemove
    }as const),
    likeAnime: (id: number) => ({
        type: LIKE_ANIME,
        id
    }as const),
    dislikeAnime: (id: number) => ({
        type: DISLIKE_ANIME,
        id
    }as const),
    addAnimes: (data: Array<AnimesType>) => ({
        type: ADD_ANIMES,
        data,
    } as const),
    handleSearchAC: (text: string) => ({
        type: NEW_SEARCH,
        text
    } as const),
    setCurrentPage: (p: number) => ({
        type: SET_CURRENT_PAGE,
        p,
    } as const),
}


export default animeReducer;