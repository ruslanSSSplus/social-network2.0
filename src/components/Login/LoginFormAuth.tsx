import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import classes from "./Login.module.css";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {loginThunk} from "../../redux/authReducer";

type MyFormValues = {
    email: string
    password: string
    checkbox: boolean
    captcha: string | null
}
const initialValues: MyFormValues = {
    email: '',
    password: '',
    checkbox: false,
    captcha: ''
}

const validationSchema = Yup.object({
    password: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),

})
type PropsType = {
    captchaUrl: string | null
    isError: boolean
}
export const LoginFormAuth: React.FC<PropsType>  = (props)=> {

    const dispatch = useDispatch()

    const onSubmit = (values: {email: string,password: string, checkbox: boolean, captcha: string | null }) =>{
        dispatch(loginThunk(values.email, values.password, values.checkbox, values.captcha))
    }
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            <Form>
                <div>
                    <Field placeholder={'login'} type='text' id='email' name='email' className={classes.field}/>
                    <ErrorMessage name='email' />
                </div>
                <div>
                    <Field placeholder={'password'} type='text' id='password' name='password' className={classes.field}/>
                    <ErrorMessage name='password'/>
                </div>
                <div>{props.isError ? <span className={classes.error}> Wrong Email or Password or Captcha </span> : null} </div>
                <div>
                    <Field type={'checkbox'} name='checkbox' className={classes.field}/>
                </div>
                {props.captchaUrl && <img src={props.captchaUrl} alt={'captcha'}/>}
                {props.captchaUrl && <Field placeholder={'captcha'} type='text' name='captcha' className={classes.field}/>}

                <button type='submit' className={classes.button}> Submit </button>
            </Form>
        </Formik>
    )
}