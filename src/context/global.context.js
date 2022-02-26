import { createContext, useContext, useState } from 'react';
const defaultState = [];
const GlobalContext = createContext(defaultState);
export const GlobalProvider = ({ children, sidebarOpen = false }) => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(sidebarOpen);
  const toggleDrawer = () => {
    setSidebarOpen(!sideDrawerOpen || defaultState);
  };
  const contextValues = {
    sideDrawerOpen,
    toggleDrawer,
  };
  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
};
