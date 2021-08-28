import {getAuthThunk} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export type InitialStateType ={
    initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false
}


const appReducer = (state = initialState, action: any): InitialStateType => {

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

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():initializedSuccessActionType => ({
    type: INITIALIZED_SUCCESS,
})




export const initialiseApp = () =>{
    return (dispatch: any) =>{
      let promise =  dispatch(getAuthThunk())
        promise.then( ()=> {
            dispatch(initializedSuccess())
        })

    }
}

export default appReducer;