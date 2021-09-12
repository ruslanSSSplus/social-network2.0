import axios from "axios";
import {photosType, ProfileType, UserType} from "../Types/Types";



export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '1c389392-606e-42a1-8d6e-0ba8e47b4434'
    }
});
export type itemsType = {
    name: string
    id: number
    photos: photosType
    status: string
    followed: boolean
}
export type getUsersType = {
    items: Array<itemsType>
    totalCount: number
    error: null | any
}




export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}
export enum ResultCodeWithCaptchaEnum  {
        CaptchaIsRequired = 10
}

export type getAuthType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export type loginType = {
    data: {
        userId: number
    }
    resultCode: ResultCodeEnum | ResultCodeWithCaptchaEnum
    messages: Array<string>
}




export type ThreeParamsType = {
    data: {
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}
export type savePhotoType = {
    data:
        {
            photos: photosType
        }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

