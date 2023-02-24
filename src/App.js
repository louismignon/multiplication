import React from 'react';
import Home from './features/home/Home';
import Game from './features/game/Game';
import Recap from './features/recap/Recap';
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/recap" element={<Recap/>} />
      </Routes>
    </div>
  );
}

export default App;
