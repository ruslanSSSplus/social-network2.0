import React from "react";
import classes from '../Books/books.module.css'


const BookCard = (props) => {
    return (<div className={classes.full}>
        <img src={props.image} alt='a' className={classes.ava}/>
        <div>
            <h2  className={classes.info}>
                {props.title}
            </h2>
            <h3  className={classes.info}>
              Author:  {props.author}
            </h3>
            <p  className={classes.info}>
              Published data:  {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}
            </p>
        </div>
    </div>)
}

export default BookCard