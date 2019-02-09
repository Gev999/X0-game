import React, {Component} from 'react';
import './game-table.css';
import BlockItem from './block-item';
import GameEnd from './game-end';

export default class GameTable extends Component {

    state = {
        step: 1,
        gameState: [-1, -2, -3, -4, -5, -6, -7, -8, -9],
    }

    gameResult = ()=> {
        const { gameState } = this.state;
        const end = true;
        if (gameState[0]===gameState[1] && gameState[1]===gameState[2]) 
            return {value: gameState[0], end};
        if (gameState[3]===gameState[4] && gameState[4]===gameState[5]) 
            return {value: gameState[3], end};
        if (gameState[6]===gameState[7] && gameState[7]===gameState[8]) 
            return { value: gameState[6], end};
        if (gameState[0] === gameState[3] && gameState[3] === gameState[6])
            return { value: gameState[0], end };
        if (gameState[1] === gameState[4] && gameState[4] === gameState[7])
            return { value: gameState[1], end };
        if (gameState[2] === gameState[5] && gameState[5] === gameState[8])
            return { value: gameState[2], end };
        if (gameState[0]===gameState[4] && gameState[4]===gameState[8]) 
            return {value: gameState[0], end};
        if (gameState[2]===gameState[4] && gameState[4]===gameState[6]) 
            return {value: gameState[2], end};
        return null;
    }


    stepInc = (id, value)=> {
        this.setState((state)=> {
            const newGameState = [...state.gameState.slice(0, id), value, ...state.gameState.slice(id+1)];
            return {
                step: state.step + 1,
                gameState: newGameState,
            }
        })
    }

    createBlocks = ()=> {
        let arr = [];
        for (let i=0; i<9; arr[i] = i++);
        return arr.map((id)=>{
            return (
                <div className="col-4 block-item border border-info" key={id}>
                    <BlockItem stepInc={this.stepInc} step={this.state.step} itemId={id}/>
                </div>
            )})
    }

    reset = ()=> {
        this.setState({
            step: 1,
            gameState: [-1, -2, -3, -4, -5, -6, -7, -8, -9],
        })
    }

    render() {
        const blocks = this.createBlocks();
        const result = this.gameResult();
        const title = (result && result.end)? <GameEnd player={result.value} reset={this.reset}/>: null;
        return (
            <div className="container d-flex align-items-center">
                <div className="row block-table mx-auto">
                    <div className="col-12 mb-3">
                        <center>{title}</center>
                    </div>
                    {blocks}
                </div>
            </div>
        )
    }
}