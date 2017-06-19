import React,{Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad"
import {connect} from 'react-redux';
import List from './subpage/List'
class Home extends Component{
    render(){
        return (
            <div>
                <HomeHeader history={this.props.history} cityName={this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
//取出redux中的城市，传递给HomeHeader 组件
export default connect(
    state=>{
        return{userInfo:state.userInfo}
    }
)(Home);