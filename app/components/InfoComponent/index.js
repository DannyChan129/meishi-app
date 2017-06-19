/**
 * Created by Danny on 2017-05-31.
 */
import React,{Component} from 'react';
import Star from '../Star/index'
import './index.less'
export default class InfoComponent extends Component{
    render(){
        console.log(this.props.data);
        let {img,star,desc,title,subTitle,price} = this.props.data;
        return (
            <div className="info-component">
            <div className="info-list">
                <img src={img} alt=""/>
                <div>
                    {title}
                    <div className="info-star">
                        {/*star接受一个点亮的星星数*/}
                        <Star count={star}/><span>￥{price}</span>
                    </div>
                    <p>{subTitle}</p>
                </div>
            </div>
                <br/>
                <hr/>
            <div dangerouslySetInnerHTML={{__html:desc}}></div>
            </div>

        )
    }
}
