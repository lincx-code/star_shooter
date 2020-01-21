import React, { Component } from "react";
import '../../stylesheets/stage.scss'
import Timer from './timer'
import Score from './score'
import Star from './star'
import Option from './option'

class Stage extends Component {

    constructor(props){
        super(props)

        //setting up functions
        this.onChangeDifficulty = this.onChangeDifficulty.bind(this);
        this.onStartGame = this.onStartGame.bind(this);
        this.onShootStar = this.onShootStar.bind(this);

        //setting up state
        this.state = {
            mode: 0,
            difficulty: 0,
            time: 0,
            score: 0,
            restart: false,
            displayStars: []
        }
    }

    /* ******************************************
    FUNCTIONS
    ******************************************* */
   
    //change game difficulty
    onChangeDifficulty(e){
        this.setState({difficulty: e.target.value})
    }

    //start game
    onStartGame(e){
        //clear all timer first
        this.clearTimer();

        let countDown = this.getCountDown(this.state.difficulty);

        this.setState(
            {
                mode: 0,
                time: countDown,
                restart: true,
                displayStars: this.createStars(this.state.difficulty)
            },
            () => this.startTimer(this.state.time)
        ); 
    }

    //get count down seconds depending on difficulty
    getCountDown(difficulty){
        if(difficulty == 1) {
            return 15;
        }else if(difficulty == 2) {
            return 20;
        }else {
            return 15;
        }
    }

    //create stars depending on difficulty
    createStars(difficulty){
        let count = 0;
        let stars = [];

        if(difficulty == 1) {
            count = 15;
        }else if(difficulty == 2) {
            count = 30;
        }else {
            count = 10;
        }

        let targetDimension = 35;
        for(let i = 0; i < count; i++){
            let x = Math.random() * (document.getElementById('stage').clientWidth - targetDimension);
            let y = Math.random() * (document.getElementById('stage').clientHeight - targetDimension);
            stars.push(<Star key={i} x={x} y={y} onClick={() => this.onShootStar(i, count*100)} />);
        }

        return stars;
    }

    // star shooting function
    onShootStar(index, totalScore){
        const starList = [].concat(this.state.displayStars);
        starList[index] = "";

        this.setState({
            score: this.state.score += 100,
            displayStars: starList
        })

        //if max score reaches before time runs out
        if(this.state.score >= totalScore) {
            //clear countdownn
            this.clearTimer();

            this.setState({
                score: 0,
                displayStars: [],
                mode: 1
            })
        }
    }

    //timer function
    startTimer(seconds){
        const interval = setInterval(() => {
            seconds -= 1;
            this.setState({time: seconds});

            //if time runs out before game is finished
            if(seconds <= 0) {
                clearInterval(interval);
                this.setState(
                    { 
                        restart: true,
                        mode: 2
                    }
                )
            }
        }, 1000);
    }

    // clear timer function
    clearTimer(){
        for(let i=0; i<1000; i++){
            window.clearInterval(i);
        }
    }

    //render
    render(){
        let stage = null;
        switch(this.state.mode){
            case 1:
                stage = <div id="stage"><h2 className="message win">You Win!</h2></div>;
                break;
            case 2: 
                stage = <div id="stage"><h2 className="message lost">You Lost!</h2></div>;
                break;
            default: 
                stage = <div id="stage">{this.state.displayStars}</div>;
        }

        return(
            <div className="stage-container">
                <div className="title">Star Shooter</div>
                <div className="stage-header">
                    <Timer time={this.state.time} />
                    <Score score={this.state.score} />
                </div>
                {stage}
                <Option restart={this.state.restart} onChangeDifficulty={this.onChangeDifficulty} onStartGame={this.onStartGame} />
            </div>
        );
    }
} 
    
export default Stage