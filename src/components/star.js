import React, { Component } from "react";
import '../../stylesheets/star.scss'

class Star extends Component {

    constructor(props){
        super(props)
        
        //setting up state
        this.state = {
            key: props.key,
            x: props.x,
            y: props.y
        }
    }

    render() {
        return(
            <i className="fas fa-star target" key={this.state.key} style={{top:this.state.y, left:this.state.x}} onClick={this.props.onClick}></i>
        ); 
    }
}

export default Star