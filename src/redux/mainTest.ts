
import {InferActionsTypes} from "./reduxStore";

const UPDATE_NEW_LOGIN_TEXT = 'MAINTEST/UPDATE_NEW_LOGIN_TEXT';
const UPDATE_NEW_PASSWORD_TEXT = 'MAINTEST/UPDATE_NEW_PASSWORD_TEXT';
const IS_DISABLED = 'MAINTEST/IS_DISABLED';
const NEED_REDIRECT = 'MAINTEST/NEED_REDIRECT';

let initialState = {
    newLogintext: "",
    newPasswordtext: "",
    isDisabled: true,
    needRedirect: false,
}

export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>

const mainTestReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type){
        case UPDATE_NEW_LOGIN_TEXT:
            return  {...state,
                newLogintext: action.newText
            }
        case UPDATE_NEW_PASSWORD_TEXT:
            return  {...state,
                newPasswordtext: action.newText
            }
        case IS_DISABLED:
            return  {...state,
                isDisabled: false
            }
        case NEED_REDIRECT:
            return  {...state,
                needRedirect: true
            }
        default:
            return state;
    }

}


export const actions = {
    loginOnChangeActionCreator: (text: string) => ({
        type: UPDATE_NEW_LOGIN_TEXT,
        newText: text,
    } as const ),
    passwordOnChangeActionCreator: (text: string) => ({
    type: UPDATE_NEW_PASSWORD_TEXT,
    newText: text
    } as const),
    isDisabledAC: () => ({
        type: IS_DISABLED,
    } as const),
    needRedirectAC: () => ({
        type: NEED_REDIRECT,
    } as const)
}






export default mainTestReducer;