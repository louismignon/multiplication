import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './recap.scss'

function Recap() {
  const score = useSelector(state => state.redux.score);

  return (
    <div className="recap">
      <span className="recap-title">Game over !</span>
      <span className="recap-score">Score : {score}</span>
      <Link to="/game">
        <Button variant="contained">REJOUER</Button>
      </Link>
      <Link to="/">
        <Button variant="contained">MENU</Button>
      </Link>
    </div>
  );
}

export default Recap;