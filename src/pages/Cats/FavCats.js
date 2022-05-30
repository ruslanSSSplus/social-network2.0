import React from 'react';
import classes from "./Cats.module.css";
import {useSelector} from "react-redux";
import EachCat from "./EachCat";
import {v1} from "uuid";
import {Link} from "react-router-dom";


const FavCats = () => {

    const {favorite} = useSelector((state) => state.cats)


    return <div>
        <div className={classes.all}>
            {favorite.map(cat => <EachCat url={cat.url} key={v1()} id={cat.id} cat={cat} favorite={favorite}/>)}
        </div>
        <span>
            <Link to="/Cats" className={classes.goToFav}> все котики</Link>
        </span>
    </div>

}

export default FavCats;