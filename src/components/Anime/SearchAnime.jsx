import React from "react";
import classes from '../Anime/Anime.module.css'

const Search = (props) => {
    return (<form action='' onSubmit={props.searchAnime} className={classes.form} >
        <input type='text' onChange={props.handleSearch}/>
        <button type='submit'>
            Search
        </button>
    </form>)
}

export default Search