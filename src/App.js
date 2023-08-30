import './App.css';
import React from 'react';

import StartPage from './components/StartPage';
import ActivePage from './components/ActivePage';
import GameOptionsProvider from './Context/PlayerGridOptionsContext'; // Remember to change this path to the correct location of your context file.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <GameOptionsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/active" element={<ActivePage />} />
        </Routes>
      </Router>
    </GameOptionsProvider>
  );
}

export default App;
