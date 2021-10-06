import React from 'react';
import classes from "./Films.module.css";




type propsType ={
    key: number,
    name: string,
    large_cover_image: string,
    description: string,
    genres: Array<string>,
    rating: number
}

const EachFilm: React.FC<propsType> = (props) => {

    let d = props.genres.map(p=> <div>
        •{p}
    </div>)

    return <div className={classes.eachFilm}>
          <div>
              <img src={props.large_cover_image} className={classes.png}/>
          </div>
       <div>

                 <h2> {props.name}     <span className={classes.rating}>{props.rating} / 10</span>  </h2>


           <h4> {props.description}</h4>
           <h3 className={classes.des}> {d}</h3>
       </div>


    </div>

}

export default EachFilm;