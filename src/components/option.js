import React, { Component } from "react";
import '../../stylesheets/option.scss'

class Option extends Component {

    constructor(props){
        super(props)
        
        //setting up state
        this.state = {
            restart: false
        }
    }

    //function
    componentWillReceiveProps(nextProps) {
        this.setState({ restart: nextProps.restart })
    } 

    render() {
        return(
            <div className="game-options">
                <select value={this.state.difficulty} onChange={this.props.onChangeDifficulty}>
                    <option value="0">Easy</option>
                    <option value="1">Normal</option>
                    <option value="2">Hard</option>
                </select>
                {
                    this.state.restart ? 
                    (<button onClick={this.props.onStartGame}>Restart</button>) 
                    :
                    (<button onClick={this.props.onStartGame}>Start</button>)
                }
            </div>
        ); 
    }
}

export default Option