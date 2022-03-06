import React from 'react';
import classes from "./Anime.module.css";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/animeReducer";






type propsType ={
    popularityRank: number
    description: string
    posterImage: string
    key: number
    id: number
    name: string
    like: boolean
    genres: string
    episodeCount: number
    startDate: string
    status: string
}

const EachAnime: React.FC<propsType> = (props) => {

    const dispatch = useDispatch()
    const deletePost = (id: number) =>{
        dispatch(actions.deleteAnime(id))

    }
    const likeFilm = (id: number) =>{
        dispatch(actions.likeAnime(id))
    }
    const  dislikeFilm = (id: number) =>{
        dispatch(actions.dislikeAnime(id))
    }

    return <div className={classes.eachAnime} >
          <div>
              <img alt={'sorry image not found'} src={props.posterImage} className={classes.png}/>
          </div>
       <div>
           <h2> <span className={classes.name}> {props.name === undefined? "can't find name" : props.name} </span>
                {props.like && <span> 🧡 </span>}
               <div>
                   <span>  {props.episodeCount} episodes / </span>
                   <span> start : {props.startDate} / </span> <span> status: {props.status} </span>
               </div>
               <div className={classes.rating}> Popularity rank is {props.popularityRank} </div>  </h2>

           <h4> {props.description}</h4>
           { !props.like && <button onClick={()=> likeFilm(props.id)} className={classes.like}> like </button> }
           { props.like && <button onClick={()=> dislikeFilm(props.id)} className={classes.dislike}> dislike </button> }
           <button onClick={()=> deletePost(props.id)} className={classes.delete}> delete </button>
       </div>


    </div>

}

export default EachAnime;