import {v1} from 'uuid'
import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {chatApi, ChatMessageAPIType, StatusType} from "../api/chat-api"
import {Dispatch} from "redux";
const SET_RECEIVED = 'CHAT/SET_RECEIVED';
const STATUS_CHANGED = 'CHAT/STATUS_CHANGED';

type ChatMessageType = ChatMessageAPIType & {id: string}

let initialState = {
   messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
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
            messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1() }))]
                .filter((m, index, array) =>  index >= array.length - 100)
            }
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;

    }
}

export const actions = {
    messagesReceivedAC: (messages: ChatMessageAPIType[]) => ({
        type: SET_RECEIVED,
        payload: {messages}
    }as const),
    statusChanged: (status: StatusType) => ({
        type: STATUS_CHANGED,
        payload: {status}
    }as const),

}

let _newMessageHandler: ((messages: ChatMessageAPIType[]) => void) | null = null
const newMessageHandlerCreator= (dispatch: Dispatch) =>  {
    if(_newMessageHandler === null) {
        _newMessageHandler = (messages)=> {
            dispatch(actions.messagesReceivedAC(messages))
        }
    }
    return _newMessageHandler
}

let _statusChangedHandler: ((status: StatusType) => void) | null = null
const statusChangedHandlerCreator= (dispatch: Dispatch) =>  {
    if(_statusChangedHandler === null) {
        _statusChangedHandler = (status)=> {
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesThunk = (): ThunkType =>async (dispatch) =>{
    chatApi.start()
    chatApi.subscribe('messages-received'  ,newMessageHandlerCreator(dispatch))
    chatApi.subscribe('status-changed'  ,statusChangedHandlerCreator(dispatch))
}
export const stopMessagesThunk = (): ThunkType =>async (dispatch) =>{
    chatApi.unSubscribe('messages-received' , newMessageHandlerCreator(dispatch))
    chatApi.unSubscribe('status-changed'  ,statusChangedHandlerCreator(dispatch))
    chatApi.stop()
}
export const sendMessageThunk = (message: string): ThunkType =>async (dispatch) =>{
    chatApi.sendMessage(message)
}

export default chatReducer;