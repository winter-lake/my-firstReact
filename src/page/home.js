import { Layout, Menu, Icon } from 'antd';
import React,{Component} from 'react'
import { Switch, Route } from 'react-router';
import { Link } from 'react-router-dom'
import About from './about'
import Help from './help'
import HomeCon from './homeCon'
import Next from './next'
import { Provider } from 'react-redux'
import store from '../redux/store'
const { Header, Sider, Content } = Layout;
class home extends Component{
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Layout style={{width:'100%',height:'100%'}}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span><Link to="/">home</Link></span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span><Link to="/help">help</Link></span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span><Link to="/about">about</Link></span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Provider store={store}>
                           <Switch>
                               <Route key='1' exact={true} path="/" component={HomeCon}/>
                               <Route key='2' exact={true} path="/about" component={About}/>
                               <Route key='3' exact={true} path="/help" component={Help}/>
                               <Route key='4' exact={true} path="/next" component={Next}/>
                           </Switch>
                        </Provider>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
export default home;