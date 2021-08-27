import React, {lazy, Suspense} from 'react';
import './App.css';

import {Route, Switch, withRouter} from 'react-router-dom'
import Friends from "./components/Friends/Friends";
import GenaProfile from "./components/ProfileGena/GenaProfile";
import NikitaProfile from "./components/NikitaProfile";
import DiallogsContainer from "./components/Diallogs/DiallogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialiseApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloder/Preloader";
import {withAuthRedirect} from "./hoc/withAuthRedirect";

// import MusicContainer from "./components/Music/MusicContainer";
const MusicContainer = lazy(() => import('./components/Music/MusicContainer'));



class App extends React.Component {

    componentDidMount() {
        this.props.initialiseApp()
        window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
            alert("Error occured: " + errorMsg);//or any message
            return false;
        }
    }



    render() {
        if(!this.props.initialized){
            return <Preloader />
        }


        return (

            <div className="app-wrapper">
                <HeaderContainer/>

                <NavBarContainer/>


                <div className='app-wrapper-content'>

                    <Switch>
                        <Route path='/diallogs' render={() => <DiallogsContainer/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                        <Route path='/news' render={() => <NewsContainer/>}/>
                        <Route path='/music'
                               render={() => {
                                   return <Suspense fallback={<div>loading...</div>}>
                                       <MusicContainer/>
                                   </Suspense>
                               }}/>
                        <Route path='/friends'
                               render={() => <Friends/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                       
                        <Route path='/https://vk.com/dank_af' render={() => <GenaProfile/>}/>
                        <Route path='/https://vk.com/id153839551' render={() => <NikitaProfile/>}/>
                        <Route exatc path='/' render={() => <ProfileContainer/>}/>
                    </Switch>
                </div>

            </div>

        );
    }
}

const mapStateToProps=(state)=> ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initialiseApp}
    ))(App)


