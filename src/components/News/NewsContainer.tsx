import React from 'react';
import News from "./News";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {actions} from "../../redux/profileReducer";
import EachNew from "./EachNew/EachNew";






let mapStateToProps =(state: AppStateType) => {
    return {
        newsElements: state.news.new.map(el => <EachNew key={el.id} post={el.post} time={el.time} avatar={el.avatar} user={el.user}
                                                        picture={el.picture}/>)
    }

}


export default compose<React.ComponentType>(connect(mapStateToProps,{addPostActionCreator: actions.addPostActionCreator}),
     withAuthRedirect
)
(News)
