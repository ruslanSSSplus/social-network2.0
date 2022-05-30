import React, {useEffect} from "react";
import classes from "./Cats.module.css";
import {v1} from 'uuid'
import {useDispatch, useSelector} from "react-redux";
import {actions, getNewCatsThunkCreater} from "../../redux/catsReducer";
import EachCat from "./EachCat";
import {Link, Redirect} from "react-router-dom";
import {useNavigate} from "react-router-dom";

export const Cats = () => {
    const dispatch = useDispatch()
    const {cats, currentPage, isFetching, favorite} = useSelector((state) => state.cats)


    useEffect(() => {
        if (isFetching) {
            console.log('fetch')
            dispatch(getNewCatsThunkCreater(currentPage))
        }
    }, [isFetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            dispatch(actions.setFetching(true))
        }
    }

    return (<div>

            <div className={classes.all}>
                {cats.map(cat => <EachCat url={cat.url} key={v1()} id={cat.id} favorite={favorite} cat={cat}/>)}
            </div>
            <span>
                <Link to="/FavoriteCats" className={classes.goToFav}>Любимые котики</Link>
            {/*<button className={classes.goToFav}>  <Link to="/FavoriteCats"> Любимые котики</Link> </button>*/}
                {/* сделал бы через useNavigate, но проект старый, в нем старая версия реакт роутер дом. */}
        </span>
        </div>
    )
}