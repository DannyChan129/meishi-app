/**
 * Created by Danny on 2017-06-01.
 */
import React,{Component} from 'react';
import './index.less'
export default class CurrentCity extends Component{
    render(){
        return (
            <div className="current-city">
                {this.props.cityName}
                <hr/>
            </div>
        )
    }
}
