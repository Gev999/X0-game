import React, { Component } from 'react';
import './game-end.css'

export default class GameEnd extends Component {
    state = {
        pl1: 1,
        pl2: 2,
    }

    render() {
        const msg = this.props.player===0? 'DRAW': `Player ${this.props.player} win!!`;
        return (
            <React.Fragment>
                <h3 className="win-title">{msg}</h3>
                <button className="btn btn-success play-button" onClick={()=>this.props.reset(this.props.player)}>Play again</button>
            </React.Fragment>
        )
    }
}