import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, savePhoto, saveProfile, updateStatusThunk} from "../../redux/profileReducer";
import { withRouter} from 'react-router-dom'
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




class ProfileContainer extends React.Component{

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.AuthorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfileThunk(userId)
        this.props.getStatusThunk(userId)
    }


componentDidMount()
{
    this.refreshProfile()
}

componentDidUpdate(prevProps, prevState, snapshot)
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
                 isError={this.props.isError}/>
    )
}
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile,
    status: state.profile.status,
    AuthorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isError: state.profile.isError
})

export default compose(
    connect(mapStateToProps, {getProfileThunk, savePhoto, getStatusThunk, updateStatusThunk, saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

