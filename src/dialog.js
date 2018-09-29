import React, { Component } from 'react';
import './dialog.css';
import close from './images/close.png';

class Dialog extends Component {
    constructor(props) {
        super(props);
        this.state = {showDialog: true, active: 1};
    }
    closeClick = () => {
        this.setState({
            showDialog: false
        });
        this.props.callback(false);
    }
    switchTab = (flag) => {
        // console.log(flag);
        this.setState({
            active: flag
        });
    }
    render() {
        return (
            <div className={this.props.isShow? 'tip-dialog' : 'tip-dialog hid'}>
                <div className="tip-tabs">
                    <div className={this.state.active === 1? 'tip-tab tip-tab-active' : 'tip-tab'} onClick={(e) => this.switchTab(1, e)}>活动秘籍</div>
                    <div className={this.state.active === 2? 'tip-tab tip-tab-active' : 'tip-tab'} onClick={(e) => this.switchTab(2, e)}>中奖记录</div>
                </div>
                <div className={this.state.active === 1? 'tips-cont tipsCont' : 'hid'}>wfdsfdsa</div>
                <div className={this.state.active === 2? 'tips-ui tipsCont' : 'hid'}>
                    <div className="tips-li">
                        <img src={close} alt="" className="avatar"/>
                        <div className="uinfo">
                            <div className="uname">和*珅</div>
                            <div className="time">08/23 12:23</div>
                        </div>
                        <div className="gift-cont">fdsafdsafffffffffffffffffffffffff</div>
                    </div>
                </div>
                <img src={close} alt="" className="close-img" onClick={this.closeClick}/>
            </div>
            );
        }
    }

    export default Dialog;