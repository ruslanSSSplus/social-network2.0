import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import musicReducer from "./musicReducer";
import friendsReducer from "./friendsReducer";
import sideBarReducer from "./sideBarReducer";
import newsReducer from "./newsReducer";
import authReducer from "./authReducer";
import thunkMiddleware  from 'redux-thunk'
import appReducer from "./appReducer";


let reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogReducer,
    musics: musicReducer,
    friends: friendsReducer,
    news: newsReducer,
    sideBar: sideBarReducer,
    auth: authReducer,
    app: appReducer

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;