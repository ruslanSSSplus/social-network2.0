import React, {lazy, Suspense} from 'react';
import './App.module.css';
import 'antd/dist/antd.css';
import {HashRouter, Link, Route, Switch, withRouter} from 'react-router-dom'
import Friends from "./pages/Friends/Friends";
import GenaProfile from "./pages/ProfileGena/GenaProfile";
import NikitaProfile from "./components/NikitaProfile";
import DiallogsContainer from "./pages/Diallogs/DiallogsContainer";
import NewsContainer from "./pages/News/NewsContainer";
import classes from './App.module.css'
import  {UsersPage} from "./pages/Users/UsersContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialiseApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloder/Preloader";


import store, {AppStateType} from "./redux/reduxStore";
import {Login} from "./pages/Login/Login";


import {Layout, Menu} from 'antd';
import { SoundOutlined, UserOutlined, VideoCameraOutlined, CloudOutlined, MessageOutlined,
    WechatOutlined, SearchOutlined, BookOutlined, ZhihuOutlined, ReadOutlined} from '@ant-design/icons';

import {HeaderComponent} from "./components/Header/Header";
import {ChatPage} from "./pages/Chat/ChatPage";
import {WeatherContainer} from "./pages/Weather/WeatherContainer";
import {FilmsContainer} from "./pages/Films/FilmsContainer";
import {MainPage} from "./pages/TestRoute/mainPage";
import {ProfilePage} from "./pages/TestRoute/ProfilePage";
import Books from "./pages/Books/Books";
import {AnimeContainer} from "./pages/Anime/AnimeContainer";
import PopUpSlider from "./pages/PopUpSlider/PopUpSlider";
// import logo from "./assets/images/pngwing.com.png"


const { Header, Content, Footer, Sider } = Layout;




// import MusicContainer from "./components/Music/MusicContainer";
const MusicContainer = lazy(() => import('./pages/Music/MusicContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initialiseApp: ()=> void
}

type PropsType = MapPropsType & DispatchPropsType

class App extends React.Component<PropsType> {

    state = {
        needWeather: true
    }

    componentDidMount() {
        this.props.initialiseApp()
        window.onerror = function myErrorHandler(errorMsg) {
            alert("Error occured: " + errorMsg);//or any message
            return false;
        }
    }



    render() {
        if(!this.props.initialized){
            return <Preloader />
        }


        return (
            <Layout >
                <Sider
                    style={{background: '#98bfad', height: '500px'}}
                    className="menuShadow"
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >


                    <div className={classes.logo}>
                        <img className={classes.logo1} src='https://sun9-3.userapi.com/impf/sbA1-MxKfR9FziylJZeSfg-hNv9DwySyt8Qn1Q/pp_Bmo1uZ7I.jpg?size=237x173&quality=95&sign=ceafa2f1a605e6f8ea3539cd4bac2fa0&type=album' alt={'logo'}/>
                    </div>


                    <Menu   mode="inline" defaultSelectedKeys={['1']} style={{ background: "linear-gradient(#98bfad, #ff907c)", }} >

                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to = "/profile">My page (locked)</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<BookOutlined />}>
                            <Link  to = '/news' >News</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<WechatOutlined />}>
                            <Link to = '/chat' >Chat (locked)</Link>

                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            <Link to = '/friends' > Friends</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<SearchOutlined />}>
                            <Link to = '/users' > Пользователи</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<SoundOutlined />}>
                            <Link to = '/music' >Music</Link>
                        </Menu.Item>
                        {/*<Menu.Item key="7" icon={<MessageOutlined />}>*/}
                        {/*    <Link to = '/diallogs'>Messages (locked)</Link>*/}
                        {/*</Menu.Item>*/}
                        <Menu.Item key="8" icon={<VideoCameraOutlined />}>
                            <Link to = '/films'>Films</Link>
                        </Menu.Item>
                        <Menu.Item key="9" icon={<ReadOutlined />}>
                            <Link to = '/books'>Books</Link>
                        </Menu.Item>
                        {/*<Menu.Item key="10" icon={<MessageOutlined />}>*/}
                        {/*    <Link to = '/maintest'>Main (locked)    </Link>*/}
                        {/*</Menu.Item>*/}
                        <Menu.Item key="11" icon={<ZhihuOutlined />}>
                            <Link to = '/anime'>Anime</Link>
                        </Menu.Item>
                        <Menu.Item key="12" icon={<ZhihuOutlined />}>
                            <Link to = '/PopUpSlider'>PopUpSlider</Link>
                        </Menu.Item>


                        {!this.state.needWeather && <div className={classes.weather} onClick={() => {
                            this.setState({needWeather: true})
                        }}>
                            <WeatherContainer/>
                        </div>}
                        {this.state.needWeather &&  <Menu.Item key="15" icon={<CloudOutlined />} onClick={() => {
                            this.setState({needWeather: false})

                        }}>
                           Weather
                        </Menu.Item>}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{padding: 0, height: 68, background: "linear-gradient(to right, #98bfad, #ffc4b2)"}} >
                        <HeaderComponent/>
                    </Header>
                    <Content >
                        <div className="site-layout-background" style={{padding: 0, minHeight: 360}}>
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

                            </Switch>
                        </div>
                    </Content>
                     {/*<Footer style={{textAlign: 'center'}}>Social-network 2.0 ©2021 Created by Ruslan SSS Ghoul</Footer>*/}
                </Layout>
            </Layout>

            //     <NavBarContainer/>


        );
    }
}

const mapStateToProps=(state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialiseApp}
    ))(App)



const AppAllTree: React.FC = () => {
    return <HashRouter>
            <Provider store={store}>
                <AppContainer  />
            </Provider>
        </HashRouter>

}

export default AppAllTree