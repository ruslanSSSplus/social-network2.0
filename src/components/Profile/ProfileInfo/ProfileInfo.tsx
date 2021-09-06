import React, {ChangeEvent, useState} from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloder/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {contactsType, ProfileType} from "../../../Types/Types";



type PropsType = {
    isError: boolean
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: File) => void
    isOwner: boolean
    profile: ProfileType | null,
    status: string
    updateStatusThunk: (status: string) => void
}



const ProfileInfo: React.FC<PropsType> = ({profile ,status, updateStatusThunk, isOwner, savePhoto, saveProfile, isError} ) => {

    let [editMode, setEditMode] = useState(false)


    if(!profile){
        return <Preloader />}

    const onSubmit = ( values: ProfileType) => {
        saveProfile(values).then(
            ()=>{
                setEditMode(false)
            }
        )

    }


    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>)=>{
       if( e.target.files?.length){
           // if (r.target.files && e.target.files.lenght){
        savePhoto(e.target.files[0])
       }
    }


    return <div>
      <div className={classes.description}>
        <div >
            <img className={classes.avatar} alt="avatar" src={ profile.photos.large === null ? 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png' : profile.photos.large }/>
            {isOwner && <input onChange={mainPhotoSelected} type={'file'}/>}
        </div>
          <div className={classes.info}>
              Status (даблклик)
          </div>
          <b><ProfileStatusWithHooks status={status} updateStatusThunk={updateStatusThunk}/></b>
          {editMode ? <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} saveProfile={saveProfile} isError={isError}/> :
          <ProfileData profile={profile} isOwner={isOwner} goToEditMode={()=> {setEditMode(true)}}/>}
      </div>
    </div>
}
type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner, goToEditMode}) =>{

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
        <b className={classes.info}>Contacts</b>  :{Object.keys(profile.contacts).map((key)=>{
        return <Contact key={key} contactTitle={key} ContactValue={profile.contacts[key as  keyof contactsType]}/>
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

type ContactsPropsType = {
    contactTitle: string
    ContactValue: string
}
const Contact: React.FC<ContactsPropsType> = ({contactTitle, ContactValue})=>{
    return <div><b className={classes.info}>{contactTitle}</b>: {ContactValue}</div>
}


export default ProfileInfo;