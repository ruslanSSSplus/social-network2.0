import React from "react";
import classes from "./ProfileInfo.module.css";
import { Field, Form, Formik} from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({

})

const ProfileDataForm = ({initialValues, onSubmit, profile, isError}) =>{





    return ( <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
            {<div> <button >Save </button></div>}
            <div className={classes.info}>
                Name
            </div>
            <Field className={classes.textarea} placeholder="ваше имя" type='text' name='fullName'
                   component='textarea'/>

            <div className={classes.info}>
                <b>Info</b>
            </div>
            <div >
                <b>About me</b>:
            </div>
                <Field className={classes.textarea} placeholder="О вас" type='text' name='aboutMe'
                       component='textarea'/>
            <div >
              <b className={classes.info}> Contacts</b>
                <div>{isError ? <span className={classes.error}> Wrong URL </span> : null} </div>
                {Object.keys(profile.contacts).map(key=>{
              return <div key={key} className={classes.info}>
                <b> {key}: <Field  placeholder={key} type='text' name={"contacts." + key}
                                  component='input'/> </b>
              </div>

         })}
         </div>


            <div><b>lookingForAJob</b> </div>
                <Field className={classes.textarea}  type='checkbox' name='lookingForAJob'/>

            <div>
                <b>My skills</b>
            </div>
            <Field className={classes.textarea} placeholder="Ваши навыки" type='text' name='lookingForAJobDescription'
                    component='textarea'/>



            {/*<div>userId - {profile.userId}</div>*/}
            </Form>
        </Formik>
    )}


export default ProfileDataForm