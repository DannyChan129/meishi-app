/**
 * Created by Danny on 2017-05-31.
 */
import React,{Component} from 'react';
import "./index.less"
export default class LonginComponent extends Component{
    constructor(){
        super();
        this.state={
            val:''
        }
    }
    render(){
        return (
            <div className="login-component">
                {/*ref获取输入框的值  非受控    或者onchange+state 受控的 */}
                <input type="text" value={this.state.val} onChange={(this.changeValue.bind(this))} placeholder="请输入用户名"/>
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
    changeValue(e){
        this.setState({
            val:e.target.value
        })
    }
    login(){
      this.props.login(this.state.val);
    }
}
