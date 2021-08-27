import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";





const Profile = (props) => {

    return <div>
        <ProfileInfo isError={props.isError}  saveProfile={props.saveProfile}  savePhoto={props.savePhoto} isOwner={props.isOwner}  profile={props.profile} status={props.status} updateStatusThunk={props.updateStatusThunk}/>
        <MyPostsContainer />
    </div>
}

export default Profile;