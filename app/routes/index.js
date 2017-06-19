import React,{Component} from 'react';
//路由的两种类型 HashRouter BrowserRouter
import {
    HashRouter as Router, //提供一个路由容器
    Route,//单条路由
    Switch //只匹配一次
} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from "../containers/Detail";
import User from '../containers/User';
import Login from '../containers/Login';
import City from '../containers/City'
import Search from '../containers/Search/index'


export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        {/*只有当路径为/的时候才匹配路由*/}
                        <Route exact path='/' component={Home}/>
                        <Route path='/detail/:id' component={Detail}/>
                        {/*点击先跳转到登录页，登陆后再回到登陆之前的页面，在login路径后需要保存上次点击Login的路径,如果登陆过在登录页跳转到用户面*/}
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>
                        <Route path="/search/:kind/:keyword?" component={Search}/>

                    </Switch>
                </Router>
            </div>
        )
    }
}