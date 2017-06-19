/**
 * Created by Danny on 2017-05-31.
 */
import React,{Component} from 'react';
import HeaderComponent from '../../components/HeaderComponent/index'
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';//拿到所有actionsCreate的对象
import LoginComponent from '../../components/LoginComponent/index'
import {bindActionCreators} from 'redux';
class Login extends Component{
    constructor(){
        super();
        this.state ={
            login:false //默认没登录过，写一个方法校验是否登录
        }
    }
    render(){
        return (
            <div>
                <HeaderComponent title="登录"  history={this.props.history}/>
                {/*如果登录过 显示登录组件，否则不显示直接跳转用户页面*/}
                {this.state.login?<LoginComponent login={this.login.bind(this)}/>:<div></div>}
            </div>
        )
    }
    //在这里我们需要写一个方法，这个方法是登录的将用户名传入到redux中
    login(username){
      let info = this.props.userInfo
        info.username = username;
        //更新rudex中的状态
        this.props.userActions.update(info);
        /*登完跳转用户页*/

        if(this.props.match.params.route){
            //如果是从购买进入的需要跳回购买页
            this.props.history.push(decodeURIComponent(this.props.match.params.route));
        }else{
           //没有指定跳转到用户界面
            this.props.history.push('/user')
        }
    }



    componentDidMount(){ //检查是否登录 在redux中是否有username属性如果有就登录过，没有就没
      this.checkLogin();
    }
    checkLogin(){
        if(this.props.userInfo.username){
            this.props.history.push('/user');
        }
        this.setState({
            login:true,//显示登录组件
        });
    }
}
export default connect(
    state=>{
        return{userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(Login)
