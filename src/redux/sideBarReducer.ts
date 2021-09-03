
export type bestfriendsType ={
    id: number,
    name: string,
    avatar: string
    surname: string
}

let initialState = {
        bestfriends: [
            {
                id: 1,
                name: 'Геннадий',
                avatar: 'https://sun9-75.userapi.com/impg/aYFVgULQds2uRK4ftm0VLGIE2pI63Pua3beoPg/d1vQS_fajKI.jpg?size=695x1056&quality=96&sign=e5baf9a52d7ac0e40e6a4fe9b9338c4c&type=album',
                surname: 'Льянов'
            },
            {
                id: 2,
                name: 'Тимур',
                surname: 'Льянов',
                avatar: 'https://sun9-42.userapi.com/impf/c844416/v844416714/12ff0b/DZIAss-5O_I.jpg?size=1024x1024&quality=96&sign=38589b1a8a876c2796ef79f1fab05059&type=album'
            },
            {
                id: 4,
                name: 'Никита',
                surname: 'кесырев',
                avatar: 'https://sun9-23.userapi.com/impg/qjKg0gKdIBW-1YKG9dVgh68dCnD1mPjrUqQvgg/Bh8eNjyakC0.jpg?size=512x384&quality=96&sign=89f25cbca2cdc38325352d639a4a7e51&type=album'
            }
        ] as Array<bestfriendsType>

}

type InitialStateType = typeof initialState
const sideBarReducer = (state = initialState, action: any): InitialStateType => {

    return state;

}

export default sideBarReducer;