import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
   const [theme, setTheme] = useState('');
   const [players, setPlayers] = useState(0);
   const [gridSize, setGridSize] = useState('');
   const navigate = useNavigate();

   const handleThemeClick = (e) => setTheme(e.target.innerText);
   const handlePlayersClick = (e) => setPlayers(e.target.innerText);
const handleGridSizeClick = (e) =>
  setGridSize(e.target.innerText.split('x').map((i) => parseInt(i, 10)));

    const handleStartClick = () => {
      navigate('/active', { state: { theme, players, gridSize } });
    };
  return (
    <div className="start-page dark-page">
      <h1 className="memory-header text-center font-bold text-4xl">memory</h1>
      <div className="container max-w-md mx-auto  px-7 start-page-container rounded-3xl bg-white">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-6">
            <div className="start-page-container-header font-bold text-l py-3">
              Select Theme
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="flex flex space-x-2 ">
                <button
                  onClick={handleThemeClick}
                  className="flex-1 start-page-button-dark py-2 px-4 rounded-3xl gap-x-5 text-white"
                >
                  Numbers
                </button>
                <button
                  onClick={handleThemeClick}
                  className="flex-1 start-page-button-medium py-2 px-4 rounded-3xl text-white"
                >
                  Icons
                </button>
              </div>
            </div>
            <div className="col-span-6 py-3">
              <h2 className="start-page-container-header font-bold text-l">
                Number of Players
              </h2>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="flex space-x-2">
                <button
                  onClick={handlePlayersClick}
                  className="flex-1 start-page-button-dark py-2 px-4 rounded-3xl text-white"
                >
                  1
                </button>
                <button
                  onClick={handlePlayersClick}
                  className="flex-1 start-page-button-light py-2 px-4 rounded-3xl text-white"
                >
                  2
                </button>

                <button
                  onClick={handleGridSizeClick}
                  className="flex-1 start-page-button-dark  text-white py-2 px-4 rounded-3xl"
                >
                  3
                </button>
                <button
                  onClick={handleGridSizeClick}
                  className="flex-1 start-page-button-light text-white py-2 px-4 rounded-3xl"
                >
                  4
                </button>
              </div>
            </div>
            <div className="col-span-6 py-3">
              <h2 className="text-l start-page-container-header font-bold">
                Grid Size
              </h2>
            </div>
            <div className="col-span-6 md:col-span-3">
              <div className="flex space-x-2">
                <button className="flex-1 start-page-button-dark  text-white py-2 px-4 rounded-3xl">
                  4x4
                </button>
                <button className="flex-1 start-page-button-light text-white py-2 px-4 rounded-3xl">
                  6x6
                </button>
              </div>
            </div>
            <div className="col-span-6 m-8">
              <div className="flex">
                <button
                  onClick={handleStartClick}
                  className="w-full start-game-button text-white py-2 px-4 rounded-3xl"
                >
                  Start Game
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StartPage;
