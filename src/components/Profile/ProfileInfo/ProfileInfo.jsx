import React, {useState} from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloder/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

import ProfileDataForm from "./ProfileDataForm";




const ProfileInfo = ({profile ,status, updateStatusThunk, isOwner, savePhoto, saveProfile, isError} ) => {

    let [editMode, setEditMode] = useState(false)


    if(!profile){
        return <Preloader />}

    const onSubmit = ( values) => {
        saveProfile(values).then(
            ()=>{
                setEditMode(false)
            }
        )

    }


    const mainPhotoSelected = (e)=>{
       if( e.target.files.length){
        savePhoto(e.target.files[0])
       }
    }


    return <div>
      <div className={classes.description}>
        <div >
            <img className={classes.avatar} src={ profile.photos.large === null ? 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png' : profile.photos.large }/>
            {isOwner && <input onChange={mainPhotoSelected} type={'file'}/>}
        </div>
          <div className={classes.info}>
              Status (дабл клик и можно менять )
          </div>
          <b><ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/></b>
          {editMode ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} saveProfile={saveProfile} isError={isError}/> :
          <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=> {setEditMode(true)}}/>}
      </div>
    </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) =>{

   return ( <div>
           {isOwner && <div> <button className={classes.editButton} onClick={goToEditMode} >Edit Profile Info</button></div>}
    <div className={classes.info}>
        Name
    </div>
    <b>{profile.fullName}</b>

    <div className={classes.info}>
        <b>Info</b>
    </div>
    <div >
        <b>About me</b>:  {profile.aboutMe}
    </div>
    <div >
        <b className={classes.info}>Contacts</b>  :{Object.keys(profile.contacts).map(key=>{
        return <Contact key={key} contactTitle={key} ContactValue={profile.contacts[key]}/>
    })}
    </div>

    <div> <b>lookingForAJob</b>  {profile.lookingForAJob ? 'yes' : 'no'  }</div>
    <div>{ profile.lookingForAJob &&
    <div>
        <b> My skills </b> -  {profile.lookingForAJobDescription}
    </div>
    }

    </div>
    </div>
   )}


const Contact = ({contactTitle, ContactValue})=>{
    return <div><b className={classes.info}>{contactTitle}</b>: {ContactValue}</div>
}


export default ProfileInfo;