import React, { Component } from 'react';
import axios from 'axios';
import './main.css';
import Bg from './images/bg2.png';
import Bg3 from './images/bg3.png';
import Bg4 from './images/bg4.png';
import Bg5 from './images/bg5.png';
import Detail from './detail.js';
import Result from './result.js';


var checkItemBg = {
	backgroundImage: 'url(' + Bg4 + ')',
	backgroundRepeat:  'no-repeat'
};
var ansItemBg = {
	backgroundImage: 'url(' + Bg5 + ')',
	backgroundRepeat:  'no-repeat'
};
var qusBoxBg = {
	backgroundImage: 'url(' + Bg3 + ')',
	backgroundRepeat:  'no-repeat'
}

var timer = 1;
var count = 0;


function formatSeconds(value) {
    var secondTime = parseInt(value, 10);// 秒
    var minuteTime = 0;// 分
    if(secondTime > 60) {
        minuteTime = parseInt(secondTime / 60, 10);
        secondTime = parseInt(secondTime % 60, 10);
    }
    var result = "0" + (minuteTime > 0? minuteTime: '0') + ":" + (secondTime > 9? secondTime: '0' + secondTime);
    return result;
}

class Main extends Component{
	constructor(props) {
        super(props);
        this.state = {
        	showDetail: false,
        	showResult: false,
        	time: '02:00',
        	ansArr: ['', '', '', ''],
        	flag: 1 //1: 成功 2： 失败
        };
    }
    componentWillMount(){
    	let a = this.props.match.params.t;
	    let p = {
	       	"token": a,
	       	"mark": "caichengyu",
	        "type": "5"
	    }
	    // var getInformation = {
	    //   	method: "POST",
	    //   	credentials: "include",
	    //   	body: JSON.stringify(p)
	    // }
     //  fetch("http://m.test.ajihua888.com/exam/paper-question/list", getInformation)
     //  .then(response => {
     //  	console.log(response);
     //  })
     //  .then(json => {
     //    // 返回的数据类型
     //    console.log(json);
	    // this.setState({
	    //     data: json.object.list
	    // })
     //  })


    axios.post("http://m.test.ajihua888.com/paper-question/list", p)
      	.then(res => {
   			console.log(res);
      	})
      	.catch(err => {
      		console.log(err);
      	})
  	}
    componentDidMount(){
    	this.timeDown();
    }
    componentWillUnmount(){	
    	clearInterval(this.timerID);
    	count = 0;
    	timer = 1;
    	this.setState({
        	ansArr: ['', '', '', ''],
        	time: '02:00'
        });
    }
    timeDown() {
		this.timerID = setInterval(() => {
			timer--;
			if(timer >= 0){
				this.setState({
					time: formatSeconds(timer)
				});
			}else{
				console.log('时间到...');
				clearInterval(this.timerID);
				timer = 120;
				this.setState({
					showResult: true
				});
			}
		}, 1000);
	}
	ansItemClick (i) {
		var a = this.state.ansArr;
		if(count > 0 && a[i]){
			a[i] = '';
			this.setState({
				ansArr: a
			})
			count--;
		}
	}
	check(str){
		// console.log(str);
		// console.log(count);
		if(count < 4){	
				this.setAns(str);
				count++;
				if(count === 4){
					this.setState({
						showDetail: true
					});
				}
			}
	}
	setAns(str){
		var a = this.state.ansArr;
		for(var i = 0; i < a.length; i++){
			if(!a[i]){
				a[i] = str;
				this.setState({
					ansArr: a
				})
				// console.log(this.state.ansArr);
				break;
			}
		}
	}
	hideDetail = () => {
		this.setState({
			showDetail: false
		});
	}
	refresh = () => {
		count = 0;
		this.setState({
			showDetail: false,
			ansArr: ['', '', '', '']
		});
	}

	hideResult = () => {
		this.setState({
			showResult: false
		});
	}
	render(){
		return (
			<div className="content">
    			<img src={Bg} className="bg-img" alt=""/>
        		<div className="qus-box" style={qusBoxBg}>
        			<div className="time-down">{this.state.time}</div>
	                <div className="ques-img">
	                    <p><img src={Bg} alt=""/></p>
	                </div>
        		</div>
	        	<div className="ans-box">
	        		<div className="ans-item ans" onClick={() => this.ansItemClick(0)} style={ansItemBg}>{this.state.ansArr[0]}</div>
	        		<div className="ans-item ans" onClick={() => this.ansItemClick(1)} style={ansItemBg}>{this.state.ansArr[1]}</div>
	        		<div className="ans-item ans" onClick={() => this.ansItemClick(2)} style={ansItemBg}>{this.state.ansArr[2]}</div>
	        		<div className="ans-item ans" onClick={() => this.ansItemClick(3)} style={ansItemBg}>{this.state.ansArr[3]}</div>
	        	</div>
	        	<div className="check-box">
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('一')} style={checkItemBg}>一</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('二')} style={checkItemBg}>二</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('儿')} style={checkItemBg}>儿</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('三')} style={checkItemBg}>三</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('四')} style={checkItemBg}>四</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('我')} style={checkItemBg}>我</div>
	        		<div className="check-item" onClick={() => this.check('藏')} style={checkItemBg}>藏</div>
	        		<div className="check-item" onClick={() => this.check('大')} style={checkItemBg}>大</div>
	        	</div>
	        	
				<Detail isShow={this.state.showDetail} arr={this.state.ansArr} back={this.hideDetail} next={this.refresh}/>
				<Result isShow={this.state.showResult} flag={this.state.flag} hide={this.hideResult} history={this.props.history}/>
			</div>
		)
	}
}	

export default Main;