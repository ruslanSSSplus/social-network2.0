import React, {lazy, Suspense} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {HashRouter, Link, Route, Switch, withRouter} from 'react-router-dom'
import Friends from "./components/Friends/Friends";
import GenaProfile from "./components/ProfileGena/GenaProfile";
import NikitaProfile from "./components/NikitaProfile";
import DiallogsContainer from "./components/Diallogs/DiallogsContainer";
import NewsContainer from "./components/News/NewsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import  {UsersPage} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initialiseApp} from "./redux/appReducer";
import Preloader from "./components/common/Preloder/Preloader";
import {withAuthRedirect} from "./hoc/withAuthRedirect";
import store, {AppStateType} from "./redux/reduxStore";
import {Login} from "./components/Login/Login";


import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import classes from "./components/NavBar/NavBar.module.css";
import {HeaderComponent} from "./components/Header/Header";

const { Header, Content, Footer, Sider } = Layout;




// import MusicContainer from "./components/Music/MusicContainer";
const MusicContainer = lazy(() => import('./components/Music/MusicContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initialiseApp: ()=> void
}

type PropsType = MapPropsType & DispatchPropsType
class App extends React.Component<PropsType> {

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


                    <div className="logo">
                        <img className={'logo1'} src="https://avatanplus.com/files/resources/original/5bf6f0c0b38e91673c9c70df.png" alt={'logo'}/>
                    </div>


                    <Menu   theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                        <Menu.Item key="1" icon={<UserOutlined />}>
                            <Link to = "/profile">My page</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link  to = '/news' >News</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                            <Link to = '/diallogs'>Messages</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UserOutlined />}>
                            <Link to = '/friends' > Friends</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<UserOutlined />}>
                            <Link to = '/users' > Пользователи</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<UserOutlined />}>
                            <Link to = '/music' >Music</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0, height: 68 }} >
                     <HeaderComponent />
                    </Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
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
                                               render={() => <UsersPage/>}/>
                                        <Route path='/login'
                                                render={() => <Login/>}/>

                                        <Route path='/https://vk.com/dank_af' render={() => <GenaProfile/>}/>
                                         <Route path='/https://vk.com/id153839551' render={() => <NikitaProfile/>}/>
                                        {/*<Route exatc path='/' render={() => <ProfileContainer/>}/>*/}
                                     </Switch>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
            // <div className="app-wrapper">
            //     <HeaderContainer/>
            //
            //     <NavBarContainer/>
            //
            //
            //     <div className='app-wrapper-content'>
            //         <Switch>
            //             <Route path='/diallogs' render={() => <DiallogsContainer/>}/>
            //             <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
            //
            //             <Route path='/news' render={() => <NewsContainer/>}/>
            //             <Route path='/music'
            //                    render={() => {
            //                        return <Suspense fallback={<div>loading...</div>}>
            //                            <MusicContainer/>
            //                        </Suspense>
            //                    }}/>
            //             <Route path='/friends'
            //                    render={() => <Friends/>}/>
            //             <Route path='/users'
            //                    render={() => <UsersPage/>}/>
            //             <Route path='/login'
            //                    render={() => <Login/>}/>
            //
            //             <Route path='/https://vk.com/dank_af' render={() => <GenaProfile/>}/>
            //             <Route path='/https://vk.com/id153839551' render={() => <NikitaProfile/>}/>
            //             {/*<Route exatc path='/' render={() => <ProfileContainer/>}/>*/}
            //         </Switch>
            //     </div>
            //
            // </div>

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