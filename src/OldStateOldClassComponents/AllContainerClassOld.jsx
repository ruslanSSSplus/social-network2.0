// import React from "react";
// import {connect} from "react-redux";
// import Friend from "./Friend/Friend";
// import {
//     addFriendActionCreator,
//     allFriendsAC,
//      getUsersThunk,
//     removeFriendAC,
//     unfollowThunk,
// } from "../../../redux/friendsReducer";
// import All from "./All";
// import {setUsers, unfollow} from "../../../redux/friendsReducer";
// import {usersAPI} from "../../../api/api";
//
//
// class AllContainerClassOld extends React.Component {
//
//
//     constructor(props) {
//         super(props);
//     }
//
//     componentDidMount() {
//         this.props.getUsersThunk(this.props.isFriend)
//     }
//
//
//     render() {
//         return <All
//                 users={this.props.users}
//                 addfriend={this.props.addFriendActionCreator}
//                 allFriendsAC={this.props.allFriendsAC}
//                 friends={this.props.friends}
//                 unfollowThunk={this.props.unfollowThunk}
//             />}
// }
// // let mapStateToProps =(state) => {
//
//     return {
//         users: state.friends.users,
//         friends: state.friends.friendDate,
//         isFriend: state.friends.isFriend,
//     }
// }
//
//
//
//
//
//
// export default connect(mapStateToProps, {
//     addFriendActionCreator,
//     allFriendsAC,
//     unfollowThunk,
//     getUsersThunk
// })(AllContainerClassOld)
//
