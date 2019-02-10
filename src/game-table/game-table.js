import React from 'react';
import './game-table.css';
import withGameTable from '../hoc/with-game-table';
import Dashboard from './../dashboard/dashboard';

const GameTable = (props) => {
    return (
        <React.Fragment>
            <div className="container d-flex align-items-start">
                <div className="row block-table mx-auto mt-3">
                    <Dashboard result={props.result} />
                    <div className="col-6">
                        <center>{props.title}</center>
                    </div>
                    {props.blocks}
                </div>
            </div>
        </React.Fragment>
    )
}

export default withGameTable(GameTable)