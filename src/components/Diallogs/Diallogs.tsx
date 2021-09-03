import React from 'react';
import classes from './Diallogs.module.css'
import {Formik, Form, Field} from "formik";
import Eachmessage from "./Eachmessage/Eachmessage";
import Eachdialog from "./Eachdialog/Eachdialog";
import {DialogType, MessageType} from "../../redux/dialogReducer";



const initialValues: MyFormValues = {
    message: 'wish',
}

type PropsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    addMessageActionCreator: (newText: string) => void
}

type MyFormValues = {
    message: string;
}
type OnSubmitType = {
    onSubmit: (values: {message: string}) => void
}
type all = PropsType & MyFormValues & OnSubmitType

const Diallogs: React.FC<all>  = (props) => {
    let dialogsElements = props.dialogs.map(el => <Eachdialog key={el.id} id={el.id} name={el.name}/>)
    let messageElements = props.messages.map(el => <Eachmessage key={el.id} message={el.message}/>)

    const onSubmit = (values: {message: string}) =>{
        props.addMessageActionCreator(values.message)
    }

    return (
        < div>
           <AddMessageForm onSubmit={onSubmit}/>
            < div className={classes.dialogs}>

                < div className={classes.dialogsitem}>
                    {dialogsElements}
                </div>
                <div className={classes.massages1}>
                    {messageElements}
                </div>
            </div>
        </div>
    )

}

const AddMessageForm: React.FC<OnSubmitType> = (props) => {
    return (<Formik initialValues={initialValues} onSubmit={props.onSubmit}>
            <Form >
                <div className={classes.seacrh}>
                    <Field type='text' className={classes.text} name='message' component='textarea'/>
                    <button className={classes.but} type='submit'> Add Message</button>
                </div>
            </Form>
        </Formik>
    )
}



export default Diallogs;