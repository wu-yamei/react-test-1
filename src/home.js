import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import bg from './images/bg.png';
import tip from './images/tip.png';
import head from './images/head.png';
import btn from './images/start-btn.png';
import Dialog from './dialog.js';


class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {showDialog: false};
    }
    tipClick = () => {
        this.setState({
            showDialog: true
        });
    }

    onTipClosed = (newState) => {
        this.setState({
            showDialog: newState
        });
    }

    render(){
        return (
            <div className="content">
                <img src={bg} className="bg-img" alt=""/>
                <img src={tip} alt="" className="tip-img" onClick={this.tipClick}/>
                <img src={head} alt="" className="head-img"/>
                <Link to={'/main/' + this.props.match.params.t}><img src={btn} alt="" className="btn-img"/></Link>
                <Dialog isShow={this.state.showDialog} callback={this.onTipClosed}/>
            </div>
        )
    }
}

export default Home;