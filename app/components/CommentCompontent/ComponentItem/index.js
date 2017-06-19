/**
 * Created by Danny on 2017-05-31.
 */
import React, {Component} from 'react';
import './index.less'
import Star from'../../Star/index'
export default class CommentItem extends Component {
    render() {
        let {username, comment, star} = this.props.data;
        return (
            <div className="comment-item">
                <div>
                    <i className="iconfont icon-yonghufill"></i>
                    {username}
                </div>
                <Star count={star}/>
                <div>
                    {comment}
                </div>
            </div>

        )
    }
}
