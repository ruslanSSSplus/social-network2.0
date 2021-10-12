
import { UserType} from "../Types/Types";
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {usersAPI} from "../api/user-api";

const ADD_USER = 'ADD_USER';
const FRIEND_CHECK = 'FRIEND_CHECK'
const FRIEND_REMOVE = 'FRIEND_REMOVE'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT'
const IS_FETCHING = 'IS_FETCHING'
const SET_FILTER = 'SET_FILTER'

export type FriendDateType = {
    id: number,
    link: string,
    name: string,
    avatar: string,
    surname: string,
    friendsAlready: boolean,

}



let initialState = {
    friendDate: [
        {
            id: 1111111,
            link: '/https://vk.com/dank_af',
            name: 'Геннадий',
            avatar: 'https://meragor.com/files/styles//ava_800_800_wm/ava-241.jpg',
            surname: 'Льянов',
            friendsAlready: true,
        },
        {
            id: 2222222,
            link: 'https://vk.com/get_imba',
            name: 'Тимур',
            surname: 'Льянов',
            avatar: 'https://i.pinimg.com/originals/d2/27/67/d22767e3ecd58f14c839092e1dfe3852.jpg',
            friendsAlready: true,
        },
        {
            id: 333333,
            link: 'https://vk.com/evgeniasims',
            name: 'Евгения',
            surname: 'Хайретдинов',
            avatar: 'http://sun9-67.userapi.com/s/v1/ig2/6JU7DbnLm46xuMVj9w2gHBOoagBCXOCkTilVO__oHcVOxVdwYVIxZAfEKG7R9_EnXUb-CLjsqkl-cuetoovsmwDU.jpg?size=200x0&quality=96&crop=1,1,1197,1197&ava=1',
            friendsAlready: true,
        },
        {
            id: 4444444,
            link: 'https://vk.com/id153839551',
            name: 'Кекс',
            surname: 'Слесырев',
            avatar: 'https://anime-fans.ru/wp-content/uploads/2021/01/Ochen-smeshnye-anime-avy_01.jpg',
            friendsAlready: true,
        },

    ] as Array<FriendDateType> | any,

    users: [] as Array<UserType>,
    pageSize: 10,
    totalItemsCount: 222,
    currentPage: 1,
    isFetching: true,
    isFriend: true,
    filter: {
        term: '',
        friend: null as null | boolean
    }
}
type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsType = InferActionsTypes<typeof actions>




export const actions = {
    friendCheckAC :() => ({
        type: FRIEND_CHECK,
    } as const),
    removeFriendAC:(idToRemove: number) => ({
        type: FRIEND_REMOVE,
        idToRemove: idToRemove
    } as const),
    follow:(userId: number) => ({
        type: FOLLOW,
        userId
    } as const),
    unfollow:(userId:number) => ({
        type: UNFOLLOW,
        userId
    } as const),
    setUsers:(users: Array<UserType>) => ({
        type: SET_USERS,
        users
    } as const),
    addUserAC:(id: number, avatarPhoto: string | null, name: string) => ({
        type: ADD_USER,
        id: id,
        surname: null,
        avatar: avatarPhoto,
        name: name,
    } as const),
    isFetchingDispatch: (isFetchingBOOL: boolean)  => ({
        type: IS_FETCHING,
        isFetchingBOOL,
    } as const),
    setTotalItemsCount :(Count: number) => ({
        type: SET_TOTAL_ITEMS_COUNT,
        Count,
    } as const),
    setCurrentPage: (p: number) => ({
        type: SET_CURRENT_PAGE,
        p,
    } as const),
    setFilter: (filter: FilterType) => ({
        type: SET_FILTER,
        payload: filter
    } as const),
}


const friendsReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {

        case ADD_USER:
            let stateCopy = {...state}
            let friendDateSet = [...stateCopy.friendDate]
            let friendsCollection = new Set(friendDateSet)
            let newFriendUser = {
                id: action.id,
                name: action.name,
                surname: action.surname,
                avatar: action.avatar,
                link: '/profile/' + action.id,
                friendsAlready: true
            };
            friendsCollection.add(newFriendUser)
            return {
                ...state,
                friendDate: Array.from(friendsCollection)
            };

        case FRIEND_CHECK:
            return {
                ...state,
                isFriend: false
            }
        case FRIEND_REMOVE:
            return {
                ...state,
                friendDate: state.friendDate.filter((item: any) => item.id !== action.idToRemove)
            }


        case UNFOLLOW:
            return {
                ...state,

                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }


        case SET_USERS: {
            return {...state, users: [...action.users]}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.p}
        }
        case SET_TOTAL_ITEMS_COUNT: {
            return {...state, totalItemsCount: action.Count}
        }
        case IS_FETCHING: {
            return {...state, isFetching: action.isFetchingBOOL}
        }
        case SET_FILTER: {
            return {...state, filter: action.payload}
        }
        default:
            return state;
    }

}

export type ThunkType = BaseThunkType<ActionsType>

export const getUsersThunkCreater = (currentPage: number,
                                     pageSize: number,
                                     filter: FilterType): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.isFetchingDispatch(true))
        dispatch(actions.setCurrentPage(currentPage))
        dispatch(actions.setFilter(filter))
        let response = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
            dispatch(actions.isFetchingDispatch(false))
            dispatch(actions.setUsers(response.items))
            dispatch(actions.setTotalItemsCount(response.totalCount))
    }
}
export const getUsersThunk = (isFriend: boolean): ThunkType => async (dispatch) => {
    let response = await usersAPI.getUsersFriends()
    for (let i = 0; i < 10; i++) {
        if (response.items[i].followed === true && isFriend) {
            dispatch(actions.addUserAC(response.items[i].id, response.items[i].photos.large != null ?
                response.items[i].photos.large : 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png', response.items[i].name,))
        }
    }
    dispatch(actions.friendCheckAC())
}
export const unfollowThunk = (id: number): ThunkType => async (dispatch) => {
    if (id > 100000) {
        dispatch(actions.removeFriendAC(id))
    } else {
        let response = await usersAPI.getUnfollow(id)
        if (response.resultCode === 0) {
            dispatch(actions.unfollow(id))
            dispatch(actions.removeFriendAC(id))
        }
    }
}
    export const followThunk = (id: number, photo: string | null, name: string): ThunkType => async (dispatch ) => {
    let response = await usersAPI.getFollow(id)
    if (response.resultCode === 0) {
        dispatch(actions.follow(id))
        photo != null
            ? dispatch(actions.addUserAC(id, photo, name)) :
            dispatch(actions.addUserAC(id, 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png', name))
    }
}

export default friendsReducer;