import './App.css';
// import * as ReactDOM from 'react-dom/client';
import React from 'react';

import StartPage from './components/StartPage';
import ActivePage from './components/ActivePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/active" element={<ActivePage />} />
      </Routes>
    </Router>
  );

}

// function App() {
//   return (
//     <div className="App">
//       <StartPage />

//     </div>
//   );
// }

export default App;
