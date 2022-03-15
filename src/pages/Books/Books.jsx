import React, {useEffect} from "react";
import Search from "./Search";
import BookList from "./BookList";
import {useDispatch, useSelector} from "react-redux";
import {actions, getBooksThunkCreater, searchBookThunkCreater} from "../../redux/books";
import classes from './books.module.css'



 const Books = () => {

    const dispatch = useDispatch()
    const {books, searchField, sort} = useSelector((state) => state.book)

    useEffect( () => {
        dispatch(getBooksThunkCreater())
    }, [])



    const searchBook = async (e) => {
        e.preventDefault()
        dispatch(searchBookThunkCreater(searchField))


    }
    const handleSearch = (e) => {
        dispatch(actions.handleSearchAC(e.target.value))

    }
    const handleSort = (e) => {
        dispatch(actions.handleSort(e.target.value))

    }



    const sortedBooks = books.sort((a, b) => {
        if (sort === 'Newest') {
            return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        } else if (sort === 'Oldest') {
            return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        }
    })

    return (
        <div className={classes.all}>
            <Search searchBook={searchBook} handleSearch={handleSearch} handleSort={handleSort}/>
            <BookList books={sortedBooks}/>
        </div>
    )


}

export default Books

