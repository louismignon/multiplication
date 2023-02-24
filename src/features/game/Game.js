import React, { useState, useEffect, useCallback } from 'react';
import Countdown from 'react-countdown';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setReduxScore } from '../../app/redux';
import './game.scss';

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function Game() {
    const max = useSelector(state => state.redux.number);
    const type = useSelector(state => state.redux.type);
    const time = type === 'Max' ? (
        max === "10" ? 5000 : (
            max === "20" ? 10000 : 15000
        ) 
    )
    : 60000;

    const [score, setScore] = useState(0);
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [result, setResult] = useState('');
    const [date, setDate] = useState(Date.now() + time);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const renderer = ({ seconds }) => {
        return <span className="game-countdown">{seconds}</span>;
    };

    useEffect(() => {  
        setValues();
    }, []);

    const setValues = useCallback(() => {
        setFirstValue(getRandomNumber(max));
        setSecondValue(getRandomNumber(max));
    })

    const verifyResult = useCallback(() => {
        if(firstValue*secondValue === parseInt(result)) {
            setScore(score + 1);
            setResult('');   
            setValues();
            if(type === 'Max') setDate(Date.now() + time);
        } else setResult('');  
    })

    const gameOver = useCallback(() => {
        dispatch(setReduxScore(score));
        navigate("/recap");
    })

    const keyPress = useCallback((e) => {
        if(e.keyCode == 13) verifyResult();
    })

    return (
        <div className="game">
            <span className="game-score">Score : {score}</span>
            <Countdown date={date} renderer={renderer} onComplete={gameOver}/>
            <span className="game-multiplication">{firstValue} X {secondValue}</span>
            <TextField 
                autoFocus
                className="game-result" 
                type="number" 
                value={result} 
                onKeyDown={keyPress}
                onChange={event => setResult(event.target.value)} 
                label="Result" 
                variant="outlined"
            />
            <Button variant="contained" onClick={verifyResult}>Validate</Button>
        </div>
    );
}

export default Game;