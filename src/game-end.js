import React, { Component } from 'react';

export default class GameEnd extends Component {

    render() {
        return (
            <div className="container-ii">
                <h3>Player {this.props.player} win!!</h3>
                <button className="btn btn-primary" onClick={()=>this.props.reset()}>Play again</button>
            </div>
        )
    }
}