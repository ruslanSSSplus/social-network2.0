
import {BaseThunkType, InferActionsTypes} from "./reduxStore";

import {chatApi, ChatMessageType} from "../api/chat-api"
import {Dispatch} from "redux";

const SET_RECEIVED = 'CHAT/SET_RECEIVED';

let initialState = {
   messages: [] as ChatMessageType[]
}

export type initialStateType= typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
// type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

const chatReducer = (state = initialState, action: ActionsType): initialStateType => {

    switch (action.type) {
        case SET_RECEIVED:
         return {
                ...state,
            messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state;

    }
}

export const actions = {
    messagesReceivedAC: (messages: ChatMessageType[]) => ({
        type: SET_RECEIVED,
        payload: {messages}
    }as const)
}

let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null
const newMessageHandlerCreator= (dispatch: Dispatch) =>  {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages)=> {
            dispatch(actions.messagesReceivedAC(messages))
        }
    }

    return _newMessageHandler
}


export const startMessagesThunk = (): ThunkType =>async (dispatch) =>{
    chatApi.start()
    chatApi.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesThunk = (): ThunkType =>async (dispatch) =>{
    chatApi.unSubscribe(newMessageHandlerCreator(dispatch))
    chatApi.stop()
}
export const sendMessageThunk = (message: string): ThunkType =>async (dispatch) =>{
    chatApi.sendMessage(message)
}

export default chatReducer;