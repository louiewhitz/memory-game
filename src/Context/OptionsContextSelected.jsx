import React from 'react';

export const OptionsContextSelected = React.createContext();

function GamePlayingProvider({ children }) {
  const [hasSelected, setHasSelected] = React.useState(false);

  return (
    <OptionsContextSelected.Provider
      value={{
        hasSelected,
        setHasSelected,
      }}
    >
      {children}
    </OptionsContextSelected.Provider>
  );
}

export default GamePlayingProvider;
