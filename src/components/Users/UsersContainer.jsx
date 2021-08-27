import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
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
    getTotalCount
} from "../../redux/friendsSelectors";



class UsersContainer extends React.Component {


    componentDidMount() {
        const {currentPage, pageSize} =this.props
        this.props.getUsersThunkCreater(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const pageSize =this.props
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


// let mapStateToProps = (state) => {
//
//     return {
//         users: state.friends.users,
//         pageSize: state.friends.pageSize,
//         totalUsersCount: state.friends.totalUsersCount,
//         currentPage: state.friends.currentPage,
//         isFetching: state.friends.isFetching,
//     }
// }

let mapStateToProps = (state) => {

    return {
        users: state.friends.users,
        pageSize: getAPageSize(state),
        totalItemsCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getisFetching(state),
    }
}

export default compose(
     withAuthRedirect,
    connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        getUsersThunkCreater, unfollowThunk, followThunk
    }))(UsersContainer)