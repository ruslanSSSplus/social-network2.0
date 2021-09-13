import React, {useEffect, useRef, useState} from "react";
import classes from './ChatPage.module.css'

import {useDispatch, useSelector} from "react-redux";
import {sendMessageThunk, startMessagesThunk, stopMessagesThunk} from "../../redux/chatReducer";
import {AppStateType} from "../../redux/reduxStore";
import {ChatMessageAPIType} from "../../api/chat-api";








export const ChatPage: React.FC =() => {

    return <div>
    <Chat />
    </div>


}

const Chat: React.FC = () => {
      const dispatch =  useDispatch()


        const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect( () => {
        dispatch(startMessagesThunk())
        return () => {
            dispatch(stopMessagesThunk())
        }
    }, [])



    return <div>
        {status === 'error' && <div> ERROR. PLS REFRESH PAGE</div> }
           <>
               <Messages/>
               <AddMassageForm  />
           </>

    </div>
}

const Messages: React.FC= () => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [autoScrollIsActive, SetAutoScrollIsActive] = useState(false)

    const scrollHandled = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
            const element = e.currentTarget
        if( Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300)
        {
           !autoScrollIsActive && SetAutoScrollIsActive(true)
        } else {
            autoScrollIsActive && SetAutoScrollIsActive(false)
        }
    }

    useEffect( () => {
        if(autoScrollIsActive) {
            messagesAnchorRef.current?.scrollIntoView({behavior: 'smooth'})
        }
    }, [messages])


    return <div className={classes.messages} onScroll={scrollHandled}>
        {messages.map((u, index) => <Message key={u.id} message={u} />)}
        <div ref={messagesAnchorRef}> </div>
    </div>
}

const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo(({message}) => {

    return <div>
        <img className={classes.ava} src={message.photo===null ? 'https://sun1-15.userapi.com/s/v1/if1/a8Ep8gIxK5zIt7COi4LUocGkvkP54fNVSUy930nxS75fGdWGjq5XwuFHwV65qOC_F2WD7Xna.jpg?size=200x200&quality=96&crop=0,0,1024,1024&ava=1'
        : message.photo } alt={'ava'}/>  <b> {message.userName} </b>
        <br />
        <b> {message.message}</b>
        <hr />
    </div>
})

const AddMassageForm: React.FC= () => {

    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const status = useSelector((state: AppStateType) => state.chat.status)

    const onKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
        if (event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            sendMessage()
        }
    }

    const sendMessage = () =>{
        if (!message) {
            return
        }
        dispatch(sendMessageThunk(message))
        setMessage('')
    }

     return <div>
         <div>
             <textarea onKeyDown={onKeyDown} onChange={(e) => setMessage(e.target.value)} value={message}/>
         </div>
         <div>
             <button disabled={status !== 'ready'} onClick={sendMessage} > send </button>
         </div>
     </div>
}