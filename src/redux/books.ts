import {BaseThunkType, InferActionsTypes} from "./reduxStore";
import {booksAPI} from "../api/books-api";


const NEW_SEARCH = 'BOOKS/NEW_SEARCH'
const ADD_BOOKS = 'BOOKS/ADD_BOOKS';
const NEW_SORT = 'BOoKS/NEW_SORT'


let initialState = {
    books: [] as Array<any>,
    searchField: '',
    sort: ''
}

export type initialStateType = typeof initialState

type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>


const booksReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_BOOKS:
            // @ts-ignore
            return {...state, books: action.data,}
        case NEW_SEARCH:
            return {...state, searchField: action.text,}
        case NEW_SORT:
            return {...state, sort: action.text,}
        default:
            return state;
    }


}

const ccleaner = (data: any) => {
    const cleanedData = data.map((book: any) => {
        if (!book.volumeInfo.hasOwnProperty('publishedDate')) {
            book.volumeInfo['publishedDate'] = '0000'
        } else if (!book.volumeInfo.hasOwnProperty('imageLinks')) {
            book.volumeInfo['imageLinks'] = {thumbnail: 'https://img3.akspic.ru/originals/2/8/8/7/4/147882-poni-rozovyj-liniya-kartinka-televideniye-750x1334.jpg'}
        }
        console.log(1)

        console.log(book.volumeInfo.imageLinks.thumbnail)
        return book;
    })
    return cleanedData
}

export const getBooksThunkCreater = (): ThunkType => {
    return async (dispatch) => {
        let data = await booksAPI.getBooks()
        let cleanBooks = ccleaner(data)
        dispatch(actions.addBooks(cleanBooks))
    }
}

export const searchBookThunkCreater = (searchField: string): ThunkType => {
    return async (dispatch) => {
        let data = await booksAPI.getBooks(searchField)
        let cleanBooks = ccleaner(data)
        dispatch(actions.addBooks(cleanBooks))
    }
}


export const actions = {
    addBooks: (data: Array<any>) => ({
        type: ADD_BOOKS,
        data,
    } as const),
    handleSearchAC: (text: string) => ({
        type: NEW_SEARCH,
        text
    } as const),
    handleSort: (text: string) => ({
        type: NEW_SORT,
        text
    })

}


export default booksReducer;