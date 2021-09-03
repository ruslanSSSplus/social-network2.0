import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup'
import {connect} from "react-redux";
import {loginThunk} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import classes from './Login.module.css'
import {AppStateType} from "../../redux/reduxStore";


type MyFormValues = {
    email: string
    password: string
    checkbox: boolean
    captcha: string | null
}
type MapStatePropsType = {
    isAuth?: boolean
    isError: boolean
    captchaUrl: string | null

}

type MapDispatchPropsType = {
    loginThunk: (email: string, password: string, rememberMe: boolean, captcha: string | null)=> void
}

type OwnPropsType= {

}

const initialValues: MyFormValues = {
    email: '',
    password: '',
    checkbox: false,
    captcha: ''
}

type all = MapStatePropsType & MapDispatchPropsType


const validationSchema = Yup.object({
    password: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),

})


const Login: React.FC<all> = (props) => {



    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div className={classes.All}>
        <h3> Login </h3>
        <LoginForm loginThunk={props.loginThunk} isError={props.isError} captchaUrl={props.captchaUrl} />
    </div>
}

const LoginForm: React.FC<all>  = (props)=> {

    const onSubmit = (values: {email: string,password: string, checkbox: boolean, captcha: string | null }) =>{
        props.loginThunk(values.email, values.password, values.checkbox, values.captcha)
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
                {props.captchaUrl && <img src={props.captchaUrl}/>}
                {props.captchaUrl && <Field placeholder={'captcha'} type='text' name='captcha' className={classes.field}/>}

                <button type='submit' className={classes.button}> Submit </button>
            </Form>
        </Formik>
    )
}



const mapStateToProps =(state: AppStateType)=>({
    isAuth: state.auth.isAuth,
    isError: state.auth.isError,
    captchaUrl: state.auth.captchaUrl
})

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, {loginThunk})(Login)