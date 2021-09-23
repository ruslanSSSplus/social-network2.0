import React, {lazy, Suspense} from 'react';
import './App.module.css';
import 'antd/dist/antd.css';
import {HashRouter, Link, Route, Switch, withRouter} from 'react-router-dom'
import Friends from "./components/Friends/Friends";
import GenaProfile from "./components/ProfileGena/GenaProfile";
import NikitaProfile from "./components/NikitaProfile";
import DiallogsContainer from "./components/Diallogs/DiallogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import classes from './App.module.css'
import  {UsersPage} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialiseApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloder/Preloader";

import store, {AppStateType} from "./redux/reduxStore";
import {Login} from "./components/Login/Login";


import { Layout, Menu } from 'antd';
import { SoundOutlined, UserOutlined, VideoCameraOutlined, CloudOutlined, MessageOutlined, WechatOutlined, SearchOutlined} from '@ant-design/icons';

import {HeaderComponent} from "./components/Header/Header";
import {ChatPage} from "./pages/Chat/ChatPage";
import {WeatherContainer} from "./components/Weather/WeatherContainer";

const { Header, Content, Footer, Sider } = Layout;




// import MusicContainer from "./components/Music/MusicContainer";
const MusicContainer = lazy(() => import('./components/Music/MusicContainer'));

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
            <Layout>
                <Sider
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
                        <img className={classes.logo1} src="https://avatanplus.com/files/resources/original/5bf6f0c0b38e91673c9c70df.png" alt={'logo'}/>
                    </div>


                    <Menu   theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to = "/profile">My page</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link  to = '/news' >News</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<WechatOutlined />}>
                            <Link to = '/chat' >Chat</Link>

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
                        <Menu.Item key="7" icon={<MessageOutlined />}>
                            <Link to = '/diallogs'>Messages</Link>
                        </Menu.Item>
                        {/*<Menu.Item key="8" icon={<CloudOutlined />}>*/}
                        {/*    <Link to = '/weather'>Weather</Link>*/}
                        {/*</Menu.Item>*/}
                        {this.state.needWeather && <div className={classes.weather} onClick={() => {
                            this.setState({needWeather: false})
                            console.log(this.state.needWeather)
                        }}>
                            <WeatherContainer/>
                        </div>}
                        {!this.state.needWeather &&  <Menu.Item key="8" icon={<CloudOutlined />} onClick={() => {
                            this.setState({needWeather: true})
                            console.log(this.state.needWeather)
                        }}>
                           Weather
                        </Menu.Item>}
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{padding: 0, height: 68}}>
                        <HeaderComponent/>
                    </Header>
                    <Content style={{margin: '15px 16px 0'}}>
                        <div className="site-layout-background" style={{padding: 20, minHeight: 360}}>
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


                                <Route path='/https://vk.com/dank_af' render={() => <GenaProfile/>}/>
                                <Route path='/https://vk.com/id153839551' render={() => <NikitaProfile/>}/>

                            </Switch>
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Social-network 2.0 ©2021 Created by Ruslan SSS Ghoul</Footer>
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