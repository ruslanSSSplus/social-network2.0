import React, {useState} from 'react';
import classes from './Test.module.css'
import EachUser from "./EachUser/EachUser";



const Test = ({getOldMessages, getNewMessages, messages, sendNewMessage}) => {

    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    let allMessages = messages.map(el => <EachUser name={el.user} message={el.message} key={el.id}/>)
    console.log(messages)
    const sendNewMessageLocal = (name, message) =>{
        sendNewMessage(name, message)
        setMessage('')
        setName('')
    }

    return <div className={classes.all}>
        <div>
            <button  className={classes.buttons} onClick={() => getOldMessages(messages[0].id, true)} disabled={messages[0].id === 1}>
                Back
            </button>
            <button className={classes.buttons} onClick={() => getNewMessages(messages[messages.length - 1].id, false)} >
                Next
            </button>
            {allMessages}
        </div>


            <div className={classes.allSend}>
                <div className={classes.sendNew}> Отправить новую новость</div>
                <div className={classes.inputs}>
                    <span> Name: </span>
                    <input
                        className={classes.input}
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type="text"
                    />
                    <span> Message </span>
                    <input
                        className={classes.input}
                        onChange={e => setMessage(e.target.value)}
                        value={message}
                        type="message"
                    />
                </div>

                <div>
                    <button onClick={() => sendNewMessageLocal(name, message)} >
                        Send
                    </button>

                </div>
            </div>
    </div>
        }

export default Test;