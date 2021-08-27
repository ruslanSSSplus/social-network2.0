const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
        messages: [
            {id: 1, message: 'loh gena loh'},
            {id: 2, message: 'loh misha loh'},
            {id: 3, message: 'loh pasha loh'},
            {id: 4, message: 'loh nikita loh'},
            {id: 5, message: 'loh tima loh'},
        ],
        dialogs: [
            {id: 1, name: 'gena'},
            {id: 2, name: 'misha'},
            {id: 3, name: 'pasha'},
            {id: 4, name: 'nikita'},
            {id: 5, name: 'tima'},
        ],
    count: 6,

}
const dialogReducer = (state = initialState, action) => {



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
export const addMessageActionCreator = (message) => ({
    type: ADD_MESSAGE,
    message
})



export default dialogReducer;