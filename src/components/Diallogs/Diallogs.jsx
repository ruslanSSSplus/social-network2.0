import React from 'react';
import classes from './Diallogs.module.css'
import {Formik, Form, Field} from "formik";



const initialValues = {
    message: 'wish',
}



const Diallogs = (props) => {
    let dialogsElements = props.dialogs
    let messageElements = props.messages
    const onSubmit = (values) =>{
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

const AddMessageForm = (props) => {
    return (<Formik initialValues={initialValues} onSubmit={props.onSubmit}>
            <Form >
                <div className={classes.seacrh}>
                    <Field type='text' className={classes.text} name='message' component='textarea'/>
                    <button className={classes.but} type='Submit'> Add Message</button>
                </div>
            </Form>
        </Formik>
    )
}



export default Diallogs;