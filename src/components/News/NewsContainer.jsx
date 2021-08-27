import React from 'react';
import {
    addPostActionCreator
} from "../../redux/profileReducer";
import EachNew from "./EachNew/EachNew";
import News from "./News";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Music from "../Music/Music";



let mapStateToProps =(state) => {
    return {
        newsElements: state.news.new.map(el => <EachNew key={el.id} post={el.post} time={el.time} avatar={el.avatar} user={el.user}
                                                        picture={el.picture}/>),
    }

}
 let mapDispatchToProps =(dispatch) => {
    return {
        addPostActionCreator: (newText, pic) => {
            dispatch(addPostActionCreator(newText, pic))
        },

   }
}

export default compose(connect(mapStateToProps,mapDispatchToProps),
     withAuthRedirect
)
(News)
