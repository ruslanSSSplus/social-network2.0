import React from "react";
import classes from './books.module.css'


const BookCard = (props) => {
    return (<div className={classes.eachBook}>
        <div> <img src={props.image} alt='a' className={classes.ava}/></div>
        <div className={classes.info}>
            <h2  >
                {props.title}
            </h2>
            <h3  >
              Author:  {props.author}
            </h3>
            <p >
              Published data:  {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}
            </p>
        </div>
    </div>)
}

export default BookCard