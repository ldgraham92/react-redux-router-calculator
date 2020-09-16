import React, { useState } from 'react';
import '../css/BaseCalc.css';
import { connect } from 'react-redux';
import { addCalcHistory} from '../actions/calculations';

function BaseCalc(prop) {
    const [inputOne, setInputOne] = useState('');
    const [inputTwo, setInputTwo] = useState('');
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState('');
    const resultAdd = parseInt(inputOne) + parseInt(inputTwo);
    const resultSub = parseInt(inputOne) - parseInt(inputTwo);
    const resultMul = parseInt(inputOne) * parseInt(inputTwo);
    const resultDiv = parseInt(inputOne) / parseInt(inputTwo);

    const CalculateFunction = event => {
        event.preventDefault();
        if (operator === '+') {
            setResult(parseInt(inputOne) + parseInt(inputTwo));
            prop.dispatch(addCalcHistory(`${inputOne} + ${inputTwo} = ${resultAdd}`));

        } else if (operator === '-') {
            setResult(parseInt(inputOne) - parseInt(inputTwo));
            prop.dispatch(addCalcHistory(`${inputOne} + ${inputTwo} = ${resultSub}`));

        } else if (operator === '/') {
            setResult(parseInt(inputOne) / parseInt(inputTwo));
            prop.dispatch(addCalcHistory(`${inputOne} + ${inputTwo} = ${resultDiv}`));

        } else if (operator === '*') {
            setResult(parseInt(inputOne) * parseInt(inputTwo));
            prop.dispatch(addCalcHistory(`${inputOne} + ${inputTwo} = ${resultMul}`));
        }
    }

    return (
        <div id='BaseCalcContainer'>
            <h1>
                {prop.name}
            </h1>
            <div id='calculationContainer'>
                <form onSubmit={CalculateFunction}>
                    <div id='input1Container'>
                        <p><label htmlFor="Input-1">Input 1:</label></p>
                        <p><input type="text" id="Input-1" name="Input-1" onChange={e => { setInputOne(e.target.value) }} value={inputOne}></input></p>
                    </div>


                    <div id='operationContainer'>
                        <p><label htmlFor="Operation">Operation:</label></p>
                        <select id="Operation" name="Operation" value={operator} onChange={(e) => { setOperator(e.target.value) }}>
                            <option value='+'>+</option>
                            <option value='-'>-</option>
                            <option value='/'>/</option>
                            <option value='*'>*</option>
                        </select>
                    </div>

                    <div id='input2Container'>
                        <p><label htmlFor="Input-2">Input 2:</label></p>
                        <p><input type="text" id="Input-2" name="Input-2" onChange={e => { setInputTwo(e.target.value) }} value={inputTwo}></input></p>
                    </div>


                    <div>
                        <input type="submit" id="calculateButton" value="Calculate"></input>
                    </div>
                </form>
            </div>

            <div id='answerContainer'>
                <h4>Your answer for: {inputOne} {operator} {inputTwo} is:</h4>
                <p id='finalAnswer'>{result}</p>
            </div>


        </div>
    );
}

export default connect(
    state => { return { baseCalc: state } }
)(BaseCalc);