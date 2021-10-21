import React from "react";
import BookCard from "./BookCard";
import classes from "./books.module.css";

const BookList = (props) => {

    return (<div>
        {
            props.books.map( (book, i) => {
                return <span className={classes.fullAll}>
                    <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.publisher}
                        published={book.volumeInfo.publishedDate}
                    />
                </span>
            })
        }
    </div>)
}

export default BookList