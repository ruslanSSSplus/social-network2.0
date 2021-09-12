import React, {useEffect, useState} from "react";
import classes from './ChatPage.module.css'
import {ChatMessageType} from "../../api/chat-api";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageThunk, startMessagesThunk, stopMessagesThunk} from "../../redux/chatReducer";
import {AppStateType} from "../../redux/reduxStore";








export const ChatPage: React.FC =() => {

    return <div>
    <Chat />
    </div>


}

const Chat: React.FC = () => {
      const dispatch =  useDispatch()



    useEffect( () => {
        dispatch(startMessagesThunk())
        return () => {
            dispatch(stopMessagesThunk())
        }
    }, [])



    return <div>
        <Messages />
        <AddMassageForm  />
    </div>
}

const Messages: React.FC= () => {

    const messages = useSelector((state: AppStateType) => state.chat.messages)

    return <div className={classes.messages}>
        {messages.map((u, index) => <Message key={index} message={u} />)}
    </div>
}

const Message: React.FC<{ message: ChatMessageType }> = ({message}) => {

    return <div>
        <img className={classes.ava} src={message.photo} alt={'ava'}/>  <b> {message.userName} </b>
        <br />
        <b> {message.message}</b>
        <hr />
    </div>
}

const AddMassageForm: React.FC= () => {

    const [message, setMessage] = useState('')
    const [isReady, setIsReady] = useState<'pending' | 'ready'>('pending')

    const dispatch = useDispatch()

    const sendMessage = () =>{
        if (!message) {
            return
        }
        dispatch(sendMessageThunk(message))
        setMessage('')
    }

     return <div>
         <div>
             <textarea onChange={(e) => setMessage(e.target.value)} value={message}/>
         </div>
         <div>
             <button  onClick={sendMessage}> send </button>
         </div>
     </div>
}