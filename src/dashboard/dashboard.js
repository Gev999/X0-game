import React from 'react';
import './dashboard.css'

const Dashboard = (props) => {
    const { result: { pl1, pl2 } } = props;

    return (
        <div className="col-6 dashboard">
            <p className="p-1 p">Player 1: <span className="count">{pl1}</span></p>
            <p className="p-2 p">Player 2: <span className="count">{pl2}</span></p>
        </div>
    )
}

export default Dashboard;       