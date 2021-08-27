import React from 'react';
import GenaPosts from './GenaPosts/GenaPosts';

import GenaProfileInfo from "./GenaProfileInfo/GenaProfileInfo";


const GenaProfile = (props) => {

    return <div>
        <GenaProfileInfo/>

        <GenaPosts posts={props.posts} dispatch={props.dispatch}/>
    </div>
}

export default GenaProfile;