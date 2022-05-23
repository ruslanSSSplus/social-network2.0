import {Route, Switch} from "react-router-dom";
import {ChatPage} from "../pages/Chat/ChatPage";
import ProfileContainer from "../pages/Profile/ProfileContainer";
import NewsContainer from "../pages/News/NewsContainer";
import React, {Suspense} from "react";
import Friends from "../pages/Friends/Friends";
import {UsersPage} from "../pages/Users/UsersContainer";
import {Login} from "../pages/Login/Login";
import DiallogsContainer from "../pages/Diallogs/DiallogsContainer";
import {WeatherContainer} from "../pages/Weather/WeatherContainer";
import {FilmsContainer} from "../pages/Films/FilmsContainer";
import Books from "../pages/Books/Books";
import {MainPage} from "../pages/TestRoute/mainPage";
import {ProfilePage} from "../pages/TestRoute/ProfilePage";
import PopUpSlider from "../pages/PopUpSlider/PopUpSlider";
import {AnimeContainer} from "../pages/Anime/AnimeContainer";
import GenaProfile from "../pages/ProfileGena/GenaProfile";
import NikitaProfile from "../components/NikitaProfile";
import MusicContainer from "../pages/Music/MusicContainer";
import {BeerInt} from "../pages/NewProject/BeerInt";

import {TestContainer} from "../pages/Test/TestContainer";
import DataPicker from "../pages/DataPicker/DatePicker";

export const AllRoutes = () => {


    return (
        <Switch>
            <Route path='/chat'
                   render={() => <ChatPage />}/>

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
                   render={() => <UsersPage/>}/>
            <Route path='/login'
                   render={() => <Login/>}/>
            <Route path='/diallogs' render={() => <DiallogsContainer/>}/>
            <Route path='/weather' render={() => <WeatherContainer />}/>

            <Route path='/films' render={() => <FilmsContainer />}/>
            <Route path='/books' render={() => <Books />}/>


            <Route path='/maintest' render={() => <MainPage />}/>
            <Route path='/profiletest' render={() => <ProfilePage />}/>
            <Route path='/PopUpSlider' render={() => <PopUpSlider />}/>

            <Route path='/Anime' render={() => <AnimeContainer />}/>
            <Route path='/https://vk.com/dank_af' render={() => <GenaProfile/>}/>
            <Route path='/https://vk.com/id153839551' render={() => <NikitaProfile/>}/>
            <Route path='/BeerTernational' render={() => <BeerInt />}/>

            <Route path='/Test' render={() => <TestContainer />}/>
            <Route path='/DataPicker' render={() => <DataPicker />}/>

        </Switch>
    );
}