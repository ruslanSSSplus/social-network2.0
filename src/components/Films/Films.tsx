import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {FilmType, getFilmsThunkCreater} from "../../redux/filmReducer";
import {AppStateType} from "../../redux/reduxStore";
import EachFilm from "./eachFilm";
import Paginator from "../Paginator/Paginator";
import classes from "./Films.module.css";






export const Films : React.FC =() => {

    const dispatch = useDispatch()

    const onPageChanged = (pageNumber: number) => {
        dispatch(getFilmsThunkCreater(pageNumber))
    }

    const currentPage = useSelector((state: AppStateType)=> state.film.currentPage)
    const films = useSelector((state: AppStateType) => state.film.films[0])
    console.log(films)

     let filmsElements = films.map((el: FilmType) => <EachFilm rating={el.rating} genres={el.genres} description={el.description_full}
                                                               large_cover_image={el.large_cover_image} key={el.id}
                                                              id={el.id} name={el.title} />)


    return (<div>
        <div className={classes.paginator}>
            <Paginator currentPage={currentPage}
                   totalItemsCount={2131}
                   pageSize={20}
                   onPageChanged={onPageChanged}
                   portionSize={10}/>
        </div>
        <div>
            {filmsElements}
        </div>
        </div>
    )
}