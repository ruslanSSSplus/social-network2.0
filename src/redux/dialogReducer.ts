const ADD_MESSAGE = 'ADD-MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
        messages: [
            {id: 1, message: 'loh gena loh'},
            {id: 2, message: 'loh misha loh'},
            {id: 3, message: 'loh pasha loh'},
            {id: 4, message: 'loh nikita loh'},
            {id: 5, message: 'loh tima loh'},
        ] as Array<MessageType>,
        dialogs: [
            {id: 1, name: 'gena'},
            {id: 2, name: 'misha'},
            {id: 3, name: 'pasha'},
            {id: 4, name: 'nikita'},
            {id: 5, name: 'tima'},
        ] as Array<DialogType>,
    count: 6,

}

export type initialStateType = typeof initialState

const dialogReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type){
        case ADD_MESSAGE: {
            let newMessage = {
                id: state.count,
                message: action.message,
            };

            return {...state,
                messages: [newMessage, ...state.messages],
                count: state.count+1
            };
        }
        default:
            return state;
    }


}
type AddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE,
    message: string
}
export const addMessageActionCreator = (message: string): AddMessageActionCreatorType => ({
    type: ADD_MESSAGE,
    message
})



export default dialogReducer;