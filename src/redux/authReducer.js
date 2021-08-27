import {authAPI, securityAPI, usersAPI} from "../api/api";

const SET_USER_DATE = 'AUTH/SET_USER_DATE';
const SET_USER_AVATAR = 'AUTH/SET_USER_AVATAR';
const SET_ERROR = 'AUTH/SET_ERROR';
const GET_CAPTCHAURL_SUCCESS = 'AUTH/GET_CAPTCHAURL_SUCCESS';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    userAva: null,
    isError: false,
    captchaUrl: null
}


const authReducer = (state = initialState, action) => {

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
        case GET_CAPTCHAURL_SUCCESS:
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            }
        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATE,
    data: {
        userId, email, login, isAuth
    }
})

export const setUserAvatar = (avatar) => ({
    type: SET_USER_AVATAR,
    userAva: avatar
})

export const setError = (Error) => ({
    type: SET_ERROR,
    Error
})
export const getCaptchaUrlSuccess = (captchaUrl) => ({
    type: GET_CAPTCHAURL_SUCCESS,
    captchaUrl
})



export const getAuthThunk = () =>async (dispatch) =>{
      let response = await authAPI.getAuth()
                if(response.resultCode === 0) {
                    let {id, email, login} = response.data
                    dispatch(setAuthUserData(id, email, login, true))
                    usersAPI.getProfilePhoto()
                        .then(response => {
                            dispatch(setUserAvatar(response.photos.large))
                        })
                }
    }

export const loginThunk = (email, password, rememberMe, captcha) =>async (dispatch) =>{

        let response = await authAPI.login(email, password, rememberMe,captcha)

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

export const logOutThunk = () =>async (dispatch) =>{
    let response = await authAPI.logOut()
                if(response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
}
export const gerCaptchaUtl = () =>async (dispatch) =>{
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer;