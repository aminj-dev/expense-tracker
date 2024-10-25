import React, { createContext, useEffect, useReducer } from 'react';
import { useTransaction } from '../hooks/useTransaction';

// create context
export const GlobalContext = createContext({
  transactions: [],
  deleteTransaction: () => {},
  addTransaction: () => {}
});

// context provider component
export const GlobalProvider = ({ children }) => {
  
  return (<GlobalContext.Provider value={useTransaction()}>
    {children}
  </GlobalContext.Provider>);
}