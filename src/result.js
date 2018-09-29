import React, { Component } from 'react';
import './result.css';
import s1 from './images/star.png';
import s2 from './images/star2.png';

class Result extends Component{
    btn1Click = () => {
    	if(this.props.flag === 1){
            //查看
            this.props.hide();
    	}else{
    		//显示规则
    	}
    }
    btn2Click = () => {
    	if(this.props.flag === 1){
    		//跳转分享
            this.props.history.push('/share/');
    	}else{
            //重新闯关
            this.props.history.push('/');
    	}
    }
    render () {
    	return (
		    <div className={this.props.isShow? 'mask' : 'hid'}>
		        <div className="end-box">
		            <img src={this.props.flag === 1? s1 : s2} alt="" className="star"/>
		            <h2 className={this.props.flag === 1? 'h2' : 'h2 fail-color'}>闯关成功</h2> 
		       		<p className="end-tips">{this.props.flag === 1? '恭喜您获得3次抽奖机会' : '加油！再接再厉吆~'}</p> 
		            <div className="res-btn-box end-btn-box">
		                <div className="res-btn" onClick={this.btn1Click}>{this.props.flag === 1? '查看' : '查看规则'}</div>
		                <div className="res-btn" onClick={this.btn2Click}>{this.props.flag === 1? '去抽奖' : '重新闯关'}</div>
		            </div>
		        </div>
		    </div>
    	)
    }
}
export default Result;