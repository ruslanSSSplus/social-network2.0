import {catsAPI} from "../api/cats-api";

const NEW_CATS = 'CATS/NEW_CATS';
const NEW_CURRENT_PAGE = 'CATS/NEW_CURRENT_PAGE';
const SET_FETCHING = 'CATS/SET_FETCHING';
const SET_FAVORITE = 'CATS/SET_FAVORITE';
const DELETE_FAVORITE = 'CATS/DELETE_FAVORITE';

let initialState = {
    cats: [],
    currentPage: 1,
    isFetching: true,
    favorite: []
}


const catsReducer = (state = initialState, action) => {
    switch (action.type) {

        case NEW_CATS:
            return {...state, cats: [...state.cats, ...action.cats]}
        case SET_FETCHING:
            return {...state, isFetching: action.bool}
        case NEW_CURRENT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1
            };
        case SET_FAVORITE:
            let stateCopy = {...state}
            let favoriteCopy = [...stateCopy.cats]
            let cat = favoriteCopy.find(cat => cat.id === action.id)
            return {...state, favorite: [...state.favorite, cat]}
        case DELETE_FAVORITE:
            return {...state, favorite: state.favorite.filter((item) => item.id !== action.idToRemove)}
        default:
            return state;
    }
}


export const getNewCatsThunkCreater = (currentPage) => {
    return async (dispatch) => {
        let response = await catsAPI.getCats(currentPage)
        await dispatch(actions.getNewCats(response))
        dispatch(actions.setPage())
        dispatch(actions.setFetching(false))
    }
}


export const actions = {
    getNewCats: (cats) => ({
        type: NEW_CATS, cats,
    }),
    setFetching: (bool) => ({
        type: SET_FETCHING, bool,
    }),
    setPage: () => ({
        type: NEW_CURRENT_PAGE,
    }),
    addFav: (id) => ({
        type: SET_FAVORITE, id
    }),
    deleteFav: (idToRemove) => ({
        type: DELETE_FAVORITE, idToRemove
    }),
}


export default catsReducer;