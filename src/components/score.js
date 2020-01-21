import React, { Component } from "react";
import '../../stylesheets/score.scss'

class Score extends Component {
    constructor(props){
        super(props)

        this.state = {score: this.props.score} 
    }

    componentWillReceiveProps(nextProps){
        this.setState({score: nextProps.score})
    }

    render() {
        return(
            <div className="score-container">
                Score: <span id="score">{this.state.score}</span>
            </div>
        );
    }
}

export default Score


