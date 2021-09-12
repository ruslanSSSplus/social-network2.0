import {ProfileType} from "../Types/Types";
import {getUsersType, instance, ThreeParamsType} from "./api";

export const usersAPI = {
    getUsers(currentPage =1, pageSize = 10, term: string = '', friend: null | boolean = null) {
        return instance.get<getUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? "" : `&friend=${friend}`))
            .then(response => {
                return response.data
            })
    },
    getUsersFriends(){
        return instance.get<getUsersType>(`users`)
            .then(response => {
                return response.data
            })
    },


    getProfilePhoto(){
        return instance.get<ProfileType>(`profile/9`)
            .then(response => {
                return response.data
            })
    },
    getUnfollow(id: number){
        return instance.delete<ThreeParamsType>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(id: number){
        return instance.post<ThreeParamsType>(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

}