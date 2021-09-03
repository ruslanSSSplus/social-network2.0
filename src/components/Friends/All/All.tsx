import React from 'react';
import classes from './All.module.css'
import Friend from "./Friend/Friend";
import {ProfileType} from "../../../Types/Types";
import {number} from "yup";
import {FriendDateType} from "../../../redux/friendsReducer";




type PropsType = {
    addfriend: (id: number, avatarPhoto: string, name: string) => void
    friends:  Array<FriendDateType>
    unfollowThunk: (Id: number) => void
}


const All: React.FC<PropsType> =(props) => {

    let friendsAll= props.friends.map(el =>  <Friend key={el.id} id={el.id} link = {el.link} name = {el.name} surname= {el.surname} avatar={el.avatar} unfollowThunk={props.unfollowThunk}/>)
    let name1: any = React.createRef()
    let ava1: any = React.createRef()

    let addFriend = () => {
        props.addfriend(888888, ava1.current.value, name1.current.value)
        name1.current.value = '';
        ava1.current.value = '';
    }



    return (
        < div className={classes.all}>
            <div className={classes.seacrh}>
                name
                <textarea className={classes.textare} ref={name1} >   </textarea>
                ava
                <textarea className={classes.textare} ref={ava1} >  </textarea>
                <button className={classes.but} onClick={addFriend}> Add New Friend </button>
            </div>
            {friendsAll}

        </div>
    )
}

export default All;