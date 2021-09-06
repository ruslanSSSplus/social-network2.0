import axios from "axios";
import {photosType, ProfileType, UserType} from "../Types/Types";



const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '1c389392-606e-42a1-8d6e-0ba8e47b4434'
    }
});
type itemsType = {
    name: string
    id: number
    photos: photosType
    status: string
    followed: boolean
}
type getUsersType = {
    items: Array<itemsType>
    totalCount: number
    error: null | any
}


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
    getProfile(userId: number | null){
        console.warn('obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    },

}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeWithCaptchaEnum  {
        CaptchaIsRequired = 10
}

type getAuthType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type loginType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeWithCaptchaEnum
    messages: Array<string>
}

export const authAPI = {
    getAuth() {
        return instance.get<getAuthType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(email: string, password: string, rememberMe=false, captcha: null | string = null){
        return instance.post<loginType>('auth/login', {email, password, rememberMe, captcha})
    },
    logOut(){
        return instance.delete<ThreeParamsType>('auth/login')
    }

}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}

type ThreeParamsType = {
    data: {
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type savePhotoType = {
    data:
        {
            photos: photosType
        }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const profileAPI = {
    getProfile(userId: number | null){
        return instance.get<ProfileType>(`profile/`+ userId)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status: string) {
        return instance.put<ThreeParamsType>(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File){
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<savePhotoType>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>res.data)
    },
    saveProfile(profile: ProfileType){
        return instance.put<ThreeParamsType>(`profile`, profile)
    }
}