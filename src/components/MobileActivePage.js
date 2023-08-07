import React, { useState, useEffect } from 'react';
import Cards from './Icons';

import { useLocation, useNavigate } from 'react-router-dom';

const MobileActivePage = () => {
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
      <div className="container mx-auto my-4 rgb(255, 255, 255)">
        <div className="flex justify-between">
          <h1 className="text-left font-bold text-2xl text-black">memory</h1>
          <div className="flex space-x-4">
            {' '}
            {/* Group the buttons */}
            <button
              onClick={restart}
              className="restart bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl"
            >
              Restart
            </button>
            <button
              onClick={newGame}
              className="new-game-button text-white font-bold py-2 px-4 rounded-3xl text-right"
            >
              New Game
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen  border-black border-2">
          <div className="container-sm border-black border-2 p-4 bg-white shadow-lg rounded-lg">
            <div className="grid gap-2 border-2 border-red">
              <h2 className="text-lg text-black">Theme: {gameState.theme}</h2>
              <h2 className="text-lg text-black">
                Players: {gameState.players}
              </h2>
              <h2 className="text-lg text-black">
                Grid Size: {gameState.gridSize?.[0]} x {gameState.gridSize?.[1]}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileActivePage;
