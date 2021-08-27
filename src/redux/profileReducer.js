import {getNewMassiv} from "./newsReducer";
import {profileAPI, usersAPI} from "../api/api";
import {setError} from "./authReducer";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTO = 'SET_PHOTO'
const SET_ERROR = 'profile/SET_ERROR';

let initialState = {

    posts: [

        {
            id: 1,
            post: 'First Friend GEna DaUn',
            user: 'Гена',
            time: 'сегодня в 11 утра',
            picture: 'https://sun9-35.userapi.com/impf/c846522/v846522118/18d9eb/E5pvZnPh9hU.jpg?size=1920x1080&quality=96&sign=028f51047f18db27b0be9c3f5f266980&type=album',
            avatar: 'https://sun9-75.userapi.com/impg/aYFVgULQds2uRK4ftm0VLGIE2pI63Pua3beoPg/d1vQS_fajKI.jpg?size=695x1056&quality=96&sign=e5baf9a52d7ac0e40e6a4fe9b9338c4c&type=album'
        },
        {
            id: 2,
            time: 'сегодня',
            post: ')))',
            user: 'Gena',
            avatar: 'https://sun9-75.userapi.com/impg/aYFVgULQds2uRK4ftm0VLGIE2pI63Pua3beoPg/d1vQS_fajKI.jpg?size=695x1056&quality=96&sign=e5baf9a52d7ac0e40e6a4fe9b9338c4c&type=album',

            picture: 'https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg',
        },
        {
            id: 3,
            post: '1111',
            user: 'Pavel  -   ',
            time: 'сегодня в ',
            picture: 'https://99px.ru/sstorage/53/2020/12/mid_318736_308803.jpg',
            avatar: 'https://sun9-44.userapi.com/impg/UACJRHqPtJbLkJ0-VD5mB4N7QZc1z5lMli1gyA/CCQgY0fVx8Y.jpg?size=810x1080&quality=96&sign=a0025252fa6bb8f7f6b5b55a9719902e&type=album'
        },

        {
            id: 4,
            post: '222222222',
            user: 'Maks  -   ',
            time: 'сегодня в 11 ',
            picture: 'https://oir.mobi/uploads/posts/2021-03/1616973116_8-p-fon-dlya-rabochego-stola-zhivie-oboi-9.jpg',
            avatar: 'https://sun9-41.userapi.com/impg/QiItVXppdk3B8LT7Yd31GixhGUoETDPGeS82UQ/-gHFtJx41Uc.jpg?size=1080x1350&quality=96&sign=2035d42234fdc4238f96632232064a4b&type=album'
        },
        {
            id: 5,
            post: '33333333333333',
            user: 'Ga4ibyan  -   ',
            time: 'сегодня в 11 утра',
            picture: 'https://wallpapershome.ru/images/pages/ico_h/21906.jpg',
            avatar: 'https://sun9-44.userapi.com/impg/3ueMAfcHjkVqJK_R-QFh2Vy3fb5voGKMOZFGBA/LEmwuBvrp0g.jpg?size=1440x2160&quality=96&sign=51dab95706014952c015588c5c4f3bbc&type=album'
        }
    ],

    profile: null,
    status: '',
    countPosts: 6,
    isError: false,
}


let newsImport = getNewMassiv();


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: {...state.countPosts},
                post: action.newText,
                user: 'Вы  ',
                avatar: "https://n1s1.hsmedia.ru/30/a5/50/30a550ad429dc5b67118ec6c0a984137/620x440_1_61ebd8b8b757e8b7e6e0c8e6d9f2efbe@2055x1459_0xc0a839a2_12152610071478613656.jpeg",
                picture: action.pic,
                time: 'сейчас',
            };
            newsImport.unshift(newPost)
            return {
                ...state,
                posts: [newPost, ...state.posts],
                countPosts: state.countPosts + 1
            };
        }


        case SET_USERS_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_STATUS: {
            return {...state, status: action.status};
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter((item) => item.id !== action.idToRemove)}
        }
        case SET_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos}};
        }
        case SET_ERROR:
            debugger
            return {
                ...state,
                isError: action.Error,

            }
        default:
            return state;
    }

}

export const addPostActionCreator = (newText, pic) => ({
    type: ADD_POST,
    newText,
    pic
})
export const deletePost = (idToRemove) => ({
    type: DELETE_POST,
    idToRemove
})


export const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE,
    profile: profile,
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const savePhotoSuccess = (photos) => ({
    type: SET_PHOTO,
    photos
})
export const setErrorProfile = (Error) => ({
    type: SET_ERROR,
    Error
})

export const getProfileThunk = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUsersProfile(response.data));
}
export const getStatusThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}
export const updateStatusThunk = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0){
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0){
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {

    const userId= getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    debugger
    if (response.data.resultCode === 0){
        dispatch(getProfileThunk(userId));
        dispatch(setErrorProfile(false))
    }

    else {
        dispatch(setErrorProfile(true))
        return Promise.reject()
    }
}
export default profileReducer;