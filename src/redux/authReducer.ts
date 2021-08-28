import {authAPI, securityAPI, usersAPI} from "../api/api";

const SET_USER_DATE = 'AUTH/SET_USER_DATE';
const SET_USER_AVATAR = 'AUTH/SET_USER_AVATAR';
const SET_ERROR = 'AUTH/SET_ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET_CAPTCHA_URL_SUCCESS';


export type initialStateType2= {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    userAva: string | null,
    isError: boolean,
    captchaUrl: string | null
}

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    userAva: null as string | null,
    isError: false,
    captchaUrl: null as string | null,
}
export type initialStateType= typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SET_USER_DATE:
         return {
                ...state,
             ...action.data,

            }

        case SET_USER_AVATAR:
            return {
                ...state,
                userAva: action.userAva,

            }
        case SET_ERROR:
            return {
                ...state,
                isError: action.Error,

            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        default:
            return state;

    }
}

type SetAuthUserDataDataType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATE,
    data: SetAuthUserDataDataType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_USER_DATE,
    data: {
        userId, email, login, isAuth
    }
})

type SetUserAvatarActionType = {
    type: typeof SET_USER_AVATAR,
    userAva: string
}
export const setUserAvatar = (avatar: string): SetUserAvatarActionType  => ({
    type: SET_USER_AVATAR,
    userAva: avatar
})

type SetErrorActionType = {
    type: typeof SET_ERROR,
    Error: boolean
}
export const setError = (Error: boolean): SetErrorActionType => ({
    type: SET_ERROR,
    Error
})

type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaUrl: string | null
}
export const getCaptchaUrlSuccess = (captchaUrl: string | null):GetCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
})



export const getAuthThunk = () =>async (dispatch: any) =>{
      let response = await authAPI.getAuth()
                if(response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true))
                    // usersAPI.getProfilePhoto()
                    //     .then(response => {
                    //         dispatch(setUserAvatar(response.photos.large))
                    //     })
                }
    }

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: any) =>async (dispatch: any) =>{

        let response = await authAPI.login(email, password, rememberMe, captcha)

                if(response.data.resultCode === 0) {
                    dispatch(getAuthThunk())
                    dispatch(setError(false))
                    dispatch(getCaptchaUrlSuccess(null))
                }
                 else  {
                    if (response.data.resultCode === 10){
                        dispatch(gerCaptchaUtl())
                    }
                       dispatch(setError(true))
                }
}

export const logOutThunk = () =>async (dispatch: any) =>{
    let response = await authAPI.logOut()
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
}
export const gerCaptchaUtl = () =>async (dispatch: any) =>{
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;