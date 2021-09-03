import React from "react";
import {connect} from "react-redux";
import {
    getUsersThunkCreater, unfollowThunk, followThunk
} from "../../redux/friendsReducer";
import Users from "./Users";
import Preloader from "../common/Preloder/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getAPageSize,
    getCurrentPage,
    getisFetching,
    getTotalCount, getUsers
} from "../../redux/friendsSelectors";
import {UserType} from "../../Types/Types";
import {AppStateType} from "../../redux/reduxStore";

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalItemsCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchPropsType = {
    unfollowThunk: (userId: number) => void
    followThunk: (id: number, photo: string | null, name: string) => void
    getUsersThunkCreater: (currentPage: number, pageSize: number) => void

}

type OwnPropsType = {
}
type PropsType = MapStatePropsType  & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {


    componentDidMount() {
        const {currentPage, pageSize} =this.props
        this.props.getUsersThunkCreater(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsersThunkCreater(pageNumber, pageSize)
    }

    render() {
        return <>
           {this.props.isFetching ? <Preloader/> : null}
                <Users
                totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollowThunk={this.props.unfollowThunk}
                followThunk={this.props.followThunk}
            />


        </>
    }

}



let mapStateToProps = (state: AppStateType): MapStatePropsType  => {
    return {
        users: getUsers(state),
        pageSize: getAPageSize(state),
        totalItemsCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getisFetching(state),
    }
}

export default compose<React.ComponentType>(
     withAuthRedirect,
    // <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps,
    {
        getUsersThunkCreater, unfollowThunk, followThunk,
    }))(UsersContainer)