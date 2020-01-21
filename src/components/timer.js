import React, { Component } from "react";
import '../../stylesheets/timer.scss'

class Timer extends Component {

    constructor(props){
        super(props)
        this.state = { time: this.props.time }
    }

    //functions
    componentWillReceiveProps(nextProps) {
        this.setState({ time: nextProps.time })
    } 

    render() {
        return(
            <div className="timer-container">
                Time: <span id="timer">{this.state.time}</span>
            </div>
        );
    }
}

export default Timer