import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Test from "./Test";
import {newMessagesThunkCreater, oldMessagesThunkCreater, sendNewMessageThunkCreater} from "../../redux/testReducer";
import Preloader from "../../components/common/Preloder/Preloader";


export const TestContainer = (props) => {


    const dispatch = useDispatch()
    const {messages} = useSelector((state) => state.test)

    useEffect(()=>{ dispatch(newMessagesThunkCreater(0, false))
    }, [])


    const getOldMessages = (id, oldMessage) =>{
        dispatch(oldMessagesThunkCreater(id, oldMessage))
    }

    const getNewMessages = (id, oldMessage) =>{
        dispatch(newMessagesThunkCreater(id, oldMessage))
    }
    const sendNewMessage = (name, message) => {
        dispatch(sendNewMessageThunkCreater(name, message))
    }

    return (messages === [] ? <Preloader /> : <Test getOldMessages={getOldMessages} getNewMessages={getNewMessages} messages={messages} sendNewMessage={sendNewMessage}/>)
}
