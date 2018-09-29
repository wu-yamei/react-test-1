import React, { Component } from 'react';
import './detail.css';
import sucImg from './images/succ.png';
import Bg5 from './images/bg5.png';
var ansItemBg = {
	backgroundImage: 'url(' + Bg5 + ')',
	backgroundRepeat:  'no-repeat'
};
class Detail extends Component{
	render (){
		let arr = this.props.arr;
		return (
			<div className={this.props.isShow? 'mask' : 'hid'}>
				<div className="result-box">
		            <img src={sucImg} alt="" className="succ-img"/>
		            <div className="py-box">
		                <div className="py" data-index="0">wo</div>
		                <div className="py" data-index="1">ping</div>
		                <div className="py" data-index="2">ppppp</div>
		                <div className="py" data-index="3">xiogn</div>
		            </div>    
		            <div className="ans-box result-ans-box">
		                <div className="ans-item res" style={ansItemBg}>{arr[0]}</div>
		                <div className="ans-item res" style={ansItemBg}>{arr[1]}</div>
		                <div className="ans-item res" style={ansItemBg}>{arr[2]}</div>
		                <div className="ans-item res" style={ansItemBg}>{arr[3]}</div>
		            </div>
		            <div className="detail">
		                <h3 className="h3">【解释】</h3>
		                <p className="deta-cont">djflskajflkdsjalfkdjsalkfjkldsDFKDSAJFOIDSAUFODJ放假到拉萨今飞凯达积分跨境电商解放东路看时间阿弗莱克大家撒浪费空间嘚瑟了积分卡掉了撒酒疯达康书记阿夫林</p>
		            </div>
		            <div className="detail">
		                <h3 className="h3">【出处】</h3>
		                <p className="deta-cont">djflskajflkdsjalfkdjsalkfjklds</p>
		            </div>
		            <div className="res-btn-box">
		                <div className="res-btn" onClick={this.props.back}>返回</div>
		                <div className="res-btn" onClick={this.props.next}>下一题</div>
		            </div>
		        </div>
			</div>
		)
	}
}

export default Detail;