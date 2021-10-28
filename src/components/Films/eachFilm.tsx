import React from 'react';
import classes from "./Films.module.css";
import {useDispatch} from "react-redux";
import {actions} from "../../redux/filmReducer";





type propsType ={
    key: number,
    name: string,
    large_cover_image: string,
    description: string,
    genres: Array<string>,
    rating: number,
    id: number,
    like: boolean | undefined
}

const EachFilm: React.FC<propsType> = (props) => {

    let d = null

    if(props.genres !== undefined){
        d = props.genres.map(p=> <div>
            •{p}
        </div>)
    }


    const dispatch = useDispatch()
    const deletePost = (id: number) =>{
        dispatch(actions.deleteFilm(id))

    }
    const likeFilm = (id: number) =>{
        dispatch(actions.likeFilm(id))
    }
    const  dislikeFilm = (id: number) =>{
        dispatch(actions.dislikeFilm(id))
    }

    return <div className={classes.eachFilm} >
          <div>
              <img alt={'sorry image not found'} src={props.large_cover_image} className={classes.png}/>
          </div>
       <div>

                 <h2> {props.name} {props.like && <span> 🧡 </span>} <span className={classes.rating}> {props.rating} / 10 </span>  </h2>


           <h4> {props.description}</h4>
           <h3 className={classes.des}> {d}</h3>
           { !props.like && <button onClick={()=> likeFilm(props.id)}> like </button> }
           { props.like && <button onClick={()=> dislikeFilm(props.id)}> dislike </button> }
           <button onClick={()=> deletePost(props.id)}> delete </button>
       </div>


    </div>

}

export default EachFilm;