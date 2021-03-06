import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FilmType, getFilmsThunkCreater} from "../../redux/filmReducer";
import {AppStateType} from "../../redux/reduxStore";
import EachFilm from "./eachFilm";
import Paginator from "../../components/Paginator/Paginator";
import classes from "./Films.module.css";


export const Films: React.FC = () => {



    const dispatch = useDispatch()

    const onPageChanged = (pageNumber: number) => {
        dispatch(getFilmsThunkCreater(pageNumber))
    }

    //TODO
    const {currentPage, films} = useSelector((state: AppStateType) => state.film)



    let filmsElements = films.map((el: FilmType) => <EachFilm rating={el.rating} genres={el.genres}
                                                              description={el.description_full}
                                                              large_cover_image={el.large_cover_image}
                                                              key={el.id} id={el.id} name={el.title} like={el.like}/>)




    return (<div className={classes.all}>
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