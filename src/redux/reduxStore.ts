import {applyMiddleware, combineReducers, createStore, compose, Action} from "redux";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'

import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import musicReducer from "./musicReducer";
import friendsReducer from "./friendsReducer";
import sideBarReducer from "./sideBarReducer";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import chatReducer from "./chatReducer";
import filmReducer from "./filmReducer";
import mainTestReducer from "./mainTest";
import booksReducer from './books'
import animeReducer from "./animeReducer";
import testReducer from "./testReducer";
import catsReducer from "./catsReducer";
import audioReducer from "./audioReducer";


let rootReducer = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    musics: musicReducer,
    friends: friendsReducer,
    news: newsReducer,
    sideBar: sideBarReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
    film: filmReducer,
    book: booksReducer,
    anime: animeReducer,
    cats: catsReducer,
    test: testReducer,
    maintest: mainTestReducer,
    audio: audioReducer
})

type RootReducersType = typeof rootReducer
export type AppStateType = ReturnType<RootReducersType>


export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U} ? U : never
export type BaseThunkType <A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>



// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store

