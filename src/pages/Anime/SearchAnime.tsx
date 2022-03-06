import React from "react";
import classes from './Anime.module.css'

type propsType = {
    searchAnime: (e: any) => void
    handleSearch: (e: any) => void
}

const Search: React.FC<propsType> = (props) => {
    return (<form action='' onSubmit={props.searchAnime} className={classes.form} >
        <input type='text' onChange={props.handleSearch}/>
        <button type='submit'>
            Search
        </button>
    </form>)
}

export default Search