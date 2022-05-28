import React from 'react';
import classes from "./Cats.module.css";
import {actions} from "../../redux/catsReducer";
import {useDispatch} from "react-redux";






const EachCat= (props) => {

    const dispatch = useDispatch()

    const addFav = (id) =>{
        dispatch(actions.addFav(id))
    }
    const deleteFav = (id) =>{
        dispatch(actions.deleteFav(id))
    }


    return  <span className={classes.eachCat}>
          <img src={props.url} className={classes.cat} alt={'cat'}/>
        {
            !props.favorite.includes(props.cat) ?
                <button className={classes.fav} onClick={() =>addFav(props.id)}>❤</button>
                :
                <button className={classes.fav} onClick={() => deleteFav(props.id)}>💔</button>
        }

    </span>



}

export default EachCat;