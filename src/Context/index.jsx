import { createContext, useState } from "react";

// Create the context
export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [searchText, setSearchText] = useState('');

  return (
    <GlobalContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
