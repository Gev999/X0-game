import React, { Component } from 'react';
import BlockItem from '../block-item/block-item';
import GameEnd from '../game-end/game-end';

const withGameTable = (Wrapp) => {

    return class extends Component {

        state = {
            step: 1,
            gameState: [-1, -2, -3, -4, -5, -6, -7, -8, -9],
            pl1: 0,
            pl2: 0,
        }

        gameResult = () => {
            const { gameState } = this.state;
            const end = true;
            for (let i = 0; i <= 6; i += 3) {
                if (gameState[i] === gameState[i + 1] && gameState[i + 1] === gameState[i + 2]) {
                    return { value: gameState[i], end };
                }
            }
            for (let i = 0; i < 3; i++) {
                if (gameState[i] === gameState[i + 3] && gameState[i + 3] === gameState[i + 6]) {
                    return { value: gameState[i], end };
                }
            }
            if (gameState[0] === gameState[4] && gameState[4] === gameState[8]) {
                return { value: gameState[0], end };
            }
            if (gameState[2] === gameState[4] && gameState[4] === gameState[6]) {
                return { value: gameState[2], end };
            }
            if (this.state.step===10) {
                return {
                    value: 0,
                    end: true,
                }
            }
            return {
                value: null,
                end: false,
            };
        }

        createBlocks = (end) => {
            let arr = [];
            for (let i = 0; i < 9; arr[i] = i++);
            return arr.map((id) => {
                const { gameState } = this.state;
                let value;
                if (end) {
                    value = gameState[id] > 0 ? gameState[id] : 3
                }
                else value = gameState[id];
                return (
                    <div className="col-4 block-item border border-info" key={id}>
                        <BlockItem
                            stepInc={this.stepInc}
                            step={this.state.step}
                            itemId={id}
                            img={value}
                        />
                    </div>
                )
            })
        }

        stepInc = (id, value) => {
            this.setState((state) => {
                const newGameState = [...state.gameState.slice(0, id), value, ...state.gameState.slice(id + 1)];
                return {
                    step: state.step + 1,
                    gameState: newGameState,
                }
            })
        }

        reset = (value) => {
            if (value===1) {
                this.setState((state)=> {
                    return {
                        step: 1,
                        gameState: [-1, -2, -3, -4, -5, -6, -7, -8, -9],
                        pl1: state.pl1 + 1
                    }
                })
            }
            else if (value===2) {
                this.setState((state)=> {
                    return {
                        step: 1,
                        gameState: [-1, -2, -3, -4, -5, -6, -7, -8, -9],
                        pl2: state.pl2 + 1
                    }
                })
            }
            else {
                this.setState({
                    step: 1,
                    gameState: [-1, -2, -3, -4, -5, -6, -7, -8, -9],
                })
            }
        }

        render() {
            const result = this.gameResult();
            const blocks = this.createBlocks(result.end);
            const title = (result && result.end) ? <GameEnd player={result.value} reset={this.reset} /> : null;
            const res = {
                pl1: this.state.pl1,
                pl2: this.state.pl2,
            }
            return (
                <Wrapp blocks={blocks} title={title} result={res}/>
            )
        }
    }
}

export default withGameTable;