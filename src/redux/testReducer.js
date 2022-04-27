import {testAPI} from "../api/test-api";

const NEW_MASSEGES = 'TEST/NEW_MASSEGES';
const OLD_MASSAGES = 'TEST/OLD_MASSAGES';



let initialState = {
    messages: [{
        "id": 1,
        "user": "test",
        "message": "hello from test"
    },
        {
            "id": 2,
            "user": "test",
            "message": "hello from test"
        },
        {
            "id": 3,
            "user": "test",
            "message": "hello from test"
        },
        {
            "id": 4,
            "user": "test",
            "message": "hello from test"
        },
        {
            "id": 5,
            "user": "test",
            "message": "hello from test"
        },]
}


const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEW_MASSEGES:
            return {...state, messages: action.messages}
        case OLD_MASSAGES:
            return {...state, messages: action.messages}
        default:
            return state;
    }
}


export const newMessagesThunkCreater = (id = 0, oldMessages = false) => {
    return async (dispatch) => {
        let response = await testAPI.getNewMessages(id, oldMessages)
        await dispatch(actions.newMessage(response))

    }
}

export const oldMessagesThunkCreater = (id = 0, oldMessages = true) => {
    return async (dispatch) => {
        let response = await testAPI.getOldMessages(id, oldMessages)
           await dispatch(actions.oldMessage(response))

    }
}
export const sendNewMessageThunkCreater = (name, message) => {
    return async (dispatch) => {
        let data = {user: name, message: message}
        let response = await testAPI.sendMessage(data)
         await  dispatch(actions.newMessage(response))

    }
}
export const actions = {
    newMessage: (messages) => ({
        type: NEW_MASSEGES, messages,
    }), oldMessage: (messages) => ({
        type: OLD_MASSAGES, messages,
    }),
}


export default testReducer;