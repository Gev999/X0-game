import React, {Component} from 'react';
import './game-table.css';
import BlockItem from './block-item'

export default class GameTable extends Component {

    state = {
        step: 1,
    }

    stepInc = ()=> {
        this.setState((state)=> {
            return {step: state.step + 1}
        })
    }

    createBlocks = ()=> {
        let arr = [];
        for (let i=0; i<9; arr[i] = i++);
        return arr.map((id)=>{
            return (
                <div className="col-4 block-item border border-info" key={id}>
                    <BlockItem stepInc={this.stepInc} step={this.state.step}/>
                </div>
            )})
    }


    render() {
        const blocks = this.createBlocks();
        return (
            <div className="container d-flex align-items-center">
                <div className="row block-table mx-auto">
                    {blocks}
                </div>
            </div>
        )
    }
}