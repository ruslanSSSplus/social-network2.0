import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Types/Types";





type PropsType = {
    isError: boolean
    saveProfile: (profile: ProfileType) => Promise<any>
    savePhoto: (file: File) => void
    isOwner: boolean
    profile: ProfileType | null,
    status: string
    updateStatusThunk: (status: string) => void

}

const Profile: React.FC<PropsType> = (props) => {


    return <div>
        <ProfileInfo  isError={props.isError}  saveProfile={props.saveProfile}  savePhoto={props.savePhoto} isOwner={props.isOwner}  profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
      <MyPostsContainer />
    </div>
}

export default Profile;