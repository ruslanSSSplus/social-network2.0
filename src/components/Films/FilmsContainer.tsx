import React, {useEffect} from 'react';

import {getFilmsThunkCreater} from "../../redux/filmReducer";
import {useDispatch, useSelector} from "react-redux";

import {AppStateType} from "../../redux/reduxStore";
import {Loading} from "../Weather/Loading/Loading";

import {Films} from "./Films";




export const FilmsContainer : React.FC =() => {

const dispatch = useDispatch()

  useEffect( () => {
      dispatch(getFilmsThunkCreater(1))

 }, [])

    const isLoading = useSelector((state: AppStateType) => state.film.isLoading)


    return (
    <div>
        {isLoading ? <Loading/> : <Films/>}
    </div>
    )
}

