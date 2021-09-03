import {authAPI, ResultCodeEnum, ResultCodeWithCaptchaEnum, securityAPI, usersAPI} from "../api/api";

import {BaseThunkType, InferActionsTypes} from "./reduxStore";

const SET_USER_DATE = 'AUTH/SET_USER_DATE';
const SET_USER_AVATAR = 'AUTH/SET_USER_AVATAR';
const SET_ERROR = 'AUTH/SET_ERROR';
const GET_CAPTCHA_URL_SUCCESS = 'AUTH/GET_CAPTCHA_URL_SUCCESS';


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
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

const authReducer = (state = initialState, action: ActionsType): initialStateType => {

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

export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: SET_USER_DATE,
        data: {
            userId, email, login, isAuth
        }} as const) ,
    setUserAvatar : (avatar: string | null)  => ({
        type: SET_USER_AVATAR,
        userAva: avatar
    }as const),
    setError: (Error: boolean) => ({
        type: SET_ERROR,
        Error
    }as const),
    getCaptchaUrlSuccess: (captchaUrl: string | null) => ({
        type: GET_CAPTCHA_URL_SUCCESS,
        captchaUrl
    }as const)
}


export const getAuthThunk = (): ThunkType =>async (dispatch) =>{
      let response = await authAPI.getAuth()
                if(response.resultCode === ResultCodeEnum.Success) {
                    let {id, email, login} = response.data
                    dispatch(actions.setAuthUserData(id, email, login, true))
                    usersAPI.getProfilePhoto()
                        .then(response => {
                            dispatch(actions.setUserAvatar(response.photos.small))
                         })
                }
    }

export const loginThunk = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType =>async (dispatch) =>{

        let response = await authAPI.login(email, password, rememberMe, captcha)

                if(response.data.resultCode === ResultCodeEnum.Success) {
                  await  dispatch(getAuthThunk())
                    dispatch(actions.setError(false))
                    dispatch(actions.getCaptchaUrlSuccess(null))
                }
                 else  {
                    if (response.data.resultCode === ResultCodeWithCaptchaEnum.CaptchaIsRequired){
                        await  dispatch(gerCaptchaUtl())
                    }
                       dispatch(actions.setError(true))
                }
}

export const logOutThunk = (): ThunkType =>async (dispatch) =>{
    let response = await authAPI.logOut()
                if(response.data.resultCode === ResultCodeEnum.Success) {
                    dispatch(actions.setAuthUserData(null, null, null, false))
                }
}
export const gerCaptchaUtl = (): ThunkType =>async (dispatch) =>{
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
        dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;