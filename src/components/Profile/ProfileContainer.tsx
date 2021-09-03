import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, savePhoto, saveProfile, updateStatusThunk} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {ProfileType, UserType} from "../../Types/Types";
import {AppStateType} from "../../redux/reduxStore";


type MapStatePropsType = {
    profile: ProfileType | null,
    status: string
    AuthorizedUserId: number | null
    isAuth: boolean
    isError: boolean
}

type MapDispatchPropsType = {
    getProfileThunk: (userId: number | null) => void
    savePhoto: (file: File) => void
    getStatusThunk: (userId: number) => void
    updateStatusThunk: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>

}

type PathParamsType = {
    userId: string
}


type PropsType = MapStatePropsType  & MapDispatchPropsType  & RouteComponentProps<PathParamsType>

class ProfileContainer extends React.Component<PropsType>{

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if (!userId) {
            userId = this.props.AuthorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunk(userId as number)
        this.props.getStatusThunk(userId as number)
    }


componentDidMount()
{
    this.refreshProfile()
}

componentDidUpdate(prevProps: PropsType, prevState: AppStateType)
{
    if(this.props.match.params.userId !== prevProps.match.params.userId){
        this.refreshProfile()
    }

}

render()
{
    return (
        <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                 updateStatusThunk={this.props.updateStatusThunk}
                 isOwner={!this.props.match.params.userId}
                 savePhoto={this.props.savePhoto}
                 isError={this.props.isError}
                 saveProfile={this.props.saveProfile}
        />
    )
}
}

let mapStateToProps = (state: AppStateType): MapStatePropsType  => {
    return {
    profile: state.profile.profile,
    status: state.profile.status,
    AuthorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isError: state.profile.isError
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileThunk, savePhoto, getStatusThunk, updateStatusThunk, saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

