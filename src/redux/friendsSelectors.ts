



// export  const getFriendsUsers =(state) =>{
//     return state.friends.users
// }
import {AppStateType} from "./reduxStore";

export  const getUsers =(state: AppStateType) =>{
    return state.friends.users
}
export  const getAPageSize =(state: AppStateType) =>{
    return state.friends.pageSize
}
export  const getTotalCount =(state: AppStateType) =>{
    return state.friends.totalItemsCount
}
export  const getCurrentPage =(state: AppStateType) =>{
    return state.friends.currentPage
}
export  const getisFetching =(state: AppStateType) =>{
    return state.friends.isFetching
}
export  const getUsersFilter =(state: AppStateType) =>{
    return state.friends.filter
}