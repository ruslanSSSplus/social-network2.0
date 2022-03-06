import React from "react";
import classes from './books.module.css'

const Search = (props) => {
    return (<form action='' onSubmit={props.searchBook} className={classes.form} >
        <input type='text' onChange={props.handleSearch}/>
        <button type='submit'>
            Search
        </button>
        <select defaultValue='Sort' onChange={props.handleSort}>
            <option disabled value="Sort">Sort</option>
            <option value="Newest"> Newest</option>
            <option value="Oldest"> Oldest </option>
        </select>
    </form>)
}

export default Search