import {getAuthThunk} from "./authReducer";
import {InferActionsTypes} from "./reduxStore";
const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS';



let initialState = {
  initialized: false
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


const appReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }


        default:
            return state;

    }
}

export const actions = {
    initializedSuccess: () => ({
        type: INITIALIZED_SUCCESS,
    })
}




export const initialiseApp = () =>{
    return (dispatch: any) =>{
      let promise =  dispatch(getAuthThunk())
        promise.then( ()=> {
            dispatch(actions.initializedSuccess())
        })

    }
}

export default appReducer;