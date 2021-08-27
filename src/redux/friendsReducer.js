import {usersAPI} from "../api/api";
const ADD_USER = 'ADD_USER';
const FRIEND_CHECK = 'FRIEND_CHECK'
const FRIEND_REMOVE = 'FRIEND_REMOVE'
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_ITEMS_COUNT = 'SET_TOTAL_ITEMS_COUNT'
const IS_FETCHING = 'IS_FETCHING'


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

    ],
    users: [],
    pageSize: 10,
    totalItemsCount: 222,
    currentPage: 1,
    isFetching: true,
    isFriend: true

}
export const addUserAC = (id, avatarPhoto, name) => ({
    type: ADD_USER,
    id: id,
    avatar: avatarPhoto,
    name: name,
})


export const friendCheckAC = () => ({
    type: FRIEND_CHECK,
})
export const removeFriendAC = (idToRemove) => ({
    type: FRIEND_REMOVE,
    idToRemove: idToRemove
})
export const follow = (userId) => ({
    type: FOLLOW,
    userId
})
export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (p) => ({
    type: SET_CURRENT_PAGE,
    p,
})
export const setTotalItemsCount = (Count) => ({
    type: SET_TOTAL_ITEMS_COUNT,
    Count,
})
export const isFetchingDispatch = (isFetchingBOOL) => ({
    type: IS_FETCHING,
    isFetchingBOOL,
})


const friendsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_USER:
            let newFriendUSer = {
                id: action.id,
                name: action.name,
                surname: action.surname,
                avatar: action.avatar,
                link: '/profile/' + action.id,
            };
            return {
                ...state,
                friendDate: [newFriendUSer, ...state.friendDate]
            };

        case FRIEND_CHECK:
            return {
                ...state,
                isFriend: false
            }
        case FRIEND_REMOVE:
            return {
                ...state,
                friendDate: state.friendDate.filter((item) => item.id !== action.idToRemove)
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
        default:
            return state;
    }

}


export const getUsersThunkCreater = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(isFetchingDispatch(true))
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(isFetchingDispatch(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalItemsCount(response.totalCount))
    }
}

export const unfollowThunk = (id) => async (dispatch) => {
    if (id > 100000) {
        dispatch(removeFriendAC(id))
    } else {
        let response = await usersAPI.getUnfollow(id)
        if (response.resultCode === 0) {
            dispatch(unfollow(id))
            dispatch(removeFriendAC(id))
        }
    }
}
export const followThunk = (id, photo, name) => async (dispatch) => {
    let response = await usersAPI.getFollow(id)
    if (response.resultCode === 0) {
        dispatch(follow(id))
        photo != null
            ? dispatch(addUserAC(id, photo, name)) :
            dispatch(addUserAC(id, 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png', name))
    }
}
export const getUsersThunk = (isFriend) => async (dispatch) => {
    let response = await usersAPI.getUsersFriends()

    dispatch(setUsers(response.items))
    for (let i = 0; i < 10; i++) {
        dispatch(friendCheckAC(response.items[i].id))
        if (response.items[i].followed === true && isFriend) {
            dispatch(addUserAC(response.items[i].id, response.items[i].photos.large != null ?
                response.items[i].photos.large : 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png', response.items[i].name,))
        }
    }
    dispatch(friendCheckAC())
}
export default friendsReducer;