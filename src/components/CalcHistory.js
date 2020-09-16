import React from 'react';
import { connect } from 'react-redux';
import { removeCalcHistory } from '../actions/calculations';
import '../css/BaseCalc.css';

function CalcHistory(props) {
    return (
        <>
            <div id='historyContainer'>
                <h2>
                    Calculation History:
            </h2>
                <div id='historyItems'>
                    <ul>
                        {props.baseCalc.map((calcHist) => {
                            return (
                                <li key={calcHist.id}>
                                    {calcHist.task}
                                    <img src={require("../image/trash.png")} alt='trash bin icon' onClick={event => props.dispatch(removeCalcHistory(calcHist.id))} />                                       
                                </li>
                            );
                        }
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}



export default connect(
    state => ({ baseCalc: state })
)(CalcHistory);