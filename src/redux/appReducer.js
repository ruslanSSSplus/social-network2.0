import {getAuthThunk} from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
  initialized: false
}


const appReducer = (state = initialState, action) => {

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

export const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS,
})




export const initialiseApp = () =>{
    return (dispatch) =>{
      let promise =  dispatch(getAuthThunk())
        promise.then( ()=> {
            dispatch(initializedSuccess())
        })

    }
}

export default appReducer;