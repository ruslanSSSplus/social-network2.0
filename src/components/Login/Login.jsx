import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import {connect} from "react-redux";
import {loginThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from './Login.module.css'



const initialValues = {
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


const Login = (props) => {

    const onSubmit = values =>{
        props.loginThunk(values.email, values.password, values.checkbox, values.captcha)

    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div className={classes.All}>
        <h3> Login </h3>
        <LoginForm onSubmit={onSubmit} isError={props.isError} captchaUrl={props.captchaUrl}/>
    </div>
}

const LoginForm = (props)=> {
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={props.onSubmit}
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
                {props.captchaUrl && <img src={props.captchaUrl}/>}
                {props.captchaUrl && <Field placeholder={'captcha'} type='text' name='captcha' className={classes.field}/>}

                <button type='Submit' className={classes.button}> Submit </button>
            </Form>
        </Formik>
    )
}



const mapStateToProps =(state)=>({
    isAuth: state.auth.isAuth,
    isError: state.auth.isError,
    captchaUrl: state.auth.captchaUrl
})

export default connect (mapStateToProps, {loginThunk})(Login)