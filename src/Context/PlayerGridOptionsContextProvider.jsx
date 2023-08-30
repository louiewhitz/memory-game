import React, { useState, createContext } from 'react';

// Create the context
export const PlayerGridOptionsContext = createContext();

function PlayerGridOptionsProvider({ children }) {
  const defaultOptions = {
    players: 1,
    grid: 4,
  };

  const [selectedOptions, setSelectedOptions] = useState(defaultOptions);

  return (
    <PlayerGridOptionsContext.Provider
      value={{ selectedOptions, setSelectedOptions }}
    >
      {children}
    </PlayerGridOptionsContext.Provider>
  );
}

export default PlayerGridOptionsProvider;
