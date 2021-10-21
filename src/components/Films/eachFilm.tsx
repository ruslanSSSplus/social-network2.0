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
    id: number
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
    return <div className={classes.eachFilm} >
          <div>
              <img alt={'q'} src={props.large_cover_image} className={classes.png}/>
          </div>
       <div>

                 <h2> {props.name} <span className={classes.rating}> {props.rating} / 10 </span>  </h2>


           <h4> {props.description}</h4>
           <h3 className={classes.des}> {d}</h3>
           <button> like </button>
           <button onClick={()=> deletePost(props.id)}> delete </button>
       </div>


    </div>

}

export default EachFilm;