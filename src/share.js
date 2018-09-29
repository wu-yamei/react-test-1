import React, { Component } from 'react';
import './share.css';
import bg from './images/head2.png';
import bg6 from './images/bg6.png';
import g from './images/g.png';
import go1 from './images/go1.png';
import go2 from './images/go2.png';

var boxBg = {
	backgroundImage: 'url(' + bg6 + ')',
	backgroundRepeat:  'no-repeat'
};
var liBg = {
	backgroundImage: 'url(' + g + ')',
	backgroundRepeat:  'no-repeat'
};
var go = {
	backgroundImage: 'url(' + go1 + ')',
	backgroundRepeat:  'no-repeat'
};
var goAct = {
	backgroundImage: 'url(' + go2 + ')',
	backgroundRepeat:  'no-repeat'
};

class Share extends Component{
	constructor(props) {
        super(props);
        this.state = {
        	isActive: false 
        }
    }
	render () {
		return (
			<div className="container">
        		<img src={bg} alt="" className="share-head-img"/>
				<div className="box" style={boxBg}>
		            <div className="tips-box">
		                <div className="border"></div>
		                <div className="tip">还剩<span id="count">3</span>次抽奖机会,大奖等着你~~</div>
		                <div className="border"></div>
		            </div>
		            <div className="cont">
		                <div className="li" style={liBg}></div>
		                <div className="li" style={liBg}></div>
		                <div className="li" style={liBg}></div>
		            </div>
		            <div className="go-img" id="play" style={this.state.isActive? goAct : go}></div>
		        </div>
		        <div className="share-box">
		            <div className="share-bg">
		                <div className="share-btn" id="share">分享</div>
		            </div>
		        </div>
		    </div>
		)
	}
}

export default Share;