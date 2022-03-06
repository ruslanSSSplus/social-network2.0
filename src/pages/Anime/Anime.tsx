import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AnimesType, getAnimesThunkCreater, actions} from "../../redux/animeReducer";
import {AppStateType} from "../../redux/reduxStore";

import Paginator from "../../components/Paginator/Paginator";
import classes from "./Anime.module.css";
import EachAnime from "./eachAnime";
import Search from "./SearchAnime";


export const Anime: React.FC = () => {



    const dispatch = useDispatch()

    const onPageChanged = (pageNumber: number) => {
        dispatch(getAnimesThunkCreater(pageNumber, searchField ))
    }

    const {animes, searchField, currentPage} = useSelector((state: AppStateType) => state.anime)

    let animesElements = animes.map((el: AnimesType) => <EachAnime popularityRank={el.attributes.popularityRank} description={el.attributes.description}
                                                                   posterImage={el.attributes.posterImage === null ?
                                                                       "https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" : el.attributes.posterImage.large}
                                                                   key={el.id} id={el.id}
                                                                   name={el.attributes.titles.en} like={el.like} genres={el.type}
                                                                   episodeCount={el.attributes.episodeCount} startDate = {el.attributes.startDate} status={el.attributes.status}/>)

    const searchAnime = async (e: any) => {
        e.preventDefault()
        dispatch(getAnimesThunkCreater(1, searchField))
    }
    const handleSearch = (e: any) => {
        dispatch(actions.handleSearchAC(e.target.value))
    }

    return (<div>
            <div className={classes.paginator}>
                <Paginator currentPage={currentPage}
                           totalItemsCount={500}
                           pageSize={10}
                           onPageChanged={onPageChanged}
                           portionSize={10}/>
            </div>
            <Search searchAnime={searchAnime} handleSearch={handleSearch}/>
            <div>
                {animesElements}
            </div>
        </div>
    )
}