// import {usersAPI} from "../api/api";
//
// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';
// const SET_USERS = 'SET-USERS'
// const SET_CURRENT_PAGE= 'SET-CURRENT-PAGE'
// const SET_TOTAL_USERS_COUNT= 'SET_TOTAL_USERS_COUNT'
// const IS_FETCHING = 'IS_FETCHING'
//
//
// let initialState = {
//     users: [ ],
//     pageSize: 10,
//     totalUsersCount: 21,
//     currentPage: 1,
//     isFetching: true,
// }
//
//
// const usersReducer = (state = initialState, action) => {
//
//     switch (action.type) {
//         case FOLLOW:
//          return {
//                 ...state,
//                 users: state.users.map(u => {
//                     if (u.id === action.userId){
//                         return { ...u, followed: true}
//                     }
//                     return u;
//                 })
//             }
//
//         case UNFOLLOW:
//             return {
//                 ...state,
//                 users: state.users.map(u => {
//                     if (u.id === action.userId){
//                         return { ...u, followed: false}
//                     }
//                     return u;
//                 })
//             }
//
//         case SET_USERS: {
//             return {...state, users: [...action.users]}
//         }
//
//         case SET_CURRENT_PAGE: {
//             return {...state, currentPage: action.p}
//         }
//         case SET_TOTAL_USERS_COUNT: {
//             return {...state, totalUsersCount: action.Count}
//         }
//         case IS_FETCHING: {
//             return {...state, isFetching: action.isFetchingBOOL}
//         }
//         default:
//             return state;
//
//     }
// }
//
// export const follow = (userId) => ({
//     type: FOLLOW,
//     userId
// })
// export const unfollow = (userId) => ({
//     type: UNFOLLOW,
//     userId
// })
// export const setUsers = (users) => ({
//     type: SET_USERS,
//     users
// })
// export const setCurrentPage = (p) => ({
//     type: SET_CURRENT_PAGE,
//     p,
// })
// export const setTotalUsersCount = (Count) => ({
//     type: SET_TOTAL_USERS_COUNT,
//     Count,
// })
// export const isFetchingDispatch = (isFetchingBOOL) => ({
//     type: IS_FETCHING,
//     isFetchingBOOL,
// })
//
// export const getUsersThunkCreater= (currentPage, pageSize) =>{
//     return (dispatch) =>{
//     dispatch(isFetchingDispatch(true))
//     usersAPI.getUsers(currentPage, pageSize).then(response => {
//         dispatch(setCurrentPage(currentPage))
//         dispatch(isFetchingDispatch(false))
//         dispatch(setUsers(response.items))
//         dispatch(setTotalUsersCount(response.totalCount))
//     });
// }
// }
//
// export const unfollowThunk = (id, photo, name) =>{
//     return (dispatch) =>{
//         usersAPI.getUnfollow(id)
//             .then(response => {
//                 if (response.resultCode ===0) {
//                     dispatch.unfollow(id)
//                     dispatch.removeFriendAC(id)
//                 }
//             });
//     }
// }
// export const followThunk = (id, photo, name) =>{
//     return (dispatch) =>{
//         usersAPI.getFollow(id)
//             .then(response => {
//                 if (response.resultCode ===0) {
//                     follow(id)
//                     photo != null
//                         ?  dispatch.addUserAC(id, photo, name) :
//                         dispatch.addUserAC(id, 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png', name)
//                 }
//             });
//     }
// }



