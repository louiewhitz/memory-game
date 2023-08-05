import React, { useState, useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

const ActivePage = () => {
  const location = useLocation();
   const navigate = useNavigate();
  const { theme, players, gridSize } = location.state;
  // const [gameState, setGameState] = useState();
    const [gameState, setGameState] = useState({
      theme: '',
      players: 0,
      gridSize: [],
    });

    useEffect(() => {
      setGameState({ theme, players, gridSize });
    }, [theme, players, gridSize]);



  const newGame = () => {
   setGameState({ theme, players, gridSize });
  };

  const restart = () => {
    // Use navigate to go back to start page, emptying the state
    navigate('/');
  };

  return (
    <div className="active-page light-page game-state">
      <h1 className=" text-left font-bold text-4xl text-black">
        memory
      </h1>
      <button
        onClick={newGame}
        className="game-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        New Game
      </button>
      <button
        onClick={restart}
        className="game-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Restart
      </button>
      <div>
        <h2 className="text-lg text-black">Theme: {gameState.theme}</h2>
        <h2 className="text-lg text-black">Players: {gameState.players}</h2>
        <h2 className="text-lg text-black">
          Grid Size: {gameState.gridSize?.[0]} x {gameState.gridSize?.[1]}
        </h2>
      </div>
    </div>
  );
};

export default ActivePage;
