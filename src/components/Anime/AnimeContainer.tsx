import React, {useEffect} from 'react';
import {getAnimesThunkCreater} from "../../redux/animeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {Loading} from "../Weather/Loading/Loading";
import {Anime} from "./Anime";





export const AnimeContainer : React.FC =() => {

const dispatch = useDispatch()

  useEffect( () => {
      dispatch(getAnimesThunkCreater(1, "tokyo"))
 }, [])

    const isLoading = useSelector((state: AppStateType) => state.anime.isLoading)


    return (
    <div>
        {isLoading ? <Loading/> : <Anime/>}
    </div>
    )
}

