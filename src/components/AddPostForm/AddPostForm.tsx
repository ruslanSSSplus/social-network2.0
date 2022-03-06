import {ErrorMessage, Field, Form, Formik} from "formik";
import classes from "../../pages/Profile/MyPosts/MyPosts.module.css";
import React from "react";
import * as Yup from 'yup'


type MyFormValues = {
    new: string
    pic: string
}
type  PropsType = {
    addPostActionCreator: (newText: string, pic: string) => void
}



const AddPostFormik: React.FC<PropsType> = (props) => {
    const initialValues: MyFormValues = {
        new: '',
        pic: '',

    }
    const validationSchema = Yup.object({
        new: Yup.string()
            .required('Required')
            .max(50, "Too many symbols"),
        pic: Yup.string()
            .required('Required')
    })

    const onSubmit = ( values: { new: string, pic: string }) => {
        props.addPostActionCreator(values.new, values.pic)

    }
    return (<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <span className={classes.fieldPosts}>

                <div className={classes.error}> <ErrorMessage name='new'/></div>
                <div className={classes.error}><ErrorMessage name='pic'/></div>
                <div> </div>
                <Field className={classes.textarea} placeholder="ваша новость" type='text' name='new'
                      component='textarea'/>
                <Field className={classes.textarea} placeholder="ваше картинка" type='text' name='pic'
                       component='textarea'/>
 <button className={classes.button}>Опубликовать</button>

            </span>

            </Form>
    </Formik>)

}
export default AddPostFormik